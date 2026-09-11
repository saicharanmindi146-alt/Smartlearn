import { create } from 'zustand';
import { User, Role, NotificationItem, StudentAcademicProfile, RecentlyViewedItem, TeacherApplication } from '@/types';
import { db, INITIAL_USERS } from '@/lib/db';
import { DEMO_ACCOUNTS } from '@/lib/auth';

const LS_ACADEMIC_PROFILE = 'sl_academic_profile';
const LS_RECENTLY_VIEWED = 'sl_recently_viewed';
const LS_BOOKMARKS = 'sl_bookmarked_resources';
const LS_TEACHER_APPLICATIONS = 'sl_teacher_applications';
const SS_ONBOARDING_PREFIX = 'sl_onboarding_seen_';
const SS_LOGIN_WELCOME = 'sl_login_welcome_shown';

function loadFromStorage<T>(key: string, fallback: T, storage: 'local' | 'session' = 'local'): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const store = storage === 'local' ? localStorage : sessionStorage;
    const v = store.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key: string, value: unknown, storage: 'local' | 'session' = 'local') {
  if (typeof window === 'undefined') return;
  try {
    const store = storage === 'local' ? localStorage : sessionStorage;
    store.setItem(key, JSON.stringify(value));
  } catch { /* ignore */ }
}

interface SmartLearnState {
  currentUser: User | null;
  isLoggedIn: boolean;
  welcomeSplashOpen: boolean;
  theme: 'light' | 'dark';
  language: 'en' | 'hi' | 'es';
  activeChildId: string;
  commandPaletteOpen: boolean;
  notifications: NotificationItem[];
  confettiTrigger: number;
  onboardingSeen: Record<string, boolean>;

  // Academic profile (student-specific)
  academicProfile: StudentAcademicProfile | null;

  // Learning tracking
  recentlyViewed: RecentlyViewedItem[];
  bookmarkedResourceIds: string[];

  // Session welcome (once per session, not per navigation)
  loginWelcomeSeen: boolean;

  // Actions
  setCurrentUser: (user: User | null) => void;
  setWelcomeSplashOpen: (open: boolean) => void;
  loginUser: (user: User) => void;
  logoutUser: () => void;
  switchDemoRole: (role: Role) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  setLanguage: (lang: 'en' | 'hi' | 'es') => void;
  setActiveChildId: (childId: string) => void;
  setCommandPaletteOpen: (open: boolean) => void;
  triggerConfetti: () => void;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  addXP: (amount: number, reason: string) => void;
  setOnboardingSeen: (role: Role) => void;

  // Academic profile actions
  setAcademicProfile: (profile: StudentAcademicProfile) => void;
  updateAcademicProfile: (updates: Partial<StudentAcademicProfile>) => void;
  clearAcademicProfile: () => void;

  // Learning tracking actions
  addRecentlyViewed: (item: RecentlyViewedItem) => void;
  toggleBookmarkResource: (resourceId: string) => void;

  // Session welcome
  setLoginWelcomeSeen: () => void;

  // Teacher applications
  teacherApplications: TeacherApplication[];
  submitTeacherApplication: (app: { name: string; email: string; phone: string; department?: string; notes?: string }) => void;
  approveTeacherApplication: (id: string) => void;
  rejectTeacherApplication: (id: string) => void;
}

export const useStore = create<SmartLearnState>((set, get) => ({
  currentUser: INITIAL_USERS[0],
  isLoggedIn: false,
  welcomeSplashOpen: false,
  theme: 'dark',
  language: 'en',
  activeChildId: 'user-student-alex',
  commandPaletteOpen: false,
  notifications: db.notifications,
  confettiTrigger: 0,
  onboardingSeen: {},

  // Load persisted academic profile
  academicProfile: loadFromStorage<StudentAcademicProfile | null>(LS_ACADEMIC_PROFILE, null),
  recentlyViewed: loadFromStorage<RecentlyViewedItem[]>(LS_RECENTLY_VIEWED, []),
  bookmarkedResourceIds: loadFromStorage<string[]>(LS_BOOKMARKS, []),

  // Check sessionStorage for login welcome (once per session)
  loginWelcomeSeen: loadFromStorage<boolean>(SS_LOGIN_WELCOME, false, 'session'),

  // Teacher applications (persisted)
  teacherApplications: loadFromStorage<TeacherApplication[]>(LS_TEACHER_APPLICATIONS, [
    {
      id: 'app-teach-1',
      name: 'Dr. Michael Chang',
      email: 'm.chang@stanford.alum.edu',
      phone: '+1 (555) 382-9104',
      department: 'Computer Science & AI',
      submittedAt: 'Today at 2:15 PM',
      status: 'PENDING',
      notes: 'Ph.D. in CS; applied to teach Advanced Distributed Systems & AI Systems.',
    },
    {
      id: 'app-teach-2',
      name: 'Ananya Roy, M.Sc.',
      email: 'ananya.roy@physics.org',
      phone: '+1 (555) 749-1120',
      department: 'Applied Physics & Optics',
      submittedAt: 'Yesterday at 4:30 PM',
      status: 'PENDING',
      notes: '7 years teaching Physics & Mechanics; NCERT and JEE syllabus materials prepared.',
    },
  ]),

  setCurrentUser: (user) => set({ currentUser: user, isLoggedIn: !!user }),

  setWelcomeSplashOpen: (open) => set({ welcomeSplashOpen: open }),

  loginUser: (user) => {
    const alreadySeen = loadFromStorage<boolean>(SS_LOGIN_WELCOME, false, 'session');
    set({
      currentUser: user,
      isLoggedIn: true,
      welcomeSplashOpen: false,
      loginWelcomeSeen: alreadySeen,
    });
    if (user.role === 'PARENT') {
      set({ activeChildId: 'user-student-alex' });
    }
    // Load academic profile for students
    if (user.role === 'STUDENT') {
      const profile = loadFromStorage<StudentAcademicProfile | null>(`${LS_ACADEMIC_PROFILE}_${user.id}`, null);
      set({ academicProfile: profile });
    }
    get().triggerConfetti();
  },

  logoutUser: () => {
    set({ currentUser: null, isLoggedIn: false, academicProfile: null });
  },

  switchDemoRole: (role) => {
    let targetUser = INITIAL_USERS[0];
    if (role === 'STUDENT') targetUser = INITIAL_USERS[0];
    if (role === 'TEACHER') targetUser = INITIAL_USERS[1];
    if (role === 'PARENT') targetUser = INITIAL_USERS[2];
    if (role === 'ADMIN') targetUser = INITIAL_USERS[3];
    set({ currentUser: targetUser, isLoggedIn: true, welcomeSplashOpen: false });
    if (role === 'STUDENT') {
      const profile = loadFromStorage<StudentAcademicProfile | null>(`${LS_ACADEMIC_PROFILE}_${targetUser.id}`, null);
      set({ academicProfile: profile });
    }
  },

  setTheme: (theme) => {
    set({ theme });
    if (typeof document !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      try {
        localStorage.setItem('smartlearn_theme', theme);
      } catch {
        // ignore
      }
    }
  },

  toggleTheme: () => {
    const next = get().theme === 'dark' ? 'light' : 'dark';
    get().setTheme(next);
  },

  setLanguage: (language) => set({ language }),

  setActiveChildId: (activeChildId) => set({ activeChildId }),

  setCommandPaletteOpen: (commandPaletteOpen) => set({ commandPaletteOpen }),

  triggerConfetti: () => set({ confettiTrigger: Date.now() }),

  markNotificationRead: (id) => {
    db.markNotificationRead(id);
    set({ notifications: [...db.notifications] });
  },

  markAllNotificationsRead: () => {
    const user = get().currentUser;
    if (user) {
      db.markAllNotificationsRead(user.id);
      set({ notifications: [...db.notifications] });
    }
  },

  addXP: (amount, reason) => {
    const user = get().currentUser;
    if (user && user.studentProfile) {
      const newXp = user.studentProfile.xp + amount;
      const newLevel = Math.floor(newXp / 200) + 1;
      const leveledUp = newLevel > user.studentProfile.level;

      const updatedUser: User = {
        ...user,
        studentProfile: {
          ...user.studentProfile,
          xp: newXp,
          level: newLevel,
          coins: user.studentProfile.coins + Math.round(amount * 0.15),
        },
      };

      db.updateUser(user.id, updatedUser);
      set({ currentUser: updatedUser });

      if (leveledUp) {
        db.notifications.unshift({
          id: `notif-${Date.now()}`,
          userId: user.id,
          title: `🎉 Level Up! You reached Level ${newLevel}!`,
          message: `Congratulations! Your hard work is paying off. Keep the streak going.`,
          type: 'badge',
          read: false,
          createdAt: 'Just now',
          linkUrl: '/student',
        });
        set({ notifications: [...db.notifications] });
      }
    }
  },

  setOnboardingSeen: (role) => {
    // Use sessionStorage so it resets per browser session
    saveToStorage(`${SS_ONBOARDING_PREFIX}${role}`, true, 'session');
    set((state) => ({
      onboardingSeen: { ...state.onboardingSeen, [role]: true },
    }));
  },

  // Academic profile
  setAcademicProfile: (profile) => {
    const user = get().currentUser;
    const key = user ? `${LS_ACADEMIC_PROFILE}_${user.id}` : LS_ACADEMIC_PROFILE;
    saveToStorage(key, profile);
    set({ academicProfile: profile });
    // Also update the user's studentProfile in store
    if (user && user.studentProfile) {
      const updatedUser: User = {
        ...user,
        studentProfile: {
          ...user.studentProfile,
          academicProfile: profile,
        },
      };
      db.updateUser(user.id, updatedUser);
      set({ currentUser: updatedUser });
    }
  },

  updateAcademicProfile: (updates) => {
    const current = get().academicProfile;
    if (!current) return;
    const updated = { ...current, ...updates };
    get().setAcademicProfile(updated);
  },

  clearAcademicProfile: () => {
    const user = get().currentUser;
    if (user) {
      try { localStorage.removeItem(`${LS_ACADEMIC_PROFILE}_${user.id}`); } catch { /* ignore */ }
    }
    set({ academicProfile: null });
  },

  // Recently viewed
  addRecentlyViewed: (item) => {
    const current = get().recentlyViewed;
    const filtered = current.filter((r) => r.resourceId !== item.resourceId);
    const updated = [item, ...filtered].slice(0, 20); // keep last 20
    saveToStorage(LS_RECENTLY_VIEWED, updated);
    set({ recentlyViewed: updated });
  },

  // Bookmarks
  toggleBookmarkResource: (resourceId) => {
    const current = get().bookmarkedResourceIds;
    const updated = current.includes(resourceId)
      ? current.filter((id) => id !== resourceId)
      : [...current, resourceId];
    saveToStorage(LS_BOOKMARKS, updated);
    set({ bookmarkedResourceIds: updated });
  },

  // Session-scoped welcome (once per tab session)
  setLoginWelcomeSeen: () => {
    saveToStorage(SS_LOGIN_WELCOME, true, 'session');
    set({ loginWelcomeSeen: true });
  },

  // Teacher applications actions
  submitTeacherApplication: (app) => {
    const newApp: TeacherApplication = {
      id: `app-teach-${Date.now()}`,
      name: app.name,
      email: app.email,
      phone: app.phone,
      department: app.department || 'General Faculty',
      notes: app.notes || 'Submitted via public portal instructor form',
      submittedAt: 'Just now',
      status: 'PENDING',
    };
    const updated = [newApp, ...get().teacherApplications];
    saveToStorage(LS_TEACHER_APPLICATIONS, updated);
    set({ teacherApplications: updated });

    // Also push a notification for Admin
    db.notifications.unshift({
      id: `notif-app-${Date.now()}`,
      userId: 'user-admin-marcus',
      title: `📥 New Faculty Application: ${app.name}`,
      message: `${app.name} (${app.email}) submitted a teacher request for ${app.department || 'General Faculty'}. Review in Admin Command Hub.`,
      type: 'system',
      read: false,
      createdAt: 'Just now',
      linkUrl: '/admin',
    });
    set({ notifications: [...db.notifications] });
  },

  approveTeacherApplication: (id) => {
    const apps = get().teacherApplications;
    const target = apps.find((a) => a.id === id);
    if (!target) return;

    const updated = apps.map((a) =>
      a.id === id ? { ...a, status: 'APPROVED' as const } : a
    );
    saveToStorage(LS_TEACHER_APPLICATIONS, updated);
    set({ teacherApplications: updated });

    // Add to verified teachers in db if not exists
    const existing = db.users.find((u) => u.email === target.email);
    if (!existing) {
      const newTeacher: User = {
        id: `user-teacher-${Date.now()}`,
        name: target.name,
        email: target.email,
        phone: target.phone,
        role: 'TEACHER',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
        createdAt: new Date().toISOString(),
        teacherProfile: {
          department: target.department || 'Faculty Department',
          subjects: ['General STEM'],
          classes: ['Class 10-A'],
          experienceYears: 5,
          rating: 5.0,
        },
      };
      db.users.push(newTeacher);
    }

    db.notifications.unshift({
      id: `notif-approved-${Date.now()}`,
      userId: 'user-admin-marcus',
      title: `✅ Faculty Application Approved: ${target.name}`,
      message: `${target.name} has been approved as an authorized teacher with full curriculum & testing privileges.`,
      type: 'badge',
      read: false,
      createdAt: 'Just now',
      linkUrl: '/admin/users',
    });
    set({ notifications: [...db.notifications] });
  },

  rejectTeacherApplication: (id) => {
    const apps = get().teacherApplications;
    const target = apps.find((a) => a.id === id);
    if (!target) return;

    const updated = apps.map((a) =>
      a.id === id ? { ...a, status: 'REJECTED' as const } : a
    );
    saveToStorage(LS_TEACHER_APPLICATIONS, updated);
    set({ teacherApplications: updated });
  },
}));



