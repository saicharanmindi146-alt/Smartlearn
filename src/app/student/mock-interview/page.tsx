'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Briefcase,
  BrainCircuit,
  Sparkles,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Award,
  ArrowRight,
  RotateCcw,
  Video,
  VideoOff,
  ChevronRight,
  ShieldCheck,
  Send,
  Building2,
  BookOpen,
  HelpCircle,
  GraduationCap,
} from 'lucide-react';
import { useStore } from '@/store/useStore';
import { StudentAcademicProfile } from '@/types';

// Domain Tracks
interface InterviewTrack {
  id: string;
  title: string;
  role: string;
  icon: string;
  badge: string;
  description: string;
  companies: string[];
  questions: {
    id: string;
    question: string;
    category: string;
    targetKeywords: string[];
    idealAnswerOutline: string;
  }[];
}

const INTERVIEW_TRACKS: InterviewTrack[] = [
  {
    id: 'track-fullstack',
    title: 'Full-Stack Software Engineer',
    role: 'SDE-1 / Web Systems',
    icon: '💻',
    badge: 'High Demand',
    description: 'Covers React internals, asynchronous JavaScript, REST vs GraphQL, SQL indexing, and web caching strategies.',
    companies: ['Google', 'Microsoft', 'Amazon', 'Atlassian', 'Stripe'],
    questions: [
      {
        id: 'fs-1',
        question: 'Explain the Virtual DOM diffing reconciliation process in React, and how unique keys impact component render performance.',
        category: 'Frontend Engineering',
        targetKeywords: ['reconciliation', 'virtual dom', 'fiber', 'keys', 're-render', 'tree diffing'],
        idealAnswerOutline: 'Discuss the O(n) heuristic reconciliation algorithm, key identification to preserve state, and how React Fiber prioritizes work units.'
      },
      {
        id: 'fs-2',
        question: 'How do you design a high-throughput REST API with database connection pooling, idempotent mutations, and Redis caching?',
        category: 'Backend Architecture',
        targetKeywords: ['idempotency', 'connection pool', 'redis', 'cache invalidation', 'rate limiting', 'acid'],
        idealAnswerOutline: 'Explain idempotency keys for POST/PUT, connection pool sizing, cache-aside strategy, and cache invalidation policies like TTL and LRU.'
      },
      {
        id: 'fs-3',
        question: 'What happens from the moment you type a URL into the browser and press Enter until the page is fully rendered?',
        category: 'Web Networking & Systems',
        targetKeywords: ['dns lookup', 'tcp handshake', 'tls', 'http request', 'dom tree', 'cssom', 'render tree'],
        idealAnswerOutline: 'Walk through DNS resolution, TCP three-way handshake, TLS negotiation, HTTP parsing, DOM/CSSOM creation, layout, and compositing.'
      }
    ]
  },
  {
    id: 'track-dsa',
    title: 'Data Structures & Algorithms Core',
    role: 'Problem Solving & System Logic',
    icon: '⚡',
    badge: 'Tier-1 Tech',
    description: 'Algorithm complexity, graph traversals (BFS/DFS), dynamic programming, and binary search bounds.',
    companies: ['Meta', 'Uber', 'Apple', 'Adobe', 'Oracle'],
    questions: [
      {
        id: 'dsa-1',
        question: 'How would you detect a cycle in a directed graph versus an undirected graph? Describe the time and space complexities.',
        category: 'Graph Algorithms',
        targetKeywords: ['dfs', 'bfs', 'recursion stack', 'visited set', 'kahn algorithm', 'topological sort', 'o(v+e)'],
        idealAnswerOutline: 'Contrast parent-pointer check for undirected graphs with three-color state (visiting/visited) DFS or Kahn’s topological sort in directed graphs.'
      },
      {
        id: 'dsa-2',
        question: 'Explain Dynamic Programming. How do you recognize overlapping subproblems and optimal substructure in a technical problem?',
        category: 'Optimization & DP',
        targetKeywords: ['memoization', 'tabulation', 'subproblems', 'optimal substructure', 'space optimization'],
        idealAnswerOutline: 'Explain top-down memoization vs bottom-up tabulation using canonical examples like 0/1 Knapsack or Longest Common Subsequence.'
      },
      {
        id: 'dsa-3',
        question: 'Design an LRU (Least Recently Used) Cache supporting get() and put() operations in strictly O(1) time complexity.',
        category: 'System Data Structures',
        targetKeywords: ['hashmap', 'doubly linked list', 'o(1)', 'eviction', 'head', 'tail'],
        idealAnswerOutline: 'Explain combining a hash map for O(1) key lookup with a doubly linked list for O(1) node relocation and eviction at the tail.'
      }
    ]
  },
  {
    id: 'track-core',
    title: 'Core Engineering & Cloud DevOps',
    role: 'Infrastructure & Embedded Systems',
    icon: '☁️',
    badge: 'Enterprise',
    description: 'Docker containers, Kubernetes orchestration, CI/CD pipelines, operating system threads, and microservice resilience.',
    companies: ['Nvidia', 'Intel', 'Cisco', 'AWS', 'Qualcomm'],
    questions: [
      {
        id: 'devops-1',
        question: 'Explain the difference between a Process and a Thread. How does the Linux kernel handle context switching and shared memory?',
        category: 'Operating Systems',
        targetKeywords: ['process', 'thread', 'context switch', 'virtual memory', 'stack', 'heap', 'concurrency'],
        idealAnswerOutline: 'Detail process isolation with separate memory maps vs lightweight threads sharing the same heap and file descriptors.'
      },
      {
        id: 'devops-2',
        question: 'What are container namespaces and cgroups in Linux, and how do they enable container isolation in Docker?',
        category: 'Cloud Infrastructure',
        targetKeywords: ['cgroups', 'namespaces', 'isolation', 'pid', 'network', 'chroot', 'resource limits'],
        idealAnswerOutline: 'Explain PID/Network/Mnt namespaces providing illusion of isolated OS, while cgroups enforce CPU and RAM limits.'
      },
      {
        id: 'devops-3',
        question: 'How do you design a zero-downtime deployment pipeline using Blue/Green or Canary deployment strategies?',
        category: 'CI/CD & SRE',
        targetKeywords: ['blue green', 'canary', 'load balancer', 'rollback', 'health check', 'telemetry'],
        idealAnswerOutline: 'Contrast instant traffic shifting at router/load balancer level with gradual percentage routing and automated rollback.'
      }
    ]
  },
  {
    id: 'track-hr',
    title: 'HR Behavioral & Leadership (STAR)',
    role: 'Campus Placement & Cultural Fit',
    icon: '🎯',
    badge: 'All B.Tech Drives',
    description: 'Master the Situation-Task-Action-Result format, conflict resolution, technical trade-offs, and ethical engineering judgment.',
    companies: ['TCS Digital', 'Infosys Power', 'Wipro Turbo', 'Accenture', 'Cognizant'],
    questions: [
      {
        id: 'hr-1',
        question: 'Tell me about a time you encountered a serious roadblock in a university or engineering project. How did you resolve it?',
        category: 'Resilience & STAR Method',
        targetKeywords: ['situation', 'task', 'action', 'result', 'collaboration', 'debug', 'solution'],
        idealAnswerOutline: 'Use STAR: define context, your specific ownership, actionable technical steps, and measurable project outcomes.'
      },
      {
        id: 'hr-2',
        question: 'How do you handle a team disagreement over software architecture or technology choice during a high-stakes deadline?',
        category: 'Conflict & Team Dynamics',
        targetKeywords: ['active listening', 'data-driven', 'trade-offs', 'consensus', 'respect', 'deadline'],
        idealAnswerOutline: 'Emphasize objective benchmarking, evaluating trade-offs against requirements, and committing once a direction is decided.'
      },
      {
        id: 'hr-3',
        question: 'Where do you see yourself contributing in your first 90 days as a graduate software engineer with our organization?',
        category: 'Career Vision & Drive',
        targetKeywords: ['codebase familiarity', 'mentorship', 'documentation', 'delivering value', 'learning agility'],
        idealAnswerOutline: 'Demonstrate proactive onboarding, mastering developer tooling, taking on bug fixes, and shipping initial features.'
      }
    ]
  }
];

export default function MockInterviewPage() {
  const router = useRouter();
  const currentUser = useStore((state) => state.currentUser);
  const academicProfile = useStore((state) => state.academicProfile);
  const setAcademicProfile = useStore((state) => state.setAcademicProfile);
  const addXP = useStore((state) => state.addXP);
  const triggerConfetti = useStore((state) => state.triggerConfetti);

  // Check educational level - higher ed only!
  const isHigherEd =
    academicProfile?.educationalLevel === 'B.Tech' ||
    academicProfile?.educationalLevel === 'College' ||
    academicProfile?.educationalLevel === 'M.Tech' ||
    academicProfile?.educationalLevel === 'Other / Professional';

  // State
  const [selectedTrack, setSelectedTrack] = useState<InterviewTrack>(INTERVIEW_TRACKS[0]);
  const [interviewState, setInterviewState] = useState<'IDLE' | 'IN_PROGRESS' | 'COMPLETED'>('IDLE');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [answers, setAnswers] = useState<{ [qIdx: number]: string }>({});
  const [timerSeconds, setTimerSeconds] = useState(120);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isSpeakingQuestion, setIsSpeakingQuestion] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [cameraActive, setCameraActive] = useState(true);
  const [audioFeedbackEnabled, setAudioFeedbackEnabled] = useState(true);
  const [aiScorecard, setAiScorecard] = useState<{
    overallScore: number;
    technicalAccuracy: number;
    problemSolving: number;
    communication: number;
    confidence: number;
    recommendations: string[];
    placementReadiness: 'Immediate Placement Ready' | 'Highly Competitive' | 'Needs Targeted Practice';
  } | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const speechRecognitionRef = useRef<any>(null);

  // Switch to B.Tech helper for quick testing
  const handleUpgradeToBTech = () => {
    const btechProfile: StudentAcademicProfile = {
      educationalLevel: 'B.Tech',
      stream: 'Computer Science & Engineering',
      classLevel: 'Semester 7',
      classId: 'btech-sem7',
      board: 'Autonomous University / AICTE',
      subjects: ['Data Structures & Algorithms', 'Operating Systems', 'Computer Networks', 'DBMS', 'Web Systems'],
      learningGoals: ['competitive_exams', 'practice'],
      onboardingCompleted: true,
    };
    setAcademicProfile(btechProfile);
    triggerConfetti();
  };

  // Timer countdown
  useEffect(() => {
    let interval: any;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  // Web Speech API: Text to Speech
  const speakCurrentQuestion = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onstart = () => setIsSpeakingQuestion(true);
    utterance.onend = () => setIsSpeakingQuestion(false);
    utterance.onerror = () => setIsSpeakingQuestion(false);
    window.speechSynthesis.speak(utterance);
  };

  // Web Speech API: Speech Recognition (Voice to text)
  const toggleSpeechRecognition = () => {
    if (typeof window === 'undefined') return;

    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRec) {
      alert('Speech recognition is not supported in this browser. You can type your answer in the text box below.');
      return;
    }

    if (isListening) {
      if (speechRecognitionRef.current) {
        speechRecognitionRef.current.stop();
      }
      setIsListening(false);
    } else {
      try {
        const recognition = new SpeechRec();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event: any) => {
          let currentTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            currentTranscript += event.results[i][0].transcript;
          }
          setUserAnswer((prev) => (prev ? prev + ' ' + currentTranscript : currentTranscript));
        };

        recognition.onerror = (e: any) => {
          console.warn('Speech recognition error:', e);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        speechRecognitionRef.current = recognition;
        recognition.start();
        setIsListening(true);
      } catch (err) {
        console.error('Failed to start speech recognition', err);
        setIsListening(false);
      }
    }
  };

  // Start Interview Chamber
  const handleStartInterview = () => {
    setInterviewState('IN_PROGRESS');
    setCurrentQuestionIdx(0);
    setUserAnswer('');
    setAnswers({});
    setTimerSeconds(120);
    setIsTimerRunning(true);
    setAiScorecard(null);

    const firstQ = selectedTrack.questions[0];
    if (audioFeedbackEnabled) {
      setTimeout(() => {
        speakCurrentQuestion(firstQ.question);
      }, 500);
    }
  };

  // Next Question / Finish
  const handleNextQuestion = () => {
    if (isListening && speechRecognitionRef.current) {
      speechRecognitionRef.current.stop();
      setIsListening(false);
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    // Save answer
    const updatedAnswers = { ...answers, [currentQuestionIdx]: userAnswer };
    setAnswers(updatedAnswers);

    if (currentQuestionIdx < selectedTrack.questions.length - 1) {
      const nextIdx = currentQuestionIdx + 1;
      setCurrentQuestionIdx(nextIdx);
      setUserAnswer('');
      setTimerSeconds(120);
      setIsTimerRunning(true);

      const nextQ = selectedTrack.questions[nextIdx];
      if (audioFeedbackEnabled) {
        setTimeout(() => {
          speakCurrentQuestion(nextQ.question);
        }, 300);
      }
    } else {
      // Conclude Interview & Calculate AI Scorecard
      concludeInterview(updatedAnswers);
    }
  };

  const concludeInterview = (finalAnswers: { [qIdx: number]: string }) => {
    setIsTimerRunning(false);
    setInterviewState('COMPLETED');
    addXP(100, 'Completed AI Mock Interview');
    triggerConfetti();

    // Intelligent score simulation based on answers
    let totalLength = 0;
    let keywordHits = 0;
    let totalKeywords = 0;

    selectedTrack.questions.forEach((q, idx) => {
      const ans = (finalAnswers[idx] || '').toLowerCase();
      totalLength += ans.length;
      q.targetKeywords.forEach((kw) => {
        totalKeywords++;
        if (ans.includes(kw.toLowerCase())) {
          keywordHits++;
        }
      });
    });

    const keywordRatio = totalKeywords > 0 ? keywordHits / totalKeywords : 0.7;
    const baseScore = Math.min(95, Math.max(65, Math.round(68 + keywordRatio * 25 + Math.min(totalLength / 60, 8))));

    const technical = Math.min(98, Math.max(70, baseScore + (keywordHits > 2 ? 4 : -3)));
    const problemSolving = Math.min(96, Math.max(68, baseScore + 2));
    const communication = Math.min(94, Math.max(65, baseScore - 1));
    const confidence = Math.min(95, Math.max(72, baseScore + 3));

    const recommendations: string[] = [
      'Articulate algorithmic trade-offs explicitly (e.g. time vs space complexity) during opening statements.',
      'Structure technical system designs starting with requirements and data models before caching layers.',
      'Practice concise STAR framing (Situation, Task, Action, Result) for behavioral questions.',
    ];

    const readiness =
      baseScore >= 85
        ? 'Immediate Placement Ready'
        : baseScore >= 75
        ? 'Highly Competitive'
        : 'Needs Targeted Practice';

    setAiScorecard({
      overallScore: baseScore,
      technicalAccuracy: technical,
      problemSolving,
      communication,
      confidence,
      recommendations,
      placementReadiness: readiness,
    });
  };

  // If student is in School level, render restricted access notice with 1-click B.Tech switch
  if (!isHigherEd) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 space-y-8 animate-in fade-in duration-200">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center">
            <GraduationCap className="w-9 h-9" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
              Higher Education & Placement Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              AI Mock Interview Chamber
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              This advanced placement simulator is calibrated specifically for <strong>B.Tech / College Engineering</strong> candidates preparing for campus recruitment drives, technical screenings, and MNC hiring assessments.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 max-w-md mx-auto text-left space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>Current Profile Status:</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Level: <strong className="text-[#d82a4e]">{academicProfile?.educationalLevel || 'School (Secondary)'}</strong>
            </p>
            <p className="text-[11px] text-slate-500">
              School students focus on foundational STEM concepts and board syllabi. Mock Interviews become active once in higher education.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleUpgradeToBTech}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#d82a4e] hover:bg-[#b81d3d] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Switch Profile to B.Tech (Demo Test)
            </button>

            <Link
              href="/student"
              className="w-full sm:w-auto px-6 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs uppercase tracking-wider text-center transition-all"
            >
              Back to School Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Active or Idle Higher Ed View
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-indigo-900/30">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>B.Tech Campus Placement Suite &bull; AI Evaluator</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Interactive AI Mock Interview Chamber
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Simulate high-stakes technical coding, systems architecture, and HR leadership interviews with real-time speech synthesis, live transcription, and automated placement scoring.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <span className="text-[10px] text-slate-300 uppercase tracking-wider block">Level</span>
              <span className="text-sm font-black text-cyan-300">B.Tech (CSE)</span>
            </div>
            <button
              onClick={() => {
                const schoolProfile: StudentAcademicProfile = {
                  educationalLevel: 'School',
                  stream: 'Secondary',
                  classLevel: 'Class 10',
                  classId: 'class-10',
                  board: 'CBSE',
                  subjects: ['Mathematics', 'Science', 'Social Science', 'English'],
                  learningGoals: ['exam_prep'],
                  onboardingCompleted: true,
                };
                setAcademicProfile(schoolProfile);
              }}
              className="px-3 py-2 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-bold border border-slate-700 transition-colors"
              title="Click to test school view access restriction"
            >
              Switch to School
            </button>
          </div>
        </div>
      </div>

      {/* STATE 1: IDLE - Select Track & Start */}
      {interviewState === 'IDLE' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-500" />
                Select Technical or Behavioral Interview Domain
              </h2>
              <p className="text-xs text-slate-500">
                Choose your hiring track tailored to campus placement rounds and tech giants.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INTERVIEW_TRACKS.map((track) => {
              const isSelected = selectedTrack.id === track.id;
              return (
                <div
                  key={track.id}
                  onClick={() => setSelectedTrack(track)}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? 'bg-cyan-500/5 dark:bg-cyan-950/20 border-cyan-500 shadow-lg shadow-cyan-500/10 ring-2 ring-cyan-500/20'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{track.icon}</span>
                        <div>
                          <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                            {track.title}
                          </h3>
                          <span className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                            {track.role}
                          </span>
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {track.badge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {track.description}
                    </p>

                    <div className="pt-2">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        Target Hiring Companies:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {track.companies.map((comp) => (
                          <span
                            key={comp}
                            className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      {track.questions.length} Diagnostic Questions
                    </span>
                    <span
                      className={`font-bold ${
                        isSelected ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400'
                      }`}
                    >
                      {isSelected ? '✓ Selected Track' : 'Click to Select'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Launch Controls */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Ready to Enter the Interview Chamber?
              </h4>
              <p className="text-xs text-slate-500">
                Ensure microphone and audio are ready. Questions will be recited by the AI Evaluator.
              </p>
            </div>

            <button
              type="button"
              onClick={handleStartInterview}
              className="px-8 py-3.5 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-600/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              Begin Interview Simulation
            </button>
          </div>
        </div>
      )}

      {/* STATE 2: IN PROGRESS - Interactive Chamber */}
      {interviewState === 'IN_PROGRESS' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (8 cols): Question, AI Reciter, and Student Answer */}
          <div className="lg:col-span-8 space-y-6">
            {/* Question Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 text-xs font-black">
                    Question {currentQuestionIdx + 1} of {selectedTrack.questions.length}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">
                    {selectedTrack.questions[currentQuestionIdx].category}
                  </span>
                </div>

                {/* Question Timer */}
                <div
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                    timerSeconds < 30
                      ? 'bg-rose-500/15 text-rose-500 animate-pulse'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>
                    {Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                  &ldquo;{selectedTrack.questions[currentQuestionIdx].question}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      speakCurrentQuestion(selectedTrack.questions[currentQuestionIdx].question)
                    }
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isSpeakingQuestion
                        ? 'bg-cyan-500 text-white animate-pulse'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Volume2 className="w-4 h-4" />
                    {isSpeakingQuestion ? 'Speaking...' : 'Repeat Question Audio'}
                  </button>

                  <span className="text-[11px] text-slate-400">
                    Expected: Technical precision, real-world examples, and complexity discussion.
                  </span>
                </div>
              </div>

              {/* Student Response Area */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-extrabold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <span>Your Answer (Speak or Type):</span>
                  </label>

                  <button
                    type="button"
                    onClick={toggleSpeechRecognition}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                      isListening
                        ? 'bg-rose-500 text-white animate-pulse shadow-lg shadow-rose-500/25'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {isListening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                    {isListening ? 'Listening (Click to Pause)...' : 'Dictate with Microphone'}
                  </button>
                </div>

                <textarea
                  rows={6}
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Articulate your thought process, architecture decisions, or write pseudocode explanation here..."
                  className="w-full p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm leading-relaxed"
                />

                {/* Detected Keywords in Real Time */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                    Evaluator Focus:
                  </span>
                  {selectedTrack.questions[currentQuestionIdx].targetKeywords.map((kw) => {
                    const hit = userAnswer.toLowerCase().includes(kw.toLowerCase());
                    return (
                      <span
                        key={kw}
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md transition-colors ${
                          hit
                            ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-extrabold'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                        }`}
                      >
                        {hit ? '✓ ' : ''}
                        {kw}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setInterviewState('IDLE')}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Exit Chamber
                </button>

                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="px-6 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-cyan-600/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>
                    {currentQuestionIdx < selectedTrack.questions.length - 1
                      ? 'Submit & Next Question'
                      : 'Submit & Conclude Interview'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): AI Evaluator Feed & Live Telemetry */}
          <div className="lg:col-span-4 space-y-6">
            {/* AI Evaluator Card */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold">Dr. Samantha Vance</h4>
                    <p className="text-[11px] text-slate-400">Principal Staff AI Evaluator</p>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Simulation Feed */}
              <div className="p-4 rounded-2xl bg-black/40 border border-slate-800 space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Speech Cadence</span>
                  <span className="text-cyan-400 font-bold">135 WPM (Optimal)</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Sentiment Rigor</span>
                  <span className="text-emerald-400 font-bold">Analytical / Calm</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Jargon Authenticity</span>
                  <span className="text-amber-400 font-bold">Verified</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 leading-relaxed italic">
                &ldquo;Remember to emphasize trade-offs and edge cases. In industry screenings, explaining why you chose a solution matters as much as the code.&rdquo;
              </div>
            </div>

            {/* Candidate Checklist */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Interview Chamber Guidance
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>Clarify assumptions before diving into the solution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>State Time: O(N) and Space: O(1) complexities explicitly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>Use STAR framework for behavioral scenarios</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* STATE 3: COMPLETED - Detailed Placement Scorecard */}
      {interviewState === 'COMPLETED' && aiScorecard && (
        <div className="space-y-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-black">
                  <Award className="w-4 h-4" />
                  <span>Placement Evaluation Complete</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  {selectedTrack.title} Scorecard
                </h2>
                <p className="text-xs text-slate-500">
                  Comprehensive performance breakdown generated by SmartLearn Placement Engine.
                </p>
              </div>

              <div className="text-right">
                <div className="text-4xl font-black text-cyan-600 dark:text-cyan-400">
                  {aiScorecard.overallScore}/100
                </div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 inline-block mt-1">
                  {aiScorecard.placementReadiness}
                </span>
              </div>
            </div>

            {/* Dimensional Scores */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                <span className="text-xs text-slate-500 block">Technical Accuracy</span>
                <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">
                  {aiScorecard.technicalAccuracy}%
                </span>
                <span className="text-[10px] text-emerald-500 font-bold">Strong depth</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                <span className="text-xs text-slate-500 block">Problem Solving</span>
                <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">
                  {aiScorecard.problemSolving}%
                </span>
                <span className="text-[10px] text-cyan-500 font-bold">Systematic logic</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                <span className="text-xs text-slate-500 block">Communication</span>
                <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">
                  {aiScorecard.communication}%
                </span>
                <span className="text-[10px] text-indigo-500 font-bold">Clear articulation</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                <span className="text-xs text-slate-500 block">Confidence & Delivery</span>
                <span className="text-2xl font-black text-slate-900 dark:text-white mt-1 block">
                  {aiScorecard.confidence}%
                </span>
                <span className="text-[10px] text-purple-500 font-bold">L5 Grade demeanor</span>
              </div>
            </div>

            {/* Feedback & Recommendations */}
            <div className="space-y-4">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                Personalized Placement Insights:
              </h3>
              <div className="space-y-2.5">
                {aiScorecard.recommendations.map((rec, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/60 flex items-start gap-3"
                  >
                    <Sparkles className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-900 dark:text-blue-200 leading-relaxed font-medium">
                      {rec}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleStartInterview}
                className="px-6 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-600/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Retake This Track
              </button>

              <button
                type="button"
                onClick={() => setInterviewState('IDLE')}
                className="px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Choose Another Track
              </button>

              <Link
                href="/student/revision"
                className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-purple-600/20 transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Revise Weak Topics in AI Revision
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
