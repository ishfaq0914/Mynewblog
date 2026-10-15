import React from 'react';
import { X, Check, Copy, ExternalLink, Terminal, Cloud } from 'lucide-react';

interface NetlifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NetlifyModal: React.FC<NetlifyModalProps> = ({ isOpen, onClose }) => {
  const [copiedStep, setCopiedStep] = React.useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(index);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#080B0D]/85 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-[#0E1216] border border-white/[0.12] shadow-2xl p-6 sm:p-8 z-10 space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/[0.08]">
          <div className="space-y-1">
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#F07858] font-mono">
              DEPLOYMENT RUNBOOK
            </div>
            <h3 className="font-editorial text-2xl text-[#F3F0E9]">
              Deploying to Netlify & GitHub
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#AAA9A3] hover:text-[#F3F0E9] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Configuration summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-[#12161A] border border-white/[0.06] space-y-1">
            <span className="text-[#AAA9A3]/60 uppercase text-[10px]">Build Command</span>
            <div className="font-mono text-[#F3F0E9]">npm run build</div>
          </div>
          <div className="p-3 bg-[#12161A] border border-white/[0.06] space-y-1">
            <span className="text-[#AAA9A3]/60 uppercase text-[10px]">Publish Directory</span>
            <div className="font-mono text-[#F3F0E9]">dist</div>
          </div>
          <div className="p-3 bg-[#12161A] border border-white/[0.06] space-y-1">
            <span className="text-[#AAA9A3]/60 uppercase text-[10px]">SPA Redirect Rule</span>
            <div className="font-mono text-emerald-400">public/_redirects (included)</div>
          </div>
          <div className="p-3 bg-[#12161A] border border-white/[0.06] space-y-1">
            <span className="text-[#AAA9A3]/60 uppercase text-[10px]">Assets Strategy</span>
            <div className="font-mono text-emerald-400">Bundled + /public/images/</div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 text-xs text-[#AAA9A3]">
          
          {/* Step 1: Git */}
          <div className="space-y-2 p-3 bg-[#12161A]/60 border border-white/[0.04]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[#F07858]">01. Push to GitHub Repository</span>
              <button
                onClick={() =>
                  copyToClipboard(
                    'git add .\ngit commit -m "feat: The Digital Journal by Ishfaq Shafi"\ngit branch -M main\ngit remote add origin https://github.com/ishfaqshafi/digital-journal.git\ngit push -u origin main',
                    1
                  )
                }
                className="text-[10px] text-[#AAA9A3] hover:text-[#F3F0E9] flex items-center gap-1"
              >
                {copiedStep === 1 ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedStep === 1 ? 'Copied' : 'Copy Git Script'}</span>
              </button>
            </div>
            <pre className="p-2.5 bg-[#080B0D] text-[#F3F0E9] font-mono text-[11px] overflow-x-auto border border-white/[0.06]">
              {`git add .\ngit commit -m "feat: The Digital Journal by Ishfaq Shafi"\ngit push origin main`}
            </pre>
          </div>

          {/* Step 2: Netlify Dashboard */}
          <div className="space-y-2 p-3 bg-[#12161A]/60 border border-white/[0.04]">
            <span className="font-mono text-[#F07858]">02. Connect Repository on Netlify</span>
            <p className="leading-relaxed">
              1. Log in to your <a href="https://app.netlify.com" target="_blank" rel="noopener noreferrer" className="text-[#F07858] underline">Netlify Dashboard</a>.<br />
              2. Click <strong>"Add new site"</strong> → <strong>"Import an existing project"</strong>.<br />
              3. Select <strong>GitHub</strong> and choose your repository.<br />
              4. Netlify will auto-detect Vite:
                 <ul className="list-disc pl-5 mt-1 space-y-0.5 text-[#F3F0E9]">
                   <li>Base directory: <code className="text-[#F07858]">/</code> (leave blank)</li>
                   <li>Build command: <code className="text-[#F07858]">npm run build</code></li>
                   <li>Publish directory: <code className="text-[#F07858]">dist</code></li>
                 </ul>
              5. Click <strong>Deploy Site</strong>. Your site will be live on a fast global CDN in ~45 seconds!
            </p>
          </div>

          {/* Step 3: Custom Domain */}
          <div className="space-y-2 p-3 bg-[#12161A]/60 border border-white/[0.04]">
            <span className="font-mono text-[#F07858]">03. Custom Domain & HTTPS</span>
            <p className="leading-relaxed">
              In <em>Site Configuration → Domain management</em>, add your personal domain (e.g. <code className="text-[#F3F0E9]">ishfaqshafi.com</code>). Netlify provisions free automatic Let's Encrypt SSL certificates.
            </p>
          </div>

        </div>

        {/* Close Button */}
        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs uppercase tracking-widest text-center border border-white/20 hover:border-[#F07858] text-[#F3F0E9] hover:bg-[#F07858]/10 transition-colors"
          >
            Close Runbook
          </button>
        </div>

      </div>
    </div>
  );
};
