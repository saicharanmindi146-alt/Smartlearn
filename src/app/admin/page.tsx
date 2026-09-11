'use client';

import React from 'react';
import Link from 'next/link';
import {
  Shield,
  Users,
  BookOpen,
  FileQuestion,
  TrendingUp,
  Activity,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Server,
  UserCheck,
  UserX,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  GraduationCap,
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { db } from '@/lib/db';
import { useStore } from '@/store/useStore';
import { OnboardingTour } from '@/components/shared/OnboardingTour';

export default function AdminDashboardPage() {
  const teacherApplications = useStore((state) => state.teacherApplications);
  const approveTeacherApplication = useStore((state) => state.approveTeacherApplication);
  const rejectTeacherApplication = useStore((state) => state.rejectTeacherApplication);
  const triggerConfetti = useStore((state) => state.triggerConfetti);

  const pendingCount = teacherApplications.filter((a) => a.status === 'PENDING').length;
  const usageData = [
    { day: 'Day 1', activeUsers: 480 },
    { day: 'Day 5', activeUsers: 620 },
    { day: 'Day 10', activeUsers: 850 },
    { day: 'Day 15', activeUsers: 910 },
    { day: 'Day 20', activeUsers: 1120 },
    { day: 'Day 25', activeUsers: 1190 },
    { day: 'Day 30', activeUsers: 1240 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      <OnboardingTour portalRole="ADMIN" />
      {/* 1. ADMIN COMMAND HEADER */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-800 text-white shadow-xl shadow-amber-500/15">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-amber-100">
              Operational Nerve Center · Principal Console
            </span>
            <h1 className="text-2xl sm:text-3xl font-black">
              Administrator Command Hub
            </h1>
            <p className="text-amber-100 text-xs sm:text-sm max-w-xl leading-relaxed">
              Monitoring 1,240 active students, 85 faculty members, and real-time anti-cheat telemetry across the ecosystem.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-center">
              <span className="text-[10px] text-amber-100 uppercase tracking-wider block">Uptime</span>
              <span className="text-lg font-black">99.98%</span>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-center">
              <span className="text-[10px] text-amber-100 uppercase tracking-wider block">AI Latency</span>
              <span className="text-lg font-black">320ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. KPI STAT CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Total Students</span>
            <Users className="w-3.5 h-3.5 text-blue-500" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">1,240</div>
          <span className="text-[10px] text-emerald-500 font-bold">+18 enrolled this week</span>
        </div>

        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Faculty Members</span>
            <Users className="w-3.5 h-3.5 text-purple-500" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">85</div>
          <span className="text-[10px] text-purple-400 font-bold">Across 6 STEM Depts</span>
        </div>

        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Active Courses</span>
            <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">42</div>
          <span className="text-[10px] text-emerald-500 font-bold">All syllabus mapped</span>
        </div>

        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Active Tests Running</span>
            <FileQuestion className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div className="text-2xl font-black text-amber-500 mt-1">18 Live</div>
          <span className="text-[10px] text-amber-500 font-bold">Anti-cheat active</span>
        </div>
      </div>

      {/* 3. PLATFORM USAGE TREND CHART & QUICK OVERVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Usage Trend Line Chart */}
        <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-500" />
                Monthly Platform Engagement & Active Logins
              </h3>
              <p className="text-xs text-slate-500">Daily active student and teacher sessions over the last 30 days</p>
            </div>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full">
              +42% Growth
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usageData} margin={{ top: 15, right: 15, left: -20, bottom: 0 }}>
                <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} domain={[400, 1400]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderRadius: '12px',
                    borderColor: '#334155',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="activeUsers"
                  name="Active Logins"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#f59e0b' }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Action Queues Summary */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-3">Moderation & Support Queues</h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-amber-900 dark:text-amber-200">Moderation Queue</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white font-bold text-[10px]">
                    2 Flagged
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">Student forum posts pending review</p>
                <Link
                  href="/admin/moderation"
                  className="mt-2 text-[11px] font-bold text-amber-600 dark:text-amber-400 hover:underline inline-block"
                >
                  Review Queue →
                </Link>
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/60">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-blue-900 dark:text-blue-200">Support Tickets</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white font-bold text-[10px]">
                    1 In Progress
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">Audio playback ticket logged by Alex</p>
                <Link
                  href="/admin/tickets"
                  className="mt-2 text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline inline-block"
                >
                  Manage Tickets →
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/admin/users"
            className="w-full py-2.5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold text-center transition-all hover:opacity-90 shadow-md flex items-center justify-center gap-1.5"
          >
            <Users className="w-3.5 h-3.5" />
            Manage All Users & RBAC
          </Link>
        </div>
      </div>

      {/* 4. FACULTY APPLICATIONS & INSTRUCTOR REQUESTS QUEUE */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                Faculty Applications & Instructor Requests Queue
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Public requests submitted through the &quot;Sign up to become a teacher&quot; portal. Administrators decide whether to grant educator credentials and curriculum publishing privileges.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-black ${
                pendingCount > 0
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 animate-pulse'
                  : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
              }`}
            >
              {pendingCount} Pending Review
            </span>
          </div>
        </div>

        {teacherApplications.length === 0 ? (
          <div className="py-12 text-center space-y-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
            <GraduationCap className="w-10 h-10 text-slate-400 mx-auto" />
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
              No Pending Faculty Applications
            </p>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Any teacher applicant filling out the home page form will appear here immediately for administrative approval.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {teacherApplications.map((app) => (
              <div
                key={app.id}
                className="py-4.5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                      {app.name}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {app.department}
                    </span>
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        app.status === 'PENDING'
                          ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                          : app.status === 'APPROVED'
                          ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                          : 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                      }`}
                    >
                      {app.status === 'PENDING' && 'Pending Approval'}
                      {app.status === 'APPROVED' && 'Accepted & Active'}
                      {app.status === 'REJECTED' && 'Declined'}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      {app.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      {app.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Submitted {new Date(app.submittedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {app.status === 'PENDING' ? (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          approveTeacherApplication(app.id);
                          triggerConfetti();
                        }}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <UserCheck className="w-4 h-4" />
                        Accept & Provision
                      </button>

                      <button
                        type="button"
                        onClick={() => rejectTeacherApplication(app.id)}
                        className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/30 dark:hover:bg-rose-900/50 text-rose-600 dark:text-rose-400 text-xs font-bold border border-rose-200 dark:border-rose-900/60 transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <UserX className="w-4 h-4" />
                        Decline
                      </button>
                    </>
                  ) : app.status === 'APPROVED' ? (
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
                      <CheckCircle2 className="w-4 h-4" />
                      Teacher Account Active
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-500/10 px-3 py-1.5 rounded-xl border border-rose-500/20">
                      <UserX className="w-4 h-4" />
                      Application Rejected
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
