interface IconProps {
  isActive: boolean;
}
function LightmodeIcon({ isActive }: IconProps) {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={40}
        height={40}
        rx={20}
        fill={isActive ? '#7248F7' : 'white'}
      />
      <g clipPath="url(#clip0_1322_13253)">
        <path
          d="M20.0007 24.1663C22.3018 24.1663 24.1673 22.3009 24.1673 19.9997C24.1673 17.6985 22.3018 15.833 20.0007 15.833C17.6995 15.833 15.834 17.6985 15.834 19.9997C15.834 22.3009 17.6995 24.1663 20.0007 24.1663Z"
          stroke={isActive ? 'white' : '#111111'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 10.833V12.4997"
          stroke={isActive ? 'white' : '#111111'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 27.5V29.1667"
          stroke={isActive ? 'white' : '#111111'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5176 13.5166L14.7009 14.6999"
          stroke={isActive ? 'white' : '#111111'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.3008 25.2998L26.4841 26.4831"
          stroke={isActive ? 'white' : '#111111'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.834 20H12.5007"
          stroke={isActive ? 'white' : '#111111'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.5 20H29.1667"
          stroke={isActive ? 'white' : '#111111'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5176 26.4831L14.7009 25.2998"
          stroke={isActive ? 'white' : '#111111'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.3008 14.6999L26.4841 13.5166"
          stroke={isActive ? 'white' : '#111111'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1322_13253">
          <rect
            width={20}
            height={20}
            fill="#111111"
            transform="translate(10 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
export default LightmodeIcon;
