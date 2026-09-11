import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Users,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
  UserPlus,
  LogIn,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Building2,
  Lock,
  ExternalLink,
} from 'lucide-react';

export const metadata = {
  title: 'Choose Your Portal — Sign In & Register | SmartLearn',
  description:
    'Choose your dedicated educational portal. Tailored AI workflows, interactive tools, and dashboards for Students, Teachers, Parents, and School Administrators.',
};

interface RoleOption {
  id: 'student' | 'teacher' | 'parent' | 'admin';
  title: string;
  badge: string;
  audience: string;
  tagline: string;
  icon: React.ReactNode;
  accentBorder: string;
  accentBg: string;
  accentText: string;
  glowColor: string;
  primaryBtn: string;
  secondaryBtn: string;
  features: string[];
}

export default function GetStartedPage() {
  const roles: RoleOption[] = [
    {
      id: 'student',
      title: 'Student Portal',
      badge: 'Learner & Scholar',
      audience: 'K-12, High School & College',
      tagline: 'Personalized courses, AI doubt solving, adaptive practice tests, and gamified progress tracking.',
      icon: <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />,
      accentBorder: 'border-blue-500/20 hover:border-blue-500/80 hover:shadow-blue-500/10',
      accentBg: 'bg-blue-50/80 dark:bg-blue-950/40',
      accentText: 'text-blue-600 dark:text-blue-400',
      glowColor: 'bg-blue-500/10',
      primaryBtn: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/25',
      secondaryBtn: 'border-blue-500/30 hover:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/20',
      features: [
        'Personalized AI study assistant & step-by-step formula derivations',
        'Adaptive mock tests with real-time scoring and timed practice',
        'Gamified XP streaks, badges, flashcards & daily quests',
        'Comprehensive subject analytics and knowledge-gap identification',
      ],
    },
    {
      id: 'teacher',
      title: 'Teacher Portal',
      badge: 'Educator & Mentor',
      audience: 'Faculty, Instructors & TAs',
      tagline: 'AI lesson planning, automated question generators, class diagnostics, and gradebook management.',
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />,
      accentBorder: 'border-rose-500/20 hover:border-[#d82a4e]/80 hover:shadow-[#d82a4e]/10',
      accentBg: 'bg-rose-50/80 dark:bg-rose-950/40',
      accentText: 'text-[#d82a4e]',
      glowColor: 'bg-[#d82a4e]/10',
      primaryBtn: 'bg-gradient-to-r from-[#d82a4e] to-rose-600 hover:from-[#b81d3d] hover:to-rose-700 text-white shadow-rose-500/25',
      secondaryBtn: 'border-[#d82a4e]/30 hover:border-[#d82a4e] text-[#d82a4e] hover:bg-[#d82a4e]/5 dark:hover:bg-[#d82a4e]/10',
      features: [
        'AI exam paper & quiz generator aligned to syllabus rubrics',
        'Automated class mistake analysis and intervention alerts',
        'Full gradebook, assignment grading, and submission review',
        'Course syllabus manager with video, slides, and code attachments',
      ],
    },
    {
      id: 'parent',
      title: 'Parent Portal',
      badge: 'Guardian & Family',
      audience: 'Families & Student Mentors',
      tagline: 'Real-time visibility into academic growth, daily attendance, grade reports, and teacher messaging.',
      icon: <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7" />,
      accentBorder: 'border-emerald-500/20 hover:border-emerald-500/80 hover:shadow-emerald-500/10',
      accentBg: 'bg-emerald-50/80 dark:bg-emerald-950/40',
      accentText: 'text-emerald-600 dark:text-emerald-400',
      glowColor: 'bg-emerald-500/10',
      primaryBtn: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-emerald-500/25',
      secondaryBtn: 'border-emerald-500/30 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20',
      features: [
        'Multi-child progress overview with subject-level drill-downs',
        'Text-to-speech audio daily digest summaries of student activities',
        'Direct secure messaging with verified teachers and advisors',
        'Instant alerts for pending homework, exam dates, and attendance',
      ],
    },
    {
      id: 'admin',
      title: 'Admin Console',
      badge: 'Institution & IT',
      audience: 'Deans, Principals & IT Staff',
      tagline: 'Institutional user lifecycle management, role-based access control, security logs, and telemetry.',
      icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />,
      accentBorder: 'border-amber-500/20 hover:border-amber-500/80 hover:shadow-amber-500/10',
      accentBg: 'bg-amber-50/80 dark:bg-amber-950/40',
      accentText: 'text-amber-600 dark:text-amber-400',
      glowColor: 'bg-amber-500/10',
      primaryBtn: 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-amber-500/25',
      secondaryBtn: 'border-amber-500/30 hover:border-amber-500 text-amber-600 dark:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-950/20',
      features: [
        'Role-based access governance and bulk student/teacher enrollment',
        'System uptime telemetry, audit logs, and security controls',
        'Institution-wide performance KPIs and department benchmarks',
        'Exportable compliance reports and platform-wide announcements',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#121519] text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to SmartLearn Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d82a4e]/10 text-[#d82a4e] text-xs font-bold uppercase tracking-wider border border-[#d82a4e]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Educational Workspaces</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Select Your Portal to Sign In or Register
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Choose your specific role below to access customized AI tools, syllabus materials, and real-time dashboards tailored to your academic needs.
          </p>
        </div>

        {/* 4 Role Selection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`group relative flex flex-col justify-between bg-white dark:bg-[#1a1e24] rounded-2xl border p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${role.accentBorder}`}
            >
              {/* Subtle top ambient glow */}
              <div
                className={`absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 opacity-30 group-hover:opacity-100 ${role.glowColor}`}
              />

              {/* Card Header & Content */}
              <div className="relative z-10 space-y-4">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl border shadow-inner ${role.accentBg} ${role.accentText} border-white/40 dark:border-white/5`}>
                    {role.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${role.accentBg} ${role.accentText}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {role.badge}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                      {role.audience}
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-[#d82a4e] transition-colors">
                    {role.title}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {role.tagline}
                  </p>
                </div>

                {/* Feature Bullets */}
                <div className="pt-3 border-t border-slate-100 dark:border-[#283038] space-y-2.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Capabilities:
                  </span>
                  <ul className="space-y-2">
                    {role.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-snug"
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${role.accentText}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons (Strict compatibility with test routes) */}
              <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 dark:border-[#283038] space-y-2.5">
                {/* Primary Button: Create Account */}
                <Link
                  href={`/login?role=${role.id}&mode=signup`}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg ${role.primaryBtn}`}
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Create {role.id === 'admin' ? 'Admin' : role.id.charAt(0).toUpperCase() + role.id.slice(1)} Account</span>
                </Link>

                {/* Secondary Button: Log In */}
                <Link
                  href={`/login?role=${role.id}&mode=signin`}
                  className={`w-full py-2 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all bg-white dark:bg-[#1a1e24] ${role.secondaryBtn}`}
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Log In to {role.id === 'admin' ? 'Admin' : role.id.charAt(0).toUpperCase() + role.id.slice(1)}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Deployment & Single Sign-On Support */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1a1e24] border border-slate-200 dark:border-[#283038] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>School District or University Institutional Deployment?</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  FERPA &amp; COPPA
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                Connect your existing student information systems (SIS) via Google Classroom, Microsoft 365 Education, or Clever SAML 2.0 Single Sign-On (SSO).
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <Link
              href="/login?role=student&mode=signin"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#d82a4e] hover:bg-[#b81d3d] text-white text-xs font-bold transition-all shadow-md inline-flex items-center justify-center gap-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Campus SSO &amp; Portal Login</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
