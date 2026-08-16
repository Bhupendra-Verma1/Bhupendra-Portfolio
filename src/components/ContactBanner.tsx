import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { Mail, Linkedin, Github, Check, Copy, Send } from 'lucide-react';

interface ContactBannerProps {
  onOpenContactModal: () => void;
}

export const ContactBanner: React.FC<ContactBannerProps> = ({ onOpenContactModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-20 max-w-6xl mx-auto px-6">
      <div className="bg-[#2563eb] rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl shadow-blue-500/10 relative overflow-hidden">
        
        {/* Subtle background glow circles */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 text-white">
            Let's Build Something Reliable
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            {/* Email Me Button */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-blue-600 bg-white hover:bg-blue-50 active:bg-blue-100 rounded-lg shadow-sm transition-all duration-150 active:scale-98"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              <span>Email Me</span>
            </a>

            {/* LinkedIn Button */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700/60 hover:bg-blue-700/90 active:bg-blue-800/80 border border-blue-400/50 rounded-lg transition-all duration-150 active:scale-98"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            {/* GitHub Button */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700/60 hover:bg-blue-700/90 active:bg-blue-800/80 border border-blue-400/50 rounded-lg transition-all duration-150 active:scale-98"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Direct Email display & quick copy */}
          <div className="mt-7 pt-6 border-t border-blue-500/40 flex items-center justify-center gap-2 text-xs text-blue-200">
            <span>Direct Email:</span>
            <code className="bg-blue-700/80 px-2 py-0.5 rounded text-white font-mono">{PERSONAL_INFO.email}</code>
            <button
              onClick={handleCopyEmail}
              className="ml-1 p-1 hover:text-white transition-colors"
              title="Copy email"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            {copied && <span className="text-[11px] text-emerald-300 font-medium">Copied!</span>}
          </div>

        </div>
      </div>
    </section>
  );
};
