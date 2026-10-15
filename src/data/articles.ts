export interface ArticleSection {
  id: string;
  number: string;
  title: string;
  content: string[];
  pullQuote?: string;
  image?: {
    src: string;
    caption: string;
    alt: string;
  };
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: 'Technology' | 'Development' | 'Cybersecurity' | 'Creativity' | 'Personal';
  readTime: string;
  publishedDate: string;
  isFeatured?: boolean;
  isSample?: boolean;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  sections?: ArticleSection[];
}

import heroImage from '../assets/images/hero_mountain_sunset_1792059347744.jpg';
import workspaceImage from '../assets/images/workspace_creative_1792059382868.jpg';
import terminalImage from '../assets/images/terminal_systems_1792059454971.jpg';
import architectureImage from '../assets/images/journal_architecture_1792059577568.jpg';
import prismImage from '../assets/images/journal_prism_still_1792059631079.jpg';
import aboutImage from '../assets/images/about_portrait_1792059416442.jpg';

export const FEATURED_ARTICLE_SLUG = 'from-curiosity-to-code';

export const ARTICLES: Article[] = [
  {
    slug: 'from-curiosity-to-code',
    title: 'From Curiosity to Code: My Journey as a Self-Taught Developer & Security Enthusiast',
    subtitle: 'An analytical memoir traversing command line interfaces, protocol dissection, software craft, and the disciplined pursuit of technical mastery.',
    excerpt: 'How an obsession with understanding how computers truly talk to one another sparked an uncompromising path from terminal prompts to full-stack systems and security research.',
    category: 'Development',
    readTime: '9 min read',
    publishedDate: 'October 2026',
    isFeatured: true,
    isSample: false,
    coverImage: workspaceImage,
    author: {
      name: 'Ishfaq Shafi',
      role: 'Self-Taught Developer & Security Enthusiast',
    },
    sections: [
      {
        id: 'foundation',
        number: '01',
        title: 'The Foundation: Analytical Thinking & Problem Solving',
        content: [
          'Every self-taught journey begins not with answers, but with a persistent discomfort with abstractions. Long before I compiled my first executable or configured a local socket, I found myself fascinated by the hidden machinery behind everyday software. Most people experience digital technology as polished glass—smooth, responsive, and opaque. To me, every click, every latency dip, and every unexpected error message felt like an invitation to look behind the partition.',
          'Early on, I realized that true analytical thinking is not about memorizing syntax or stockpiling tools; it is the discipline of decomposing a sprawling, opaque problem into its smallest irreducible elements. When something failed, I resisted the urge to immediately seek prepackaged forum answers. Instead, I trained myself to isolate variables, form testable hypotheses, and trace execution paths manually.',
          'This mental framework became my bedrock. Code ceased being a sequence of magic incantations and became structured logic. When you view systems as deterministic cause-and-effect state machines, intimidation gives way to curiosity. You stop asking "Does this work?" and begin asking "Why does this behave this way, and under what conditions will it fail?"'
        ],
        pullQuote: 'True analytical thinking is not about memorizing syntax; it is the discipline of decomposing an opaque problem into its smallest irreducible elements.'
      },
      {
        id: 'command-line',
        number: '02',
        title: 'Exploring the Command Line: Linux & Networking',
        content: [
          'The transition from casual computing to deep exploration happened the afternoon I replaced the graphical desktop with a clean Linux terminal. Stripping away the abstraction of graphical user interfaces was both disorienting and deeply liberating. Suddenly, the operating system was no longer a black box; it was a transparent hierarchy of processes, file descriptors, standard streams, and kernel signals.',
          'I spent months immersing myself in POSIX fundamentals, Bash scripting, and Unix philosophy—the art of small, focused programs communicating over text streams. Tools like `awk`, `sed`, `grep`, and piping primitives taught me the beauty of composability.',
          'Parallel to the terminal was my introduction to computer networking. Reading about TCP/IP handshakes, ARP resolutions, routing tables, and DNS queries in textbooks was informative, but analyzing live traffic through Wireshark and tcpdump made it visceral. Seeing raw packets flow across network interfaces grounded every layer of computing in tangible reality. I learned that data is never merely teleported—it is negotiated, framed, checksummed, and routed packet by packet through physical silicon.'
        ],
        image: {
          src: terminalImage,
          caption: 'Fig. 1 — Terminal environment, network topologies, and systems documentation.',
          alt: 'Laptop showing terminal and architectural blueprints on wooden desk'
        }
      },
      {
        id: 'cybersecurity',
        number: '03',
        title: 'Diving into Cybersecurity & Reconnaissance',
        content: [
          'With a working grasp of networking and operating systems, cybersecurity was not an abrupt detour; it was the inevitable continuation of the question: "How do these systems break?" Security, at its core, is simply computer science observed from an adversarial perspective. Developers construct systems based on intended behavior; security researchers evaluate systems based on actual behavior under boundary conditions.',
          'I dedicated significant time to active reconnaissance, vulnerability assessment methodologies, and defensive mechanics. I studied the OWASP Top 10, cross-site scripting vectors, SQL injection mechanisms, broken object level authorization (BOLA), and network surface mapping. Passive reconnaissance fascinated me—uncovering misconfigured subdomains, exposed S3 buckets, and leaked credential footprints through structured OSINT without ever sending an intrusive probe.',
          'This phase instilled a deep sense of architectural humility. Security is not an afterthought you spray on top of an application with an SSL certificate. True defense requires defensive architecture from day zero: strict input validation, least-privilege principles, cryptographically secure sessions, and defense-in-depth.'
        ],
        pullQuote: 'Security is simply computer science observed from an adversarial perspective: evaluating systems based on actual behavior rather than intended assumptions.'
      },
      {
        id: 'writing-code',
        number: '04',
        title: 'Writing Code: Software Development & Automation',
        content: [
          'Understanding security vulnerabilities naturally made me a far more meticulous programmer. I did not want to merely audit systems; I wanted to build robust, resilient software that stood up under real-world pressure. I turned my attention to software engineering, automation, and full-stack development.',
          'Writing automation scripts in Python, constructing fast APIs, and architecting modern responsive user interfaces with TypeScript and React taught me the nuances of maintainable codebases. I learned that writing code is easy, but writing clean, maintainable, readable code that another engineer—or your future self—can reason about six months later is an art form.',
          'I focused on building practical utilities: CLI tools that automate repetitive recon chores, web dashboards that synthesize data cleanly, and lightweight applications with zero bloat. Every project was built with the conviction that simplicity is the ultimate sophistication in software architecture.'
        ]
      },
      {
        id: 'expanding-horizons',
        number: '05',
        title: 'Expanding Horizons: Content Creation & Freelancing',
        content: [
          'Knowledge locked in a local notebook has limited velocity. As my skill set crystallized, I recognized the value of documentation and sharing lessons publicly. The Feynman technique proved true: you only genuinely understand a concept when you can explain it clearly to someone encountering it for the first time.',
          'I began writing technical breakdowns, synthesizing security concepts into accessible articles, and taking on independent freelance projects. Working with clients and collaborators brought a vital new dimension to technical work: empathy, communication, scope management, and deadline discipline.',
          'Freelancing taught me that technical excellence without clear human communication is incomplete. Clients rarely care about what database engine you choose; they care that the solution is reliable, secure, fast, and solves the underlying business friction. Translating technical complexity into actionable clarity became one of my most prized competencies.'
        ],
        image: {
          src: architectureImage,
          caption: 'Fig. 2 — Structural rigor and architectural balance in technical execution.',
          alt: 'Architectural lattice bridge structure in atmospheric mist'
        }
      },
      {
        id: 'looking-ahead',
        number: '06',
        title: 'Looking Ahead',
        content: [
          'The self-taught path is not a sprint with a finish line; it is a permanent posture of intellectual curiosity. The digital landscape evolves with relentless velocity—from decentralized protocols and container orchestration to modern distributed systems and adversarial AI.',
          'My commitment remains unchanged: to approach technology with craftsman-like integrity, unshakeable curiosity, and deep ethical conviction. I build to understand, I understand to protect, and I protect to empower.',
          'Whether through building independent software, conducting deep security research, or writing notes here in The Digital Journal, the journey continues with every line of code committed, every RFC studied, and every new question explored.'
        ],
        pullQuote: 'The self-taught path is not a sprint with a finish line; it is a permanent posture of intellectual curiosity.'
      }
    ]
  },
  {
    slug: 'unix-philosophy-endures',
    title: 'Why the Unix Philosophy Outlives Every Modern Framework',
    subtitle: 'Small programs, text streams, and composable primitives in an age of hyper-complex software stacks.',
    excerpt: 'Examining why fifty-year-old architectural principles of composability, silence on success, and simple text streams remain the antidote to modern enterprise bloat.',
    category: 'Technology',
    readTime: '6 min read',
    publishedDate: 'September 2026',
    isSample: true,
    coverImage: terminalImage,
    author: {
      name: 'Ishfaq Shafi',
      role: 'Self-Taught Developer & Security Enthusiast',
    },
    sections: [
      {
        id: 'composability',
        number: '01',
        title: 'The Enduring Elegance of Composability',
        content: [
          'Modern software development has a tendency to reinvent wheels within ever-thickening layers of abstraction. Yet beneath modern cloud orchestration and container runtimes lies an architecture drafted in the early 1970s at Bell Labs.',
          'The core Unix doctrine—write programs that do one thing and do it well, write programs to work together, and write programs to handle text streams—is not an obsolete aesthetic. It is a fundamental truth about distributed systems.'
        ]
      }
    ]
  },
  {
    slug: 'surface-area-reconnaissance',
    title: 'Dissecting Modern Attack Surfaces: Beyond Port Scans',
    subtitle: 'Passive reconnaissance, cloud asset leaks, and why identity has become the ultimate perimeter.',
    excerpt: 'A practical reflection on why modern network perimeters have dissolved into distributed identity tokens, metadata leaks, and misconfigured API endpoints.',
    category: 'Cybersecurity',
    readTime: '8 min read',
    publishedDate: 'August 2026',
    isSample: true,
    coverImage: architectureImage,
    author: {
      name: 'Ishfaq Shafi',
      role: 'Self-Taught Developer & Security Enthusiast',
    },
    sections: [
      {
        id: 'perimeter-dissolution',
        number: '01',
        title: 'The Dissolution of the Fortress Model',
        content: [
          'In traditional network architecture, defense was modeled on castle walls: internal subnets were trusted, edge firewalls inspected ingress, and external actors were held at the moat.',
          'Today, with distributed workers, microservices, and OAuth tokens, the concept of a single perimeter is dead. Reconnaissance today focuses on exposed metadata, unverified redirects, and cloud posture drifts.'
        ]
      }
    ]
  },
  {
    slug: 'craft-of-focused-engineering',
    title: 'The Craft of Focused Engineering: Silence, Depth & Flow',
    subtitle: 'Carving out cognitive quiet in a hyper-stimulated industry obsessed with shallow novelty.',
    excerpt: 'Observations on cultivating deep work habits, avoiding notification fatigue, and building software with calm, deliberate attention.',
    category: 'Personal',
    readTime: '5 min read',
    publishedDate: 'July 2026',
    isSample: true,
    coverImage: prismImage,
    author: {
      name: 'Ishfaq Shafi',
      role: 'Self-Taught Developer & Security Enthusiast',
    },
    sections: [
      {
        id: 'cognitive-space',
        number: '01',
        title: 'Cognitive Space as a Technical Asset',
        content: [
          'Code quality is directly correlated with cognitive continuity. When attention is fractured across dozens of Slack pings, social feeds, and trending repository drama, our capacity to maintain complex mental models degrades.',
          'Engineering excellence requires long, undisturbed blocks of contemplative focus. The greatest breakthroughs happen when you sit quietly with a problem long enough for its true topology to emerge.'
        ]
      }
    ]
  },
  {
    slug: 'creative-computing-logic-art',
    title: 'Between Logic and Light: Creative Computing Experiments',
    subtitle: 'Finding harmony where mathematical precision meets fine-art visual composition.',
    excerpt: 'Exploring generative shaders, typography math, and the tactile joy of building visual tools that treat software as an expressive medium.',
    category: 'Creativity',
    readTime: '7 min read',
    publishedDate: 'June 2026',
    isSample: true,
    coverImage: heroImage,
    author: {
      name: 'Ishfaq Shafi',
      role: 'Self-Taught Developer & Security Enthusiast',
    },
    sections: [
      {
        id: 'visual-medium',
        number: '01',
        title: 'Software as an Expressive Canvas',
        content: [
          'To many, code is purely utilitarian—a means to push data from database tables to client screens. But to those who study its structure, code shares more with typography, architecture, and musical composition than mechanical assembly.',
          'When we respect the visual pacing, contrast, and tactile rhythm of an interface, technology becomes human.'
        ]
      }
    ]
  }
];
