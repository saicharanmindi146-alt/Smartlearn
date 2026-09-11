import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getAllPublicCourseIds,
  getPublicCourseDetail,
} from '@/lib/publicCourses';
import {
  Star,
  Clock,
  BookOpen,
  Award,
  CheckCircle2,
  Users,
  ShieldCheck,
  Globe,
  ArrowLeft,
  GraduationCap,
  PlayCircle,
  FileText,
  HelpCircle,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Static generation for Next.js static export
export function generateStaticParams() {
  const ids = getAllPublicCourseIds();
  return ids.map((id) => ({ id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PublicCourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const course = getPublicCourseDetail(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0f1216] text-slate-900 dark:text-slate-100 font-sans transition-colors">
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Breadcrumbs Header */}
        <div className="border-b border-slate-200 dark:border-[#283038] bg-white dark:bg-[#14181f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Link href="/" className="hover:text-[#d82a4e] flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Home
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {course.category}
              </span>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="truncate max-w-[200px] sm:max-w-xs text-slate-900 dark:text-white font-medium">
                {course.title}
              </span>
            </div>

            <Link
              href="/"
              className="text-xs font-bold text-[#d82a4e] hover:underline flex items-center gap-1"
            >
              Explore Other Courses
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-[#1a1e24] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-[#283038]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d82a4e]/20 border border-[#d82a4e]/40 text-[#ff6b8b] text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{course.category} Track</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {course.headline}
              </p>

              {/* Course Meta Info */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-1.5 text-amber-400 font-extrabold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{course.rating.toFixed(2)}</span>
                  <span className="text-slate-400 font-normal">
                    ({course.reviewsCount} verified ratings)
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-300">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>{course.studentsEnrolled.toLocaleString()} learners enrolled</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>{course.duration}</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-300">
                  <Globe className="w-4 h-4 text-indigo-400" />
                  <span>{course.language}</span>
                </div>
              </div>

              {/* Instructor Line */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-700/60">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <p className="text-xs text-slate-400">Instructed by</p>
                  <p className="text-sm font-bold text-white">
                    {course.instructor.name} &bull;{' '}
                    <span className="text-slate-300 font-normal">
                      {course.instructor.role}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Enrollment Card (Desktop Sticky) */}
            <div className="lg:col-span-4">
              <div className="bg-white dark:bg-[#1f242d] rounded-sm border border-slate-200 dark:border-[#283038] shadow-2xl overflow-hidden p-6 text-slate-900 dark:text-white space-y-6">
                <div className="relative h-48 w-full rounded-sm overflow-hidden shadow-inner">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-[#d82a4e] flex items-center justify-center shadow-lg">
                      <PlayCircle className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#d82a4e] text-white text-xs font-bold px-2.5 py-1 rounded-sm shadow">
                    Featured Curriculum
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      {course.price}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-sm">
                      85% Institutional Grant Applied
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Includes full digital textbook, interactive problem labs, and certificate.
                  </p>
                </div>

                {/* Enrollment Action Buttons */}
                <div className="space-y-3">
                  <Link
                    href={`/login?role=STUDENT&mode=signup&course=${course.id}`}
                    className="w-full py-3.5 px-4 rounded-sm bg-[#d82a4e] hover:bg-[#b81d3d] text-white font-extrabold text-sm uppercase tracking-wider text-center shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <GraduationCap className="w-5 h-5" />
                    Enroll In Course
                  </Link>

                  <Link
                    href="/login?role=STUDENT&mode=signin"
                    className="w-full py-2.5 px-4 rounded-sm border border-slate-300 dark:border-[#283038] hover:bg-slate-100 dark:hover:bg-[#283038] text-slate-700 dark:text-slate-200 font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Student Workspace Login
                  </Link>
                </div>

                {/* Feature Highlights */}
                <div className="pt-4 border-t border-slate-100 dark:border-[#283038] space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <p className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                    This Course Includes:
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#d82a4e]" />
                    <span>{course.duration} on-demand video & tutorials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#d82a4e]" />
                    <span>Automated AI diagnostic quizzes with hints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#d82a4e]" />
                    <span>Official Verified Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#d82a4e]" />
                    <span>30-Day Student Satisfaction Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column (8 cols): What you'll learn, Syllabus, Requirements, Description */}
            <div className="lg:col-span-8 space-y-12">
              {/* 1. What you will learn */}
              <section className="bg-white dark:bg-[#1a1e24] p-6 sm:p-8 rounded-sm border border-slate-200 dark:border-[#283038] shadow-sm">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#d82a4e]" />
                  What You Will Master in this Course
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.whatYouWillLearn.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-snug font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 2. Course Syllabus / Curriculum */}
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-[#d82a4e]" />
                    Curriculum & Course Structure
                  </h2>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    {course.syllabus.length} Core Modules &bull;{' '}
                    {course.syllabus.reduce((acc, m) => acc + m.lectures.length, 0)} Units
                  </span>
                </div>

                <div className="space-y-3">
                  {course.syllabus.map((mod, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-[#1a1e24] rounded-sm border border-slate-200 dark:border-[#283038] overflow-hidden"
                    >
                      <div className="p-4 bg-slate-50 dark:bg-[#20252e] flex items-center justify-between border-b border-slate-200 dark:border-[#283038]">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#d82a4e] text-white text-xs font-extrabold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                            {mod.title}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {mod.duration}
                        </span>
                      </div>
                      <div className="p-4 space-y-2.5">
                        {mod.lectures.map((lecture, lIdx) => (
                          <div
                            key={lIdx}
                            className="flex items-center justify-between text-xs sm:text-sm text-slate-600 dark:text-slate-300 py-1 border-b border-slate-100 dark:border-[#283038]/50 last:border-0"
                          >
                            <div className="flex items-center gap-2.5">
                              <PlayCircle className="w-4 h-4 text-slate-400 shrink-0" />
                              <span>{lecture}</span>
                            </div>
                            <span className="text-[11px] text-slate-400 font-mono">Interactive</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. Comprehensive Overview */}
              <section className="bg-white dark:bg-[#1a1e24] p-6 sm:p-8 rounded-sm border border-slate-200 dark:border-[#283038] shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  Course Overview & Pedagogy
                </h2>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {course.description}
                </p>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  Every concept is accompanied by real-time visual sandbox experiments, algorithmic code graders, and self-paced diagnostic assessments to pinpoint and correct weak concepts before they compound.
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-[#283038]">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                    Ideal Audience & Grade Alignment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {course.targetAudience}
                  </p>
                </div>
              </section>

              {/* 4. Prerequisites */}
              <section className="bg-white dark:bg-[#1a1e24] p-6 sm:p-8 rounded-sm border border-slate-200 dark:border-[#283038] shadow-sm space-y-4">
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-indigo-500" />
                  Prerequisites & Hardware Requirements
                </h2>
                <ul className="space-y-2">
                  {course.prerequisites.map((req, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2"
                    >
                      <span className="text-indigo-500 font-bold">&bull;</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 5. Instructor Biography */}
              <section className="bg-white dark:bg-[#1a1e24] p-6 sm:p-8 rounded-sm border border-slate-200 dark:border-[#283038] shadow-sm space-y-6">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  About the Lead Instructor
                </h2>
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#d82a4e]"
                  />
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                      {course.instructor.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#d82a4e]">
                      {course.instructor.role}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        {course.instructor.rating} Instructor Rating
                      </span>
                      <span>&bull;</span>
                      <span>{course.instructor.studentsCount.toLocaleString()} Students</span>
                      <span>&bull;</span>
                      <span>{course.instructor.coursesCount} Courses</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                      {course.instructor.bio}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column (4 cols) Quick Summary & Guarantee */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white dark:bg-[#1a1e24] p-6 rounded-sm border border-slate-200 dark:border-[#283038] shadow-sm space-y-4">
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Course Metadata
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-[#283038]">
                    <span className="text-slate-500 dark:text-slate-400">Level</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {course.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-[#283038]">
                    <span className="text-slate-500 dark:text-slate-400">Total Duration</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-[#283038]">
                    <span className="text-slate-500 dark:text-slate-400">Language</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {course.language}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-[#283038]">
                    <span className="text-slate-500 dark:text-slate-400">Last Curriculum Update</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {course.lastUpdated}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-[#283038]">
                    <span className="text-slate-500 dark:text-slate-400">Verified Certificate</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      Included
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/login?role=STUDENT&mode=signup&course=${course.id}`}
                    className="w-full py-3 rounded-sm bg-[#d82a4e] hover:bg-[#b81d3d] text-white font-bold text-xs uppercase tracking-wider text-center transition-colors block cursor-pointer"
                  >
                    Enroll For {course.price}
                  </Link>
                </div>
              </div>

              {/* Institutional Quality Seal */}
              <div className="p-6 rounded-sm bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-blue-900 dark:text-blue-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>Institutional Accreditation</span>
                </div>
                <p className="text-xs leading-relaxed text-blue-800/80 dark:text-blue-300/80">
                  SmartLearn curricula conform to modern Bloom&apos;s Revised Taxonomy and IEEE/ACM pedagogical standards for computer science and STEM education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
