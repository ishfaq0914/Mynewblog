import aboutPortrait from '../assets/images/about_portrait_1792059416442.jpg';
import workspaceImage from '../assets/images/workspace_creative_1792059382868.jpg';

export interface ProfileData {
  name: string;
  publicationName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroHighlight: string;
  heroQuote: string;
  biography: string[];
  principles: {
    number: string;
    title: string;
    description: string;
  }[];
  socialLinks: {
    label: string;
    url: string;
    handle: string;
  }[];
  email: string;
  portraitImage: string;
  workspaceImage: string;
}

export const PROFILE_DATA: ProfileData = {
  name: 'Ishfaq Shafi',
  publicationName: 'THE DIGITAL JOURNAL',
  tagline: 'Curiosity Builds What’s Next.',
  heroHeadline: 'Curiosity\nBuilds\nWhat’s Next.',
  heroHighlight: 'What’s Next.',
  heroSubheadline: 'A self-taught journey through code, cybersecurity, creativity, and the endless pursuit of knowledge.',
  heroQuote: 'The best way to predict the future is to create it.',
  email: 'ishuishfaqshafi@gmail.com',
  portraitImage: aboutPortrait,
  workspaceImage: workspaceImage,
  socialLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/ishfaqshafi',
      handle: '@ishfaqshafi'
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/ishfaqshafi',
      handle: 'Ishfaq Shafi'
    },
    {
      label: 'Email',
      url: 'mailto:ishuishfaqshafi@gmail.com',
      handle: 'ishuishfaqshafi@gmail.com'
    }
  ],
  biography: [
    'I am a self-taught developer and security enthusiast driven by an innate fascination with how computing systems work beneath the surface.',
    'Rather than relying on pre-packaged formulas, my path has been forged through hands-on experimentation—dissecting terminal environments, tracing network packets, analyzing defensive boundaries, and engineering software with intentional craftsmanship.',
    'I believe that the most resilient systems are built with clarity, restraint, and an uncompromising curiosity. Whether writing clean full-stack code, auditing digital attack surfaces, or studying systems architecture, I treat technology as both a discipline of engineering and a creative craft.',
    'The Digital Journal is my personal archive: a dedicated space where I document real technical discoveries, architectural lessons, and notes from an ongoing pursuit of mastery.'
  ],
  principles: [
    {
      number: '01',
      title: 'First-Principles Understanding',
      description: 'Resist shallow abstractions. Uncover the fundamental mechanics of operating systems, protocols, and compilers before building upon them.'
    },
    {
      number: '02',
      title: 'Defensive Architecture',
      description: 'Treat security as an intrinsic property of design, not an afterthought sprayed onto vulnerable foundations.'
    },
    {
      number: '03',
      title: 'Craft & Restraint',
      description: 'Write maintainable code that prioritizes human legibility, minimal cognitive overhead, and quiet performance over fleeting trends.'
    },
    {
      number: '04',
      title: 'Transparent Documentation',
      description: 'Share knowledge with clarity and rigor. True technical mastery is proven by the ability to explain complex systems simply.'
    }
  ]
};
