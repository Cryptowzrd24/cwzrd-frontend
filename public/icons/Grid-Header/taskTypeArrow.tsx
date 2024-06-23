export const TaskTypeArrow = ({ value }: { value: string }) => {
  return value == 'Mint NFT' ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="url(#paint0_linear_1904_13750)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1904_13750"
          x1="5.7551"
          y1="4.00001"
          x2="11.68"
          y2="5.49247"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={'#F7841A'} />
          <stop offset="1" stop-color={'#F74848'} />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="url(#paint0_linear_1904_11770)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1904_11770"
          x1="8"
          y1="4"
          x2="8"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3761FB" />
          <stop offset="1" stop-color="#37A9FB" />
        </linearGradient>
      </defs>
    </svg>
  );
};
