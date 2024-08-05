interface FilterIconProps {
  isDark?: boolean;
}
export const FilterIcon = ({ isDark }: FilterIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1784_15791)">
        <path
          d="M3.33398 17.4998V11.6665"
          stroke={isDark ? 'rgba(17, 17, 17, 1)' : '#7248F7'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.33398 8.33333V2.5"
          stroke={isDark ? 'rgba(17, 17, 17, 1)' : '#7248F7'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 17.5V10"
          stroke={isDark ? 'rgba(17, 17, 17, 1)' : '#7248F7'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 6.66667V2.5"
          stroke={isDark ? 'rgba(17, 17, 17, 1)' : '#7248F7'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.666 17.5002V13.3335"
          stroke={isDark ? 'rgba(17, 17, 17, 1)' : '#7248F7'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.666 10V2.5"
          stroke={isDark ? 'rgba(17, 17, 17, 1)' : '#7248F7'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M0.833984 11.6665H5.83398"
          stroke={isDark ? 'rgba(17, 17, 17, 1)' : '#7248F7'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.5 6.6665H12.5"
          stroke={isDark ? 'rgba(17, 17, 17, 1)' : '#7248F7'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.166 13.3335H19.166"
          stroke={isDark ? 'rgba(17, 17, 17, 1)' : '#7248F7'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1784_15791">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
