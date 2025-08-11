import React from 'react';

interface WZRDStrategiesIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const WZRDStrategiesIcon: React.FC<WZRDStrategiesIconProps> = ({ 
  width = 284, 
  height = 237, 
  className = '' 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 284 237"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Removed purple square/solid background to keep only the object */}
      
      {/* Target Rings */}
      <circle cx="142" cy="118" r="80" fill="none" stroke="#7248F7" strokeWidth="2"/>
      <circle cx="142" cy="118" r="60" fill="none" stroke="#7248F7" strokeWidth="2"/>
      <circle cx="142" cy="118" r="40" fill="none" stroke="#7248F7" strokeWidth="2"/>
      <circle cx="142" cy="118" r="20" fill="none" stroke="#7248F7" strokeWidth="2"/>
      
      {/* Bullseye */}
      <circle cx="142" cy="118" r="8" fill="#7248F7"/>
      
      {/* Darts - Different colors */}
      {/* Dart 1 - Red */}
      <path d="M142 30 L145 35 L142 40 L139 35 Z" fill="#FF6B6B"/>
      <line x1="142" y1="40" x2="142" y2="118" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round"/>
      
      {/* Dart 2 - Blue */}
      <path d="M200 118 L195 121 L190 118 L195 115 Z" fill="#4ECDC4"/>
      <line x1="190" y1="118" x2="142" y2="118" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round"/>
      
      {/* Dart 3 - Green */}
      <path d="M142 206 L145 201 L142 196 L139 201 Z" fill="#45B7D1"/>
      <line x1="142" y1="196" x2="142" y2="118" stroke="#45B7D1" strokeWidth="3" strokeLinecap="round"/>
      
      {/* Dart 4 - Orange */}
      <path d="M84 118 L89 121 L94 118 L89 115 Z" fill="#FFA726"/>
      <line x1="94" y1="118" x2="142" y2="118" stroke="#FFA726" strokeWidth="3" strokeLinecap="round"/>
      
      {/* Success Indicators */}
      <circle cx="142" cy="118" r="5" fill="#00FF37"/>
      <circle cx="142" cy="118" r="3" fill="white"/>
      
      {/* Strategy Lines */}
      <path d="M80 80 L120 100" stroke="#7248F7" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
      <path d="M200 160 L160 140" stroke="#7248F7" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
      <path d="M160 80 L200 100" stroke="#7248F7" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
      <path d="M120 160 L80 140" stroke="#7248F7" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
      
      {/* Target Title */}
      <text x="142" y="200" fontSize="14" fill="#7248F7" fontFamily="SF Pro Display" fontWeight="600" textAnchor="middle">WZRD Target</text>
    </svg>
  );
};

export default WZRDStrategiesIcon;
