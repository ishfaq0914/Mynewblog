import React, { useState, useEffect } from 'react';
import { X, Mail, Copy, Check, Send, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link with encoded parameters
    const subject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name || 'The Digital Journal'}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#080B0D]/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-xl bg-[#0E1216] border border-white/[0.12] shadow-2xl p-6 sm:p-8 z-10 space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/[0.08]">
          <div className="space-y-1">
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#F07858] font-mono">
              DIRECT COMMUNICATION
            </div>
            <h3 className="font-editorial text-2xl text-[#F3F0E9]">
              Contact Ishfaq Shafi
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#AAA9A3] hover:text-[#F3F0E9] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Email Copy Card */}
        <div className="p-4 bg-[#12161A] border border-white/[0.06] flex items-center justify-between gap-4">
          <div className="space-y-0.5">
            <div className="text-[10px] uppercase tracking-wider text-[#AAA9A3]/60">
              Primary Mailbox
            </div>
            <div className="text-sm font-mono text-[#F3F0E9] select-all">
              {PROFILE_DATA.email}
            </div>
          </div>
          
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#AAA9A3] hover:text-[#F3F0E9] border border-white/10 hover:border-white/20 transition-colors"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#F07858]/10 text-[#F07858] flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-editorial text-xl text-[#F3F0E9]">Draft Prepared</h4>
            <p className="text-xs text-[#AAA9A3] max-w-sm mx-auto">
              Your default email client has been opened with your message. You can also reach out directly to {PROFILE_DATA.email}.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-[#F07858] underline underline-offset-4 tracking-wider uppercase pt-2"
            >
              Write another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSend} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider text-[#AAA9A3]">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Vance"
                  className="w-full bg-[#12161A] border border-white/[0.08] focus:border-[#F07858] px-3 py-2 text-xs text-[#F3F0E9] placeholder-[#AAA9A3]/30 focus-visible:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider text-[#AAA9A3]">Your Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="you@domain.com"
                  className="w-full bg-[#12161A] border border-white/[0.08] focus:border-[#F07858] px-3 py-2 text-xs text-[#F3F0E9] placeholder-[#AAA9A3]/30 focus-visible:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-wider text-[#AAA9A3]">Subject</label>
              <input
                type="text"
                required
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                placeholder="Collaboration, security, or article inquiry"
                className="w-full bg-[#12161A] border border-white/[0.08] focus:border-[#F07858] px-3 py-2 text-xs text-[#F3F0E9] placeholder-[#AAA9A3]/30 focus-visible:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-wider text-[#AAA9A3]">Message</label>
              <textarea
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Share your thoughts or proposal..."
                className="w-full bg-[#12161A] border border-white/[0.08] focus:border-[#F07858] px-3 py-2 text-xs text-[#F3F0E9] placeholder-[#AAA9A3]/30 focus-visible:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-xs uppercase tracking-widest font-medium text-[#080B0D] bg-[#F3F0E9] hover:bg-[#F07858] hover:text-[#F3F0E9] transition-colors"
            >
              Send Message via Email Client
            </button>
          </form>
        )}

        {/* Social Links Footer */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#AAA9A3]">
          <span>Other Channels</span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ishfaqshafi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F07858] flex items-center gap-1 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/ishfaqshafi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F07858] flex items-center gap-1 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
