import React from 'react';

function ArrowRightBlack({width=20, height=20}: {width?: number, height?: number}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 15.5L13 10.5L8 5.5"
        stroke="#111111"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ArrowRightBlack;
