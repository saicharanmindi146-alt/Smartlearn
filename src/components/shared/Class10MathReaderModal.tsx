'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  X,
  BookOpen,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  Award,
  BrainCircuit,
  Search,
  Sparkles,
  HelpCircle,
  ArrowRight,
  Printer,
  ChevronDown,
  Layers,
  ChevronRight,
} from 'lucide-react';
import {
  CLASS_10_MATH_CHAPTERS,
  MathChapterData,
  MathExercise,
  getMathChapterById,
  getMathChapterByNumber,
} from '@/data/class10MathData';
import { useToast } from '@/components/shared/ToastContext';
import { useStore } from '@/store/useStore';

interface MathReaderModalProps {
  initialChapterId?: string;
  initialTab?: 'solutions' | 'theory' | 'formulas' | 'quiz';
  onClose: () => void;
}

export function Class10MathReaderModal({
  initialChapterId = 'ch-1',
  initialTab = 'solutions',
  onClose,
}: MathReaderModalProps) {
  const toast = useToast();
  const addXP = useStore((state) => state.addXP);

  // Normalize initial chapter
  const foundChapter =
    CLASS_10_MATH_CHAPTERS.find(
      (c) =>
        c.id === initialChapterId ||
        `chap-math10-${c.chapterNumber}` === initialChapterId ||
        initialChapterId.includes(String(c.chapterNumber))
    ) || CLASS_10_MATH_CHAPTERS[0];

  const [activeChapter, setActiveChapter] = useState<MathChapterData>(foundChapter);
  const [activeTab, setActiveTab] = useState<'solutions' | 'theory' | 'formulas' | 'quiz'>(initialTab);
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>(() => {
    return foundChapter.exercises[0]?.exerciseId || '';
  });
  const [exerciseSearch, setExerciseSearch] = useState('');
  const [copiedQuestionId, setCopiedQuestionId] = useState<string | null>(null);

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // When chapter changes, reset exercise selection & quiz
  const handleSelectChapter = (ch: MathChapterData) => {
    setActiveChapter(ch);
    setSelectedExerciseId(ch.exercises[0]?.exerciseId || '');
    setExerciseSearch('');
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  const handleCopyAnswer = (qKey: string, text: string) => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(text);
      setCopiedQuestionId(qKey);
      toast.success('Copied to Clipboard', 'Answer copied successfully.');
      setTimeout(() => setCopiedQuestionId(null), 2000);
    }
  };

  const handleCopyAllExerciseSolutions = (ex: MathExercise) => {
    const fullText = `--- ${activeChapter.title} | ${ex.name} Solutions ---\n` +
      ex.solutions
        .map((s) => `Q${s.questionNumber}: ${s.answer} (Step: ${s.hintOrStep || 'Standard method'})`)
        .join('\n');
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(fullText);
      toast.success('Exercise Copied', `All answers for ${ex.name} copied.`);
    }
  };

  const currentExercise =
    activeChapter.exercises.find((e) => e.exerciseId === selectedExerciseId) ||
    activeChapter.exercises[0];

  const filteredSolutions = currentExercise
    ? currentExercise.solutions.filter(
        (s) =>
          !exerciseSearch ||
          String(s.questionNumber).toLowerCase().includes(exerciseSearch.toLowerCase()) ||
          s.answer.toLowerCase().includes(exerciseSearch.toLowerCase()) ||
          (s.hintOrStep && s.hintOrStep.toLowerCase().includes(exerciseSearch.toLowerCase()))
      )
    : [];

  const handleSelectQuizOption = (questionId: string, optionIdx: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleSubmitQuiz = () => {
    if (quizSubmitted) return;
    setQuizSubmitted(true);
    let correctCount = 0;
    activeChapter.practiceQuiz.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });
    const earnedXP = correctCount * 25 + 20;
    addXP(earnedXP, `Completed ${activeChapter.title} Mastery Quiz`);
    toast.success(
      'Quiz Completed!',
      `You scored ${correctCount}/${activeChapter.practiceQuiz.length}! Earned +${earnedXP} XP.`
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-6xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        {/* Top Navigation Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-sm flex-shrink-0 shadow-md shadow-blue-500/20">
              {activeChapter.isAppendix ? activeChapter.chapterNumber : `Ch ${activeChapter.chapterNumber}`}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Class 10 CBSE Math (NCERT 2026-27)
                </span>
                {activeChapter.isAppendix && (
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                    Appendix
                  </span>
                )}
              </div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white truncate mt-0.5">
                {activeChapter.isAppendix ? activeChapter.title : `Chapter ${activeChapter.chapterNumber}: ${activeChapter.title}`}
              </h2>
            </div>
          </div>

          {/* Quick Chapter Dropdown + Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap self-end sm:self-center">
            {/* Chapter Selector */}
            <div className="relative">
              <select
                aria-label="Select Chapter"
                value={activeChapter.id}
                onChange={(e) => {
                  const ch = getMathChapterById(e.target.value);
                  if (ch) handleSelectChapter(ch);
                }}
                className="text-xs font-bold py-2 pl-3 pr-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 cursor-pointer shadow-xs focus:ring-2 focus:ring-blue-500"
              >
                <optgroup label="Core Syllabus Chapters (1-14)">
                  {CLASS_10_MATH_CHAPTERS.filter((c) => !c.isAppendix).map((ch) => (
                    <option key={ch.id} value={ch.id}>
                      Ch {ch.chapterNumber}: {ch.title}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Special Appendices">
                  {CLASS_10_MATH_CHAPTERS.filter((c) => c.isAppendix).map((ch) => (
                    <option key={ch.id} value={ch.id}>
                      {ch.title}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* AI Tutor shortcut */}
            <Link
              href={`/student/tutor?q=Explain%20solutions%20for%20${encodeURIComponent(activeChapter.title)}%20Class%2010%20Mathematics`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-bold hover:bg-purple-100 transition-colors shadow-xs"
              title="Ask AI Doubt Solver"
            >
              <BrainCircuit className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Ask AI Tutor</span>
            </Link>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Close Reader"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 sm:px-6 gap-2 sm:gap-6 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('solutions')}
            className={`py-3 sm:py-3.5 text-xs sm:text-sm font-black border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'solutions'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Exercise Answers &amp; Hints ({activeChapter.exercises.length} Ex)</span>
          </button>

          <button
            onClick={() => setActiveTab('theory')}
            className={`py-3 sm:py-3.5 text-xs sm:text-sm font-black border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'theory'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Chapter Theory &amp; Concepts</span>
          </button>

          <button
            onClick={() => setActiveTab('formulas')}
            className={`py-3 sm:py-3.5 text-xs sm:text-sm font-black border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'formulas'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Formulas &amp; Theorems</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`py-3 sm:py-3.5 text-xs sm:text-sm font-black border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'quiz'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Self-Assessment Quiz</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/50 dark:bg-slate-900/50">
          {/* ======================================================== */}
          {/* TAB 1: EXERCISE ANSWERS & HINTS */}
          {/* ======================================================== */}
          {activeTab === 'solutions' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              {/* Exercise Selector Pills + Search */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                    Exercises:
                  </span>
                  {activeChapter.exercises.map((ex) => (
                    <button
                      key={ex.exerciseId}
                      onClick={() => setSelectedExerciseId(ex.exerciseId)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                        currentExercise?.exerciseId === ex.exerciseId
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {ex.name}
                      {ex.isOptional && ' (Opt)'}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-48">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search question # or keyword..."
                      value={exerciseSearch}
                      onChange={(e) => setExerciseSearch(e.target.value)}
                      className="w-full text-xs py-1.5 pl-8 pr-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                  {currentExercise && (
                    <button
                      onClick={() => handleCopyAllExerciseSolutions(currentExercise)}
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 text-slate-600 dark:text-slate-300 hover:text-blue-600 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 shrink-0"
                      title="Copy all answers for this exercise"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden md:inline">Copy All</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Current Exercise Banner */}
              {currentExercise && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-900/60 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-blue-950 dark:text-blue-200">
                      {currentExercise.name}: {currentExercise.title}
                    </h3>
                    <p className="text-xs text-blue-700/80 dark:text-blue-400 mt-0.5">
                      Verified answers and step-by-step mathematical reasoning directly matched to the official NCERT Examination Key.
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-600 text-white font-black text-[11px] shrink-0">
                    {filteredSolutions.length} Solved Questions
                  </span>
                </div>
              )}

              {/* Solutions Grid / Cards */}
              <div className="space-y-3">
                {filteredSolutions.length === 0 ? (
                  <div className="p-8 text-center rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <p className="text-sm font-bold text-slate-500">
                      No questions matched &quot;{exerciseSearch}&quot; in this exercise.
                    </p>
                  </div>
                ) : (
                  filteredSolutions.map((sol, qIdx) => {
                    const qKey = `${currentExercise?.exerciseId}-${sol.questionNumber}`;
                    const isCopied = copiedQuestionId === qKey;
                    return (
                      <div
                        key={qKey}
                        className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700/60 transition-all space-y-2.5"
                      >
                        <div className="flex items-start sm:items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-extrabold text-xs flex items-center justify-center flex-shrink-0 border border-blue-100 dark:border-blue-900/40">
                              Q{sol.questionNumber}
                            </span>
                            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                              Question {sol.questionNumber}
                            </span>
                          </div>

                          <button
                            onClick={() => handleCopyAnswer(qKey, `Q${sol.questionNumber}: ${sol.answer}`)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors cursor-pointer"
                            title="Copy Question Answer"
                          >
                            {isCopied ? (
                              <Check className="w-4 h-4 text-emerald-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        {/* Verified Answer Highlight */}
                        <div className="p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <div className="min-w-0">
                            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
                              Verified Answer
                            </span>
                            <div className="text-xs sm:text-sm font-black text-emerald-950 dark:text-emerald-200 font-mono break-words">
                              {sol.answer}
                            </div>
                          </div>
                        </div>

                        {/* Hint / Step Breakdown */}
                        {sol.hintOrStep && (
                          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                            <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">
                              Step-by-Step Method / Explanation:
                            </span>
                            <p className="font-mono text-xs leading-relaxed break-words">
                              {sol.hintOrStep}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 2: CHAPTER THEORY & CONCEPTS */}
          {/* ======================================================== */}
          {activeTab === 'theory' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="p-5 rounded-3xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-800/80 border border-indigo-200 dark:border-slate-700 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Syllabus Overview</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  {activeChapter.title} — Comprehensive Foundation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeChapter.description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block mb-2">
                    Key Learning Objectives:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeChapter.learningObjectives.map((obj, oIdx) => (
                      <div
                        key={oIdx}
                        className="p-2.5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Concepts List */}
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  Core Concepts &amp; Theorems
                </h4>

                {activeChapter.concepts.map((concept, cIdx) => (
                  <div
                    key={concept.id}
                    className="p-5 rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-black text-xs flex items-center justify-center">
                        {cIdx + 1}
                      </span>
                      <h5 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                        {concept.title}
                      </h5>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {concept.content}
                    </p>

                    {concept.keyPoints.length > 0 && (
                      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1.5">
                          Critical Principles to Remember:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside">
                          {concept.keyPoints.map((pt, pIdx) => (
                            <li key={pIdx} className="leading-relaxed">
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {concept.example && (
                      <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 text-xs font-bold">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Worked NCERT Example</span>
                        </div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">
                          Problem: {concept.example.problem}
                        </p>
                        <p className="text-xs font-mono text-amber-950 dark:text-amber-200 leading-relaxed bg-white/60 dark:bg-slate-900/60 p-2.5 rounded-xl">
                          Solution: {concept.example.solution}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 3: FORMULAS & THEOREMS */}
          {/* ======================================================== */}
          {activeTab === 'formulas' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="p-5 rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    Essential Formulas, Theorems &amp; Rules
                  </h3>
                  <button
                    onClick={() => {
                      const allF = activeChapter.keyFormulas.join('\n• ');
                      if (typeof navigator !== 'undefined') {
                        navigator.clipboard.writeText(`--- ${activeChapter.title} Formulas ---\n• ` + allF);
                        toast.success('Formulas Copied', 'All formulas copied to clipboard.');
                      }
                    }}
                    className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Sheet</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {activeChapter.keyFormulas.map((formula, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-slate-900 dark:to-slate-900/90 border border-blue-100 dark:border-slate-800 flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-lg bg-blue-600 text-white text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                        {fIdx + 1}
                      </div>
                      <div className="font-mono text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-relaxed">
                        {formula}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Points Card */}
              {activeChapter.summaryPoints.length > 0 && (
                <div className="p-5 rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Chapter Summary Takeaways
                  </h4>
                  <div className="space-y-2">
                    {activeChapter.summaryPoints.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 4: SELF-ASSESSMENT QUIZ */}
          {/* ======================================================== */}
          {activeTab === 'quiz' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="p-5 rounded-3xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-200 dark:border-purple-900/40 space-y-2">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-black uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  <span>Instant Diagnostic</span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  {activeChapter.title} — Concept Mastery Test
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Select the best answer for each question and submit to earn XP and verify your understanding!
                </p>
              </div>

              {activeChapter.practiceQuiz.length === 0 ? (
                <div className="p-8 text-center rounded-2xl bg-white dark:bg-slate-800 border">
                  <p className="text-xs text-slate-400">Diagnostic questions for this chapter are coming soon.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {activeChapter.practiceQuiz.map((quizItem, qIdx) => {
                    const chosenIdx = selectedAnswers[quizItem.id];
                    const isCorrect = chosenIdx === quizItem.correctIndex;
                    return (
                      <div
                        key={quizItem.id}
                        className="p-5 rounded-3xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 space-y-3"
                      >
                        <div className="flex items-start gap-2.5">
                          <span className="w-6 h-6 rounded-md bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 text-xs font-black flex items-center justify-center shrink-0">
                            {qIdx + 1}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                            {quizItem.question}
                          </h4>
                        </div>

                        <div className="space-y-2 pt-1">
                          {quizItem.options.map((opt, oIdx) => {
                            let btnStyle = 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/40 text-slate-700 dark:text-slate-300';
                            if (quizSubmitted) {
                              if (oIdx === quizItem.correctIndex) {
                                btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 font-bold';
                              } else if (chosenIdx === oIdx && !isCorrect) {
                                btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200';
                              }
                            } else if (chosenIdx === oIdx) {
                              btnStyle = 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold';
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => handleSelectQuizOption(quizItem.id, oIdx)}
                                className={`w-full text-left p-3 rounded-2xl border text-xs transition-all cursor-pointer flex items-center justify-between gap-3 ${btnStyle}`}
                              >
                                <span>{opt}</span>
                                {quizSubmitted && oIdx === quizItem.correctIndex && (
                                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {quizSubmitted && (
                          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-mono">
                            <strong className="text-slate-900 dark:text-white block font-sans mb-0.5">
                              Explanation:
                            </strong>
                            {quizItem.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <div className="flex items-center justify-between pt-2">
                    {quizSubmitted ? (
                      <button
                        onClick={() => {
                          setSelectedAnswers({});
                          setQuizSubmitted(false);
                        }}
                        className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-black transition-colors cursor-pointer"
                      >
                        Retake Quiz
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmitQuiz}
                        disabled={Object.keys(selectedAnswers).length === 0}
                        className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-black shadow-md transition-all cursor-pointer ml-auto"
                      >
                        Submit Answers &amp; Check Score
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
