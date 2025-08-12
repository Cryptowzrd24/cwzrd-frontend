import React from 'react';

interface AirdropCallsIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const AirdropCallsIcon: React.FC<AirdropCallsIconProps> = ({
  width = 285,
  height = 267,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 285 267"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Wallet/Box - Purple gradient */}
      <rect
        x="20"
        y="60"
        width="120"
        height="80"
        rx="8"
        fill="url(#purpleGradient)"
        stroke="#5A2F9E"
        strokeWidth="2"
      />

      {/* Wallet Opening */}
      <rect x="20" y="60" width="120" height="20" rx="8" fill="#8B5CF6" />
      <rect x="30" y="65" width="100" height="10" rx="4" fill="#A855F7" />

      {/* Coins Spilling Out - Golden coins */}
      <circle
        cx="40"
        cy="80"
        r="12"
        fill="#FFD700"
        stroke="#FFA500"
        strokeWidth="2"
      />
      <circle
        cx="60"
        cy="75"
        r="10"
        fill="#FFD700"
        stroke="#FFA500"
        strokeWidth="2"
      />
      <circle
        cx="80"
        cy="70"
        r="11"
        fill="#FFD700"
        stroke="#FFA500"
        strokeWidth="2"
      />
      <circle
        cx="100"
        cy="65"
        r="9"
        fill="#FFD700"
        stroke="#FFA500"
        strokeWidth="2"
      />
      <circle
        cx="120"
        cy="60"
        r="10"
        fill="#FFD700"
        stroke="#FFA500"
        strokeWidth="2"
      />

      {/* Bitcoin Symbols on Coins */}
      <text
        x="40"
        y="85"
        fontSize="10"
        fill="#8B4513"
        textAnchor="middle"
        fontWeight="bold"
      >
        ₿
      </text>
      <text
        x="60"
        y="80"
        fontSize="8"
        fill="#8B4513"
        textAnchor="middle"
        fontWeight="bold"
      >
        ₿
      </text>
      <text
        x="80"
        y="75"
        fontSize="9"
        fill="#8B4513"
        textAnchor="middle"
        fontWeight="bold"
      >
        ₿
      </text>
      <text
        x="100"
        y="70"
        fontSize="7"
        fill="#8B4513"
        textAnchor="middle"
        fontWeight="bold"
      >
        ₿
      </text>
      <text
        x="120"
        y="65"
        fontSize="8"
        fill="#8B4513"
        textAnchor="middle"
        fontWeight="bold"
      >
        ₿
      </text>

      {/* Dollar Signs on Some Coins */}
      <circle
        cx="140"
        cy="55"
        r="8"
        fill="#FFD700"
        stroke="#FFA500"
        strokeWidth="2"
      />
      <circle
        cx="160"
        cy="50"
        r="9"
        fill="#FFD700"
        stroke="#FFA500"
        strokeWidth="2"
      />
      <text
        x="140"
        y="60"
        fontSize="7"
        fill="#8B4513"
        textAnchor="middle"
        fontWeight="bold"
      >
        $
      </text>
      <text
        x="160"
        y="55"
        fontSize="8"
        fill="#8B4513"
        textAnchor="middle"
        fontWeight="bold"
      >
        $
      </text>

      {/* Additional Falling Coins */}
      <circle
        cx="180"
        cy="45"
        r="7"
        fill="#FFD700"
        stroke="#FFA500"
        strokeWidth="2"
      />
      <circle
        cx="200"
        cy="40"
        r="8"
        fill="#FFD700"
        stroke="#FFA500"
        strokeWidth="2"
      />
      <circle
        cx="220"
        cy="35"
        r="6"
        fill="#FFD700"
        stroke="#FFA500"
        strokeWidth="2"
      />

      {/* Wallet Details */}
      <rect x="30" y="90" width="100" height="40" rx="4" fill="#6B46C1" />
      <rect x="40" y="100" width="80" height="20" rx="2" fill="#8B5CF6" />

      {/* Gradients */}
      <defs>
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7E44F1" />
          <stop offset="100%" stopColor="#5A2F9E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AirdropCallsIcon;
