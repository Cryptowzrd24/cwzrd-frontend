type ReadMoreIconProps = {
  isGradient?: boolean;
  isMainPage?: boolean;
};

export const ReadMoreIcon = ({ isGradient, isMainPage }: ReadMoreIconProps) => {
  const gradientId = isMainPage
    ? 'readMoreGradientMain'
    : 'readMoreGradientOther';

  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 11L6.5 6L1.5 1"
        // stroke="url(#paint0_linear_82_1560)"
        stroke={!isGradient ? `url(#${gradientId})` : 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="4"
          y1="1"
          x2="4"
          y2="11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={isMainPage ? '#F7841A' : '#7248F7'} />
          <stop offset="1" stop-color={isMainPage ? '#F74848' : '#BF48F7'} />
        </linearGradient>
      </defs>
    </svg>
  );
};
