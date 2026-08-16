import React from 'react';
import { PERSONAL_INFO } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          &copy; 2026 {PERSONAL_INFO.name}. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-blue-600 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
