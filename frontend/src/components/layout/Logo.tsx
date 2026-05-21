interface LogoProps {
  size?: number;
  variant?: 'color' | 'white';
}

export default function Logo({ size = 36, variant = 'color' }: LogoProps) {
  const isDark = variant === 'white';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={`bg-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? '#1E3A6E' : '#0F1F3D'} />
          <stop offset="100%" stopColor={isDark ? '#2563EB' : '#1A56A0'} />
        </linearGradient>
        <linearGradient id={`globe-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? '#3B82F6' : '#1E6FD9'} />
          <stop offset="100%" stopColor={isDark ? '#1D4ED8' : '#0F3A7A'} />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="200" height="200" rx="40" fill={`url(#bg-${variant})`} />

      {/* Globe */}
      <circle cx="94" cy="105" r="58" fill={`url(#globe-${variant})`} opacity="0.9" />
      <ellipse cx="94" cy="105" rx="58" ry="20" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      <ellipse cx="94" cy="105" rx="58" ry="40" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
      <ellipse cx="94" cy="105" rx="22" ry="58" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      <ellipse cx="94" cy="105" rx="44" ry="58" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
      <circle cx="94" cy="105" r="58" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1="36" y1="105" x2="152" y2="105" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />

      {/* Plane */}
      <g transform="translate(100, 72) rotate(-35)">
        <ellipse cx="0" cy="0" rx="18" ry="6" fill="#F5C842" />
        <polygon points="-6,-3 -22,14 -2,5" fill="#F5C842" opacity="0.9" />
        <polygon points="4,-3 20,-16 2,5" fill="#F5C842" opacity="0.9" />
        <polygon points="-14,3 -22,12 -10,6" fill="#F5C842" opacity="0.85" />
        <circle cx="2" cy="-1" r="2.5" fill="rgba(255,255,255,0.5)" />
        <circle cx="-4" cy="-1" r="2" fill="rgba(255,255,255,0.35)" />
      </g>

      {/* Flight path */}
      <path d="M 52 148 Q 100 60 148 62" fill="none" stroke="#F5C842" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
      <circle cx="52" cy="148" r="4" fill="#F5C842" opacity="0.8" />
    </svg>
  );
}
