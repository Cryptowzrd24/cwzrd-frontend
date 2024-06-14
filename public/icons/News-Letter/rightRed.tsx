import React from "react";

function RightRed() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="url(#paint0_linear_1475_29358)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1475_29358"
          x1="5.7551"
          y1="4.00001"
          x2="11.68"
          y2="5.49247"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7841A" />
          <stop offset={1} stopColor="#F74848" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default RightRed;
