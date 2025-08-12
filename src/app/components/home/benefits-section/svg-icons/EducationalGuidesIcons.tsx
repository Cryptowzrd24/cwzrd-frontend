import React from 'react';

interface BrainIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const BrainIcon: React.FC<BrainIconProps> = ({
  width = 52,
  height = 46,
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 52 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M26 8 C32 8, 38 12, 38 20 C38 28, 32 32, 26 32 C20 32, 14 28, 14 20 C14 12, 20 8, 26 8 Z"
      fill="#111111"
    />
    <path
      d="M20 16 C22 14, 24 14, 26 16 C28 14, 30 14, 32 16"
      stroke="#111111"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M18 24 C20 22, 24 22, 26 24 C28 22, 32 22, 34 24"
      stroke="#111111"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

interface DocumentIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const DocumentIcon: React.FC<DocumentIconProps> = ({
  width = 56,
  height = 56,
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="8" y="4" width="40" height="48" rx="2" fill="#111111" />
    <rect x="12" y="12" width="32" height="2" fill="white" />
    <rect x="12" y="18" width="24" height="2" fill="white" />
    <rect x="12" y="24" width="28" height="2" fill="white" />
    <rect x="12" y="30" width="20" height="2" fill="white" />
    <rect x="12" y="36" width="26" height="2" fill="white" />
  </svg>
);

interface GraduationCapIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const GraduationCapIcon: React.FC<GraduationCapIconProps> = ({
  width = 72,
  height = 72,
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M36 12 L60 24 L36 36 L12 24 Z" fill="white" />
    <rect x="32" y="36" width="8" height="24" fill="white" />
    <path
      d="M12 24 L12 48 L36 60 L60 48 L60 24"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

interface FlagIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const FlagIcon: React.FC<FlagIconProps> = ({
  width = 58,
  height = 58,
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="20" y="8" width="2" height="42" fill="#111111" />
    <path d="M22 8 L40 16 L40 32 L22 24 Z" fill="#111111" />
    <path
      d="M22 8 L22 24 L40 32"
      stroke="#111111"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

interface DataIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const DataIcon: React.FC<DataIconProps> = ({
  width = 44,
  height = 44,
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="8" y="8" width="28" height="28" rx="2" fill="#111111" />
    <rect x="12" y="12" width="20" height="4" fill="white" />
    <rect x="12" y="20" width="16" height="4" fill="white" />
    <rect x="12" y="28" width="18" height="4" fill="white" />
  </svg>
);
