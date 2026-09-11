'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-[#283038] bg-white dark:bg-[#13171b] pt-16 pb-10 px-4 sm:px-8 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
        <p>Copyright &copy; 2026 SmartLearn Ecosystem. All rights reserved.</p>
        <div className="flex items-center gap-5 font-semibold text-slate-600 dark:text-slate-400">
          <Link href="/terms" className="hover:text-[#d82a4e] transition-colors">
            Terms &amp; Conditions
          </Link>
          <Link href="/login?mode=signup" className="hover:text-[#d82a4e] transition-colors">
            Register
          </Link>
          <Link href="/privacy" className="hover:text-[#d82a4e] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
