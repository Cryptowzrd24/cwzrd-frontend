import React from 'react';

interface TakeProfitIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const TakeProfitIcon: React.FC<TakeProfitIconProps> = ({ 
  width = 628, 
  height = 419, 
  className = '' 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 628 419"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bitcoin Symbol - Large B */}
      <path d="M200 50 L220 50 L240 70 L240 90 L220 110 L200 110 L180 90 L180 70 Z" fill="#FFD700" stroke="#FFA500" strokeWidth="3"/>
      
      {/* Bitcoin B Details */}
      <rect x="190" y="60" width="40" height="10" rx="2" fill="#FFA500"/>
      <rect x="190" y="80" width="40" height="10" rx="2" fill="#FFA500"/>
      <rect x="190" y="100" width="40" height="10" rx="2" fill="#FFA500"/>
      
      {/* Vertical Lines */}
      <rect x="200" y="60" width="4" height="50" rx="2" fill="#FFA500"/>
      <rect x="216" y="60" width="4" height="50" rx="2" fill="#FFA500"/>
      
      {/* Additional Bitcoin Symbols */}
      <circle cx="300" cy="150" r="25" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
      <text x="300" y="158" fontSize="20" fill="#8B4513" textAnchor="middle" fontWeight="bold">₿</text>
      
      <circle cx="400" cy="100" r="20" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
      <text x="400" y="108" fontSize="16" fill="#8B4513" textAnchor="middle" fontWeight="bold">₿</text>
      
      <circle cx="500" cy="200" r="30" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
      <text x="500" y="210" fontSize="24" fill="#8B4513" textAnchor="middle" fontWeight="bold">₿</text>
      
      {/* Scattered Coins */}
      <circle cx="150" cy="300" r="8" fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
      <circle cx="180" cy="280" r="6" fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
      <circle cx="210" cy="320" r="7" fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
      <circle cx="240" cy="290" r="5" fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
      <circle cx="270" cy="310" r="6" fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
      
      {/* Dollar Signs on Some Coins */}
      <text x="150" y="304" fontSize="6" fill="#8B4513" textAnchor="middle" fontWeight="bold">$</text>
      <text x="180" y="284" fontSize="5" fill="#8B4513" textAnchor="middle" fontWeight="bold">$</text>
      <text x="210" y="324" fontSize="6" fill="#8B4513" textAnchor="middle" fontWeight="bold">$</text>
      
      {/* Profit Arrows */}
      <path d="M350 50 L360 40 L370 50 L365 50 L365 70" stroke="#00FF37" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M450 80 L460 70 L470 80 L465 80 L465 100" stroke="#00FF37" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M550 120 L560 110 L570 120 L565 120 L565 140" stroke="#00FF37" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Success Indicators */}
      <circle cx="580" cy="50" r="12" fill="#00FF37"/>
      <path d="M575 50 L578 53 L585 46" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      
      <circle cx="580" cy="80" r="12" fill="#00FF37"/>
      <path d="M575 80 L578 83 L585 76" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      
      <circle cx="580" cy="110" r="12" fill="#00FF37"/>
      <path d="M575 110 L578 113 L585 106" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Background Pattern - Subtle Bitcoin symbols */}
      <text x="100" y="50" fontSize="12" fill="#FFD700" textAnchor="middle" opacity="0.1">₿</text>
      <text x="200" y="80" fontSize="10" fill="#FFD700" textAnchor="middle" opacity="0.1">₿</text>
      <text x="300" y="60" fontSize="8" fill="#FFD700" textAnchor="middle" opacity="0.1">₿</text>
      <text x="400" y="40" fontSize="12" fill="#FFD700" textAnchor="middle" opacity="0.1">₿</text>
      <text x="500" y="70" fontSize="10" fill="#FFD700" textAnchor="middle" opacity="0.1">₿</text>
    </svg>
  );
};

export default TakeProfitIcon;
