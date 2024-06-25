import React from 'react';

const Twitter = () => {
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
        <mask
          id="mask0_1569_63891"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x={2}
          y={2}
          width={12}
          height={12}
        >
          <path d="M2 2H14V14H2V2Z" fill="white" />
        </mask>
        <g mask="url(#mask0_1569_63891)">
          <path
            d="M11.45 2.5625H13.2903L9.27029 7.16879L14 13.4379H10.2971L7.39486 9.6365L4.07771 13.4379H2.23571L6.53514 8.50936L2 2.56336H5.79714L8.41657 6.03736L11.45 2.5625ZM10.8029 12.3339H11.8229L5.24 3.60907H4.14629L10.8029 12.3339Z"
            fill="#111111"
          />
        </g>
      </svg>
    </>
  );
};

export default Twitter;
