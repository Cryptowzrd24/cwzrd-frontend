import React from 'react';

interface RiskManagementIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const RiskManagementIcon: React.FC<RiskManagementIconProps> = ({
  width = 160,
  height = 149,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 149"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Chart Background */}
      <rect
        x="20"
        y="20"
        width="120"
        height="100"
        rx="8"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="1"
      />

      {/* Chart Grid Lines */}
      <line x1="20" y1="40" x2="140" y2="40" stroke="#F3F4F6" strokeWidth="1" />
      <line x1="20" y1="60" x2="140" y2="60" stroke="#F3F4F6" strokeWidth="1" />
      <line x1="20" y1="80" x2="140" y2="80" stroke="#F3F4F6" strokeWidth="1" />
      <line
        x1="20"
        y1="100"
        x2="140"
        y2="100"
        stroke="#F3F4F6"
        strokeWidth="1"
      />

      {/* Bar Chart - Green bars (from screenshot) */}
      <rect x="30" y="85" width="12" height="25" rx="2" fill="#00F693" />
      <rect x="45" y="75" width="12" height="35" rx="2" fill="#00F693" />
      <rect x="60" y="65" width="12" height="45" rx="2" fill="#00F693" />
      <rect x="75" y="55" width="12" height="55" rx="2" fill="#00F693" />
      <rect x="90" y="45" width="12" height="65" rx="2" fill="#00F693" />
      <rect x="105" y="35" width="12" height="75" rx="2" fill="#00F693" />
      <rect x="120" y="25" width="12" height="85" rx="2" fill="#00F693" />

      {/* Upward Arrow */}
      <path
        d="M80 15 L85 10 L90 15 L87 15 L87 25"
        stroke="#00F693"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Chart Labels */}
      <text
        x="80"
        y="115"
        fontSize="10"
        fill="#6B7280"
        fontFamily="SF Pro Display"
        textAnchor="middle"
      >
        Risk Level
      </text>
      <text
        x="10"
        y="70"
        fontSize="8"
        fill="#6B7280"
        fontFamily="SF Pro Display"
        textAnchor="middle"
        transform="rotate(-90, 10, 70)"
      >
        Profit %
      </text>

      {/* Success Indicator */}
      <circle cx="140" cy="30" r="8" fill="#00F693" />
      <path
        d="M136 30 L138 32 L144 26"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Chart Title */}
      <text
        x="80"
        y="135"
        fontSize="12"
        fill="#111111"
        fontFamily="SF Pro Display"
        fontWeight="600"
        textAnchor="middle"
      >
        Risk Management
      </text>
    </svg>
  );
};

export default RiskManagementIcon;
