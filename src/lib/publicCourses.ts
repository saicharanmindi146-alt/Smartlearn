import { INITIAL_COURSES } from './db';

export interface PublicCourseDetail {
  id: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  price: string;
  rating: number;
  reviewsCount: number;
  studentsEnrolled: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  language: string;
  lastUpdated: string;
  targetAudience: string;
  thumbnail: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
    studentsCount: number;
    rating: number;
    coursesCount: number;
  };
  whatYouWillLearn: string[];
  prerequisites: string[];
  syllabus: {
    title: string;
    duration: string;
    lectures: string[];
  }[];
}

// Additional featured and category courses to supplement INITIAL_COURSES
const EXTRA_COURSES: Record<string, PublicCourseDetail> = {
  'fc-1': {
    id: 'fc-1',
    title: 'Art & Crafts: Prototyping & Visual Expression',
    category: 'Design & Visual Arts',
    headline: 'Master hands-on prototyping, spatial geometry, color balance, and material crafts.',
    description: 'A comprehensive studio course designed for creative learners. You will dive into tactile design principles, scale modeling, origami geometry, sustainable craft materials, and creative visual communication used by leading industrial designers.',
    price: '$15',
    rating: 4.85,
    reviewsCount: 142,
    studentsEnrolled: 120,
    difficulty: 'Beginner',
    duration: '12 Hours (18 Lessons)',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    targetAudience: 'Students interested in design foundations, industrial design, architecture, or creative expression.',
    thumbnail: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=450&fit=crop&q=80',
    instructor: {
      name: 'William Parker',
      role: 'Senior Design Technologist & Maker',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop',
      bio: 'William has over 11 years of experience in product design, tactile prototyping, and creative arts education across North America and Europe.',
      studentsCount: 3820,
      rating: 4.9,
      coursesCount: 6,
    },
    whatYouWillLearn: [
      'Understand color harmony, contrast ratios, and spatial aesthetics',
      'Build physical scale models with sustainable everyday materials',
      'Translate 2D architectural sketches into 3D structural forms',
      'Master precision cutting, paper folding geometry, and kinetic sculptures',
      'Present a comprehensive physical design portfolio'
    ],
    prerequisites: [
      'No prior arts or craft experience required',
      'Basic craft toolkit (scissors, ruler, cutting mat, paper, adhesives)'
    ],
    syllabus: [
      {
        title: 'Module 1: Visual Composition & Spatial Geometry',
        duration: '3 hours',
        lectures: ['Foundations of Color & Form', 'Golden Ratio in Physical Crafts', 'Structural Paper Mechanics']
      },
      {
        title: 'Module 2: Tactile Materials & Rapid Prototyping',
        duration: '5 hours',
        lectures: ['Choosing Woods, Polymers & Fibers', 'Precision Origami and Tessellations', 'Building Kinetic Prototypes']
      },
      {
        title: 'Module 3: Portfolio Fabrication & Exhibition',
        duration: '4 hours',
        lectures: ['Studio Lighting for Design Showcase', 'Documenting Maker Process', 'Final Capstone Critique']
      }
    ]
  },
  'fc-2': {
    id: 'fc-2',
    title: 'IT Development: Full-Stack Web Architecture',
    category: 'Computer Science & Software',
    headline: 'Build robust, production-grade distributed applications with modern web technologies.',
    description: 'Step directly into the world of modern software engineering. From high-performance React frontend architectures and RESTful microservices to SQL database normalization and CI/CD pipelines, this course equips you with the exact skills sought by modern tech teams.',
    price: '$15',
    rating: 4.96,
    reviewsCount: 389,
    studentsEnrolled: 420,
    difficulty: 'Intermediate',
    duration: '26 Hours (34 Lessons)',
    language: 'English (US)',
    lastUpdated: 'August 2026',
    targetAudience: 'Aspiring full-stack engineers, B.Tech students, and web developers seeking enterprise skills.',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop&q=80',
    instructor: {
      name: 'William Parker',
      role: 'Staff Infrastructure Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop',
      bio: 'William has built cloud-native distributed backends at scale and coached hundreds of junior developers into engineering roles at Fortune 500 firms.',
      studentsCount: 9400,
      rating: 4.95,
      coursesCount: 8,
    },
    whatYouWillLearn: [
      'Architect full-stack React and Node.js applications from ground zero',
      'Design relational database schemas with PostgreSQL and ACID transactions',
      'Implement secure JWT authentication, RBAC, and OAuth2 workflows',
      'Optimize Web Vitals, client hydration, and server caching strategies',
      'Deploy containerized Docker services to cloud Kubernetes clusters'
    ],
    prerequisites: [
      'Basic familiarity with JavaScript syntax (variables, functions, loops)',
      'A computer with Node.js and a code editor (VS Code or similar)'
    ],
    syllabus: [
      {
        title: 'Module 1: Modern Frontend with React & State Machines',
        duration: '8 hours',
        lectures: ['Component Lifecycles & Virtual DOM', 'State Management & Custom Hooks', 'SSR & Edge Rendering']
      },
      {
        title: 'Module 2: Scalable Backend Services & API Gateway',
        duration: '10 hours',
        lectures: ['Express REST APIs & Middleware', 'Database Schema Modeling', 'Rate Limiting & Security Hardening']
      },
      {
        title: 'Module 3: DevOps, CI/CD & Production Monitoring',
        duration: '8 hours',
        lectures: ['Dockerizing Fullstack Apps', 'GitHub Actions Automation', 'Log Aggregation & Sentry Telemetry']
      }
    ]
  },
  'fc-3': {
    id: 'fc-3',
    title: 'Graphic Design: Typographic Hierarchy & Brand Systems',
    category: 'Design & Visual Arts',
    headline: 'Create iconic visual identities, editorial layouts, and cohesive corporate design systems.',
    description: 'Transform concepts into compelling visual communication. Learn the subtle science of typography, grid systems, balance, whitespace, and vector illustration to create brand guidelines that captivate audiences across both digital and physical mediums.',
    price: '$15',
    rating: 4.88,
    reviewsCount: 215,
    studentsEnrolled: 290,
    difficulty: 'Beginner',
    duration: '16 Hours (22 Lessons)',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    targetAudience: 'Creative individuals, marketers, and designers wanting to master brand identity and vector layout.',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=450&fit=crop&q=80',
    instructor: {
      name: 'William Parker',
      role: 'Design Director & Brand Strategist',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop',
      bio: 'William has led rebranding campaigns for global consumer tech companies and teaches visual design theory.',
      studentsCount: 4200,
      rating: 4.89,
      coursesCount: 5,
    },
    whatYouWillLearn: [
      'Master kerning, leading, and pairing font families for readability',
      'Harness modular grid systems (12-column, Swiss Style, golden section)',
      'Vector icon design and scalable badge illustration',
      'Build brand style guides including color tokens and voice rules',
      'Prepare print-ready CMYK files and responsive SVG web assets'
    ],
    prerequisites: [
      'No previous design degree required',
      'Figma, Adobe Illustrator, or free vector software installed'
    ],
    syllabus: [
      {
        title: 'Module 1: The Geometry of Typography',
        duration: '5 hours',
        lectures: ['Anatomy of Letterforms', 'Type Hierarchy and Rhythm', 'Dynamic Responsive Type Scales']
      },
      {
        title: 'Module 2: Layout Engines & Visual Weight',
        duration: '6 hours',
        lectures: ['Swiss Grid Mastery', 'Negative Space and Tension', 'Designing Editorial Covers']
      },
      {
        title: 'Module 3: Complete Brand Guideline Project',
        duration: '5 hours',
        lectures: ['Logo Mark Ideation', 'Color Psychology in Branding', 'Exporting Production Deliverables']
      }
    ]
  },
  'fc-4': {
    id: 'fc-4',
    title: 'Financial Markets: Quantitative Valuation & Portfolio Risk',
    category: 'Finance & Economics',
    headline: 'Master macroeconomic indicators, balance sheet valuation, and portfolio risk management.',
    description: 'An analytical introduction to equity markets, fixed income, options mechanics, and quantitative portfolio management. Learn how hedge funds and asset managers evaluate corporate fundamentals and construct risk-parity investment portfolios.',
    price: '$15',
    rating: 4.93,
    reviewsCount: 310,
    studentsEnrolled: 350,
    difficulty: 'Intermediate',
    duration: '20 Hours (28 Lessons)',
    language: 'English (US)',
    lastUpdated: 'July 2026',
    targetAudience: 'Economics and business students, aspiring analysts, and quantitative finance enthusiasts.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&q=80',
    instructor: {
      name: 'William Parker',
      role: 'Chartered Financial Analyst & Quant Educator',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop',
      bio: 'Former equities trader and quantitative researcher with deep pedagogical experience in algorithmic trading and risk modeling.',
      studentsCount: 5100,
      rating: 4.94,
      coursesCount: 4,
    },
    whatYouWillLearn: [
      'Read and decompose 10-K filings, EBITDA, and Discounted Cash Flow (DCF)',
      'Calculate Beta, Sharpe Ratio, and Value-at-Risk (VaR)',
      'Understand central bank interest rate policies and yield curves',
      'Hedge market risk using derivative options strategies (Straddles, Spreads)',
      'Simulate portfolio performance using Monte Carlo probability models'
    ],
    prerequisites: [
      'Basic algebra and familiarity with spreadsheet software (Excel or Sheets)'
    ],
    syllabus: [
      {
        title: 'Module 1: Market Mechanics & Fundamental Valuation',
        duration: '6 hours',
        lectures: ['Capital Markets Overview', 'Discounted Cash Flow (DCF) Models', 'Multiples Analysis (P/E, EV/EBITDA)']
      },
      {
        title: 'Module 2: Fixed Income & Monetary Policy',
        duration: '7 hours',
        lectures: ['Bonds, Durations & Yield Curves', 'Federal Reserve Operations', 'Inflation & Macro Headwinds']
      },
      {
        title: 'Module 3: Portfolio Construction & Derivatives',
        duration: '7 hours',
        lectures: ['Modern Portfolio Theory & Efficient Frontier', 'Black-Scholes Option Pricing', 'Risk Parity Framework']
      }
    ]
  },
  // Category-specific Course Details
  'cat-it-dev': {
    id: 'cat-it-dev',
    title: 'IT Development: Foundations to Enterprise Engineering',
    category: 'IT & Software Development',
    headline: 'Explore 120+ specialized modules across algorithms, databases, cloud DevOps, and web architecture.',
    description: 'Dive into our premier software engineering curriculum. Whether you are aiming for top software engineer roles or building your own startup, this comprehensive track covers algorithmic thinking, clean code paradigms, and production systems.',
    price: '$19',
    rating: 4.95,
    reviewsCount: 1420,
    studentsEnrolled: 3200,
    difficulty: 'Intermediate',
    duration: '45 Hours (60 Lessons)',
    language: 'English (US)',
    lastUpdated: 'August 2026',
    targetAudience: 'Computer science undergraduates, B.Tech engineers, and self-directed coders.',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=450&fit=crop&q=80',
    instructor: {
      name: 'Elena Rostova & Faculty Team',
      role: 'AI & Systems Architecture Lead',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop',
      bio: 'Leading engineering team at SmartLearn specializing in automated code graders and modern software engineering pedagogy.',
      studentsCount: 18200,
      rating: 4.96,
      coursesCount: 12,
    },
    whatYouWillLearn: [
      'Master core Data Structures & Algorithms (Trees, Graphs, DP)',
      'Build end-to-end cloud applications with microservices architecture',
      'Perform rigorous automated unit and integration testing',
      'Optimize database queries with indexes and Redis cache clustering'
    ],
    prerequisites: ['Basic familiarity with programming logic'],
    syllabus: [
      {
        title: 'Module 1: Core Algorithms & Complexity Analysis',
        duration: '15 hours',
        lectures: ['Big-O Analysis', 'Search & Sort Paradigms', 'Graph Traversal Algorithms']
      },
      {
        title: 'Module 2: Microservices & Event Architecture',
        duration: '15 hours',
        lectures: ['Kafka and Message Brokers', 'gRPC vs REST', 'Distributed Transactions']
      },
      {
        title: 'Module 3: Cloud Infrastructure & Security',
        duration: '15 hours',
        lectures: ['Infrastructure as Code (Terraform)', 'Zero Trust Security', 'Automated CI/CD Workflows']
      }
    ]
  },
  'cat-web-design': {
    id: 'cat-web-design',
    title: 'Web Design: UI/UX, Interaction & Modern CSS',
    category: 'Design & Visual Arts',
    headline: 'Master design systems, high-fidelity Figma prototyping, modern CSS, and visual hierarchy.',
    description: 'Bridge the gap between visual aesthetics and browser execution. You will create responsive layouts, master Figma auto-layout, build fluid animations with CSS/Canvas, and conduct usability research.',
    price: '$15',
    rating: 4.92,
    reviewsCount: 890,
    studentsEnrolled: 2100,
    difficulty: 'Beginner',
    duration: '22 Hours (30 Lessons)',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    targetAudience: 'UI/UX designers, front-end developers, and digital product creators.',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop&q=80',
    instructor: {
      name: 'Sofia Chen',
      role: 'Staff Product Designer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop',
      bio: 'Sofia has spearheaded design systems for international e-commerce platforms and teaches UX research methodologies.',
      studentsCount: 6800,
      rating: 4.93,
      coursesCount: 5,
    },
    whatYouWillLearn: [
      'Design comprehensive responsive interfaces in Figma with design tokens',
      'Master CSS Grid, Flexbox, Container Queries, and dark mode themes',
      'Perform user interviews, usability testing, and heat-map analytics',
      'Ensure WCAG 2.1 AAA accessibility compliance across web apps'
    ],
    prerequisites: ['No prior experience required; browser and Figma account'],
    syllabus: [
      {
        title: 'Module 1: UX Wireframing & Information Architecture',
        duration: '6 hours',
        lectures: ['User Journey Mapping', 'Low-Fidelity Prototyping', 'Accessibility Heuristics']
      },
      {
        title: 'Module 2: High-Fidelity UI Systems in Figma',
        duration: '8 hours',
        lectures: ['Auto-Layout & Variants', 'Design Tokens & Typography Scales', 'Interactive Micro-Interactions']
      },
      {
        title: 'Module 3: Production Code Handoff & Modern CSS',
        duration: '8 hours',
        lectures: ['CSS Custom Properties & Themes', 'Fluid Typography with Clamp', 'Exporting Clean Production Assets']
      }
    ]
  },
  'cat-illustration': {
    id: 'cat-illustration',
    title: 'Illustration & Drawing: Digital Art & Technical Diagramming',
    category: 'Design & Visual Arts',
    headline: 'From freehand sketching and scientific diagrams to professional vector concept art.',
    description: 'Learn dynamic sketching, anatomical proportion, atmospheric lighting, and digital vector illustration. Perfect for scientific diagram creators, concept artists, and visual storytellers.',
    price: '$15',
    rating: 4.87,
    reviewsCount: 520,
    studentsEnrolled: 1450,
    difficulty: 'Beginner',
    duration: '18 Hours (24 Lessons)',
    language: 'English (US)',
    lastUpdated: 'July 2026',
    targetAudience: 'Digital illustrators, science communicators, and creative visual artists.',
    thumbnail: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=450&fit=crop&q=80',
    instructor: {
      name: 'Julian Thorne',
      role: 'Master Illustrator & Concept Artist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop',
      bio: 'Julian has illustrated educational STEM books, graphic novels, and game concept art for over a decade.',
      studentsCount: 3900,
      rating: 4.88,
      coursesCount: 4,
    },
    whatYouWillLearn: [
      'Understand 1-point, 2-point, and 3-point perspective matrices',
      'Master shading, specular highlights, and color temperature',
      'Draw accurate biological and mechanical engineering illustrations',
      'Use digital pressure curves and custom brush engines'
    ],
    prerequisites: ['Drawing tablet or pencil and sketchbook'],
    syllabus: [
      {
        title: 'Module 1: Line Control, Gesture & Perspective',
        duration: '6 hours',
        lectures: ['Contour Line Fundamentals', 'Perspective Grids', 'Form Volumetrics']
      },
      {
        title: 'Module 2: Light, Shadow & Material Textures',
        duration: '6 hours',
        lectures: ['Ambient Occlusion', 'Reflected Light & Translucency', 'Rendering Metal, Glass & Wood']
      },
      {
        title: 'Module 3: Digital Inking & Commercial Publishing',
        duration: '6 hours',
        lectures: ['Vector Inking Workflows', 'Layer Composition', 'High-Res Print Preparation']
      }
    ]
  },
  'cat-social-media': {
    id: 'cat-social-media',
    title: 'Social Media Strategy: Educational Outreach & Community Growth',
    category: 'Marketing & Communication',
    headline: 'Build engaging educational campaigns, viral storytelling, and data-driven audience growth.',
    description: 'Discover how modern educators, universities, and tech startups cultivate thriving online communities. Master short-form video hooks, content repurposing pipelines, and retention analytics.',
    price: '$15',
    rating: 4.82,
    reviewsCount: 410,
    studentsEnrolled: 1100,
    difficulty: 'Beginner',
    duration: '14 Hours (20 Lessons)',
    language: 'English (US)',
    lastUpdated: 'August 2026',
    targetAudience: 'Edu-creators, student club organizers, marketing students, and brand builders.',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=450&fit=crop&q=80',
    instructor: {
      name: 'Maya Lin',
      role: 'Growth Strategist & Community Architect',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop',
      bio: 'Maya has scaled educational YouTube channels and social platforms to millions of active subscribers.',
      studentsCount: 7100,
      rating: 4.86,
      coursesCount: 4,
    },
    whatYouWillLearn: [
      'Craft high-retention 60-second educational video scripts',
      'Analyze platform algorithms, CTR, and watch time drop-off points',
      'Set up automated content calendars with multi-platform syndication',
      'Build community discord servers and interactive student cohorts'
    ],
    prerequisites: ['Basic familiarity with social platforms (YouTube, LinkedIn, X)'],
    syllabus: [
      {
        title: 'Module 1: Storytelling Architecture for Attention',
        duration: '4 hours',
        lectures: ['The 3-Second Hook Rule', 'Simplifying Complex Technical Ideas', 'Visual Pacing']
      },
      {
        title: 'Module 2: Algorithm Analytics & Audience Modeling',
        duration: '5 hours',
        lectures: ['Deciphering Retention Curves', 'A/B Testing Thumbnails', 'Hashtags and SEO Indexing']
      },
      {
        title: 'Module 3: Scaling Educational Communities',
        duration: '5 hours',
        lectures: ['Live Stream Interactive Classrooms', 'Moderation Best Practices', 'Monetization and Sponsorships']
      }
    ]
  },
  'cat-photoshop': {
    id: 'cat-photoshop',
    title: 'Photoshop Masterclass: Digital Imaging, Retouching & AI Generative Fill',
    category: 'Design & Visual Arts',
    headline: 'Master layer masking, non-destructive color grading, compositing, and Adobe Firefly AI.',
    description: 'Learn industry-standard photo manipulation and graphic compositing. From frequency separation for skin retouching to complex perspective match composites and generative fill prompt engineering, this course covers it all.',
    price: '$15',
    rating: 4.94,
    reviewsCount: 1650,
    studentsEnrolled: 4800,
    difficulty: 'Intermediate',
    duration: '24 Hours (32 Lessons)',
    language: 'English (US)',
    lastUpdated: 'September 2026',
    targetAudience: 'Photographers, graphic designers, digital marketers, and visual creators.',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop&q=80',
    instructor: {
      name: 'Marcus Brody',
      role: 'Creative Retoucher & Visual Effects Artist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop',
      bio: 'Marcus has worked on high-end commercial advertising campaigns and cinematic post-production posters.',
      studentsCount: 12400,
      rating: 4.94,
      coursesCount: 6,
    },
    whatYouWillLearn: [
      'Harness non-destructive workflows with Curves, Levels, and Layer Masks',
      'Advanced selection tools: Object Selection, Pen Tool paths, and Refine Edge',
      'Master frequency separation and color grading with LUTs',
      'Integrate AI Generative Fill and Expand for surrealistic compositions'
    ],
    prerequisites: ['Computer with Adobe Photoshop or equivalent photo editor installed'],
    syllabus: [
      {
        title: 'Module 1: Selection Precision & Masking Mastery',
        duration: '8 hours',
        lectures: ['Alpha Channels & Luminosity Masks', 'Hair & Fine Fur Refinement', 'Vector Clipping Paths']
      },
      {
        title: 'Module 2: Advanced Compositing & Perspective Blending',
        duration: '8 hours',
        lectures: ['Matching Horizon Lines & Light Angles', 'Color Matching Techniques', 'Shadow & Specular Fabrication']
      },
      {
        title: 'Module 3: Commercial Retouching & Generative AI Tools',
        duration: '8 hours',
        lectures: ['Frequency Separation for Portraits', 'Commercial Product Retouching', 'Prompting Generative Fill']
      }
    ]
  },
  'cat-crypto': {
    id: 'cat-crypto',
    title: 'Cryptocurrencies & Web3: Blockchain Architecture & Smart Contracts',
    category: 'Computer Science & Finance',
    headline: 'Deep dive into decentralized consensus, Solidity smart contracts, DeFi protocols, and cryptography.',
    description: 'Explore cryptographic hash functions, Byzantine Fault Tolerance, peer-to-peer gossip networks, Ethereum virtual machine (EVM) opcode execution, and vulnerability auditing in decentralized smart contracts.',
    price: '$15',
    rating: 4.89,
    reviewsCount: 390,
    studentsEnrolled: 980,
    difficulty: 'Advanced',
    duration: '20 Hours (25 Lessons)',
    language: 'English (US)',
    lastUpdated: 'August 2026',
    targetAudience: 'Engineers, computer science students, and analysts exploring decentralized systems.',
    thumbnail: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&h=450&fit=crop&q=80',
    instructor: {
      name: 'Dr. Sarah Jenkins & BlockLab',
      role: 'Cryptography & Distributed Systems Researcher',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop',
      bio: 'Published author in distributed consensus and smart contract security auditor with years of academic lecturing.',
      studentsCount: 4600,
      rating: 4.91,
      coursesCount: 3,
    },
    whatYouWillLearn: [
      'Understand SHA-256, Elliptic Curve Cryptography, and Merkle Trees',
      'Compare Proof of Work (PoW) vs Proof of Stake (PoS) consensus math',
      'Write, test, and deploy Solidity smart contracts using Hardhat and Foundry',
      'Audit smart contracts against reentrancy attacks and integer overflows'
    ],
    prerequisites: ['Basic programming knowledge and fundamental understanding of computer networking'],
    syllabus: [
      {
        title: 'Module 1: Cryptographic Foundations & Distributed Ledgers',
        duration: '6 hours',
        lectures: ['Asymmetric Cryptography & Digital Signatures', 'P2P Gossip Networks', 'Consensus Mechanisms']
      },
      {
        title: 'Module 2: Solidity & Ethereum Virtual Machine (EVM)',
        duration: '8 hours',
        lectures: ['EVM Gas Economics & Storage Slots', 'ERC-20 & ERC-721 Standards', 'Automated Unit Tests in Foundry']
      },
      {
        title: 'Module 3: DeFi Protocols & Security Auditing',
        duration: '6 hours',
        lectures: ['Automated Market Makers (AMMs)', 'Reentrancy Vulnerability Deep Dive', 'Formal Verification Tools']
      }
    ]
  }
};

// Convert an INITIAL_COURSES item to PublicCourseDetail
export function getPublicCourseDetail(id: string): PublicCourseDetail | null {
  if (EXTRA_COURSES[id]) {
    return EXTRA_COURSES[id];
  }

  const found = INITIAL_COURSES.find((c) => c.id === id);
  if (!found) return null;

  return {
    id: found.id,
    title: found.title,
    category: found.subject,
    headline: found.description,
    description: `A rigorous, interactive curriculum developed specifically for ${found.grade} students. Designed with modular diagnostics, algorithmic visual simulations, and personalized step-by-step problem sets to guarantee conceptual mastery.`,
    price: '$15',
    rating: found.rating,
    reviewsCount: Math.round(found.enrollmentCount * 0.42),
    studentsEnrolled: found.enrollmentCount,
    difficulty: found.difficulty,
    duration: `${found.durationHours} Hours (${found.modules.reduce((acc, m) => acc + m.lessons.length, 0)} Lessons)`,
    language: 'English (US)',
    lastUpdated: 'September 2026',
    targetAudience: `Students in ${found.grade} pursuing academic excellence, competitive STEM exams, and foundational subject mastery.`,
    thumbnail: found.thumbnail,
    instructor: {
      name: found.instructorName,
      role: found.instructorRole,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop',
      bio: `${found.instructorName} is a distinguished educator and ${found.instructorRole} at SmartLearn Academy with over a decade of classroom and curriculum design experience.`,
      studentsCount: found.enrollmentCount * 4,
      rating: found.rating,
      coursesCount: 5,
    },
    whatYouWillLearn: [
      `Comprehensive mastery of core ${found.subject} theorems and methodologies`,
      'Interactive AI-guided problem solving with instant diagnostic feedback',
      'Step-by-step derivations, visual simulations, and practical applications',
      'Prepares students thoroughly for standardized benchmark examinations'
    ],
    prerequisites: [
      `Foundational understanding of previous year's ${found.subject} syllabus`,
      'A notebook, scientific calculator, and motivation to learn'
    ],
    syllabus: found.modules.map((m) => ({
      title: m.title,
      duration: `${m.durationMinutes} min`,
      lectures: m.lessons.map((l) => `${l.title} (${l.durationMinutes}m ${l.type})`)
    }))
  };
}

// Get list of all course IDs for static pre-rendering (Next.js static export)
export function getAllPublicCourseIds(): string[] {
  const initialIds = INITIAL_COURSES.map((c) => c.id);
  const extraIds = Object.keys(EXTRA_COURSES);
  return Array.from(new Set([...initialIds, ...extraIds]));
}
