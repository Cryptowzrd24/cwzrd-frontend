import React from 'react';

const RightArrowLinearGraident = () => {
  return (
    <>
      {/* Hello world */}
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12L10 8L6 4"
          stroke="url(#paint0_linear_2515_18631)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2515_18631"
            x1={8}
            y1={4}
            x2={8}
            y2={12}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7248F7" />
            <stop offset={1} stopColor="#BF48F7" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default RightArrowLinearGraident;
