export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  isSample: boolean;
  repoUrl?: string; // Configurable
  demoUrl?: string; // Configurable
  year: string;
  category: string;
}

import terminalImage from '../assets/images/terminal_systems_1792059454971.jpg';
import workspaceImage from '../assets/images/workspace_creative_1792059382868.jpg';
import architectureImage from '../assets/images/journal_architecture_1792059577568.jpg';
import prismImage from '../assets/images/journal_prism_still_1792059631079.jpg';

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: 'recon-sentinel',
    title: 'ReconSentinel: Attack Surface Mapper',
    subtitle: 'Automated Subdomain Enumeration & Passive Intelligence Engine',
    description: 'A modular reconnaissance utility built for security researchers to map exposed organizational attack surfaces, monitor DNS posture, and flag misconfigured S3/Cloud assets using passive OSINT sources.',
    tags: ['Python', 'Network Recon', 'DNS Analysis', 'OSINT', 'Linux CLI'],
    image: terminalImage,
    isSample: true,
    repoUrl: 'https://github.com/ishfaqshafi',
    demoUrl: '#',
    year: '2026',
    category: 'Security Research'
  },
  {
    id: 'editorial-canvas',
    title: 'The Digital Journal: Editorial Publishing Engine',
    subtitle: 'Production-Grade Typography & Reading Architecture',
    description: 'An art-directed, cinematic personal publication engine engineered with TypeScript, Vite, and bespoke editorial typography for long-form essays, reading progress tracking, and zero-bloat delivery.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'UI/UX Design'],
    image: workspaceImage,
    isSample: true,
    repoUrl: 'https://github.com/ishfaqshafi',
    demoUrl: '#',
    year: '2026',
    category: 'Web Architecture'
  },
  {
    id: 'dotfiles-environment',
    title: 'Minimalist Unix Environment & Workstation Dotfiles',
    subtitle: 'Declarative Terminal Setup for Focus & Speed',
    description: 'A clean, reproducible development workflow orchestrated with Zsh, Tmux, Neovim, and custom POSIX shell helpers, tuned for distraction-free coding, split-screen diagnostics, and rapid key navigation.',
    tags: ['Bash', 'Unix', 'Neovim', 'Tmux', 'Productivity'],
    image: architectureImage,
    isSample: true,
    repoUrl: 'https://github.com/ishfaqshafi',
    demoUrl: '#',
    year: '2025',
    category: 'Developer Tooling'
  },
  {
    id: 'optical-syntax',
    title: 'Prism & Code: Generative Syntax Palette',
    subtitle: 'Low-Fatigue Visual Themes for Engineers',
    description: 'An experimental color grading project that maps dusk mountain lighting spectrums and warm paper textures into custom syntax highlighting themes with high WCAG contrast ratios.',
    tags: ['Color Theory', 'Generative Art', 'CSS Variables', 'Accessibility'],
    image: prismImage,
    isSample: true,
    repoUrl: 'https://github.com/ishfaqshafi',
    demoUrl: '#',
    year: '2025',
    category: 'Creative Exploration'
  }
];
