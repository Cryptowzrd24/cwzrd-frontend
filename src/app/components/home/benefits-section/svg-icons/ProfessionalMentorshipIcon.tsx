import React from 'react';

interface ProfessionalMentorshipIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const ProfessionalMentorshipIcon: React.FC<ProfessionalMentorshipIconProps> = ({
  width = 64,
  height = 64,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle with Blur Effect */}
      <circle
        cx="32"
        cy="32"
        r="32"
        fill="rgba(255, 255, 255, 0.20)"
        filter="url(#blur)"
      />

      {/* Person's Head */}
      <circle cx="32" cy="24" r="6" fill="white" />

      {/* Person's Body */}
      <rect x="28" y="30" width="8" height="12" rx="4" fill="white" />

      {/* Speech Bubble */}
      <path d="M48 12 Q52 8 56 12 Q52 16 48 12 Z" fill="white" />
      <rect x="48" y="12" width="10" height="6" rx="3" fill="white" />

      {/* Speech Bubble Tail */}
      <path
        d="M48 18 L46 22 L48 26"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Person's Arms */}
      <rect x="24" y="32" width="2" height="6" rx="1" fill="white" />
      <rect x="38" y="32" width="2" height="6" rx="1" fill="white" />

      {/* Person's Legs */}
      <rect x="30" y="42" width="2" height="4" rx="1" fill="white" />
      <rect x="32" y="42" width="2" height="4" rx="1" fill="white" />

      {/* Person's Face Details */}
      <circle cx="30" cy="22" r="1" fill="#333" />
      <circle cx="34" cy="22" r="1" fill="#333" />
      <path d="M30 26 Q32 28 34 26" stroke="#333" strokeWidth="1" fill="none" />

      {/* Filter for Blur Effect */}
      <defs>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
    </svg>
  );
};

export default ProfessionalMentorshipIcon;
