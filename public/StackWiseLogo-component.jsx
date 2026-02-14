// components/StackWiseLogo.jsx
// Easy-to-use React component for StackWise logo

export default function StackWiseLogo({ 
  variant = "minimal", // "minimal", "primary", "icon", "wordmark", "white", "black"
  width = 400,
  className = ""
}) {
  
  const logos = {
    minimal: (
      <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="stackwise-logo-minimal">
          <g id="minimal-icon" transform="translate(100, 80)">
            <rect x="0" y="0" width="80" height="25" rx="6" fill="url(#gradient-block1)"/>
            <rect x="20" y="35" width="80" height="25" rx="6" fill="url(#gradient-block2)"/>
            <rect x="0" y="70" width="80" height="25" rx="6" fill="url(#gradient-block3)"/>
            <circle cx="40" cy="30" r="3" fill="#00d4ff"/>
            <circle cx="60" cy="65" r="3" fill="#06b6d4"/>
            <circle cx="40" cy="100" r="3" fill="#a855f7"/>
            <rect x="0" y="0" width="80" height="25" rx="6" fill="url(#glow1)" opacity="0.3"/>
            <rect x="20" y="35" width="80" height="25" rx="6" fill="url(#glow2)" opacity="0.3"/>
            <rect x="0" y="70" width="80" height="25" rx="6" fill="url(#glow3)" opacity="0.3"/>
          </g>
          <g id="text" transform="translate(220, 110)">
            <text x="0" y="50" fontFamily="Inter, sans-serif" fontSize="64" fontWeight="700" fill="white" letterSpacing="-1">
              StackWise
            </text>
            <text x="2" y="80" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="500" fill="#737373" letterSpacing="2">
              FULL-STACK SOLUTIONS
            </text>
          </g>
        </g>
        <defs>
          <linearGradient id="gradient-block1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"#00d4ff", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#00b8e6", stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="gradient-block2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"#06b6d4", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#0891b2", stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="gradient-block3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"#a855f7", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#9333ea", stopOpacity:1}} />
          </linearGradient>
          <radialGradient id="glow1">
            <stop offset="0%" style={{stopColor:"#00d4ff", stopOpacity:0.8}} />
            <stop offset="100%" style={{stopColor:"#00d4ff", stopOpacity:0}} />
          </radialGradient>
          <radialGradient id="glow2">
            <stop offset="0%" style={{stopColor:"#06b6d4", stopOpacity:0.8}} />
            <stop offset="100%" style={{stopColor:"#06b6d4", stopOpacity:0}} />
          </radialGradient>
          <radialGradient id="glow3">
            <stop offset="0%" style={{stopColor:"#a855f7", stopOpacity:0.8}} />
            <stop offset="100%" style={{stopColor:"#a855f7", stopOpacity:0}} />
          </radialGradient>
        </defs>
      </svg>
    ),
    
    icon: (
      <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="200" height="60" rx="12" fill="url(#gradient-icon1)"/>
        <rect x="50" y="80" width="200" height="60" rx="12" fill="url(#gradient-icon2)"/>
        <rect x="0" y="160" width="200" height="60" rx="12" fill="url(#gradient-icon3)"/>
        <rect x="0" y="0" width="200" height="60" rx="12" fill="url(#glow-icon1)" opacity="0.4"/>
        <rect x="50" y="80" width="200" height="60" rx="12" fill="url(#glow-icon2)" opacity="0.4"/>
        <rect x="0" y="160" width="200" height="60" rx="12" fill="url(#glow-icon3)" opacity="0.4"/>
        <circle cx="100" cy="70" r="8" fill="#00d4ff"/>
        <circle cx="150" cy="150" r="8" fill="#06b6d4"/>
        <defs>
          <linearGradient id="gradient-icon1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"#00d4ff", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#00b8e6", stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="gradient-icon2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"#06b6d4", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#0891b2", stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="gradient-icon3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"#a855f7", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#9333ea", stopOpacity:1}} />
          </linearGradient>
          <radialGradient id="glow-icon1">
            <stop offset="0%" style={{stopColor:"#00d4ff", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#00d4ff", stopOpacity:0}} />
          </radialGradient>
          <radialGradient id="glow-icon2">
            <stop offset="0%" style={{stopColor:"#06b6d4", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#06b6d4", stopOpacity:0}} />
          </radialGradient>
          <radialGradient id="glow-icon3">
            <stop offset="0%" style={{stopColor:"#a855f7", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#a855f7", stopOpacity:0}} />
          </radialGradient>
        </defs>
      </svg>
    ),
    
    white: (
      <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="icon" transform="translate(100, 80)">
          <rect x="0" y="0" width="80" height="25" rx="6" fill="white"/>
          <rect x="20" y="35" width="80" height="25" rx="6" fill="white" opacity="0.8"/>
          <rect x="0" y="70" width="80" height="25" rx="6" fill="white" opacity="0.6"/>
          <circle cx="40" cy="30" r="3" fill="white"/>
          <circle cx="60" cy="65" r="3" fill="white"/>
          <circle cx="40" cy="100" r="3" fill="white"/>
        </g>
        <g id="text" transform="translate(220, 110)">
          <text x="0" y="50" fontFamily="Inter, sans-serif" fontSize="64" fontWeight="700" fill="white" letterSpacing="-1">
            StackWise
          </text>
          <text x="2" y="80" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="500" fill="white" opacity="0.6" letterSpacing="2">
            FULL-STACK SOLUTIONS
          </text>
        </g>
      </svg>
    ),
    
    black: (
      <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="icon" transform="translate(100, 80)">
          <rect x="0" y="0" width="80" height="25" rx="6" fill="#0a0a0a"/>
          <rect x="20" y="35" width="80" height="25" rx="6" fill="#0a0a0a" opacity="0.8"/>
          <rect x="0" y="70" width="80" height="25" rx="6" fill="#0a0a0a" opacity="0.6"/>
          <circle cx="40" cy="30" r="3" fill="#0a0a0a"/>
          <circle cx="60" cy="65" r="3" fill="#0a0a0a"/>
          <circle cx="40" cy="100" r="3" fill="#0a0a0a"/>
        </g>
        <g id="text" transform="translate(220, 110)">
          <text x="0" y="50" fontFamily="Inter, sans-serif" fontSize="64" fontWeight="700" fill="#0a0a0a" letterSpacing="-1">
            StackWise
          </text>
          <text x="2" y="80" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="500" fill="#0a0a0a" opacity="0.6" letterSpacing="2">
            FULL-STACK SOLUTIONS
          </text>
        </g>
      </svg>
    ),
    
    wordmark: (
      <svg viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50, 60)">
          <text x="0" y="60" fontFamily="Inter, sans-serif" fontSize="72" fontWeight="800" fill="url(#gradient-text-wm)" letterSpacing="-2">
            Stack
          </text>
          <text x="240" y="60" fontFamily="Inter, sans-serif" fontSize="72" fontWeight="800" fill="white" letterSpacing="-2">
            Wise
          </text>
          <line x1="0" y1="80" x2="200" y2="80" stroke="url(#gradient-line-wm)" strokeWidth="4" strokeLinecap="round"/>
          <text x="2" y="110" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="500" fill="#737373" letterSpacing="3">
            DIGITAL SOLUTIONS
          </text>
        </g>
        <defs>
          <linearGradient id="gradient-text-wm" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"#00d4ff", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#a855f7", stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="gradient-line-wm" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"#00d4ff", stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:"#06b6d4", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#a855f7", stopOpacity:1}} />
          </linearGradient>
        </defs>
      </svg>
    )
  };
  
  return (
    <div className={className} style={{ width: `${width}px` }}>
      {logos[variant] || logos.minimal}
    </div>
  );
}

// Usage examples:
/*

// In your Next.js pages or components:

import StackWiseLogo from '@/components/StackWiseLogo';

// Default (minimal version)
<StackWiseLogo />

// Icon only
<StackWiseLogo variant="icon" width={100} />

// White version for dark backgrounds
<StackWiseLogo variant="white" width={300} />

// Black version for light backgrounds  
<StackWiseLogo variant="black" width={300} />

// Wordmark only
<StackWiseLogo variant="wordmark" width={400} />

// With custom className for Tailwind
<StackWiseLogo 
  variant="minimal" 
  width={200} 
  className="mx-auto my-8 hover:scale-105 transition-transform" 
/>

*/
