'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Sparkles,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  Check,
  AlertCircle,
  KeyRound,
  GraduationCap,
  Users,
  HeartHandshake,
  Shield,
  Zap,
  RefreshCw,
  UserCheck,
  Lock,
  ArrowLeft,
  Loader2,
  Building2,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';
import { useStore } from '@/store/useStore';
import { generateOTP, verifyOTP, DEMO_ACCOUNTS } from '@/lib/auth';
import { INITIAL_USERS } from '@/lib/db';
import { Role, User } from '@/types';

function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const switchDemoRole = useStore((state) => state.switchDemoRole);
  const loginUser = useStore((state) => state.loginUser);
  const triggerConfetti = useStore((state) => state.triggerConfetti);

  const initialMode = searchParams?.get('mode') === 'signup' ? 'signup' : 'signin';
  const initialRole = (searchParams?.get('role')?.toUpperCase() as Role) || 'STUDENT';

  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');
  const [identifier, setIdentifier] = useState('student@smartlearn.edu');
  const [fullName, setFullName] = useState('Alex Rivera');
  const [selectedRole, setSelectedRole] = useState<Role>(initialRole);
  const [gradeOrDept, setGradeOrDept] = useState('Grade 10-A');
  const [rememberMe, setRememberMe] = useState(true);
  const [ssoLoading, setSsoLoading] = useState<string | null>(null);
  const [otpStep, setOtpStep] = useState(false);
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [resendSeconds, setResendSeconds] = useState(60);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (otpStep && resendSeconds > 0) {
      timer = setTimeout(() => setResendSeconds((prev) => prev - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [otpStep, resendSeconds]);

  useEffect(() => {
    const roleParam = searchParams?.get('role')?.toUpperCase();
    if (roleParam && ['STUDENT', 'TEACHER', 'PARENT', 'ADMIN'].includes(roleParam)) {
      setSelectedRole(roleParam as Role);
      updateDefaultCredentials(roleParam as Role);
    }
    const modeParam = searchParams?.get('mode');
    if (modeParam === 'signup' || modeParam === 'signin') {
      setMode(modeParam);
    }
  }, [searchParams]);

  const updateDefaultCredentials = (role: Role) => {
    if (role === 'STUDENT') {
      setIdentifier('student@smartlearn.edu');
      setFullName('Alex Rivera');
      setGradeOrDept('Grade 10-A');
    } else if (role === 'TEACHER') {
      setIdentifier('sarah@smartlearn.edu');
      setFullName('Dr. Sarah Jenkins');
      setGradeOrDept('Advanced Mathematics');
    } else if (role === 'PARENT') {
      setIdentifier('priya@smartlearn.edu');
      setFullName('Priya Sharma');
      setGradeOrDept('Maya & Alex Rivera');
    } else if (role === 'ADMIN') {
      setIdentifier('admin@smartlearn.edu');
      setFullName('Marcus Vance');
      setGradeOrDept('Principal IT Operations');
    }
  };

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    updateDefaultCredentials(role);
    setErrorMsg('');
  };

  // Enterprise Institutional SSO Handler
  const handleInstitutionalSSO = (provider: 'Google' | 'Microsoft' | 'District SSO') => {
    setErrorMsg('');
    setSsoLoading(provider);

    setTimeout(() => {
      triggerConfetti();
      setSuccessMsg(`Authenticated via ${provider} Workspace! Redirecting to ${selectedRole} dashboard...`);

      const baseUser =
        selectedRole === 'STUDENT'
          ? INITIAL_USERS[0]
          : selectedRole === 'TEACHER'
          ? INITIAL_USERS[1]
          : selectedRole === 'PARENT'
          ? INITIAL_USERS[2]
          : INITIAL_USERS[3];

      loginUser({
        ...baseUser,
        role: selectedRole,
      });

      const roleDashboards: Record<Role, string> = {
        STUDENT: '/student',
        TEACHER: '/teacher',
        PARENT: '/parent',
        ADMIN: '/admin',
      };

      setTimeout(() => {
        router.push(roleDashboards[selectedRole]);
      }, 700);
    }, 1000);
  };

  const handleRequestOTP = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!identifier.trim()) {
      setErrorMsg('Please enter your educational email address or mobile number.');
      return;
    }

    const code = generateOTP(identifier);
    setGeneratedOtp(code);
    setOtpStep(true);
    setResendSeconds(60);
    setOtpDigits(['', '', '', '', '', '']);
  };

  const handleAutoFillOtp = () => {
    if (!generatedOtp) return;
    const digits = generatedOtp.split('').slice(0, 6);
    setOtpDigits(digits);
    setErrorMsg('');
  };

  const handleOtpDigitChange = (index: number, val: string) => {
    const clean = val.replace(/[^0-9]/g, '').slice(-1);
    const newDigits = [...otpDigits];
    newDigits[index] = clean;
    setOtpDigits(newDigits);

    if (clean && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const fullOtp = otpDigits.join('');

    if (fullOtp.length < 6) {
      setErrorMsg('Please enter the full 6-digit verification code.');
      return;
    }

    const isValid = verifyOTP(identifier, fullOtp);

    if (isValid) {
      triggerConfetti();
      setSuccessMsg('Identity verified! Initializing portal workspace...');

      const baseUser =
        selectedRole === 'STUDENT'
          ? INITIAL_USERS[0]
          : selectedRole === 'TEACHER'
          ? INITIAL_USERS[1]
          : selectedRole === 'PARENT'
          ? INITIAL_USERS[2]
          : INITIAL_USERS[3];

      const verifiedUser: User = {
        ...baseUser,
        id: `user-${selectedRole.toLowerCase()}-${Date.now()}`,
        name: mode === 'signup' && fullName ? fullName : baseUser.name,
        email: identifier.includes('@') ? identifier : baseUser.email,
        phone: !identifier.includes('@') ? identifier : baseUser.phone,
        role: selectedRole,
        studentProfile:
          selectedRole === 'STUDENT' && baseUser.studentProfile
            ? {
                ...baseUser.studentProfile,
                grade: gradeOrDept || baseUser.studentProfile.grade,
              }
            : baseUser.studentProfile,
        teacherProfile:
          selectedRole === 'TEACHER' && baseUser.teacherProfile
            ? {
                ...baseUser.teacherProfile,
                department: gradeOrDept || baseUser.teacherProfile.department,
              }
            : baseUser.teacherProfile,
      };

      loginUser(verifiedUser);

      const roleDashboards: Record<Role, string> = {
        STUDENT: '/student',
        TEACHER: '/teacher',
        PARENT: '/parent',
        ADMIN: '/admin',
      };
      setTimeout(() => {
        router.push(roleDashboards[selectedRole]);
      }, 700);
    } else {
      setErrorMsg(
        `Invalid verification code. Please check your SMS/Email code or click Auto-fill (${generatedOtp || '123456'}).`
      );
    }
  };

  const roleMeta = {
    STUDENT: {
      title: 'Student Learning Portal',
      tagline: 'Access adaptive mock tests, AI tutor, and personalized study planner.',
      badge: 'Learner & Scholar',
      color: 'blue',
      activeTab: 'bg-blue-600 text-white shadow-md shadow-blue-500/20',
      borderAccent: 'border-blue-500/30',
      pillBg: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400',
      icon: <GraduationCap className="w-4 h-4" />,
      idLabel: 'Student Email or School ID',
      idPlaceholder: 'alex.rivera@student.smartlearn.edu',
    },
    TEACHER: {
      title: 'Educator Command Hub',
      tagline: 'Manage class weak spots, generate question papers, and monitor student integrity.',
      badge: 'Educator & Mentor',
      color: 'rose',
      activeTab: 'bg-[#d82a4e] text-white shadow-md shadow-[#d82a4e]/20',
      borderAccent: 'border-[#d82a4e]/30',
      pillBg: 'bg-rose-50 dark:bg-rose-950/40 text-[#d82a4e]',
      icon: <Users className="w-4 h-4" />,
      idLabel: 'Faculty Email or Staff ID',
      idPlaceholder: 's.jenkins@faculty.smartlearn.edu',
    },
    PARENT: {
      title: 'Parent & Family Portal',
      tagline: 'Track academic progress, receive smart alerts, and listen to AI audio digests.',
      badge: 'Guardian & Family',
      color: 'emerald',
      activeTab: 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20',
      borderAccent: 'border-emerald-500/30',
      pillBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400',
      icon: <HeartHandshake className="w-4 h-4" />,
      idLabel: 'Registered Parent Mobile or Email',
      idPlaceholder: 'priya.sharma@parent.smartlearn.edu',
    },
    ADMIN: {
      title: 'School Administration Console',
      tagline: 'Control school-wide RBAC, security policies, and real-time performance analytics.',
      badge: 'Institution & IT',
      color: 'amber',
      activeTab: 'bg-amber-600 text-white shadow-md shadow-amber-500/20',
      borderAccent: 'border-amber-500/30',
      pillBg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400',
      icon: <Shield className="w-4 h-4" />,
      idLabel: 'Administrative Email or District ID',
      idPlaceholder: 'marcus.vance@admin.smartlearn.edu',
    },
  };

  const currentMeta = roleMeta[selectedRole];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#121519] text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6 flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full space-y-6">
        {/* Top Header with SmartLearn Branding */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 group mb-1">
            <span className="font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-900 dark:text-white">
              Smart<span className="text-[#d82a4e]">Learn</span>
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#d82a4e]/15 text-[#d82a4e] font-extrabold uppercase tracking-wider border border-[#d82a4e]/20">
              Ecosystem
            </span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {otpStep
              ? 'Enter 6-Digit Security PIN'
              : mode === 'signin'
              ? 'Educational Portal Sign In'
              : 'Create New Academic Account'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            {otpStep
              ? 'Verify your identity to unlock your encrypted workspace.'
              : 'Select your member portal below to sign in or register with verified credentials.'}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. INTERACTIVE 4-PORTAL SELECTOR BAR (Replaced Demo Cards)               */}
        {/* ========================================================================= */}
        {!otpStep && (
          <div className="bg-white dark:bg-[#1a1e24] p-1.5 rounded-2xl border border-slate-200 dark:border-[#283038] shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
              {(
                [
                  { role: 'STUDENT', label: 'Student', sub: 'Learner' },
                  { role: 'TEACHER', label: 'Teacher', sub: 'Educator' },
                  { role: 'PARENT', label: 'Parent', sub: 'Guardian' },
                  { role: 'ADMIN', label: 'Admin', sub: 'Institution' },
                ] as const
              ).map((item) => {
                const isSelected = selectedRole === item.role;
                return (
                  <button
                    key={item.role}
                    type="button"
                    onClick={() => handleRoleSelect(item.role)}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? roleMeta[item.role].activeTab
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#20252b] hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {roleMeta[item.role].icon}
                    <div className="text-left leading-tight">
                      <div>{item.label}</div>
                      <div className="text-[10px] opacity-75 font-normal">{item.sub}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. MAIN AUTHENTICATION & SINGLE SIGN-ON CONTAINER                         */}
        {/* ========================================================================= */}
        <div className="bg-white dark:bg-[#1a1e24] rounded-2xl border border-slate-200 dark:border-[#283038] shadow-xl p-6 sm:p-8 space-y-6">
          {/* Active Portal Header Banner */}
          <div className="p-4 rounded-xl border bg-slate-50 dark:bg-[#121519] border-slate-200 dark:border-[#283038] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${currentMeta.pillBg}`}>
                {currentMeta.icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                    {currentMeta.title}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${currentMeta.pillBg}`}>
                    {currentMeta.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {currentMeta.tagline}
                </p>
              </div>
            </div>
            <Link
              href="/get-started"
              className="text-xs font-bold text-[#d82a4e] hover:underline inline-flex items-center gap-1 self-start sm:self-center flex-shrink-0"
            >
              <span>All Portals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Feedback alerts */}
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
              <Check className="w-4 h-4 flex-shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {!otpStep ? (
            <>
              {/* ========================================================================= */}
              {/* 2A. INSTITUTIONAL SINGLE SIGN-ON (SSO) OPTIONS                            */}
              {/* ========================================================================= */}
              <div className="space-y-3">
                <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Institutional Single Sign-On (SSO):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* Google Classroom / Workspace */}
                  <button
                    type="button"
                    disabled={!!ssoLoading}
                    onClick={() => handleInstitutionalSSO('Google')}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-[#283038] hover:border-blue-500 dark:hover:border-blue-500 bg-white dark:bg-[#1a1e24] hover:bg-slate-50 dark:hover:bg-[#20252b] transition-all flex items-center justify-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    {ssoLoading === 'Google' ? (
                      <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                    ) : (
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.28 7.33 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.17 0 9.97 0 12s.46 3.83 1.26 5.42l4.02-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.72 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    )}
                    <span>Google Classroom</span>
                  </button>

                  {/* Microsoft 365 Education */}
                  <button
                    type="button"
                    disabled={!!ssoLoading}
                    onClick={() => handleInstitutionalSSO('Microsoft')}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-[#283038] hover:border-emerald-500 dark:hover:border-emerald-500 bg-white dark:bg-[#1a1e24] hover:bg-slate-50 dark:hover:bg-[#20252b] transition-all flex items-center justify-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    {ssoLoading === 'Microsoft' ? (
                      <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
                    ) : (
                      <svg className="w-4 h-4" viewBox="0 0 23 23">
                        <path fill="#f35325" d="M1 1h10v10H1z" />
                        <path fill="#81bc06" d="M12 1h10v10H12z" />
                        <path fill="#05a6f0" d="M1 12h10v10H1z" />
                        <path fill="#ffba08" d="M12 12h10v10H12z" />
                      </svg>
                    )}
                    <span>Microsoft 365</span>
                  </button>

                  {/* District SSO / Clever */}
                  <button
                    type="button"
                    disabled={!!ssoLoading}
                    onClick={() => handleInstitutionalSSO('District SSO')}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-[#283038] hover:border-purple-500 dark:hover:border-purple-500 bg-white dark:bg-[#1a1e24] hover:bg-slate-50 dark:hover:bg-[#20252b] transition-all flex items-center justify-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    {ssoLoading === 'District SSO' ? (
                      <Loader2 className="w-4 h-4 animate-spin text-purple-500" />
                    ) : (
                      <Building2 className="w-4 h-4 text-purple-500" />
                    )}
                    <span>District SSO / Clever</span>
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center">
                <div className="w-full border-t border-slate-200 dark:border-[#283038]" />
                <span className="absolute bg-white dark:bg-[#1a1e24] px-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Or Sign In with Institutional ID
                </span>
              </div>

              {/* Sign In vs Sign Up Tabs */}
              <div className="flex border-b border-slate-200 dark:border-[#283038]">
                <button
                  type="button"
                  onClick={() => {
                    setMode('signin');
                    setErrorMsg('');
                  }}
                  className={`flex-1 pb-3 text-xs sm:text-sm font-extrabold text-center border-b-2 transition-colors cursor-pointer ${
                    mode === 'signin'
                      ? 'border-[#d82a4e] text-[#d82a4e]'
                      : 'border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  Sign In (Existing Member)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setErrorMsg('');
                  }}
                  className={`flex-1 pb-3 text-xs sm:text-sm font-extrabold text-center border-b-2 transition-colors cursor-pointer ${
                    mode === 'signup'
                      ? 'border-[#d82a4e] text-[#d82a4e]'
                      : 'border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  Register (New Account)
                </button>
              </div>

              {/* Email vs Phone Toggle */}
              <div className="flex items-center justify-center gap-6 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMethod('email');
                    updateDefaultCredentials(selectedRole);
                  }}
                  className={`flex items-center gap-1.5 pb-1 border-b-2 transition-all cursor-pointer ${
                    authMethod === 'email'
                      ? 'border-[#d82a4e] text-[#d82a4e] font-bold'
                      : 'border-transparent text-slate-400'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Institutional Email</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthMethod('phone');
                    setIdentifier('+1 (555) 345-7890');
                  }}
                  className={`flex items-center gap-1.5 pb-1 border-b-2 transition-all cursor-pointer ${
                    authMethod === 'phone'
                      ? 'border-[#d82a4e] text-[#d82a4e] font-bold'
                      : 'border-transparent text-slate-400'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Mobile SMS (2FA)</span>
                </button>
              </div>

              {/* Form Input Fields */}
              <form onSubmit={handleRequestOTP} className="space-y-4">
                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alex Rivera or Dr. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-[#20252b] border border-slate-200 dark:border-[#283038] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d82a4e]"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {authMethod === 'email' ? currentMeta.idLabel : 'Mobile Phone Number'}
                  </label>
                  <input
                    type={authMethod === 'email' ? 'email' : 'tel'}
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder={
                      authMethod === 'email' ? currentMeta.idPlaceholder : '+1 (555) 000-0000'
                    }
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-[#20252b] border border-slate-200 dark:border-[#283038] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d82a4e]"
                  />
                </div>

                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {selectedRole === 'STUDENT'
                        ? 'Current Grade / Class / Year'
                        : selectedRole === 'TEACHER'
                        ? 'Department / Teaching Subject'
                        : selectedRole === 'PARENT'
                        ? 'Enrolled Student Name(s)'
                        : 'Administrative Office / Role'}
                    </label>
                    <input
                      type="text"
                      value={gradeOrDept}
                      onChange={(e) => setGradeOrDept(e.target.value)}
                      placeholder={
                        selectedRole === 'STUDENT'
                          ? 'Grade 10-A'
                          : selectedRole === 'TEACHER'
                          ? 'Advanced Mathematics'
                          : selectedRole === 'PARENT'
                          ? 'Maya & Alex Rivera'
                          : 'Principal IT Operations'
                      }
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-[#20252b] border border-slate-200 dark:border-[#283038] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d82a4e]"
                    />
                  </div>
                )}

                {/* Remember this device checkbox */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded text-[#d82a4e] focus:ring-[#d82a4e]"
                    />
                    <span>Remember this institutional device for 30 days</span>
                  </label>
                  <a
                    href="#help"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(
                        `Academic IT Support:\nFor login help, contact your institution IT Helpdesk at support@smartlearn.edu or call Ext: 4357.`
                      );
                    }}
                    className="text-xs font-semibold text-[#d82a4e] hover:underline"
                  >
                    Forgot ID?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#d82a4e] to-rose-600 hover:from-[#b81d3d] hover:to-rose-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md shadow-rose-500/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>
                    {mode === 'signup' ? 'Verify & Create Account' : 'Send Verification OTP'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </>
          ) : (
            /* ========================================================================= */
            /* 3. STEP 2: SECURE OTP PIN VERIFICATION SYSTEM                             */
            /* ========================================================================= */
            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-[#283038]">
                <button
                  type="button"
                  onClick={() => {
                    setOtpStep(false);
                    setErrorMsg('');
                  }}
                  className="text-xs text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 cursor-pointer font-semibold"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Change Email / Phone</span>
                </button>
                <span className="text-xs font-bold text-[#d82a4e]">Role: {selectedRole}</span>
              </div>

              {/* Verification Gateway Banner */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Secure Verification Gateway Active:</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Authentication code generated for <strong>{identifier}</strong>:
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <span className="font-mono text-base font-extrabold tracking-wider bg-white dark:bg-[#13171b] px-3 py-1 rounded-lg border border-amber-500/40 text-[#d82a4e]">
                    {generatedOtp || '123456'}
                  </span>
                  <button
                    type="button"
                    onClick={handleAutoFillOtp}
                    className="px-3 py-1.5 rounded-lg bg-[#d82a4e] hover:bg-[#c32646] text-white text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Auto-Fill 6-Digit Code</span>
                  </button>
                </div>
              </div>

              {/* 6-Digit Individual PIN Boxes */}
              <div className="space-y-2">
                <label className="block text-center text-xs font-bold text-slate-700 dark:text-slate-300">
                  Enter 6-Digit Verification PIN
                </label>
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  {otpDigits.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-input-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpDigitChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      autoFocus={index === 0}
                      className="w-10 h-12 sm:w-12 sm:h-14 text-center text-lg sm:text-xl font-bold font-mono rounded-xl bg-slate-50 dark:bg-[#20252b] border border-slate-200 dark:border-[#283038] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#d82a4e]"
                    />
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d82a4e] to-rose-600 hover:from-[#b81d3d] hover:to-rose-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md shadow-rose-500/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify PIN &amp; Open Workspace</span>
                </button>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <span>
                    {resendSeconds > 0 ? (
                      `Resend code in ${resendSeconds}s`
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          const newCode = generateOTP(identifier);
                          setGeneratedOtp(newCode);
                          setResendSeconds(60);
                        }}
                        className="text-[#d82a4e] hover:underline font-semibold cursor-pointer"
                      >
                        Resend Verification Code
                      </button>
                    )}
                  </span>
                  <span className="text-[11px] italic text-slate-400">
                    Universal code: <strong>123456</strong>
                  </span>
                </div>
              </div>
            </form>
          )}

          {/* Bottom toggle between Sign In and Register */}
          {!otpStep && (
            <div className="pt-4 border-t border-slate-200 dark:border-[#283038] text-center text-xs text-slate-500">
              {mode === 'signin' ? (
                <p>
                  Need a new academic account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signup');
                      setErrorMsg('');
                    }}
                    className="text-[#d82a4e] font-bold hover:underline cursor-pointer"
                  >
                    Register New Account
                  </button>
                </p>
              ) : (
                <p>
                  Already have an institutional profile?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signin');
                      setErrorMsg('');
                    }}
                    className="text-[#d82a4e] font-bold hover:underline cursor-pointer"
                  >
                    Sign In with Existing ID
                  </button>
                </p>
              )}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 3. INSTITUTIONAL SECURITY, COMPLIANCE & HELPDESK TRUST BAR                */}
        {/* ========================================================================= */}
        <div className="p-4 rounded-xl bg-white dark:bg-[#1a1e24] border border-slate-200 dark:border-[#283038] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
              <Lock className="w-3.5 h-3.5 text-emerald-500" />
              <span>FERPA &amp; COPPA Certified</span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              <span>256-Bit SSL Encryption</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
              <span>SAML 2.0 / SSO Ready</span>
            </span>
          </div>

          <div className="flex items-center gap-2 font-medium">
            <span>Need Help?</span>
            <a
              href="mailto:support@smartlearn.edu"
              className="text-[#d82a4e] font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>IT Helpdesk</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#1a1e24] flex items-center justify-center text-white">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-8 h-8 text-[#d82a4e] animate-spin" />
            <p className="text-sm text-gray-400 font-medium">Preparing portal authentication...</p>
          </div>
        </div>
      }
    >
      <LoginPageContent />
    </Suspense>
  );
}
