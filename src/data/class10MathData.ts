/**
 * class10MathData.ts
 * Complete, verified Class 10 Mathematics NCERT Curriculum, Theory, Exercises,
 * Answers/Hints, and Appendices.
 *
 * Sourced directly from official NCERT Class 10 Mathematics Textbook (2026-27 Reprint).
 * This module is reusable across the entire platform (Student Portal, Teacher Portal,
 * Practice Tests, AI Tutor, Public Course Catalog).
 */

export interface MathExerciseSolution {
  questionNumber: string | number;
  subPart?: string;
  questionText?: string;
  answer: string;
  hintOrStep?: string;
}

export interface MathExercise {
  exerciseId: string;
  name: string; // e.g. "Exercise 1.1"
  title: string;
  description?: string;
  isOptional?: boolean;
  solutions: MathExerciseSolution[];
}

export interface MathConceptItem {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  formulas?: string[];
  example?: {
    problem: string;
    solution: string;
  };
}

export interface MathQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface MathChapterData {
  id: string;
  chapterNumber: number | string; // 1 to 14, or 'A1', 'A2'
  title: string;
  slug: string;
  isAppendix?: boolean;
  description: string;
  learningObjectives: string[];
  keyFormulas: string[];
  concepts: MathConceptItem[];
  exercises: MathExercise[];
  summaryPoints: string[];
  practiceQuiz: MathQuizQuestion[];
}

export const CLASS_10_MATH_CHAPTERS: MathChapterData[] = [
  // ===========================================================================
  // CHAPTER 1: REAL NUMBERS
  // ===========================================================================
  {
    id: 'ch-1',
    chapterNumber: 1,
    title: 'Real Numbers',
    slug: 'real-numbers',
    description: 'Explore the Fundamental Theorem of Arithmetic, prime factorisation for HCF and LCM, and proofs of irrationality for numbers like √2, √3, and √5.',
    learningObjectives: [
      'Understand and apply the Fundamental Theorem of Arithmetic',
      'Calculate HCF and LCM of integers using prime factorisation',
      'Verify the relationship HCF(a, b) × LCM(a, b) = a × b',
      'Prove irrationality of numbers using proof by contradiction',
    ],
    keyFormulas: [
      'Fundamental Theorem: Every composite number can be uniquely factored into primes, apart from order.',
      'HCF(a, b) × LCM(a, b) = a × b (Only valid for two positive integers)',
      'HCF(a, b) = Product of the smallest power of each common prime factor',
      'LCM(a, b) = Product of the greatest power of each prime factor involved',
      'Theorem: If p is prime and p divides a², then p divides a (where a is a positive integer)',
    ],
    concepts: [
      {
        id: 'c1-1',
        title: 'Fundamental Theorem of Arithmetic',
        content: 'Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.',
        keyPoints: [
          'Order in ascending primes gives a strictly unique representation.',
          'Powers of primes are used: e.g., 32760 = 2³ × 3² × 5 × 7 × 13.',
          'Numbers of the form 4ⁿ or 6ⁿ cannot end with 0 because their prime factors do not contain 5.',
        ],
        example: {
          problem: 'Find HCF and LCM of 96 and 404 by prime factorisation.',
          solution: '96 = 2⁵ × 3, 404 = 2² × 101. Common factor with smallest power is 2² = 4, so HCF = 4. LCM = (96 × 404) / 4 = 9696.',
        },
      },
      {
        id: 'c1-2',
        title: 'Revisiting Irrational Numbers & Proof by Contradiction',
        content: 'A number is irrational if it cannot be expressed in p/q form (p, q integers, q ≠ 0). We prove √2, √3, √5 are irrational by assuming they are rational (a/b coprime) and deriving a contradiction.',
        keyPoints: [
          'Sum or difference of a rational and an irrational number is irrational.',
          'Product and quotient of a non-zero rational and an irrational number is irrational.',
        ],
        example: {
          problem: 'Show that 5 - √3 is irrational.',
          solution: 'Assume 5 - √3 = a/b (coprime integers). Then √3 = 5 - a/b = (5b - a)/b. Since a, b are integers, RHS is rational, which contradicts that √3 is irrational. Thus, 5 - √3 is irrational.',
        },
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-1.1',
        name: 'Exercise 1.1',
        title: 'Prime Factorisation, HCF & LCM',
        solutions: [
          { questionNumber: '1(i)', answer: '140 = 2² × 5 × 7', hintOrStep: '140 ÷ 2 = 70; 70 ÷ 2 = 35; 35 ÷ 5 = 7' },
          { questionNumber: '1(ii)', answer: '156 = 2² × 3 × 13', hintOrStep: '156 ÷ 2 = 78; 78 ÷ 2 = 39; 39 ÷ 3 = 13' },
          { questionNumber: '1(iii)', answer: '3825 = 3² × 5² × 17', hintOrStep: 'Sum of digits is 18 (divisible by 3); 3825 = 3 × 1275 = 3² × 425 = 3² × 5² × 17' },
          { questionNumber: '1(iv)', answer: '5005 = 5 × 7 × 11 × 13', hintOrStep: '5005 ÷ 5 = 1001; 1001 = 7 × 143 = 7 × 11 × 13' },
          { questionNumber: '1(v)', answer: '7429 = 17 × 19 × 23', hintOrStep: 'Not divisible by 2, 3, 5, 7, 11, 13. Divisible by 17: 7429 = 17 × 437 = 17 × 19 × 23' },
          { questionNumber: '2(i)', answer: 'LCM = 182; HCF = 13. Verification: 182 × 13 = 2366; 26 × 91 = 2366', hintOrStep: '26 = 2 × 13; 91 = 7 × 13. HCF = 13, LCM = 2 × 7 × 13 = 182' },
          { questionNumber: '2(ii)', answer: 'LCM = 23460; HCF = 2. Verification: 23460 × 2 = 46920; 510 × 92 = 46920', hintOrStep: '510 = 2 × 3 × 5 × 17; 92 = 2² × 23. HCF = 2, LCM = 2² × 3 × 5 × 17 × 23 = 23460' },
          { questionNumber: '2(iii)', answer: 'LCM = 3024; HCF = 6. Verification: 3024 × 6 = 18144; 336 × 54 = 18144', hintOrStep: '336 = 2⁴ × 3 × 7; 54 = 2 × 3³. HCF = 2 × 3 = 6, LCM = 2⁴ × 3³ × 7 = 3024' },
          { questionNumber: '3(i)', answer: 'LCM = 420; HCF = 3', hintOrStep: '12 = 2² × 3; 15 = 3 × 5; 21 = 3 × 7. Smallest power of common prime 3 is 3¹ = 3. LCM = 2² × 3 × 5 × 7 = 420' },
          { questionNumber: '3(ii)', answer: 'LCM = 11339; HCF = 1', hintOrStep: '17, 23, 29 are all prime. HCF = 1; LCM = 17 × 23 × 29 = 11339' },
          { questionNumber: '3(iii)', answer: 'LCM = 1800; HCF = 1', hintOrStep: '8 = 2³; 9 = 3²; 25 = 5². No common prime factor, HCF = 1. LCM = 8 × 9 × 25 = 1800' },
          { questionNumber: '4', answer: 'LCM(306, 657) = 22338', hintOrStep: 'LCM = (Product of numbers) / HCF = (306 × 657) / 9 = 34 × 657 = 22338' },
          { questionNumber: '5', answer: '6ⁿ cannot end with 0 for any natural number n.', hintOrStep: 'For a number to end with 0, its prime factorisation must contain both 2 and 5. Since 6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ, it does not contain 5.' },
          { questionNumber: '6', answer: 'Both expressions are composite numbers because they have factors other than 1 and themselves.', hintOrStep: '7 × 11 × 13 + 13 = 13 × (7 × 11 + 1) = 13 × 78; 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 = 5 × (1008 + 1) = 5 × 1009' },
          { questionNumber: '7', answer: '36 minutes', hintOrStep: 'They will meet again after a time which is the LCM of 18 and 12. 18 = 2 × 3²; 12 = 2² × 3. LCM(18, 12) = 2² × 3² = 36 minutes.' },
        ],
      },
      {
        exerciseId: 'ex-1.2',
        name: 'Exercise 1.2',
        title: 'Irrationality Proofs',
        solutions: [
          { questionNumber: '1', answer: 'Proved: √5 is irrational.', hintOrStep: 'Assume √5 = a/b coprime. 5b² = a² => 5 divides a² => 5 divides a. Let a = 5c => 5b² = 25c² => b² = 5c² => 5 divides b. Contradicts coprimality.' },
          { questionNumber: '2', answer: 'Proved: 3 + 2√5 is irrational.', hintOrStep: 'Assume 3 + 2√5 = a/b. Then √5 = (a/b - 3)/2 = (a - 3b)/(2b), which is rational. Contradicts that √5 is irrational.' },
          { questionNumber: '3(i)', answer: 'Proved: 1/√2 is irrational.', hintOrStep: '1/√2 = √2/2. If 1/√2 = a/b, then √2 = 2a/b (rational), which is a contradiction.' },
          { questionNumber: '3(ii)', answer: 'Proved: 7√5 is irrational.', hintOrStep: 'If 7√5 = a/b, then √5 = a/(7b) (rational), contradicting √5 is irrational.' },
          { questionNumber: '3(iii)', answer: 'Proved: 6 + √2 is irrational.', hintOrStep: 'If 6 + √2 = a/b, then √2 = a/b - 6 = (a - 6b)/b (rational), which contradicts √2 is irrational.' },
        ],
      },
    ],
    summaryPoints: [
      'Fundamental Theorem of Arithmetic ensures unique prime factorisation for every composite number.',
      'For any two positive integers a and b, HCF(a, b) × LCM(a, b) = a × b.',
      'If prime p divides a², then p divides a for positive integer a.',
      'Proof by contradiction is a primary tool to demonstrate numbers like √p are irrational.',
    ],
    practiceQuiz: [
      {
        id: 'q1-1',
        question: 'What is the HCF of 96 and 404?',
        options: ['2', '4', '8', '16'],
        correctIndex: 1,
        explanation: '96 = 2⁵ × 3, 404 = 2² × 101. The common factor with smallest power is 2² = 4.',
      },
      {
        id: 'q1-2',
        question: 'If HCF(306, 657) = 9, what is LCM(306, 657)?',
        options: ['22338', '21338', '24338', '22450'],
        correctIndex: 0,
        explanation: 'LCM = (306 × 657) / 9 = 34 × 657 = 22338.',
      },
      {
        id: 'q1-3',
        question: 'Can the number 4ⁿ end with the digit 0 for any natural number n?',
        options: ['Yes, for even n', 'Yes, for n = 5', 'No, never', 'Only for n > 10'],
        correctIndex: 2,
        explanation: '4ⁿ = (2²)ⁿ = 2²ⁿ. For a number to end with 0, its prime factorisation must contain 5. Here only 2 is present.',
      },
    ],
  },

  // ===========================================================================
  // CHAPTER 2: POLYNOMIALS
  // ===========================================================================
  {
    id: 'ch-2',
    chapterNumber: 2,
    title: 'Polynomials',
    slug: 'polynomials',
    description: 'Understand geometric representations of polynomials, zeroes as x-intercepts, and relationships between zeroes and coefficients (Sum α + β = -b/a, Product αβ = c/a).',
    learningObjectives: [
      'Find zeroes graphically by inspecting intersections with the x-axis',
      'Verify the relationship between zeroes and coefficients of quadratic polynomials',
      'Form quadratic polynomials given the sum and product of zeroes',
      'Understand cubic polynomials and their coefficient relations',
    ],
    keyFormulas: [
      'General Quadratic: p(x) = ax² + bx + c (a ≠ 0)',
      'Sum of zeroes: α + β = -b/a = -(Coefficient of x) / (Coefficient of x²)',
      'Product of zeroes: αβ = c/a = (Constant term) / (Coefficient of x²)',
      'Quadratic polynomial with given sum S and product P: k[x² - Sx + P]',
      'Cubic polynomial ax³ + bx² + cx + d: α + β + γ = -b/a; αβ + βγ + γα = c/a; αβγ = -d/a',
    ],
    concepts: [
      {
        id: 'c2-1',
        title: 'Geometrical Meaning of Zeroes of a Polynomial',
        content: 'The zeroes of a polynomial p(x) are precisely the x-coordinates of the points where the graph y = p(x) intersects the x-axis.',
        keyPoints: [
          'A linear polynomial ax + b intersects the x-axis at exactly one point: (-b/a, 0).',
          'A quadratic polynomial ax² + bx + c is a parabola (opening upwards if a > 0, downwards if a < 0) and has at most 2 zeroes.',
          'A cubic polynomial has at most 3 zeroes.',
          'In general, a polynomial of degree n has at most n zeroes.',
        ],
      },
      {
        id: 'c2-2',
        title: 'Zeroes and Coefficients of Quadratic Polynomials',
        content: 'For ax² + bx + c with zeroes α and β, ax² + bx + c = k(x - α)(x - β) = k[x² - (α + β)x + αβ]. Comparing coefficients yields α + β = -b/a and αβ = c/a.',
        keyPoints: [
          'Factorisation is done by splitting the middle term.',
          'Always verify both sum and product relations.',
        ],
        example: {
          problem: 'Find the zeroes of x² + 7x + 10 and verify relationships.',
          solution: 'x² + 7x + 10 = (x + 2)(x + 5) = 0 => zeroes are -2 and -5. Sum = -2 + (-5) = -7 = -7/1 = -b/a. Product = (-2)(-5) = 10 = 10/1 = c/a.',
        },
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-2.1',
        name: 'Exercise 2.1',
        title: 'Graph-based Zeroes Identification',
        solutions: [
          { questionNumber: '1(i)', answer: 'No zeroes', hintOrStep: 'The line does not intersect the x-axis at all (it is parallel to x-axis).' },
          { questionNumber: '1(ii)', answer: '1 zero', hintOrStep: 'The curve intersects the x-axis at only one point.' },
          { questionNumber: '1(iii)', answer: '3 zeroes', hintOrStep: 'The curve intersects the x-axis at 3 distinct points.' },
          { questionNumber: '1(iv)', answer: '2 zeroes', hintOrStep: 'The parabola intersects the x-axis at 2 points.' },
          { questionNumber: '1(v)', answer: '4 zeroes', hintOrStep: 'The curve intersects the x-axis at 4 distinct points.' },
          { questionNumber: '1(vi)', answer: '3 zeroes', hintOrStep: 'The curve touches/intersects the x-axis at 3 points.' },
        ],
      },
      {
        exerciseId: 'ex-2.2',
        name: 'Exercise 2.2',
        title: 'Zeroes & Coefficients Verification & Polynomial Formation',
        solutions: [
          { questionNumber: '1(i)', answer: 'Zeroes: -2, 4', hintOrStep: 'x² - 2x - 8 = (x - 4)(x + 2) = 0 => x = 4, -2. Sum = 4 + (-2) = 2 = -(-2)/1; Product = 4(-2) = -8 = -8/1' },
          { questionNumber: '1(ii)', answer: 'Zeroes: 1/2, 1/2', hintOrStep: '4s² - 4s + 1 = (2s - 1)² = 0 => s = 1/2, 1/2. Sum = 1/2 + 1/2 = 1 = -(-4)/4; Product = (1/2)(1/2) = 1/4 = 1/4' },
          { questionNumber: '1(iii)', answer: 'Zeroes: -1/3, 3/2', hintOrStep: '6x² - 7x - 3 = (2x - 3)(3x + 1) = 0 => x = 3/2, -1/3. Sum = 3/2 - 1/3 = 7/6 = -(-7)/6; Product = (3/2)(-1/3) = -3/6 = -1/2' },
          { questionNumber: '1(iv)', answer: 'Zeroes: -2, 0', hintOrStep: '4u² + 8u = 4u(u + 2) = 0 => u = 0, -2. Sum = 0 + (-2) = -2 = -8/4; Product = 0 × (-2) = 0 = 0/4' },
          { questionNumber: '1(v)', answer: 'Zeroes: -√15, √15', hintOrStep: 't² - 15 = (t - √15)(t + √15) = 0 => t = ±√15. Sum = √15 - √15 = 0 = -0/1; Product = (√15)(-√15) = -15 = -15/1' },
          { questionNumber: '1(vi)', answer: 'Zeroes: -1, 4/3', hintOrStep: '3x² - x - 4 = (3x - 4)(x + 1) = 0 => x = 4/3, -1. Sum = 4/3 - 1 = 1/3 = -(-1)/3; Product = (4/3)(-1) = -4/3' },
          { questionNumber: '2(i)', answer: '4x² - x - 4', hintOrStep: 'Sum S = 1/4, Product P = -1. p(x) = k[x² - (1/4)x - 1]. For k = 4 => 4x² - x - 4' },
          { questionNumber: '2(ii)', answer: '3x² - 3√2x + 1', hintOrStep: 'Sum S = √2, Product P = 1/3. p(x) = k[x² - √2x + 1/3]. For k = 3 => 3x² - 3√2x + 1' },
          { questionNumber: '2(iii)', answer: 'x² + √5', hintOrStep: 'Sum S = 0, Product P = √5. p(x) = x² - 0·x + √5 = x² + √5' },
          { questionNumber: '2(iv)', answer: 'x² - x + 1', hintOrStep: 'Sum S = 1, Product P = 1. p(x) = x² - (1)x + 1 = x² - x + 1' },
          { questionNumber: '2(v)', answer: '4x² + x + 1', hintOrStep: 'Sum S = -1/4, Product P = 1/4. p(x) = k[x² - (-1/4)x + 1/4]. For k = 4 => 4x² + x + 1' },
          { questionNumber: '2(vi)', answer: 'x² - 4x + 1', hintOrStep: 'Sum S = 4, Product P = 1. p(x) = x² - 4x + 1' },
        ],
      },
    ],
    summaryPoints: [
      'A degree n polynomial has at most n zeroes.',
      'Parabolas open upwards when a > 0 and downwards when a < 0.',
      'Sum of zeroes α + β = -b/a; Product of zeroes αβ = c/a.',
    ],
    practiceQuiz: [
      {
        id: 'q2-1',
        question: 'If the zeroes of a quadratic polynomial are -1 and 4, the polynomial is:',
        options: ['x² - 3x - 4', 'x² + 3x - 4', 'x² - 3x + 4', 'x² + 3x + 4'],
        correctIndex: 0,
        explanation: 'Sum = -1 + 4 = 3, Product = (-1)(4) = -4. Formula: x² - Sx + P = x² - 3x - 4.',
      },
      {
        id: 'q2-2',
        question: 'How many zeroes does a quadratic polynomial ax² + bx + c have if its graph touches the x-axis at exactly one point?',
        options: ['0', '1 (two equal zeroes)', '2 distinct', '3'],
        correctIndex: 1,
        explanation: 'When the vertex touches the x-axis, the polynomial has two coincident (equal) roots, i.e., 1 distinct zero.',
      },
    ],
  },

  // ===========================================================================
  // CHAPTER 3: PAIR OF LINEAR EQUATIONS IN TWO VARIABLES
  // ===========================================================================
  {
    id: 'ch-3',
    chapterNumber: 3,
    title: 'Pair of Linear Equations in Two Variables',
    slug: 'linear-equations-in-two-variables',
    description: 'Solve systems of two variable linear equations using graphical methods, substitution, and elimination, and solve real-world word problems.',
    learningObjectives: [
      'Determine consistency (intersecting, coincident, parallel lines) from ratio of coefficients',
      'Solve linear pairs graphically and algebraically',
      'Master the Substitution and Elimination methods',
      'Formulate and solve age, distance-speed, fraction, and geometry word problems',
    ],
    keyFormulas: [
      'System: a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0',
      'Unique solution (intersecting lines): a₁/a₂ ≠ b₁/b₂ (Consistent)',
      'Infinitely many solutions (coincident lines): a₁/a₂ = b₁/b₂ = c₁/c₂ (Consistent/Dependent)',
      'No solution (parallel lines): a₁/a₂ = b₁/b₂ ≠ c₁/c₂ (Inconsistent)',
    ],
    concepts: [
      {
        id: 'c3-1',
        title: 'Graphical Representation & Consistency Criteria',
        content: 'Two lines in a plane can either intersect, be parallel, or coincide. The ratio of coefficients directly predicts the behavior without plotting.',
        keyPoints: [
          'a₁/a₂ ≠ b₁/b₂ => Unique point of intersection',
          'a₁/a₂ = b₁/b₂ = c₁/c₂ => Same line, infinitely many solutions',
          'a₁/a₂ = b₁/b₂ ≠ c₁/c₂ => Parallel lines, zero solutions',
        ],
      },
      {
        id: 'c3-2',
        title: 'Substitution and Elimination Methods',
        content: 'Substitution expresses one variable in terms of the other and substitutes into the second equation. Elimination multiplies equations by constants to cancel one variable upon addition or subtraction.',
        keyPoints: [
          'Elimination is generally faster for integer-coefficient systems.',
          'Always check solutions back in original equations.',
        ],
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-3.1',
        name: 'Exercise 3.1',
        title: 'Forming Equations & Graphical Solutions',
        solutions: [
          { questionNumber: '1(i)', answer: 'Girls = 7, Boys = 3', hintOrStep: 'x + y = 10, x - y = 4. Adding gives 2x = 14 => x = 7, y = 3.' },
          { questionNumber: '1(ii)', answer: 'Cost of one pencil = ₹3, Cost of one pen = ₹5', hintOrStep: '5x + 7y = 50, 7x + 5y = 46. Multiplying and subtracting gives x = 3, y = 5.' },
          { questionNumber: '2(i)', answer: 'Intersect at a point', hintOrStep: '5/7 ≠ -4/6, unique solution.' },
          { questionNumber: '2(ii)', answer: 'Coincident', hintOrStep: '9/18 = 3/6 = 12/24 = 1/2.' },
          { questionNumber: '2(iii)', answer: 'Parallel', hintOrStep: '6/2 = -3/-1 ≠ 10/9 (3 = 3 ≠ 10/9).' },
          { questionNumber: '3(i)', answer: 'Consistent', hintOrStep: '3/2 ≠ 2/-3' },
          { questionNumber: '3(ii)', answer: 'Inconsistent', hintOrStep: '2/4 = -3/-6 ≠ 8/9' },
          { questionNumber: '3(iii)', answer: 'Consistent', hintOrStep: '(3/2)/9 ≠ (5/3)/(-10)' },
          { questionNumber: '3(iv)', answer: 'Consistent', hintOrStep: '5/-10 = -3/6 = 11/-22 = -1/2' },
          { questionNumber: '3(v)', answer: 'Consistent', hintOrStep: '(4/3)/2 = 2/3 = 8/12 = 2/3' },
          { questionNumber: '4', answer: '(i) Consistent (infinitely many: y = 5 - x); (ii) Inconsistent; (iii) Consistent (x = 2, y = 2); (iv) Inconsistent', hintOrStep: 'Check a1/a2, b1/b2, c1/c2 ratios.' },
          { questionNumber: '5', answer: 'Length = 20 m, Breadth = 16 m', hintOrStep: 'l = b + 4; l + b = 36 => 2b + 4 = 36 => b = 16 m, l = 20 m.' },
          { questionNumber: '6', answer: '(i) 3x + 2y - 7 = 0; (ii) 2x + 3y - 12 = 0; (iii) 4x + 6y - 16 = 0', hintOrStep: 'Given 2x + 3y - 8 = 0. Pick lines matching intersecting, parallel, coincident conditions.' },
          { questionNumber: '7', answer: 'Vertices of the triangle: (-1, 0), (4, 0), and (2, 3)', hintOrStep: 'Intersection points of x - y + 1 = 0, 3x + 2y - 12 = 0, and y = 0.' },
        ],
      },
      {
        exerciseId: 'ex-3.2',
        name: 'Exercise 3.2',
        title: 'Substitution Method & Applications',
        solutions: [
          { questionNumber: '1(i)', answer: 'x = 9, y = 5', hintOrStep: 'x + y = 14, x - y = 4 => x = 9, y = 5' },
          { questionNumber: '1(ii)', answer: 's = 9, t = 6', hintOrStep: 's - t = 3, s/3 + t/2 = 6 => 2s + 3t = 36 => s = 9, t = 6' },
          { questionNumber: '1(iii)', answer: 'y = 3x - 3 (Infinitely many solutions)', hintOrStep: '3x - y = 3, 9x - 3y = 9. Second equation is 3× first.' },
          { questionNumber: '1(iv)', answer: 'x = 2, y = 3', hintOrStep: '0.2x + 0.3y = 1.3, 0.4x + 0.5y = 2.3 => 2x + 3y = 13, 4x + 5y = 23 => x = 2, y = 3' },
          { questionNumber: '1(v)', answer: 'x = 0, y = 0', hintOrStep: '√2x + √3y = 0, √3x - √8y = 0 => x = 0, y = 0' },
          { questionNumber: '1(vi)', answer: 'x = 2, y = 3', hintOrStep: '3x/2 - 5y/3 = -2, x/3 + y/2 = 13/6 => 9x - 10y = -12, 2x + 3y = 13 => x = 2, y = 3' },
          { questionNumber: '2', answer: 'x = -2, y = 5; m = -1', hintOrStep: '2x + 3y = 11, 2x - 4y = -24 => 7y = 35 => y = 5, x = -2. y = mx + 3 => 5 = -2m + 3 => m = -1' },
          { questionNumber: '3(i)', answer: 'Two numbers: 39 and 13', hintOrStep: 'x - y = 26, x = 3y => 3y - y = 26 => y = 13, x = 39' },
          { questionNumber: '3(ii)', answer: '99° and 81°', hintOrStep: 'x - y = 18, x + y = 180 => 2x = 198 => x = 99°, y = 81°' },
          { questionNumber: '3(iii)', answer: 'Cost of bat = ₹500, Cost of ball = ₹50', hintOrStep: '7x + 6y = 3800, 3x + 5y = 1750 => x = 500, y = 50' },
          { questionNumber: '3(iv)', answer: 'Fixed charge = ₹5, Rate per km = ₹10; Total for 25 km = ₹255', hintOrStep: 'x + 10y = 105, x + 15y = 155 => 5y = 50 => y = 10, x = 5. For 25 km: 5 + 25(10) = ₹255' },
          { questionNumber: '3(v)', answer: 'Fraction = 7/9', hintOrStep: '11x - 9y + 4 = 0, 6x - 5y + 3 = 0 => x = 7, y = 9' },
          { questionNumber: '3(vi)', answer: 'Jacob\'s age = 40 years, Son\'s age = 10 years', hintOrStep: 'x - 3y - 10 = 0, x - 7y + 30 = 0 => x = 40, y = 10' },
        ],
      },
      {
        exerciseId: 'ex-3.3',
        name: 'Exercise 3.3',
        title: 'Elimination Method & Word Problems',
        solutions: [
          { questionNumber: '1(i)', answer: 'x = 19/5, y = 6/5', hintOrStep: 'x + y = 5, 2x - 3y = 4. 2(x + y) - (2x - 3y) = 5y = 6 => y = 6/5, x = 19/5' },
          { questionNumber: '1(ii)', answer: 'x = 2, y = 1', hintOrStep: '3x + 4y = 10, 2x - 2y = 2 => 3x + 4y = 10, 4x - 4y = 4 => 7x = 14 => x = 2, y = 1' },
          { questionNumber: '1(iii)', answer: 'x = 9/13, y = -5/13', hintOrStep: '3x - 5y = 4, 9x - 2y = 7 => Multiply first by 3: 9x - 15y = 12 => -13y = 5 => y = -5/13, x = 9/13' },
          { questionNumber: '1(iv)', answer: 'x = 2, y = -3', hintOrStep: '3x + 4y = -6, 3x - y = 9 => 5y = -15 => y = -3, x = 2' },
          { questionNumber: '2(i)', answer: 'Fraction = 3/5', hintOrStep: 'x - y + 2 = 0, 2x - y - 1 = 0 => x = 3, y = 5' },
          { questionNumber: '2(ii)', answer: 'Age of Nuri = 50 years, Age of Sonu = 20 years', hintOrStep: 'x - 3y + 10 = 0, x - 2y - 10 = 0 => x = 50, y = 20' },
          { questionNumber: '2(iii)', answer: 'The number is 18', hintOrStep: 'x + y = 9, 8x - y = 0 => 9x = 9 => x = 1, y = 8. Number = 10x + y = 18' },
          { questionNumber: '2(iv)', answer: '₹50 notes = 10, ₹100 notes = 15', hintOrStep: 'x + y = 25, 50x + 100y = 2000 => x + 2y = 40 => y = 15, x = 10' },
          { questionNumber: '2(v)', answer: 'Fixed charge = ₹15, Charge per day = ₹3', hintOrStep: 'x + 4y = 27, x + 2y = 21 => 2y = 6 => y = 3, x = 15' },
        ],
      },
    ],
    summaryPoints: [
      'Compare a1/a2, b1/b2, and c1/c2 to immediately identify the nature of solutions.',
      'Substitution and Elimination are standard algebraic methods yielding identical solutions.',
    ],
    practiceQuiz: [
      {
        id: 'q3-1',
        question: 'If a pair of linear equations has a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the lines are:',
        options: ['Intersecting', 'Coincident', 'Parallel', 'Perpendicular'],
        correctIndex: 2,
        explanation: 'The system has no solution, meaning the lines are parallel.',
      },
      {
        id: 'q3-2',
        question: 'For what value of m do lines 2x + 3y = 11 and 2x - 4y = -24 satisfy y = mx + 3?',
        options: ['1', '-1', '2', '-2'],
        correctIndex: 1,
        explanation: 'Solving yields x = -2, y = 5. Substituting: 5 = m(-2) + 3 => -2m = 2 => m = -1.',
      },
    ],
  },

  // ===========================================================================
  // CHAPTER 4: QUADRATIC EQUATIONS
  // ===========================================================================
  {
    id: 'ch-4',
    chapterNumber: 4,
    title: 'Quadratic Equations',
    slug: 'quadratic-equations',
    description: 'Master standard quadratic form ax² + bx + c = 0, factorisation method, quadratic formula x = (-b ± √D)/2a, and discriminant nature of roots.',
    learningObjectives: [
      'Identify quadratic equations in single variables',
      'Solve quadratic equations by factorisation (splitting middle term)',
      'Calculate the discriminant D = b² - 4ac and determine the nature of roots',
      'Solve real-world distance, speed, geometry, and cost problems',
    ],
    keyFormulas: [
      'Standard form: ax² + bx + c = 0 (a ≠ 0)',
      'Discriminant: D = b² - 4ac',
      'D > 0: Two distinct real roots: x = (-b ± √D) / (2a)',
      'D = 0: Two equal real roots: x = -b / (2a)',
      'D < 0: No real roots exist',
    ],
    concepts: [
      {
        id: 'c4-1',
        title: 'Solution by Factorisation',
        content: 'Express ax² + bx + c as (px + q)(rx + s) = 0. By the zero product property, either px + q = 0 or rx + s = 0.',
        keyPoints: [
          'Multiply a and c; find two integers whose product is ac and sum is b.',
          'Always check for common numerical factors first to simplify.',
        ],
      },
      {
        id: 'c4-2',
        title: 'Discriminant & Nature of Roots',
        content: 'The expression b² - 4ac determines whether roots are real, equal, or non-existent.',
        keyPoints: [
          'D > 0 => Two distinct real roots',
          'D = 0 => Two equal real roots',
          'D < 0 => No real roots exist',
        ],
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-4.1',
        name: 'Exercise 4.1',
        title: 'Identifying Quadratic Equations',
        solutions: [
          { questionNumber: '1(i)', answer: 'Yes, quadratic', hintOrStep: '(x + 1)² = 2(x - 3) => x² + 2x + 1 = 2x - 6 => x² + 7 = 0 (degree 2)' },
          { questionNumber: '1(ii)', answer: 'Yes, quadratic', hintOrStep: 'x² - 2x = -2(3 - x) => x² - 4x + 6 = 0' },
          { questionNumber: '1(iii)', answer: 'No, not quadratic', hintOrStep: '(x - 2)(x + 1) = (x - 1)(x + 3) => x² - x - 2 = x² + 2x - 3 => 3x - 1 = 0 (linear)' },
          { questionNumber: '1(iv)', answer: 'Yes, quadratic', hintOrStep: '(x - 3)(2x + 1) = x(x + 5) => x² - 10x - 3 = 0' },
          { questionNumber: '1(v)', answer: 'Yes, quadratic', hintOrStep: '(2x - 1)(x - 3) = (x + 5)(x - 1) => x² - 11x + 8 = 0' },
          { questionNumber: '1(vi)', answer: 'No, not quadratic', hintOrStep: 'x² + 3x + 1 = (x - 2)² => x² cancels => 7x - 3 = 0' },
          { questionNumber: '1(vii)', answer: 'No, cubic', hintOrStep: '(x + 2)³ = 2x(x² - 1) => x³ + 6x² + 12x + 8 = 2x³ - 2x => -x³ + ... (degree 3)' },
          { questionNumber: '1(viii)', answer: 'Yes, quadratic', hintOrStep: 'x³ - 4x² - x + 1 = (x - 2)³ => x³ cancels => 2x² - 13x + 9 = 0' },
          { questionNumber: '2(i)', answer: '2x² + x - 528 = 0', hintOrStep: 'Area = x(2x + 1) = 528 => 2x² + x - 528 = 0 (where x = breadth)' },
          { questionNumber: '2(ii)', answer: 'x² + x - 306 = 0', hintOrStep: 'x(x + 1) = 306 => x² + x - 306 = 0 (where x = smaller integer)' },
          { questionNumber: '2(iii)', answer: 'x² + 32x - 273 = 0', hintOrStep: '(x + 3)(x + 29) = 360 => x² + 32x - 273 = 0 (where x = Rohan\'s age)' },
          { questionNumber: '2(iv)', answer: 'u² - 8u - 1280 = 0', hintOrStep: '480/(u - 8) - 480/u = 3 => u² - 8u - 1280 = 0 (u = train speed)' },
        ],
      },
      {
        exerciseId: 'ex-4.2',
        name: 'Exercise 4.2',
        title: 'Solving by Factorisation',
        solutions: [
          { questionNumber: '1(i)', answer: '-2, 5', hintOrStep: 'x² - 3x - 10 = (x - 5)(x + 2) = 0 => x = 5, -2' },
          { questionNumber: '1(ii)', answer: '-2, 3/2', hintOrStep: '2x² + x - 6 = (2x - 3)(x + 2) = 0 => x = 3/2, -2' },
          { questionNumber: '1(iii)', answer: '-5/√2, -√2', hintOrStep: '√2x² + 7x + 5√2 = (√2x + 5)(x + √2) = 0 => x = -5/√2, -√2' },
          { questionNumber: '1(iv)', answer: '1/4, 1/4', hintOrStep: '2x² - x + 1/8 = 0 => 16x² - 8x + 1 = (4x - 1)² = 0 => x = 1/4, 1/4' },
          { questionNumber: '1(v)', answer: '1/10, 1/10', hintOrStep: '100x² - 20x + 1 = (10x - 1)² = 0 => x = 1/10, 1/10' },
          { questionNumber: '2(i)', answer: '9, 36', hintOrStep: 'x² - 45x + 324 = (x - 36)(x - 9) = 0 => x = 36, 9' },
          { questionNumber: '2(ii)', answer: '25, 30', hintOrStep: 'x² - 55x + 750 = (x - 30)(x - 25) = 0 => x = 30, 25' },
          { questionNumber: '3', answer: '13 and 14', hintOrStep: 'x + y = 27, xy = 182 => x(27 - x) = 182 => x² - 27x + 182 = 0 => (x - 13)(x - 14) = 0' },
          { questionNumber: '4', answer: '13 and 14', hintOrStep: 'x² + (x + 1)² = 365 => 2x² + 2x - 364 = 0 => x² + x - 182 = 0 => x = 13 (positive)' },
          { questionNumber: '5', answer: '5 cm and 12 cm', hintOrStep: 'Base = x, altitude = x - 7. x² + (x - 7)² = 13² => 2x² - 14x - 120 = 0 => x = 12 cm, altitude = 5 cm' },
          { questionNumber: '6', answer: 'Number of articles = 6, Cost of each article = ₹15', hintOrStep: 'x(2x + 3) = 90 => 2x² + 3x - 90 = 0 => (2x + 15)(x - 6) = 0 => x = 6, Cost = 2(6) + 3 = ₹15' },
        ],
      },
      {
        exerciseId: 'ex-4.3',
        name: 'Exercise 4.3',
        title: 'Nature of Roots & Quadratic Formula',
        solutions: [
          { questionNumber: '1(i)', answer: 'Real roots do not exist', hintOrStep: '2x² - 3x + 5 = 0: D = (-3)² - 4(2)(5) = 9 - 40 = -31 < 0' },
          { questionNumber: '1(ii)', answer: 'Equal roots: 2/√3, 2/√3', hintOrStep: '3x² - 4√3x + 4 = 0: D = (-4√3)² - 4(3)(4) = 48 - 48 = 0. Roots = -b/(2a) = 4√3/6 = 2/√3' },
          { questionNumber: '1(iii)', answer: 'Distinct roots: (3 ± √3)/2', hintOrStep: '2x² - 6x + 3 = 0: D = (-6)² - 4(2)(3) = 36 - 24 = 12 > 0. x = (6 ± √12)/4 = (3 ± √3)/2' },
          { questionNumber: '2(i)', answer: 'k = ±2√6', hintOrStep: '2x² + kx + 3 = 0 has equal roots => D = k² - 4(2)(3) = 0 => k² = 24 => k = ±2√6' },
          { questionNumber: '2(ii)', answer: 'k = 6', hintOrStep: 'kx(x - 2) + 6 = kx² - 2kx + 6 = 0 => D = (-2k)² - 4(k)(6) = 4k² - 24k = 0 => k = 6 (k ≠ 0)' },
          { questionNumber: '3', answer: 'Yes. Length = 40 m, Breadth = 20 m', hintOrStep: 'l = 2b, l × b = 800 => 2b² = 800 => b² = 400 => b = 20 m, l = 40 m' },
          { questionNumber: '4', answer: 'No, situation not possible', hintOrStep: '(x - 4)(16 - x) = 48 => -x² + 20x - 64 = 48 => x² - 20x + 112 = 0. D = 400 - 448 = -48 < 0' },
          { questionNumber: '5', answer: 'Yes. Length = 20 m, Breadth = 20 m (Square)', hintOrStep: '2(l + b) = 80 => l + b = 40. l(40 - l) = 400 => l² - 40l + 400 = (l - 20)² = 0 => l = 20 m, b = 20 m' },
        ],
      },
    ],
    summaryPoints: [
      'D = b² - 4ac determines whether solutions are distinct real, repeated real, or non-real.',
      'Always check physical validity for word problems (dimensions and ages must be positive).',
    ],
    practiceQuiz: [
      {
        id: 'q4-1',
        question: 'For what value of k does 2x² + kx + 3 = 0 have equal roots?',
        options: ['±√6', '±2√6', '±4', '±12'],
        correctIndex: 1,
        explanation: 'D = k² - 4(2)(3) = k² - 24 = 0 => k = ±√24 = ±2√6.',
      },
    ],
  },

  // ===========================================================================
  // CHAPTER 5: ARITHMETIC PROGRESSIONS
  // ===========================================================================
  {
    id: 'ch-5',
    chapterNumber: 5,
    title: 'Arithmetic Progressions',
    slug: 'arithmetic-progressions',
    description: 'Learn sequences with a constant common difference d, calculate the nth term aₙ = a + (n-1)d, and sum of n terms Sₙ = n/2 [2a + (n-1)d].',
    learningObjectives: [
      'Identify whether a sequence forms an AP',
      'Determine the first term a and common difference d',
      'Find the nth term from the beginning or end of an AP',
      'Calculate the sum of the first n terms of an AP and solve applications',
    ],
    keyFormulas: [
      'General form: a, a + d, a + 2d, a + 3d, ...',
      'Common difference: d = aₖ₊₁ - aₖ',
      'nth Term: aₙ = a + (n - 1)d',
      'nth Term from the end: l - (n - 1)d (where l is last term)',
      'Sum of first n terms: Sₙ = (n/2)[2a + (n - 1)d] = (n/2)[a + l]',
      'aₙ = Sₙ - Sₙ₋₁',
    ],
    concepts: [
      {
        id: 'c5-1',
        title: 'Definition and Common Difference',
        content: 'An arithmetic progression is a list of numbers in which each term is obtained by adding a fixed number d to the preceding term except the first term.',
        keyPoints: [
          'd can be positive, negative, or zero.',
          'Three terms in AP can be conveniently taken as (a - d), a, (a + d).',
        ],
      },
      {
        id: 'c5-2',
        title: 'Sum of n Terms and Applications',
        content: 'Derived by pairing first and last terms. Crucial for installment calculations, pyramid/log stacking, and row counting.',
        keyPoints: [
          'If Sₙ is quadratic in n (An² + Bn), the sequence is an AP.',
          'The nth term aₙ is given by Sₙ - Sₙ₋₁.',
        ],
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-5.1',
        name: 'Exercise 5.1',
        title: 'AP Identification & Common Difference',
        solutions: [
          { questionNumber: '1(i)', answer: 'Yes, forms an AP (15, 23, 31... adding 8 each km)', hintOrStep: 'Fare increases by fixed ₹8 per km.' },
          { questionNumber: '1(ii)', answer: 'No (Volumes V, 3/4V, 9/16V...)', hintOrStep: 'Successive terms are multiplied by 3/4, not added by a constant.' },
          { questionNumber: '1(iii)', answer: 'Yes (150, 200, 250... adding 50 each metre)', hintOrStep: 'Fixed difference of ₹50.' },
          { questionNumber: '1(iv)', answer: 'No (Amounts follow compound interest: 10000(1+8/100)ⁿ)', hintOrStep: 'Geometric, not arithmetic.' },
          { questionNumber: '2(i)', answer: '10, 20, 30, 40', hintOrStep: 'a = 10, d = 10' },
          { questionNumber: '2(ii)', answer: '-2, -2, -2, -2', hintOrStep: 'a = -2, d = 0' },
          { questionNumber: '2(iii)', answer: '4, 1, -2, -5', hintOrStep: 'a = 4, d = -3' },
          { questionNumber: '2(iv)', answer: '-1, -1/2, 0, 1/2', hintOrStep: 'a = -1, d = 1/2' },
          { questionNumber: '2(v)', answer: '-1.25, -1.50, -1.75, -2.0', hintOrStep: 'a = -1.25, d = -0.25' },
          { questionNumber: '3', answer: '(i) a = 3, d = -2; (ii) a = -5, d = 4; (iii) a = 1/3, d = 4/3; (iv) a = 0.6, d = 1.1', hintOrStep: 'd = a₂ - a₁' },
          { questionNumber: '4', answer: 'Valid APs include: (ii) d = 1/2; next: 4, 9/2, 5; (iii) d = -2; next: -9.2, -11.2, -13.2; (iv) d = 4; next: 6, 10, 14; (v) d = √2; next: 3+4√2, 3+5√2, 3+6√2; (vii) d = -4; next: -16, -20, -24; (viii) d = 0; next: -1/2, -1/2, -1/2; (x) d = a; next: 5a, 6a, 7a; (xii) d = √2; next: √50, √72, √98; (xv) d = 24; next: 97, 121, 145', hintOrStep: 'Check if aₖ₊₁ - aₖ is constant.' },
        ],
      },
      {
        exerciseId: 'ex-5.2',
        name: 'Exercise 5.2',
        title: 'nth Term of an AP',
        solutions: [
          { questionNumber: '1', answer: '(i) aₙ = 28; (ii) d = 2; (iii) a = 46; (iv) n = 10; (v) aₙ = 3.5', hintOrStep: 'Use aₙ = a + (n - 1)d' },
          { questionNumber: '2', answer: '(i) C (-77); (ii) B (22)', hintOrStep: '(i) 30th term of 10, 7, 4... = 10 + 29(-3) = -77. (ii) 11th term of -3, -1/2, 2... = -3 + 10(5/2) = 22' },
          { questionNumber: '3', answer: '(i) 14; (ii) 18, 8; (iii) 6 1/2, 8; (iv) -2, 0, 2, 4; (v) 53, 23, 8, -7', hintOrStep: 'Use linear equations with a and d.' },
          { questionNumber: '4', answer: '16th term', hintOrStep: '3 + (n - 1)5 = 78 => 5n - 2 = 78 => n = 16' },
          { questionNumber: '7', answer: '178', hintOrStep: 'a₁₁ = 38, a₁₆ = 73 => d = 7, a = -32. a₃₁ = -32 + 30(7) = 178' },
          { questionNumber: '11', answer: '65th term', hintOrStep: 'Term = a₅₄ + 132 = (a + 53d) + 132. (n - 54)d = 132 => n - 54 = 11 => n = 65' },
          { questionNumber: '17', answer: '20th term from last = 158', hintOrStep: 'l = 253, d = 5. a₂₀ from end = l - (20 - 1)d = 253 - 19(5) = 158' },
          { questionNumber: '19', answer: '11th year', hintOrStep: '5000 + (n - 1)200 = 7000 => (n - 1)200 = 2000 => n = 11' },
          { questionNumber: '20', answer: '10 weeks', hintOrStep: '5 + (n - 1)1.75 = 20.75 => n = 10' },
        ],
      },
      {
        exerciseId: 'ex-5.3',
        name: 'Exercise 5.3',
        title: 'Sum of n Terms & Word Problems',
        solutions: [
          { questionNumber: '1', answer: '(i) 245; (ii) -180; (iii) 5505; (iv) 33/20', hintOrStep: 'Sₙ = (n/2)[2a + (n - 1)d]' },
          { questionNumber: '2', answer: '(i) 1046 1/2; (ii) 286; (iii) -8930', hintOrStep: 'Find n first using aₙ = l, then Sₙ = n/2(a + l)' },
          { questionNumber: '4', answer: '12 terms', hintOrStep: '636 = (n/2)[18 + (n - 1)8] => 4n² + 5n - 636 = 0 => (4n + 53)(n - 12) = 0 => n = 12' },
          { questionNumber: '7', answer: 'Sum = 1661', hintOrStep: 'd = 7, a₂₂ = 149 => a + 21(7) = 149 => a = 2. S₂₂ = 22/2(2 + 149) = 1661' },
          { questionNumber: '8', answer: 'S₅₁ = 5610', hintOrStep: 'a₂ = 14, a₃ = 18 => d = 4, a = 10. S₅₁ = (51/2)[20 + 50(4)] = 5610' },
          { questionNumber: '9', answer: 'Sum of n terms = n²', hintOrStep: 'S₇ = 49 = 7², S₁₇ = 289 = 17² => Sₙ = n²' },
          { questionNumber: '11', answer: 'S₁ = 3, S₂ = 4; a₂ = 1; S₃ = 3, a₃ = -1; a₁₀ = -15; aₙ = 5 - 2n', hintOrStep: 'Sₙ = 4n - n². aₙ = Sₙ - Sₙ₋₁ = (4n - n²) - (4(n-1) - (n-1)²) = 5 - 2n' },
          { questionNumber: '15', answer: 'Penalty = ₹27,750', hintOrStep: 'a = 200, d = 50, n = 30. S₃₀ = 15[400 + 29(50)] = ₹27750' },
          { questionNumber: '16', answer: 'Prizes: ₹160, ₹140, ₹120, ₹100, ₹80, ₹60, ₹40', hintOrStep: 'n = 7, d = -20, S = 700. 7/2[2a + 6(-20)] = 700 => a = 160' },
          { questionNumber: '19', answer: '16 rows; 5 logs in top row', hintOrStep: '200 = n/2[40 + (n - 1)(-1)] => n² - 41n + 400 = 0 => n = 16 or 25. For n = 25, a₂₅ = 20 + 24(-1) = -4 (impossible), so n = 16, a₁₆ = 5' },
          { questionNumber: '20', answer: '370 m', hintOrStep: 'Distances: 2×5, 2×8, 2×11... a = 10, d = 6, n = 10. S₁₀ = 5[20 + 9(6)] = 370 m' },
        ],
      },
      {
        exerciseId: 'ex-5.4',
        name: 'Exercise 5.4 (Optional)',
        title: 'Advanced Applications',
        isOptional: true,
        solutions: [
          { questionNumber: '1', answer: '32nd term', hintOrStep: 'First negative term: aₙ < 0 => 121 + (n - 1)(-4) < 0 => 125 < 4n => n > 31.25 => n = 32' },
          { questionNumber: '2', answer: 'S₁₆ = 20, 76', hintOrStep: 'Using sum and product equations.' },
          { questionNumber: '3', answer: '385 cm', hintOrStep: 'Rungs of ladder decreasing in AP.' },
          { questionNumber: '4', answer: '35', hintOrStep: 'House numbering problem: Sₓ₋₁ = S₄₉ - Sₓ => x = 35' },
          { questionNumber: '5', answer: '750 m³', hintOrStep: 'Volume of concrete needed for football terrace.' },
        ],
      },
    ],
    summaryPoints: [
      'An AP has a constant difference d between successive terms.',
      'aₙ = a + (n - 1)d allows finding any distant term without generating previous terms.',
      'Sₙ = (n/2)[2a + (n - 1)d] computes cumulative sums efficiently.',
    ],
    practiceQuiz: [
      {
        id: 'q5-1',
        question: 'What is the 30th term of the AP: 10, 7, 4, ...?',
        options: ['97', '77', '-77', '-87'],
        correctIndex: 2,
        explanation: 'a = 10, d = -3. a₃₀ = 10 + 29(-3) = 10 - 87 = -77.',
      },
    ],
  },

  // ===========================================================================
  // CHAPTER 6: TRIANGLES
  // ===========================================================================
  {
    id: 'ch-6',
    chapterNumber: 6,
    title: 'Triangles',
    slug: 'triangles',
    description: 'Explore similarity of geometric figures, Thales Theorem (Basic Proportionality Theorem), similarity criteria (AAA, SSS, SAS), and geometric proofs.',
    learningObjectives: [
      'Differentiate between congruence and similarity',
      'State and prove Basic Proportionality Theorem (BPT / Thales Theorem)',
      'Apply similarity criteria: AAA, SSS, and SAS',
      'Solve height, shadow, and proportion problems in geometry',
    ],
    keyFormulas: [
      'Two triangles are similar if: (i) Corresponding angles are equal, and (ii) Corresponding sides are in the same ratio.',
      'Basic Proportionality Theorem (BPT): If a line is drawn parallel to one side of a triangle intersecting the other two sides, it divides the two sides in the same ratio (AD/DB = AE/EC).',
      'Converse of BPT: If a line divides two sides in the same ratio, it is parallel to the third side.',
      'Criteria: AAA (or AA), SSS, SAS similarity.',
    ],
    concepts: [
      {
        id: 'c6-1',
        title: 'Basic Proportionality Theorem (Thales Theorem)',
        content: 'If DE || BC in ΔABC, then AD/DB = AE/EC. Proved by comparing areas of triangles having the same height.',
        keyPoints: [
          'Corollary: AD/AB = AE/AC = DE/BC.',
          'Widely applied in surveying and structural geometry.',
        ],
      },
      {
        id: 'c6-2',
        title: 'Criteria for Similarity of Triangles',
        content: 'AAA / AA (Angle-Angle), SSS (Side-Side-Side), SAS (Side-Angle-Side). Note that in similarity, sides are PROPORTIONAL, not equal.',
        keyPoints: [
          'AA similarity is sufficient: if two angles match, the third must match (angle sum 180°).',
        ],
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-6.1',
        name: 'Exercise 6.1',
        title: 'Similarity Fundamentals',
        solutions: [
          { questionNumber: '1(i)', answer: 'Similar', hintOrStep: 'All circles have the same shape, so they are similar.' },
          { questionNumber: '1(ii)', answer: 'Similar', hintOrStep: 'All squares have equal corresponding angles (90°) and proportional sides.' },
          { questionNumber: '1(iii)', answer: 'Equilateral', hintOrStep: 'All equilateral triangles have angles 60°, hence are similar.' },
          { questionNumber: '1(iv)', answer: 'Equal, Proportional', hintOrStep: 'Corresponding angles are equal and corresponding sides are proportional.' },
          { questionNumber: '3', answer: 'No, not similar', hintOrStep: 'Corresponding sides are proportional (1.5/3 = 1/2), but corresponding angles are not equal (rhombus vs square).' },
        ],
      },
      {
        exerciseId: 'ex-6.2',
        name: 'Exercise 6.2',
        title: 'Basic Proportionality Theorem (BPT)',
        solutions: [
          { questionNumber: '1(i)', answer: 'EC = 2 cm', hintOrStep: 'AD/DB = AE/EC => 1.5/3 = 1/EC => EC = 3/1.5 = 2 cm' },
          { questionNumber: '1(ii)', answer: 'AD = 2.4 cm', hintOrStep: 'AD/DB = AE/EC => AD/7.2 = 1.8/5.4 => AD = 7.2/3 = 2.4 cm' },
          { questionNumber: '2(i)', answer: 'No, EF is not parallel to QR', hintOrStep: 'PE/EQ = 3.9/3 = 1.3; PF/FR = 3.6/2.4 = 1.5. Ratios unequal.' },
          { questionNumber: '2(ii)', answer: 'Yes, EF || QR', hintOrStep: 'PE/QE = 4/4.5 = 8/9; PF/RF = 8/9. Ratios equal, so by converse of BPT, EF || QR.' },
          { questionNumber: '2(iii)', answer: 'Yes, EF || QR', hintOrStep: 'PE/PQ = 0.18/1.28 = 9/64; PF/PR = 0.36/2.56 = 9/64. Ratios equal.' },
          { questionNumber: '9', answer: 'Proved AO/BO = CO/DO', hintOrStep: 'Through O, draw a line parallel to DC intersecting AD and BC at E and F respectively, then apply BPT.' },
        ],
      },
      {
        exerciseId: 'ex-6.3',
        name: 'Exercise 6.3',
        title: 'Similarity Criteria Applications',
        solutions: [
          { questionNumber: '1(i)', answer: 'Yes. AAA, ΔABC ~ ΔPQR', hintOrStep: 'All 3 pairs of corresponding angles are equal.' },
          { questionNumber: '1(ii)', answer: 'Yes. SSS, ΔABC ~ ΔQRP', hintOrStep: 'AB/QR = BC/RP = CA/PQ = 1/2.' },
          { questionNumber: '1(iii)', answer: 'No', hintOrStep: 'Side ratios 2.7/5 ≠ 2/4 ≠ 3/6.' },
          { questionNumber: '1(iv)', answer: 'Yes. SAS, ΔMNL ~ ΔQPR', hintOrStep: 'MN/QP = ML/QR = 1/2 and included angle ∠M = ∠Q = 70°.' },
          { questionNumber: '1(v)', answer: 'No', hintOrStep: 'Included angle condition is not satisfied.' },
          { questionNumber: '1(vi)', answer: 'Yes. AA, ΔDEF ~ ΔPQR', hintOrStep: 'Third angle of DEF is 30°, third angle of PQR is 70°.' },
          { questionNumber: '2', answer: '∠DOC = 55°, ∠DCO = 55°, ∠OAB = 55°', hintOrStep: 'Linear pair gives ∠DOC = 180° - 125° = 55°. Angle sum in ΔDOC gives ∠DCO = 180° - (70° + 55°) = 55°. Similarity gives ∠OAB = ∠OCD = 55°.' },
          { questionNumber: '15', answer: 'Height of tower = 42 m', hintOrStep: 'Pole: height 6 m, shadow 4 m. Tower: shadow 28 m. By similarity: 6/4 = h/28 => h = (6 × 28)/4 = 42 m.' },
        ],
      },
    ],
    summaryPoints: [
      'Two polygons with same number of sides are similar if corresponding angles are equal and corresponding sides proportional.',
      'Basic Proportionality Theorem (BPT): AD/DB = AE/EC when DE || BC.',
    ],
    practiceQuiz: [
      {
        id: 'q6-1',
        question: 'In ΔABC, DE || BC. If AD = 1.5 cm, DB = 3 cm, AE = 1 cm, what is EC?',
        options: ['1.5 cm', '2 cm', '3 cm', '4.5 cm'],
        correctIndex: 1,
        explanation: 'By BPT, AD/DB = AE/EC => 1.5/3 = 1/EC => EC = 2 cm.',
      },
    ],
  },

  // ===========================================================================
  // CHAPTER 7: COORDINATE GEOMETRY
  // ===========================================================================
  {
    id: 'ch-7',
    chapterNumber: 7,
    title: 'Coordinate Geometry',
    slug: 'coordinate-geometry',
    description: 'Discover Cartesian coordinate analysis, the Distance Formula, Section Formula (internal division), and Midpoint formula.',
    learningObjectives: [
      'Calculate Euclidean distance between two points d = √[(x₂ - x₁)² + (y₂ - y₁)²]',
      'Check whether points are collinear or form isosceles, equilateral, or right triangles',
      'Apply the Section Formula to divide line segments in ratio m₁ : m₂',
      'Find coordinates of midpoints, trisection points, and centers',
    ],
    keyFormulas: [
      'Distance Formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²]',
      'Distance from origin: d = √(x² + y²)',
      'Section Formula: P(x, y) = ((m₁x₂ + m₂x₁) / (m₁ + m₂), (m₁y₂ + m₂y₁) / (m₁ + m₂))',
      'Midpoint Formula: M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)',
    ],
    concepts: [
      {
        id: 'c7-1',
        title: 'Distance Formula',
        content: 'Derived directly from Pythagoras Theorem on a right triangle formed by horizontal (Δx) and vertical (Δy) differences.',
        keyPoints: [
          'Points A, B, C are collinear if AB + BC = AC.',
          'Square tests: all 4 sides equal and both diagonals equal.',
        ],
      },
      {
        id: 'c7-2',
        title: 'Section Formula & Trisection',
        content: 'Coordinates of a point dividing the segment joining (x₁, y₁) and (x₂, y₂) internally in ratio m₁ : m₂.',
        keyPoints: [
          'Trisection involves two dividing points in ratios 1:2 and 2:1.',
          'For ratio k : 1, P = ((kx₂ + x₁) / (k + 1), (ky₂ + y₁) / (k + 1)).',
        ],
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-7.1',
        name: 'Exercise 7.1',
        title: 'Distance Formula Calculations',
        solutions: [
          { questionNumber: '1(i)', answer: '2√2', hintOrStep: 'Points (2, 3) and (4, 1): d = √[(4 - 2)² + (1 - 3)²] = √[4 + 4] = √8 = 2√2' },
          { questionNumber: '1(ii)', answer: '4√2', hintOrStep: 'Points (-5, 7) and (-1, 3): d = √[(-1 + 5)² + (3 - 7)²] = √[16 + 16] = √32 = 4√2' },
          { questionNumber: '1(iii)', answer: '2√(a² + b²)', hintOrStep: 'Points (a, b) and (-a, -b): d = √[(-2a)² + (-2b)²] = √[4a² + 4b²] = 2√(a² + b²)' },
          { questionNumber: '2', answer: 'Distance = 39; 39 km', hintOrStep: 'Points (0, 0) and (36, 15): d = √(36² + 15²) = √(1296 + 225) = √1521 = 39' },
          { questionNumber: '3', answer: 'No, not collinear', hintOrStep: 'Distances between (1, 5), (2, 3), (-2, -11) are √5, √212, √265. Sum of two does not equal third.' },
          { questionNumber: '4', answer: 'Yes, vertices of an isosceles triangle', hintOrStep: 'Sides are √37, √37, and 2. Two sides are equal.' },
          { questionNumber: '5', answer: 'Champa is correct (ABCD is a square)', hintOrStep: 'All 4 sides equal (3√2) and both diagonals equal (6).' },
          { questionNumber: '6', answer: '(i) Square; (ii) No quadrilateral; (iii) Parallelogram', hintOrStep: 'Calculate all 4 side lengths and 2 diagonal lengths.' },
          { questionNumber: '7', answer: '(-7, 0)', hintOrStep: 'Point on x-axis (x, 0) equidistant from (2, -5) and (-2, 9): (x - 2)² + 25 = (x + 2)² + 81 => -8x = 56 => x = -7' },
          { questionNumber: '8', answer: 'y = -9, 3', hintOrStep: 'Distance between (2, -3) and (10, y) is 10: 8² + (y + 3)² = 100 => (y + 3)² = 36 => y = 3 or -9' },
          { questionNumber: '9', answer: 'x = ±4; QR = √41; PR = √82 or 9√2', hintOrStep: 'Q(0, 1) equidistant from P(5, -3) and R(x, 6): 25 + 16 = x² + 25 => x² = 16 => x = ±4' },
          { questionNumber: '10', answer: '3x + y - 5 = 0', hintOrStep: '(x - 3)² + (y - 6)² = (x + 3)² + (y - 4)² => -12x - 4y + 20 = 0 => 3x + y - 5 = 0' },
        ],
      },
      {
        exerciseId: 'ex-7.2',
        name: 'Exercise 7.2',
        title: 'Section Formula & Coordinate Division',
        solutions: [
          { questionNumber: '1', answer: '(1, 3)', hintOrStep: 'm₁=2, m₂=3 for (-1, 7) and (4, -3): x = (2(4)+3(-1))/5 = 5/5 = 1; y = (2(-3)+3(7))/5 = 15/5 = 3' },
          { questionNumber: '2', answer: '(2, -5/3) and (0, -7/3)', hintOrStep: 'Points of trisection dividing (4, -1) and (-2, -3) in 1:2 and 2:1.' },
          { questionNumber: '3', answer: 'Distance = √61 m; 5th line at 22.5 m', hintOrStep: 'Niharika at (2, 25), Preet at (8, 20). Distance = √[(8-2)² + (20-25)²] = √[36 + 25] = √61. Midpoint = ((2+8)/2, (25+20)/2) = (5, 22.5).' },
          { questionNumber: '4', answer: 'Ratio = 2 : 7', hintOrStep: '-1 = (6k - 3)/(k + 1) => -k - 1 = 6k - 3 => 7k = 2 => k = 2/7' },
          { questionNumber: '5', answer: 'Ratio = 1 : 1; Point of division = (-3/2, 0)', hintOrStep: 'Point on x-axis has y = 0: (5k - 5)/(k + 1) = 0 => k = 1. x = (-4(1) + 1)/2 = -3/2.' },
          { questionNumber: '6', answer: 'x = 6, y = 3', hintOrStep: 'Diagonals of parallelogram bisect each other: midpoints match => (1 + x)/2 = (2 + 4)/2 => x = 6; (2 + 6)/2 = (4 + y)/2 => y = 3' },
          { questionNumber: '7', answer: '(3, -10)', hintOrStep: 'C(2, -3) is center and midpoint of AB with B(1, 4): (x + 1)/2 = 2 => x = 3; (y + 4)/2 = -3 => y = -10' },
          { questionNumber: '8', answer: '(-2/7, -20/7)', hintOrStep: 'AP = 3/7 AB => ratio AP : PB = 3 : 4.' },
          { questionNumber: '9', answer: '(-1, 7/2), (0, 5), (1, 13/2)', hintOrStep: 'Four equal parts: midpoints of segments.' },
          { questionNumber: '10', answer: 'Area of rhombus = 24 sq. units', hintOrStep: 'Area = 1/2 × d₁ × d₂ = 1/2 × (4√2) × (6√2) = 24' },
        ],
      },
    ],
    summaryPoints: [
      'Distance formula d = √[(x₂ - x₁)² + (y₂ - y₁)²].',
      'Section formula gives coordinates dividing a line segment internally.',
    ],
    practiceQuiz: [
      {
        id: 'q7-1',
        question: 'What is the distance between the points (2, 3) and (4, 1)?',
        options: ['2', '2√2', '4', '8'],
        correctIndex: 1,
        explanation: 'd = √[(4 - 2)² + (1 - 3)²] = √[4 + 4] = √8 = 2√2.',
      },
    ],
  },

  // ===========================================================================
  // CHAPTER 8: INTRODUCTION TO TRIGONOMETRY
  // ===========================================================================
  {
    id: 'ch-8',
    chapterNumber: 8,
    title: 'Introduction to Trigonometry',
    slug: 'introduction-to-trigonometry',
    description: 'Explore trigonometric ratios in right triangles (sin, cos, tan, cot, sec, cosec), values for specific angles (0°, 30°, 45°, 60°, 90°), and Pythagorean trigonometric identities.',
    learningObjectives: [
      'Define sin, cos, tan, cosec, sec, cot as ratios of right triangle sides',
      'Memorize and use values at standard angles (0°, 30°, 45°, 60°, 90°)',
      'Apply fundamental identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = cosec²θ',
      'Prove complex trigonometric identities algebraically',
    ],
    keyFormulas: [
      'sin A = Opposite / Hypotenuse; cos A = Adjacent / Hypotenuse; tan A = Opposite / Adjacent',
      'cosec A = 1/sin A; sec A = 1/cos A; cot A = 1/tan A = cos A / sin A',
      'sin² A + cos² A = 1',
      '1 + tan² A = sec² A',
      '1 + cot² A = cosec² A',
      'Standard values: sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2, tan 45° = 1, tan 30° = 1/√3, tan 60° = √3',
    ],
    concepts: [
      {
        id: 'c8-1',
        title: 'Trigonometric Ratios of Acute Angles',
        content: 'In a right triangle with acute angle A, trigonometric ratios express the relationship between angle A and side lengths.',
        keyPoints: [
          'Value of trigonometric ratios does not depend on the size of the triangle, only on the angle.',
          'sin A and cos A never exceed 1 (hypotenuse is the longest side).',
        ],
      },
      {
        id: 'c8-2',
        title: 'Trigonometric Identities',
        content: 'Equations involving trigonometric ratios that are true for all allowable values of the angle.',
        keyPoints: [
          'sin²θ + cos²θ = 1 is the most widely used identity.',
          'sec²θ - tan²θ = 1 and cosec²θ - cot²θ = 1.',
        ],
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-8.1',
        name: 'Exercise 8.1',
        title: 'Trigonometric Ratios in Right Triangles',
        solutions: [
          { questionNumber: '1(i)', answer: 'sin A = 7/25, cos A = 24/25', hintOrStep: 'AB = 24, BC = 7 => AC = √(24² + 7²) = 25. sin A = BC/AC = 7/25, cos A = AB/AC = 24/25' },
          { questionNumber: '1(ii)', answer: 'sin C = 24/25, cos C = 7/25', hintOrStep: 'Opposite to C is AB = 24, adjacent is BC = 7.' },
          { questionNumber: '2', answer: 'tan P - cot R = 0', hintOrStep: 'tan P = QR/PQ = 5/12; cot R = QR/PQ = 5/12. Difference = 0' },
          { questionNumber: '3', answer: 'cos A = √7/4, tan A = 3/√7', hintOrStep: 'sin A = 3/4 => opp = 3, hyp = 4 => adj = √(16 - 9) = √7' },
          { questionNumber: '4', answer: 'sin A = 15/17, sec A = 17/8', hintOrStep: '15 cot A = 8 => cot A = 8/15 => adj = 8, opp = 15, hyp = 17' },
          { questionNumber: '5', answer: 'sin θ = 5/13, cos θ = 12/13, tan θ = 5/12, cot θ = 12/5, cosec θ = 13/5', hintOrStep: 'sec θ = 13/12 => hyp = 13, adj = 12, opp = 5' },
          { questionNumber: '7', answer: '(i) 49/64; (ii) 49/64', hintOrStep: '(1 + sin θ)(1 - sin θ) / [(1 + cos θ)(1 - cos θ)] = (1 - sin²θ)/(1 - cos²θ) = cos²θ/sin²θ = cot²θ = (7/8)² = 49/64' },
          { questionNumber: '8', answer: 'Yes, LHS = RHS = 7/25', hintOrStep: '3 cot A = 4 => tan A = 3/4. LHS = (1 - 9/16)/(1 + 9/16) = 7/25. cos²A - sin²A = 16/25 - 9/25 = 7/25.' },
          { questionNumber: '9', answer: '(i) 1; (ii) 0', hintOrStep: '(i) sin A cos C + cos A sin C = sin(A + C) = sin 90° = 1. (ii) cos A cos C - sin A sin C = cos 90° = 0' },
          { questionNumber: '10', answer: 'sin P = 12/13, cos P = 5/13, tan P = 12/5', hintOrStep: 'PR + QR = 25, PQ = 5. (25 - QR)² = 5² + QR² => QR = 12 cm, PR = 13 cm' },
          { questionNumber: '11', answer: '(i) False; (ii) True; (iii) False; (iv) False; (v) False', hintOrStep: 'Concept checks on values, sec/cos domains.' },
        ],
      },
      {
        exerciseId: 'ex-8.2',
        name: 'Exercise 8.2',
        title: 'Values at Specific Angles',
        solutions: [
          { questionNumber: '1(i)', answer: '1', hintOrStep: 'sin 60° cos 30° + sin 30° cos 60° = (√3/2)(√3/2) + (1/2)(1/2) = 3/4 + 1/4 = 1' },
          { questionNumber: '1(ii)', answer: '2', hintOrStep: '2 tan² 45° + cos² 30° - sin² 60° = 2(1)² + 3/4 - 3/4 = 2' },
          { questionNumber: '1(iii)', answer: '(3√2 - √6) / 8', hintOrStep: 'cos 45° / (sec 30° + cosec 30°) = (1/√2) / (2/√3 + 2). Rationalize denominator.' },
          { questionNumber: '1(iv)', answer: '(43 - 24√3) / 11', hintOrStep: '(sin 30° + tan 45° - cosec 60°) / (sec 30° + cos 60° + cot 45°)' },
          { questionNumber: '1(v)', answer: '67/12', hintOrStep: '(5 cos² 60° + 4 sec² 30° - tan² 45°) / (sin² 30° + cos² 30°) = [5(1/4) + 4(4/3) - 1] / 1 = 67/12' },
          { questionNumber: '2', answer: '(i) A (sin 60°); (ii) D (0); (iii) A (0°); (iv) C (tan 60°)', hintOrStep: 'Standard multiple-choice evaluations.' },
          { questionNumber: '3', answer: '∠A = 45°, ∠B = 15°', hintOrStep: 'tan(A + B) = √3 => A + B = 60°; tan(A - B) = 1/√3 => A - B = 30° => 2A = 90° => A = 45°, B = 15°' },
          { questionNumber: '4', answer: '(i) False; (ii) True; (iii) False; (iv) False; (v) True', hintOrStep: 'sin(A+B) ≠ sin A + sin B; sin θ increases as θ increases.' },
        ],
      },
      {
        exerciseId: 'ex-8.3',
        name: 'Exercise 8.3',
        title: 'Trigonometric Identities',
        solutions: [
          { questionNumber: '1', answer: 'sin A = 1/√(1 + cot² A), tan A = 1/cot A, sec A = √(1 + cot² A)/cot A', hintOrStep: 'Express in terms of cot A using cosec² A = 1 + cot² A.' },
          { questionNumber: '2', answer: 'sin A = √(sec² A - 1)/sec A; cos A = 1/sec A; tan A = √(sec² A - 1); cot A = 1/√(sec² A - 1); cosec A = sec A/√(sec² A - 1)', hintOrStep: 'Express all ratios in terms of sec A.' },
          { questionNumber: '3', answer: '(i) B (9); (ii) C (2); (iii) D (cos A); (iv) D (tan² A)', hintOrStep: '(i) 9 sec² A - 9 tan² A = 9(1) = 9. (iv) (1 + tan² A)/(1 + cot² A) = sec² A / cosec² A = tan² A.' },
        ],
      },
    ],
    summaryPoints: [
      'sin²θ + cos²θ = 1; 1 + tan²θ = sec²θ; 1 + cot²θ = cosec²θ.',
      'sin θ / cos θ = tan θ and cos θ / sin θ = cot θ.',
    ],
    practiceQuiz: [
      {
        id: 'q8-1',
        question: 'Evaluate: 2 tan² 45° + cos² 30° - sin² 60°',
        options: ['1', '2', '√3', '0'],
        correctIndex: 1,
        explanation: '2(1)² + 3/4 - 3/4 = 2.',
      },
      {
        id: 'q8-2',
        question: 'What is (1 + tan² A) / (1 + cot² A)?',
        options: ['sec² A', '-1', 'cot² A', 'tan² A'],
        correctIndex: 3,
        explanation: 'sec² A / cosec² A = (1/cos² A) / (1/sin² A) = sin² A / cos² A = tan² A.',
      },
    ],
  },

  // ===========================================================================
  // CHAPTER 9: SOME APPLICATIONS OF TRIGONOMETRY
  // ===========================================================================
  {
    id: 'ch-9',
    chapterNumber: 9,
    title: 'Some Applications of Trigonometry',
    slug: 'applications-of-trigonometry',
    description: 'Heights and distances in the real world: line of sight, angle of elevation (looking up), angle of depression (looking down), and multi-triangle surveyor problems.',
    learningObjectives: [
      'Distinguish line of sight, angle of elevation, and angle of depression',
      'Draw accurate geometric diagram models of real situations',
      'Calculate heights of towers, chimneys, and flagstaffs using tan, sin, and cos ratios',
      'Solve two-triangle problems with changing observer positions or depression angles',
    ],
    keyFormulas: [
      'tan θ = Opposite / Adjacent (Height / Horizontal Distance) — Most used in heights & distances',
      'sin θ = Opposite / Hypotenuse (Height / Slope or Ladder length)',
      'Angle of elevation = Angle of depression (Alternate interior angles with horizontal)',
      'Values: tan 30° = 1/√3 ≈ 0.577; tan 45° = 1; tan 60° = √3 ≈ 1.732',
    ],
    concepts: [
      {
        id: 'c9-1',
        title: 'Line of Sight, Elevation, and Depression',
        content: 'When looking UP at an object above horizontal level, the angle between the horizontal line and line of sight is the Angle of Elevation. When looking DOWN, it is the Angle of Depression.',
        keyPoints: [
          'The horizontal reference line from observer\'s eye is critical.',
          'If the observer has finite height h, total height = h + calculated vertical opposite side.',
        ],
        example: {
          problem: 'A tower stands 15 m from a point on ground. Elevation to top is 60°. Find height.',
          solution: 'tan 60° = AB/15 => √3 = AB/15 => AB = 15√3 m ≈ 25.98 m.',
        },
      },
      {
        id: 'c9-2',
        title: 'Multi-Triangle & Changing Position Problems',
        content: 'When an observer moves closer to a tower, elevation increases (e.g. from 30° to 60°). Set up two right triangles with a common height or distance variable.',
        keyPoints: [
          'Express height in terms of distance in both equations and equate them.',
          'Always keep surds like √3 in exact form until asked for decimal approximation.',
        ],
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-9.1',
        name: 'Exercise 9.1',
        title: 'Heights & Distances Complete Problem Set',
        solutions: [
          { questionNumber: '1', answer: 'Height of pole = 10 m', hintOrStep: 'Rope length = 20 m (hypotenuse), angle = 30°. sin 30° = AB/20 => 1/2 = AB/20 => AB = 10 m.' },
          { questionNumber: '2', answer: 'Height of tree = 8√3 m', hintOrStep: 'Distance to foot = 8 m, angle = 30°. Unbroken part = 8 tan 30° = 8/√3; broken part (hypotenuse) = 8/cos 30° = 16/√3. Total = 24/√3 = 8√3 m.' },
          { questionNumber: '3', answer: 'Slides length: 3 m (below 5 yrs), 2√3 m (elder children)', hintOrStep: 'Slide 1: sin 30° = 1.5/L₁ => L₁ = 3 m. Slide 2: sin 60° = 3/L₂ => (√3/2) = 3/L₂ => L₂ = 6/√3 = 2√3 m.' },
          { questionNumber: '4', answer: 'Height of tower = 10√3 m', hintOrStep: 'tan 30° = h/30 => 1/√3 = h/30 => h = 30/√3 = 10√3 m.' },
          { questionNumber: '5', answer: 'Length of string = 40√3 m', hintOrStep: 'Height = 60 m, angle = 60°. sin 60° = 60/L => √3/2 = 60/L => L = 120/√3 = 40√3 m.' },
          { questionNumber: '6', answer: 'Distance walked = 19√3 m', hintOrStep: 'Net height = 30 - 1.5 = 28.5 m. Initial distance = 28.5/tan 30° = 28.5√3; final distance = 28.5/tan 60° = 28.5/√3. Walked = 28.5√3 - 28.5/√3 = 28.5(2/√3) = 57/√3 = 19√3 m.' },
          { questionNumber: '7', answer: 'Height of tower = 20(√3 - 1) m', hintOrStep: 'Building = 20 m. tan 45° = 20/d => d = 20 m. tan 60° = (20 + h)/20 => 20√3 = 20 + h => h = 20(√3 - 1) m.' },
          { questionNumber: '8', answer: 'Height of pedestal = 0.8(√3 + 1) m', hintOrStep: 'Statue = 1.6 m. tan 45° = h/d => d = h. tan 60° = (h + 1.6)/h => h√3 = h + 1.6 => h(√3 - 1) = 1.6 => h = 1.6(√3 + 1)/2 = 0.8(√3 + 1) m.' },
          { questionNumber: '9', answer: 'Height of building = 16 2/3 m (50/3 m)', hintOrStep: 'Tower = 50 m. tan 60° = 50/d => d = 50/√3. tan 30° = h/d => h = d/√3 = (50/√3)/√3 = 50/3 = 16 2/3 m.' },
          { questionNumber: '10', answer: 'Height of poles = 20√3 m; Distances from point = 20 m and 60 m', hintOrStep: 'Poles height h, road width 80 m. tan 60° = h/x => h = x√3. tan 30° = h/(80 - x) => h = (80 - x)/√3. x√3 = (80 - x)/√3 => 3x = 80 - x => x = 20 m, other distance = 60 m. h = 20√3 m.' },
          { questionNumber: '11', answer: 'Height of tower = 10√3 m, Width of canal = 10 m', hintOrStep: 'tan 60° = h/x => h = x√3. tan 30° = h/(x + 20) => x√3 = (x + 20)/√3 => 3x = x + 20 => x = 10 m, h = 10√3 m.' },
          { questionNumber: '12', answer: 'Height of tower = 7(√3 + 1) m', hintOrStep: 'Building = 7 m. tan 45° = 7/d => d = 7 m. tan 60° = h/7 => h = 7√3 m. Total height = 7 + 7√3 = 7(√3 + 1) m.' },
          { questionNumber: '13', answer: 'Distance between ships = 75(√3 - 1) m', hintOrStep: 'Lighthouse = 75 m. d₁ = 75/tan 45° = 75 m; d₂ = 75/tan 30° = 75√3 m. Distance between = 75√3 - 75 = 75(√3 - 1) m.' },
          { questionNumber: '14', answer: 'Distance travelled by balloon = 58√3 m', hintOrStep: 'Net height = 88.2 - 1.2 = 87 m. Initial dist = 87/tan 60° = 87/√3; final dist = 87/tan 30° = 87√3. Distance = 87√3 - 87/√3 = 87(2/√3) = 174/√3 = 58√3 m.' },
          { questionNumber: '15', answer: 'Time taken = 3 seconds', hintOrStep: 'Speed v is constant. Angle changes from 30° to 60° in 6s. Distance at 60° is half the distance moved from 30° to 60°, so time taken = 6 / 2 = 3 seconds.' },
        ],
      },
    ],
    summaryPoints: [
      'Angle of elevation is measured looking up; angle of depression is measured looking down from horizontal.',
      'Always draw a clear schematic diagram and mark right angles and observers eye height.',
    ],
    practiceQuiz: [
      {
        id: 'q9-1',
        question: 'A 20 m rope is tied from top of a vertical pole to ground at 30° angle. Height of pole is:',
        options: ['10 m', '10√3 m', '20 m', '20√3 m'],
        correctIndex: 0,
        explanation: 'sin 30° = h/20 => 1/2 = h/20 => h = 10 m.',
      },
      {
        id: 'q9-2',
        question: 'The shadow of a tower is √3 times its height. The angle of elevation of the Sun is:',
        options: ['30°', '45°', '60°', '90°'],
        correctIndex: 0,
        explanation: 'tan θ = height / shadow = h / (h√3) = 1/√3 => θ = 30°.',
      },
    ],
  },

  // ===========================================================================
  // CHAPTER 10: CIRCLES
  // ===========================================================================
  {
    id: 'ch-10',
    chapterNumber: 10,
    title: 'Circles',
    slug: 'circles',
    description: 'Properties of tangents to a circle, point of contact, radius-tangent perpendicularity, and equal lengths of tangents from an external point.',
    learningObjectives: [
      'Understand the geometric definition of secant and tangent to a circle',
      'Prove Theorem 10.1: Tangent at any point is perpendicular to the radius through point of contact',
      'Prove Theorem 10.2: Lengths of tangents drawn from an external point are equal',
      'Apply circle theorems to circumscribed and inscribed polygons',
    ],
    keyFormulas: [
      'Radius ⊥ Tangent at point of contact (OP ⊥ AB)',
      'Tangents from external point: PA = PB',
      'Angle between two tangents and angle subtended by contact radii at center are supplementary: ∠APB + ∠AOB = 180°',
    ],
    concepts: [
      {
        id: 'c10-1',
        title: 'Tangent Perpendicularity and External Tangents',
        content: 'A tangent to a circle is a line that intersects the circle at only one point. The lengths of tangents drawn from an external point to a circle are equal.',
        keyPoints: [
          'A circle can have infinitely many tangents, but only two parallel tangents at most for any given diameter.',
          'From an external point, exactly two tangents can be drawn.',
        ],
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-10.1',
        name: 'Exercise 10.1',
        title: 'Tangent Definitions & Basics',
        solutions: [
          { questionNumber: '1', answer: 'Infinitely many', hintOrStep: 'At every point on a circle, a unique tangent can be drawn.' },
          { questionNumber: '2(i)', answer: 'One', hintOrStep: 'A tangent intersects a circle in only one point.' },
          { questionNumber: '2(ii)', answer: 'Secant', hintOrStep: 'A line intersecting a circle in two points is called a secant.' },
          { questionNumber: '2(iii)', answer: 'Two', hintOrStep: 'A circle can have at most two parallel tangents at opposite ends of a diameter.' },
          { questionNumber: '2(iv)', answer: 'Point of contact', hintOrStep: 'The common point of a tangent to a circle and the circle is called point of contact.' },
          { questionNumber: '3', answer: 'D (√119 cm)', hintOrStep: 'OP = 5 cm, OQ = 12 cm. In right ΔOPQ: PQ = √(12² - 5²) = √(144 - 25) = √119 cm.' },
        ],
      },
      {
        exerciseId: 'ex-10.2',
        name: 'Exercise 10.2',
        title: 'Tangents from External Points & Proofs',
        solutions: [
          { questionNumber: '1', answer: 'A (7 cm)', hintOrStep: 'OP = √(25² - 24²) = √(625 - 576) = √49 = 7 cm.' },
          { questionNumber: '2', answer: 'B (70°)', hintOrStep: '∠PTQ = 180° - 110° = 70° (opposite angles in cyclic quadrilateral are supplementary).' },
          { questionNumber: '3', answer: 'A (50°)', hintOrStep: '∠POA = 1/2 ∠AOB = 1/2(180° - 80°) = 50°.' },
          { questionNumber: '6', answer: '3 cm', hintOrStep: 'Radius = √(5² - 4²) = √(25 - 16) = √9 = 3 cm.' },
          { questionNumber: '7', answer: '8 cm', hintOrStep: 'Concentric circles r₁ = 5, r₂ = 3. Half chord length = √(5² - 3²) = 4 cm. Full chord = 2 × 4 = 8 cm.' },
          { questionNumber: '12', answer: 'AB = 15 cm, AC = 13 cm', hintOrStep: 'ΔABC circumscribing circle of radius 4 cm with CD = 6 cm, BD = 8 cm. Using Heron\'s formula and r × s = Area, x = 7 cm. AB = 8 + 7 = 15 cm, AC = 6 + 7 = 13 cm.' },
        ],
      },
    ],
    summaryPoints: [
      'The tangent at any point of a circle is perpendicular to the radius through the point of contact.',
      'The lengths of tangents drawn from an external point to a circle are equal (PA = PB).',
    ],
    practiceQuiz: [
      {
        id: 'q10-1',
        question: 'If two tangents inclined at an angle of 60° are drawn to a circle of radius 3 cm, the length of each tangent is:',
        options: ['3√3 cm', '6 cm', '3 cm', '√3 cm'],
        correctIndex: 0,
        explanation: 'In half triangle, tan 30° = r / L => 1/√3 = 3/L => L = 3√3 cm.',
      },
    ],
  },

  // ===========================================================================
  // CHAPTER 11: AREAS RELATED TO CIRCLES
  // ===========================================================================
  {
    id: 'ch-11',
    chapterNumber: 11,
    title: 'Areas Related to Circles',
    slug: 'areas-related-to-circles',
    description: 'Calculate areas of sectors and segments of circles using sector angle θ, and evaluate compound geometric regions.',
    learningObjectives: [
      'Calculate length of an arc of a sector: (θ/360) × 2πr',
      'Compute area of sector: (θ/360) × πr²',
      'Determine area of segment: Area of sector - Area of corresponding triangle',
      'Solve practical problems on clocks, windshield wipers, umbrella ribs, and brooches',
    ],
    keyFormulas: [
      'Arc length: l = (θ / 360°) × 2πr',
      'Area of sector: A = (θ / 360°) × πr²',
      'Area of minor segment = Area of sector - Area of triangle = (θ/360)πr² - 1/2 r² sin θ',
      'Area of major sector = πr² - Area of minor sector',
    ],
    concepts: [
      {
        id: 'c11-1',
        title: 'Sector and Segment of a Circle',
        content: 'A sector is the region enclosed by two radii and the arc. A segment is the region between a chord and its corresponding arc.',
        keyPoints: [
          'Minute hand rotates 360° in 60 minutes, i.e., 6° per minute.',
          'For θ = 60° triangle is equilateral (Area = √3/4 r²); for θ = 90° right triangle (Area = 1/2 r²).',
        ],
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-11.1',
        name: 'Exercise 11.1',
        title: 'Sectors & Segments Problem Set',
        solutions: [
          { questionNumber: '1', answer: '132/7 cm²', hintOrStep: 'r = 6 cm, θ = 60°. Area = (60/360) × (22/7) × 6² = (1/6) × (22/7) × 36 = 132/7 cm²' },
          { questionNumber: '2', answer: '77/8 cm²', hintOrStep: 'Circumference = 22 => 2(22/7)r = 22 => r = 7/2 cm. Quadrant (θ = 90°): (1/4) × (22/7) × (7/2)² = 77/8 cm²' },
          { questionNumber: '3', answer: '154/3 cm²', hintOrStep: 'In 5 minutes, θ = 5 × 6° = 30°. Area = (30/360) × (22/7) × 14² = (1/12) × 616 = 154/3 cm²' },
          { questionNumber: '4(i)', answer: 'Minor segment = 28.5 cm²', hintOrStep: 'r = 10, θ = 90°. Sector = (90/360) × 3.14 × 100 = 78.5 cm². Triangle = 1/2 × 10 × 10 = 50 cm². Segment = 78.5 - 50 = 28.5 cm²' },
          { questionNumber: '4(ii)', answer: 'Major sector = 235.5 cm²', hintOrStep: 'Total area = 3.14 × 100 = 314 cm². Major sector = 314 - 78.5 = 235.5 cm²' },
          { questionNumber: '5(i)', answer: 'Length of arc = 22 cm', hintOrStep: 'r = 21, θ = 60°. Arc = (60/360) × 2 × (22/7) × 21 = (1/6) × 132 = 22 cm' },
          { questionNumber: '5(ii)', answer: 'Area of sector = 231 cm²', hintOrStep: '(60/360) × (22/7) × 21² = (1/6) × 1386 = 231 cm²' },
          { questionNumber: '5(iii)', answer: '(231 - 441√3/4) cm²', hintOrStep: 'Equilateral Δ area = (√3/4) × 21² = 441√3/4 cm². Segment = 231 - 441√3/4 cm²' },
          { questionNumber: '6', answer: 'Minor: 20.4375 cm²; Major: 686.0625 cm²', hintOrStep: 'r = 15, θ = 60°' },
          { questionNumber: '7', answer: '88.44 cm²', hintOrStep: 'r = 12 cm, θ = 120°' },
          { questionNumber: '8(i)', answer: '19.625 m²', hintOrStep: 'Horse tied with 5 m rope in square field corner: (1/4) × 3.14 × 5² = 19.625 m²' },
          { questionNumber: '8(ii)', answer: '58.875 m²', hintOrStep: 'Increase when rope 10 m: (1/4) × 3.14 × 10² - 19.625 = 78.5 - 19.625 = 58.875 m²' },
          { questionNumber: '9(i)', answer: '285 mm', hintOrStep: 'Silver wire in brooch of 35 mm diameter with 5 diameters: Circumference + 5d = π(35) + 5(35) = 110 + 175 = 285 mm' },
          { questionNumber: '9(ii)', answer: '385/4 mm²', hintOrStep: 'Each sector = 1/10 of total circle = (1/10) × (22/7) × (35/2)² = 385/4 mm²' },
          { questionNumber: '10', answer: '22275/28 cm²', hintOrStep: 'Umbrella with 8 ribs: r = 45 cm. Area between two ribs = (1/8) × (22/7) × 45² = 22275/28 cm²' },
          { questionNumber: '11', answer: '158125/126 cm²', hintOrStep: 'Two car wipers sweeping 115° with 25 cm blade: 2 × (115/360) × (22/7) × 25² = 158125/126 cm²' },
          { questionNumber: '12', answer: '189.97 km²', hintOrStep: 'Lighthouse warning ships: r = 16.5 km, θ = 80°. Area = (80/360) × 3.14 × 16.5² = 189.97 km²' },
          { questionNumber: '13', answer: 'Cost = ₹162.68', hintOrStep: '6-sided regular design table cover: r = 28 cm, rate = ₹0.35 per cm²' },
          { questionNumber: '14', answer: 'D ((p / 720) × 2πR²)', hintOrStep: 'Area of sector of angle p = (p/360) × πR² = (p/720) × 2πR²' },
        ],
      },
    ],
    summaryPoints: [
      'Sector area depends linearly on central angle θ.',
      'Segment area equals sector area minus the triangle formed by the chord.',
    ],
    practiceQuiz: [
      {
        id: 'q11-1',
        question: 'What is the area of a sector of a circle of radius 6 cm if the angle is 60°? (π = 22/7)',
        options: ['132/7 cm²', '144/7 cm²', '66/7 cm²', '88/7 cm²'],
        correctIndex: 0,
        explanation: '(60/360) × (22/7) × 36 = 132/7 cm².',
      },
    ],
  },

  // ===========================================================================
  // CHAPTER 12: SURFACE AREAS AND VOLUMES
  // ===========================================================================
  {
    id: 'ch-12',
    chapterNumber: 12,
    title: 'Surface Areas and Volumes',
    slug: 'surface-areas-and-volumes',
    description: 'Calculate surface areas and volumes of combined 3D solids: cones, cylinders, hemispheres, spheres, and cuboids.',
    learningObjectives: [
      'Determine the surface area of composite solids by identifying exposed boundary faces',
      'Compute the total volume of composite solids by adding component volumes',
      'Solve engineering problems involving gulab jamuns, medicine capsules, and tents',
    ],
    keyFormulas: [
      'Cylinder: CSA = 2πrh; TSA = 2πr(r + h); Volume = πr²h',
      'Cone: CSA = πrl (where l = √(r² + h²)); TSA = πr(r + l); Volume = 1/3 πr²h',
      'Sphere: Surface Area = 4πr²; Volume = 4/3 πr³',
      'Hemisphere: CSA = 2πr²; TSA = 3πr²; Volume = 2/3 πr³',
      'Cuboid: TSA = 2(lb + bh + hl); Volume = lbh',
    ],
    concepts: [
      {
        id: 'c12-1',
        title: 'Surface Area of Combination of Solids',
        content: 'When two solids are joined together, the intersecting faces disappear from the total surface area. The total surface area is the sum of the curved surface areas of the individual components.',
        keyPoints: [
          'DO NOT add total surface areas of components; only add visible exposed surfaces.',
          'Always keep formulas in terms of common terms (like πr) before substituting numbers.',
        ],
      },
      {
        id: 'c12-2',
        title: 'Volume of Combination of Solids',
        content: 'Unlike surface area, volumes of non-overlapping combined parts are directly additive.',
        keyPoints: [
          'Volume of solid = Volume of Solid 1 + Volume of Solid 2.',
        ],
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-12.1',
        name: 'Exercise 12.1',
        title: 'Surface Area of Combined Solids',
        solutions: [
          { questionNumber: '1', answer: '160 cm²', hintOrStep: 'Two cubes of volume 64 cm³ joined end to end: side a = 4 cm. Resulting cuboid: l = 8, b = 4, h = 4. TSA = 2(8×4 + 4×4 + 8×4) = 2(32 + 16 + 32) = 160 cm²' },
          { questionNumber: '2', answer: '572 cm²', hintOrStep: 'Hollow cylinder mounted on hollow hemisphere: r = 7 cm, total height = 13 cm => cylinder height h = 6 cm. Inner SA = 2πr² + 2πrh = 2πr(r + h) = 2 × (22/7) × 7 × (7 + 6) = 44 × 13 = 572 cm²' },
          { questionNumber: '3', answer: '214.5 cm²', hintOrStep: 'Cone mounted on hemisphere: r = 3.5, total height = 15.5 => cone h = 12. Slant height l = √(12² + 3.5²) = 12.5. TSA = πr(l + 2r) = (22/7) × 3.5 × (12.5 + 7) = 11 × 19.5 = 214.5 cm²' },
          { questionNumber: '4', answer: 'Greatest diameter = 7 cm; Surface area = 332.5 cm²', hintOrStep: 'Cubical block of side 7 cm surmounted by hemisphere: Greatest diameter = 7 cm. Area = 6a² - πr² + 2πr² = 6(49) + (22/7)(3.5)² = 294 + 38.5 = 332.5 cm²' },
          { questionNumber: '5', answer: '1/4 l²(π + 24)', hintOrStep: 'Hemispherical depression cut out from cube of side l with diameter l: Area = 6l² - π(l/2)² + 2π(l/2)² = 6l² + πl²/4 = (1/4)l²(24 + π)' },
          { questionNumber: '6', answer: '220 mm²', hintOrStep: 'Medicine capsule: cylinder with two hemispheres. Diameter = 5 mm, total length = 14 mm => r = 2.5 mm, cylinder h = 9 mm. TSA = 2πrh + 4πr² = 2πr(h + 2r) = 2 × (22/7) × 2.5 × (9 + 5) = 220 mm²' },
          { questionNumber: '7', answer: 'Canvas area = 44 m²; Cost = ₹22,000', hintOrStep: 'Tent is cylinder surmounted by cone: r = 2 m, cylinder h = 2.1 m, slant height l = 2.8 m. Area = 2πrh + πrl = πr(2h + l) = (22/7) × 2 × (4.2 + 2.8) = 44 m². Cost = 44 × 500 = ₹22000' },
          { questionNumber: '8', answer: '18 cm²', hintOrStep: 'Solid cylinder with conical cavity: r = 0.7 cm, h = 2.4 cm => l = 2.5 cm. TSA = 2πrh + πr² + πrl = 17.6 cm² ≈ 18 cm²' },
          { questionNumber: '9', answer: '374 cm²', hintOrStep: 'Wooden article scooped out as hemispheres from cylinder ends: r = 3.5 cm, h = 10 cm. TSA = 2πrh + 2(2πr²) = 2πr(h + 2r) = 2 × (22/7) × 3.5 × (10 + 7) = 374 cm²' },
        ],
      },
      {
        exerciseId: 'ex-12.2',
        name: 'Exercise 12.2',
        title: 'Volume of Combined Solids',
        solutions: [
          { questionNumber: '1', answer: 'π cm³', hintOrStep: 'Solid hemisphere with cone on top, both r = 1 cm, cone h = 1 cm. Volume = 2/3 π(1)³ + 1/3 π(1)²(1) = 3/3 π = π cm³' },
          { questionNumber: '2', answer: '66 cm³; Formula: 1/3 πr²(h₁ + 3h₂ + h₁)', hintOrStep: 'Model of cylinder with two cones at ends: r = 1.5 cm, total length = 12 cm, cone h₁ = 2 cm => cylinder h₂ = 8 cm. Volume = 2(1/3 πr²h₁) + πr²h₂ = 66 cm³' },
          { questionNumber: '3', answer: '338 cm³', hintOrStep: 'Gulab jamuns containing 30% syrup: 45 pieces shaped as cylinder with hemispherical ends.' },
          { questionNumber: '4', answer: '523.53 cm³', hintOrStep: 'Pen stand cuboid with four conical depressions.' },
          { questionNumber: '5', answer: '100 lead shots', hintOrStep: 'Inverted cone filled with water; 1/4 of water flows out when lead spheres dropped.' },
          { questionNumber: '6', answer: '892.26 kg', hintOrStep: 'Solid iron pole consisting of cylinder surmounted by another cylinder.' },
          { questionNumber: '7', answer: '1.131 m³ (approx.)', hintOrStep: 'Solid placed inside water-filled cylinder.' },
          { questionNumber: '8', answer: 'Not correct. Correct answer is 346.51 cm³', hintOrStep: 'Spherical glass vessel with cylindrical neck: r_sphere = 8.5/2 = 4.25 cm, r_cyl = 1 cm, h = 8 cm. Total volume = 4/3 π(4.25)³ + π(1)²(8) = 321.39 + 25.13 = 346.51 cm³ (Student calculated 345 cm³, hence incorrect).' },
        ],
      },
    ],
    summaryPoints: [
      'In surface area combinations, internal contact faces are excluded.',
      'In volume combinations, volumes are directly additive.',
    ],
    practiceQuiz: [
      {
        id: 'q12-1',
        question: 'Two cubes each of volume 64 cm³ are joined end to end. The surface area of the resulting cuboid is:',
        options: ['128 cm²', '160 cm²', '192 cm²', '216 cm²'],
        correctIndex: 1,
        explanation: 'Cube side = 4 cm. Cuboid dimensions: 8 × 4 × 4. TSA = 2(32 + 16 + 32) = 160 cm².',
      },
    ],
  },

  // ===========================================================================
  // CHAPTER 13: STATISTICS
  // ===========================================================================
  {
    id: 'ch-13',
    chapterNumber: 13,
    title: 'Statistics',
    slug: 'statistics',
    description: 'Measures of central tendency for grouped data: Mean (Direct, Assumed Mean, Step-Deviation methods), Mode (modal class formula), and Median (cumulative frequency).',
    learningObjectives: [
      'Calculate Mean of grouped data using Direct and Assumed Mean methods',
      'Determine the Modal Class and calculate Mode using Mode = l + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × h',
      'Construct Cumulative Frequency tables and find Median using Median = l + [(n/2 - cf)/f] × h',
      'Verify the empirical relationship: 3 Median = Mode + 2 Mean',
    ],
    keyFormulas: [
      'Direct Mean: x̄ = Σ(fᵢxᵢ) / Σfᵢ',
      'Assumed Mean: x̄ = a + Σ(fᵢdᵢ) / Σfᵢ (where dᵢ = xᵢ - a)',
      'Step-Deviation: x̄ = a + [Σ(fᵢuᵢ) / Σfᵢ] × h (where uᵢ = (xᵢ - a)/h)',
      'Mode = l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h',
      'Median = l + [(n/2 - cf) / f] × h',
      'Empirical formula: 3 Median = Mode + 2 Mean',
    ],
    concepts: [
      {
        id: 'c13-1',
        title: 'Mean of Grouped Data',
        content: 'Class mark xᵢ = (Upper limit + Lower limit) / 2. The Direct Method is best when numbers are small; Assumed Mean or Step-Deviation method simplifies arithmetic when frequencies and values are large.',
        keyPoints: [
          'Choose assumed mean a from near the middle of class marks.',
        ],
      },
      {
        id: 'c13-2',
        title: 'Mode and Median of Grouped Data',
        content: 'Modal class is the class with maximum frequency. Median class corresponds to cumulative frequency just greater than n/2.',
        keyPoints: [
          'In mode formula: f₁ is frequency of modal class, f₀ is preceding class frequency, f₂ is succeeding class frequency.',
          'In median formula: cf is cumulative frequency of class PRECEDING the median class.',
        ],
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-13.1',
        name: 'Exercise 13.1',
        title: 'Mean of Grouped Data',
        solutions: [
          { questionNumber: '1', answer: '8.1 plants', hintOrStep: 'Direct method used because numerical values of xᵢ and fᵢ are small. Σfᵢxᵢ = 162, Σfᵢ = 20 => Mean = 162/20 = 8.1 plants.' },
          { questionNumber: '2', answer: '₹545.20', hintOrStep: 'Daily wages of 50 workers: Assumed mean method with a = 550. Mean = ₹545.20' },
          { questionNumber: '3', answer: 'f = 20', hintOrStep: 'Given mean = 18. 18 = (752 + 20f)/(44 + f) => 792 + 18f = 752 + 20f => 2f = 40 => f = 20' },
          { questionNumber: '4', answer: '75.9 heartbeats/min', hintOrStep: 'Step deviation method with class size h = 3.' },
          { questionNumber: '5', answer: '57.19 mangoes', hintOrStep: 'Inclusive classes converted to exclusive (49.5-52.5, etc.), h = 3.' },
          { questionNumber: '6', answer: '₹211', hintOrStep: 'Daily expenditure on food of 25 households: Mean = ₹211' },
          { questionNumber: '7', answer: '0.099 ppm', hintOrStep: 'Concentration of SO₂ in air.' },
          { questionNumber: '8', answer: '12.48 days', hintOrStep: 'Unequal class intervals, use direct method.' },
          { questionNumber: '9', answer: '69.43 %', hintOrStep: 'Literacy rates of 35 cities.' },
        ],
      },
      {
        exerciseId: 'ex-13.2',
        name: 'Exercise 13.2',
        title: 'Mode of Grouped Data',
        solutions: [
          { questionNumber: '1', answer: 'Mode = 36.8 years, Mean = 35.37 years', hintOrStep: 'Modal class 35-45 (freq 23). Mode = 35 + [(23 - 21)/(46 - 21 - 14)] × 10 = 35 + 20/11 = 36.8 years.' },
          { questionNumber: '2', answer: '65.625 hours', hintOrStep: 'Electrical components lifetime: Modal class 60-80. Mode = 60 + [(61 - 52)/(122 - 52 - 38)] × 20 = 65.625 hours.' },
          { questionNumber: '3', answer: 'Modal expenditure = ₹1847.83, Mean = ₹2662.5', hintOrStep: 'Family monthly expenses: Modal class 1500-2000.' },
          { questionNumber: '4', answer: 'Mode = 30.6, Mean = 29.2', hintOrStep: 'Student-teacher ratio in secondary schools.' },
          { questionNumber: '5', answer: 'Mode = 4608.7 runs', hintOrStep: 'Top batsmen of world: Modal class 4000-5000.' },
          { questionNumber: '6', answer: 'Mode = 44.7 cars', hintOrStep: 'Car frequency count in road survey.' },
        ],
      },
      {
        exerciseId: 'ex-13.3',
        name: 'Exercise 13.3',
        title: 'Median of Grouped Data',
        solutions: [
          { questionNumber: '1', answer: 'Median = 137 units, Mean = 137.05 units, Mode = 135.76 units', hintOrStep: 'Electric consumers: n = 68 => n/2 = 34. Median class 125-145.' },
          { questionNumber: '2', answer: 'x = 8, y = 7', hintOrStep: 'Median = 28.5, total freq = 60. Median class 20-30. 28.5 = 20 + [(30 - (5 + x))/20] × 10 => x = 8. Since 45 + x + y = 60 => y = 7.' },
          { questionNumber: '3', answer: 'Median age = 35.76 years', hintOrStep: 'Life insurance policy holders, "less than" cumulative frequencies.' },
          { questionNumber: '4', answer: 'Median length = 146.75 mm', hintOrStep: 'Leaves length: continuous classes 117.5-126.5...' },
          { questionNumber: '5', answer: 'Median life = 3406.98 hours', hintOrStep: 'Neon lamps life: n = 400 => n/2 = 200.' },
          { questionNumber: '6', answer: 'Median = 8.05, Mean = 8.32, Modal size = 7.88', hintOrStep: 'Surname letters: n = 100.' },
          { questionNumber: '7', answer: 'Median weight = 56.67 kg', hintOrStep: 'Weights of 30 students: n/2 = 15. Median class 55-60.' },
        ],
      },
    ],
    summaryPoints: [
      'Mode is the value that occurs most frequently in the distribution.',
      'Median divides sorted data into two equal halves.',
      '3 Median = Mode + 2 Mean provides an approximate empirical check.',
    ],
    practiceQuiz: [
      {
        id: 'q13-1',
        question: 'Which measure of central tendency is given by the x-coordinate of the point of intersection of less than and more than ogives?',
        options: ['Mean', 'Median', 'Mode', 'Range'],
        correctIndex: 1,
        explanation: 'The intersection point of cumulative frequency curves gives the Median.',
      },
    ],
  },

  // ===========================================================================
  // CHAPTER 14: PROBABILITY
  // ===========================================================================
  {
    id: 'ch-14',
    chapterNumber: 14,
    title: 'Probability',
    slug: 'probability',
    description: 'Classical theoretical approach to probability: P(E) = (Number of favorable outcomes) / (Total outcomes), impossible events, sure events, and complementary events P(Ē) = 1 - P(E).',
    learningObjectives: [
      'Define classical probability of an event',
      'Recognize equally likely outcomes',
      'Compute probabilities for coins, dice, cards, and colored marbles',
      'Use the complementary probability relation P(not E) = 1 - P(E)',
    ],
    keyFormulas: [
      'P(E) = (Number of outcomes favorable to E) / (Total number of possible outcomes)',
      '0 ≤ P(E) ≤ 1 for any event E',
      'P(Sure event) = 1; P(Impossible event) = 0',
      'P(E) + P(not E) = 1 => P(Ē) = 1 - P(E)',
      'Playing cards: 52 cards, 4 suits (13 Spades, 13 Clubs, 13 Hearts, 13 Diamonds), 12 face cards (Jack, Queen, King)',
    ],
    concepts: [
      {
        id: 'c14-1',
        title: 'Classical Probability & Sample Spaces',
        content: 'Assumes all elementary outcomes are equally likely. For a fair die, each outcome {1, 2, 3, 4, 5, 6} has probability 1/6. For two dice, there are 6 × 6 = 36 outcomes.',
        keyPoints: [
          'Two coins: 4 outcomes {HH, HT, TH, TT}.',
          'Three coins: 8 outcomes {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}.',
        ],
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-14.1',
        name: 'Exercise 14.1',
        title: 'Theoretical Probability Complete Set',
        solutions: [
          { questionNumber: '1(i)', answer: '1', hintOrStep: 'P(E) + P(not E) = 1' },
          { questionNumber: '1(ii)', answer: '0; impossible event', hintOrStep: 'Probability of an event that cannot happen is 0.' },
          { questionNumber: '1(iii)', answer: '1; sure or certain event', hintOrStep: 'Probability of an event that is certain to happen is 1.' },
          { questionNumber: '1(iv)', answer: '1', hintOrStep: 'Sum of probabilities of all elementary events is 1.' },
          { questionNumber: '1(v)', answer: '0, 1', hintOrStep: '0 ≤ P(E) ≤ 1' },
          { questionNumber: '2', answer: 'Experiments (iii) and (iv) have equally likely outcomes', hintOrStep: '(i) Driver starting car has mechanical dependencies; (ii) Basketball shot depends on skill; (iii) True/False is 50/50; (iv) Baby boy/girl is 50/50.' },
          { questionNumber: '3', answer: 'Outcomes head and tail are equally likely, making coin toss completely unpredictable and fair.', hintOrStep: 'Equally likely symmetry ensures impartiality.' },
          { questionNumber: '4', answer: 'B (-1.5 cannot be probability)', hintOrStep: 'Probability cannot be negative.' },
          { questionNumber: '5', answer: 'P(not E) = 0.95', hintOrStep: 'P(not E) = 1 - P(E) = 1 - 0.05 = 0.95' },
          { questionNumber: '6', answer: '(i) 0; (ii) 1', hintOrStep: 'Bag contains only lemon flavored candies: (i) Orange flavored = 0/n = 0; (ii) Lemon flavored = n/n = 1.' },
          { questionNumber: '7', answer: '0.008', hintOrStep: 'P(same birthday) = 1 - P(different birthday) = 1 - 0.992 = 0.008' },
          { questionNumber: '8', answer: '(i) 3/8; (ii) 5/8', hintOrStep: '3 red, 5 black balls => Total = 8. (i) P(red) = 3/8; (ii) P(not red) = 5/8' },
          { questionNumber: '9', answer: '(i) 5/17; (ii) 8/17; (iii) 13/17', hintOrStep: '5 red, 8 white, 4 green => Total = 17. (i) Red = 5/17; (ii) White = 8/17; (iii) Not green = (5 + 8)/17 = 13/17' },
          { questionNumber: '10', answer: '(i) 5/9; (ii) 17/18', hintOrStep: 'Piggy bank: 100 fifty-paise, 50 one-rupee, 20 two-rupee, 10 five-rupee => Total = 180 coins. (i) 50p coin = 100/180 = 5/9; (ii) Not ₹5 coin = (180 - 10)/180 = 170/180 = 17/18' },
          { questionNumber: '11', answer: '5/13', hintOrStep: '5 male fish, 8 female fish => Total = 13. P(male) = 5/13' },
          { questionNumber: '12', answer: '(i) 1/8; (ii) 1/2; (iii) 3/4; (iv) 1', hintOrStep: 'Spinning arrow {1..8}. (i) Points at 8: 1/8; (ii) Odd {1,3,5,7}: 4/8 = 1/2; (iii) Greater than 2 {3..8}: 6/8 = 3/4; (iv) Less than 9 {1..8}: 8/8 = 1' },
          { questionNumber: '13', answer: '(i) 1/2; (ii) 1/2; (iii) 1/2', hintOrStep: 'Throwing die: (i) Prime {2, 3, 5}: 3/6 = 1/2; (ii) Between 2 and 6 {3, 4, 5}: 3/6 = 1/2; (iii) Odd {1, 3, 5}: 3/6 = 1/2' },
          { questionNumber: '14', answer: '(i) 1/26; (ii) 3/13; (iii) 3/26; (iv) 1/52; (v) 1/4; (vi) 1/52', hintOrStep: '52 cards: (i) King of red color: 2/52 = 1/26; (ii) Face card: 12/52 = 3/13; (iii) Red face card: 6/52 = 3/26; (iv) Jack of hearts: 1/52; (v) Spade: 13/52 = 1/4; (vi) Queen of diamonds: 1/52' },
          { questionNumber: '15', answer: '(i) 1/5; (ii)(a) 1/4; (b) 0', hintOrStep: '5 cards: 10, J, Q, K, A of diamonds. (i) Queen: 1/5. (ii) If Q is drawn and put aside (4 cards left): (a) Ace: 1/4; (b) Queen: 0/4 = 0' },
          { questionNumber: '16', answer: '11/12', hintOrStep: '12 defective, 132 good => Total = 144 pens. P(good) = 132/144 = 11/12' },
          { questionNumber: '17', answer: '(i) 1/5; (ii) 15/19', hintOrStep: '20 bulbs, 4 defective => (i) Defective: 4/20 = 1/5. (ii) Non-defective drawn and not replaced (19 left, 15 good): P(not defective) = 15/19' },
          { questionNumber: '18', answer: '(i) 9/10; (ii) 1/10; (iii) 1/5', hintOrStep: '90 discs numbered 1 to 90. (i) Two-digit {10..90}: 81/90 = 9/10; (ii) Perfect square {1,4,9,16,25,36,49,64,81}: 9/90 = 1/10; (iii) Divisible by 5: 18/90 = 1/5' },
          { questionNumber: '19', answer: '(i) 1/3; (ii) 1/6', hintOrStep: 'Die with faces A, B, C, D, E, A (6 faces). (i) Getting A: 2/6 = 1/3; (ii) Getting D: 1/6' },
          { questionNumber: '20', answer: 'π / 24', hintOrStep: 'Die dropped inside 3m × 2m rectangle with circle of diameter 1m: Rectangle area = 6 m²; Circle area = π(1/2)² = π/4 m². Probability = (π/4)/6 = π/24' },
          { questionNumber: '21', answer: '(i) 31/36; (ii) 5/36', hintOrStep: '144 pens (20 defective, 124 good). (i) She will buy (good pen): 124/144 = 31/36; (ii) Will not buy: 20/144 = 5/36' },
          { questionNumber: '22', answer: 'Sums on two dice: 2(1/36), 3(2/36), 4(3/36), 5(4/36), 6(5/36), 7(6/36), 8(5/36), 9(4/36), 10(3/36), 11(2/36), 12(1/36). The eleven sums are NOT equally likely.', hintOrStep: 'There are 36 total outcomes; sum of 7 has 6 outcomes, sum of 2 has only 1 outcome.' },
          { questionNumber: '23', answer: '3/4', hintOrStep: '3 tosses of coin. Total outcomes = 8. Hanif wins for HHH or TTT (2 outcomes). Hanif loses = (8 - 2)/8 = 6/8 = 3/4' },
          { questionNumber: '24', answer: '(i) 25/36; (ii) 11/36', hintOrStep: 'Die thrown twice (36 outcomes). (i) 5 will not come up either time: 5 × 5 = 25/36; (ii) 5 will come up at least once: 1 - 25/36 = 11/36' },
          { questionNumber: '25', answer: '(i) Incorrect: "One of each" (HT, TH) has probability 2/4 = 1/2, whereas two heads (HH) is 1/4; (ii) Correct: Even number {2,4,6} has 3/6 = 1/2 and odd number {1,3,5} has 3/6 = 1/2, so both are equally likely.', hintOrStep: 'Outcomes must be symmetric to be equally likely.' },
        ],
      },
    ],
    summaryPoints: [
      'Probability of an impossible event is 0; of a sure event is 1.',
      'Sum of probabilities of all elementary outcomes of an experiment equals 1.',
    ],
    practiceQuiz: [
      {
        id: 'q14-1',
        question: 'If P(E) = 0.05, what is the probability of "not E"?',
        options: ['0.05', '0.50', '0.90', '0.95'],
        correctIndex: 3,
        explanation: 'P(not E) = 1 - P(E) = 1 - 0.05 = 0.95.',
      },
      {
        id: 'q14-2',
        question: 'A card is drawn from a well-shuffled pack of 52 cards. What is the probability of getting a queen of diamonds?',
        options: ['1/13', '1/26', '1/52', '4/52'],
        correctIndex: 2,
        explanation: 'There is only 1 queen of diamonds in the deck of 52 cards: 1/52.',
      },
    ],
  },

  // ===========================================================================
  // APPENDIX A1: PROOFS IN MATHEMATICS
  // ===========================================================================
  {
    id: 'app-1',
    chapterNumber: 'A1',
    title: 'Appendix A1: Proofs in Mathematics',
    slug: 'proofs-in-mathematics',
    isAppendix: true,
    description: 'Deep dive into mathematical rigor: statements vs non-statements, deductive reasoning, theorems, conjectures, negations, converses, and proof by contradiction.',
    learningObjectives: [
      'Distinguish between unambiguous mathematical statements and ambiguous sentences',
      'Understand and construct deductive logical chains',
      'Formulate negations and converses of mathematical implications',
      'Master proof by contradiction (reductio ad absurdum)',
    ],
    keyFormulas: [
      'A statement is a sentence which is either definitively true or definitively false, but not both.',
      'Deductive reasoning: If statement P is true and P implies Q, then Q is necessarily true.',
      'Negation of statement P is "not P" (~P). P and ~P have opposite truth values.',
      'Converse of "If P then Q" is "If Q then P". The converse of a true theorem is NOT always true.',
      'Contradiction technique: Assume negation ~P is true, deduce a logical inconsistency, conclude P must be true.',
    ],
    concepts: [
      {
        id: 'ca1-1',
        title: 'Mathematical Statements and Deductive Reasoning',
        content: 'Mathematics requires precise language. Sentences involving ambiguous subjective words ("many", "good", "tall") are not statements until strictly defined.',
        keyPoints: [
          'Ambiguous: "Tomorrow is a sunny day" or "Mathematics is difficult".',
          'Statement: "For every real number x, x² ≥ 0" (True).',
        ],
      },
      {
        id: 'ca1-2',
        title: 'Negations, Converses, and Reductio Ad Absurdum',
        content: 'Proof by contradiction assumes the hypothesis that what we want to prove is false, and proves that this leads to an impossibility.',
        keyPoints: [
          'Used to prove √2 is irrational, infinitely many primes exist, etc.',
        ],
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-A1.1',
        name: 'Exercise A1.1',
        title: 'Identifying Mathematical Statements',
        solutions: [
          { questionNumber: '1', answer: '(i) Ambiguous; (ii) True statement; (iii) True statement; (iv) Ambiguous; (v) Ambiguous', hintOrStep: 'Sentences with context-dependent or subjective adjectives are ambiguous.' },
          { questionNumber: '2', answer: '(i) True; (ii) True; (iii) False; (iv) True; (v) True', hintOrStep: 'Evaluation of mathematical assertions.' },
          { questionNumber: '3', answer: 'Only (ii) is true.', hintOrStep: 'Check geometric conditions.' },
          { questionNumber: '4', answer: '(i) If a > 0 and a² > b², then a > b; (ii) If xy > 0 and x² = y², then x = y; (iii) If (x + y)² = x² + y² and y ≠ 0, then x = 0; (iv) The diagonals of a parallelogram bisect each other.', hintOrStep: 'Writing precise deductive statements.' },
        ],
      },
      {
        exerciseId: 'ex-A1.2',
        name: 'Exercise A1.2',
        title: 'Deductive Reasoning & Conclusions',
        solutions: [
          { questionNumber: '1', answer: 'A is mortal', hintOrStep: 'All humans are mortal; A is a human => A is mortal.' },
          { questionNumber: '2', answer: 'ab is rational', hintOrStep: 'Product of two rational numbers is always rational.' },
          { questionNumber: '3', answer: 'Decimal expansion of √17 is non-terminating non-recurring.', hintOrStep: '17 is prime, so √17 is irrational.' },
          { questionNumber: '4', answer: 'y = 7', hintOrStep: 'Direct algebraic substitution from given premises.' },
          { questionNumber: '5', answer: '∠A = 100°, ∠C = 100°, ∠D = 180°', hintOrStep: 'Angle relations in polygon.' },
          { questionNumber: '6', answer: 'PQRS is a rectangle.', hintOrStep: 'Parallelogram with one right angle is a rectangle.' },
          { questionNumber: '7', answer: 'Yes, because of premise. No, because √3721 = 61 which is rational. Since the premise was wrong, conclusion is false.', hintOrStep: 'Soundness vs validity in deductive logic.' },
        ],
      },
      {
        exerciseId: 'ex-A1.3',
        name: 'Exercise A1.3',
        title: 'General Integer Expressions',
        solutions: [
          { questionNumber: '1', answer: 'Take two consecutive odd numbers as 2n + 1 and 2n + 3 for some integer n.', hintOrStep: 'Odd integers always have representation 2n + 1.' },
        ],
      },
      {
        exerciseId: 'ex-A1.4',
        name: 'Exercise A1.4',
        title: 'Negation of Mathematical Statements',
        solutions: [
          { questionNumber: '1(i)', answer: 'Man is not mortal.', hintOrStep: 'Negation of "Man is mortal".' },
          { questionNumber: '1(ii)', answer: 'Line l is not parallel to line m.', hintOrStep: 'Direct negation.' },
          { questionNumber: '1(iii)', answer: 'The chapter does not have many exercises.', hintOrStep: 'Direct negation.' },
          { questionNumber: '1(iv)', answer: 'Not all integers are rational numbers.', hintOrStep: 'Negation of universal quantifier.' },
          { questionNumber: '1(v)', answer: 'All prime numbers are not odd.', hintOrStep: 'True since 2 is an even prime.' },
          { questionNumber: '1(vi)', answer: 'Some students are lazy.', hintOrStep: 'Negation of "No students are lazy".' },
          { questionNumber: '1(vii)', answer: 'All cats are black.', hintOrStep: 'Negation statement.' },
          { questionNumber: '1(viii)', answer: 'There is at least one real number x, such that √x = -1.', hintOrStep: 'Negation of "For all real x, √x ≠ -1".' },
          { questionNumber: '1(ix)', answer: '2 does not divide the positive integer a.', hintOrStep: 'Direct negation.' },
          { questionNumber: '1(x)', answer: 'Integers a and b are not coprime.', hintOrStep: 'Direct negation.' },
          { questionNumber: '2', answer: '(i) Yes; (ii) No; (iii) No; (iv) No; (v) Yes', hintOrStep: 'Checking whether given sentences are negations of each other.' },
        ],
      },
      {
        exerciseId: 'ex-A1.5',
        name: 'Exercise A1.5',
        title: 'Converse Statements & Truth Values',
        solutions: [
          { questionNumber: '1(i)', answer: 'If Sharan sweats a lot, then it is hot in Tokyo.', hintOrStep: 'Converse of "If hot in Tokyo, then Sharan sweats a lot".' },
          { questionNumber: '1(ii)', answer: 'If Shalini\'s stomach grumbles, then she is hungry.', hintOrStep: 'Converse statement.' },
          { questionNumber: '1(iii)', answer: 'If Jaswant can get a degree, then she has a scholarship.', hintOrStep: 'Converse statement.' },
          { questionNumber: '1(iv)', answer: 'If a plant is alive, then it has flowers.', hintOrStep: 'Converse statement.' },
          { questionNumber: '1(v)', answer: 'If an animal has a tail, then it is a cat.', hintOrStep: 'Converse statement.' },
          { questionNumber: '2(i)', answer: 'If the base angles of triangle ABC are equal, then it is isosceles. True.', hintOrStep: 'Isosceles triangle theorem converse.' },
          { questionNumber: '2(ii)', answer: 'If the square of an integer is odd, then the integer is odd. True.', hintOrStep: 'True integer theorem.' },
          { questionNumber: '2(iii)', answer: 'If x = 1, then x² = 1. True.', hintOrStep: 'Direct evaluation.' },
          { questionNumber: '2(iv)', answer: 'If AC and BD bisect each other, then ABCD is a parallelogram. True.', hintOrStep: 'Parallelogram diagonal property converse.' },
          { questionNumber: '2(v)', answer: 'If a + (b + c) = (a + b) + c, then a, b, and c are whole numbers. False.', hintOrStep: 'Associativity holds for real/negative numbers too.' },
          { questionNumber: '2(vi)', answer: 'If x + y is an even number, then x and y are odd. False.', hintOrStep: 'Counterexample: x = 2, y = 4 are both even, yet sum 6 is even.' },
          { questionNumber: '2(vii)', answer: 'If a parallelogram is a rectangle, its vertices lie on a circle. True.', hintOrStep: 'All rectangles are cyclic quadrilaterals.' },
        ],
      },
      {
        exerciseId: 'ex-A1.6',
        name: 'Exercise A1.6',
        title: 'Proof by Contradiction Technique',
        solutions: [
          { questionNumber: '1', answer: 'Suppose to the contrary b ≤ d.', hintOrStep: 'First step in establishing the contradiction.' },
          { questionNumber: '3', answer: 'See Example 10 of Chapter 1.', hintOrStep: 'Proof that √3 is irrational.' },
          { questionNumber: '6', answer: 'See Theorem 5.1 of Class IX Mathematics Textbook.', hintOrStep: 'Angles opposite to equal sides of an isosceles triangle.' },
        ],
      },
    ],
    summaryPoints: [
      'Deductive reasoning starts from known axioms and hypotheses to reach logically unavoidable conclusions.',
      'Proof by contradiction assumes the falsity of a claim and demonstrates a breakdown of logic.',
    ],
    practiceQuiz: [
      {
        id: 'qa1-1',
        question: 'Which of the following is an unambiguous mathematical statement?',
        options: [
          'Geometry is an easy subject',
          'For any real number x, x² ≥ 0',
          'Today is very hot',
          'Tomorrow will be a lucky day',
        ],
        correctIndex: 1,
        explanation: '"For any real number x, x² ≥ 0" has a definite, invariable truth value (True).',
      },
    ],
  },

  // ===========================================================================
  // APPENDIX A2: MATHEMATICAL MODELLING
  // ===========================================================================
  {
    id: 'app-2',
    chapterNumber: 'A2',
    title: 'Appendix A2: Mathematical Modelling',
    slug: 'mathematical-modelling',
    isAppendix: true,
    description: 'Transforming real-world phenomena into mathematical equations: understanding the problem, formulating assumptions, mathematical solving, interpreting, and validating.',
    learningObjectives: [
      'Understand the 5 stages of Mathematical Modelling',
      'Formulate mathematical representations for physical, financial, and ecological systems',
      'Interpret mathematical solutions in the context of physical constraints',
      'Evaluate model validity and identify limitations',
    ],
    keyFormulas: [
      'Stage 1: Understanding the real-world problem',
      'Stage 2: Formulating mathematical model (defining variables, simplifying assumptions)',
      'Stage 3: Solving the mathematical problem',
      'Stage 4: Interpreting the mathematical solution',
      'Stage 5: Validating the model against real-world observation',
    ],
    concepts: [
      {
        id: 'ca2-1',
        title: 'Stages of Mathematical Modelling',
        content: 'Mathematical modelling is the process of translating a real-world scenario into mathematical language, solving the mathematical problem, and translating the results back to make predictions.',
        keyPoints: [
          'Assumptions are necessary to make complex reality tractable.',
          'If predictions disagree with empirical observation, the model assumptions must be revised.',
        ],
      },
    ],
    exercises: [
      {
        exerciseId: 'ex-A2.2',
        name: 'Exercise A2.2',
        title: 'Applied Modelling Exercises',
        solutions: [
          { questionNumber: '1(i)', answer: '1/5', hintOrStep: 'Sampling fraction calculation.' },
          { questionNumber: '1(ii)', answer: '160', hintOrStep: 'Estimated total population based on proportion.' },
          { questionNumber: '2', answer: 'Take 1 cm² area and count the number of dots in it. Total number of trees will be the product of this number and the area (in cm²).', hintOrStep: 'Aerial sampling estimation technique.' },
          { questionNumber: '3', answer: 'Rate of interest in instalment scheme is 17.74%, which is less than 18%.', hintOrStep: 'Financial modelling comparing cash price vs instalment plan.' },
        ],
      },
      {
        exerciseId: 'ex-A2.3',
        name: 'Exercise A2.3',
        title: 'Open-ended Real World Modelling',
        solutions: [
          { questionNumber: '1', answer: 'Students formulate and test their own models using empirical data collected from their local environment.', hintOrStep: 'Project work comparing predictions with actual measurements.' },
        ],
      },
    ],
    summaryPoints: [
      'A mathematical model is an abstraction of reality.',
      'Modelling involves cyclic iteration: Formulate -> Solve -> Interpret -> Validate -> Refine.',
    ],
    practiceQuiz: [
      {
        id: 'qa2-1',
        question: 'What is the final stage in the mathematical modelling cycle before adopting a model?',
        options: [
          'Mathematical derivation',
          'Formulating assumptions',
          'Validation against real-world data',
          'Writing computer code',
        ],
        correctIndex: 2,
        explanation: 'A model must be validated against real-world observations to verify its predictive accuracy.',
      },
    ],
  },
];

// ===========================================================================
// HELPER LOOKUPS & UTILITIES (Usable anywhere in the site)
// ===========================================================================

export function getAllMathChapters(): MathChapterData[] {
  return CLASS_10_MATH_CHAPTERS;
}

export function getMathChapterById(id: string): MathChapterData | undefined {
  return CLASS_10_MATH_CHAPTERS.find((ch) => ch.id === id || ch.slug === id);
}

export function getMathChapterByNumber(num: number | string): MathChapterData | undefined {
  return CLASS_10_MATH_CHAPTERS.find((ch) => ch.chapterNumber === num || String(ch.chapterNumber) === String(num));
}

export function getExerciseSolutions(chapterNumber: number | string, exerciseName: string): MathExerciseSolution[] {
  const chapter = getMathChapterByNumber(chapterNumber);
  if (!chapter) return [];
  const ex = chapter.exercises.find((e) => e.name.toLowerCase() === exerciseName.toLowerCase() || e.exerciseId === exerciseName);
  return ex ? ex.solutions : [];
}

export function searchMathCurriculum(query: string): Array<{
  chapter: MathChapterData;
  matchedConcepts: MathConceptItem[];
  matchedExercises: MathExercise[];
}> {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return CLASS_10_MATH_CHAPTERS.map((chapter) => {
    const matchedConcepts = chapter.concepts.filter(
      (c) => c.title.toLowerCase().includes(q) || c.content.toLowerCase().includes(q)
    );
    const matchedExercises = chapter.exercises.filter(
      (e) => e.name.toLowerCase().includes(q) || e.title.toLowerCase().includes(q) || e.solutions.some((s) => s.answer.toLowerCase().includes(q))
    );
    return { chapter, matchedConcepts, matchedExercises };
  }).filter((res) =>
    res.chapter.title.toLowerCase().includes(q) ||
    res.matchedConcepts.length > 0 ||
    res.matchedExercises.length > 0
  );
}
