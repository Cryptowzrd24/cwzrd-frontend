import React from 'react';

interface ExpertLessonsIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const ExpertLessonsIcon: React.FC<ExpertLessonsIconProps> = ({ 
  width = 151, 
  height = 153, 
  className = '' 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 151 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Glowing Background */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Screen/Device with Glow */}
      <rect x="20" y="20" width="111" height="113" rx="8" fill="#82C7FF" filter="url(#glow)"/>
      <rect x="25" y="25" width="101" height="103" rx="4" fill="#1A1A2E"/>
      
      {/* Chart Background */}
      <rect x="30" y="30" width="91" height="60" rx="4" fill="#2D2D4A"/>
      
      {/* Line Chart */}
      <path d="M35 70 L45 65 L55 68 L65 60 L75 55 L85 50 L95 45 L105 40 L115 35" 
            stroke="#00EEFF" strokeWidth="2" fill="none"/>
      
      {/* Bar Chart Overlay */}
      <rect x="35" y="70" width="8" height="15" fill="#00EEFF" opacity="0.6"/>
      <rect x="45" y="65" width="8" height="20" fill="#00EEFF" opacity="0.6"/>
      <rect x="55" y="68" width="8" height="17" fill="#00EEFF" opacity="0.6"/>
      <rect x="65" y="60" width="8" height="25" fill="#00EEFF" opacity="0.6"/>
      <rect x="75" y="55" width="8" height="30" fill="#00EEFF" opacity="0.6"/>
      <rect x="85" y="50" width="8" height="35" fill="#00EEFF" opacity="0.6"/>
      <rect x="95" y="45" width="8" height="40" fill="#00EEFF" opacity="0.6"/>
      <rect x="105" y="40" width="8" height="45" fill="#00EEFF" opacity="0.6"/>
      <rect x="115" y="35" width="8" height="50" fill="#00EEFF" opacity="0.6"/>
      
      {/* Pie Chart */}
      <circle cx="120" cy="100" r="15" fill="#FF6B6B"/>
      <path d="M120 85 A15 15 0 0 1 130 95 L120 100 Z" fill="#4ECDC4"/>
      <path d="M120 100 A15 15 0 0 1 110 110 L120 100 Z" fill="#45B7D1"/>
      
      {/* Data Points */}
      <circle cx="40" cy="75" r="2" fill="#00EEFF"/>
      <circle cx="60" cy="70" r="2" fill="#00EEFF"/>
      <circle cx="80" cy="65" r="2" fill="#00EEFF"/>
      <circle cx="100" cy="60" r="2" fill="#00EEFF"/>
      
      {/* Screen Glow Effect */}
      <rect x="15" y="15" width="121" height="123" rx="10" fill="none" stroke="#82C7FF" strokeWidth="2" opacity="0.3"/>
      
      {/* Screen Border */}
      <rect x="20" y="20" width="111" height="113" rx="8" fill="none" stroke="#82C7FF" strokeWidth="1" opacity="0.5"/>
    </svg>
  );
};

export default ExpertLessonsIcon;
