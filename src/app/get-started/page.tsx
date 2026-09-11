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
  Shield,
  Zap,
} from 'lucide-react';

export const metadata = {
  title: 'Educational Portals — Sign In & Register | SmartLearn',
  description:
    'Select your dedicated educational workspace in one unified hub. Tailored AI workflows, interactive tools, and dashboards for Students, Teachers, Parents, and Administrators.',
};

interface RoleOption {
  id: 'student' | 'teacher' | 'parent' | 'admin';
  title: string;
  badge: string;
  audience: string;
  tagline: string;
  icon: React.ReactNode;
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
      icon: <GraduationCap className="w-6 h-6" />,
      accentBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      accentText: 'text-blue-600 dark:text-blue-400',
      glowColor: 'bg-blue-500/5 hover:bg-blue-500/10',
      primaryBtn: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/20',
      secondaryBtn: 'border-blue-500/30 hover:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/30',
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
      icon: <Users className="w-6 h-6" />,
      accentBg: 'bg-rose-500/10 text-[#d82a4e] border-[#d82a4e]/20',
      accentText: 'text-[#d82a4e]',
      glowColor: 'bg-rose-500/5 hover:bg-[#d82a4e]/10',
      primaryBtn: 'bg-gradient-to-r from-[#d82a4e] to-rose-600 hover:from-[#b81d3d] hover:to-rose-700 text-white shadow-rose-500/20',
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
      icon: <HeartHandshake className="w-6 h-6" />,
      accentBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      accentText: 'text-emerald-600 dark:text-emerald-400',
      glowColor: 'bg-emerald-500/5 hover:bg-emerald-500/10',
      primaryBtn: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-emerald-500/20',
      secondaryBtn: 'border-emerald-500/30 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30',
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
      icon: <ShieldCheck className="w-6 h-6" />,
      accentBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      accentText: 'text-amber-600 dark:text-amber-400',
      glowColor: 'bg-amber-500/5 hover:bg-amber-500/10',
      primaryBtn: 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-amber-500/20',
      secondaryBtn: 'border-amber-500/30 hover:border-amber-500 text-amber-600 dark:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-950/30',
      features: [
        'Role-based access governance and bulk student/teacher enrollment',
        'System uptime telemetry, audit logs, and security controls',
        'Institution-wide performance KPIs and department benchmarks',
        'Exportable compliance reports and platform-wide announcements',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#121519] text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
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
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d82a4e]/10 text-[#d82a4e] text-xs font-bold uppercase tracking-wider border border-[#d82a4e]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unified Educational Ecosystem</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Educational Portals Hub
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            All 4 member portals in one place. Choose your role below to create a new account or sign in to your dedicated AI workspace.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* ALL FOUR PORTALS IN ONE BOX (Unified Container)                          */}
        {/* ========================================================================= */}
        <div className="bg-white dark:bg-[#1a1e24] rounded-3xl border border-slate-200 dark:border-[#283038] shadow-xl overflow-hidden">
          {/* Master Box Top Bar */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-[#15191e] border-b border-slate-200 dark:border-[#283038] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-[11px]">
                SmartLearn Portal Gateway
              </span>
              <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
              <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">
                Select your academic workspace below
              </span>
            </div>

            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                <span>FERPA Certified</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px]">
                <Lock className="w-3.5 h-3.5 text-emerald-500" />
                <span>SSO Enabled</span>
              </span>
            </div>
          </div>

          {/* Integrated 4-Column Grid inside the Single Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-[#283038]">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`relative flex flex-col justify-between p-6 sm:p-7 transition-colors duration-200 ${role.glowColor}`}
              >
                {/* Portal Column Content */}
                <div className="space-y-4">
                  {/* Top Icon & Badge Row */}
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl border shadow-xs ${role.accentBg}`}>
                      {role.icon}
                    </div>
                    <div className="flex flex-col items-end gap-0.5">
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${role.accentBg}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {role.badge}
                      </span>
                      <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                        {role.audience}
                      </span>
                    </div>
                  </div>

                  {/* Portal Title & Summary */}
                  <div>
                    <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                      {role.title}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed min-h-[48px]">
                      {role.tagline}
                    </p>
                  </div>

                  {/* Capabilities List */}
                  <div className="pt-3 border-t border-slate-100 dark:border-[#283038] space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Capabilities:
                    </span>
                    <ul className="space-y-2">
                      {role.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-snug"
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

                {/* Column Action Buttons (Strict compatibility with test routes) */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-[#283038] space-y-2">
                  {/* Primary: Create Account */}
                  <Link
                    href={`/login?role=${role.id}&mode=signup`}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md ${role.primaryBtn}`}
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Create {role.id === 'admin' ? 'Admin' : role.id.charAt(0).toUpperCase() + role.id.slice(1)} Account</span>
                  </Link>

                  {/* Secondary: Log In */}
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

          {/* Master Box Integrated Bottom Bar */}
          <div className="px-6 py-4 bg-slate-50/80 dark:bg-[#15191e]/80 border-t border-slate-200 dark:border-[#283038] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-slate-600 dark:text-slate-300 font-medium">
                Single Sign-On (SSO) supported for Google Classroom, Microsoft 365 Education, and Clever SAML.
              </span>
            </div>

            <Link
              href="/login?role=student&mode=signin"
              className="font-bold text-[#d82a4e] hover:underline inline-flex items-center gap-1 text-xs"
            >
              <span>Instant Single Sign-On Access</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
