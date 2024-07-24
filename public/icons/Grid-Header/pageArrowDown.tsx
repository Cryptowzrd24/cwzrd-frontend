interface PageArrowDownIconProps {
  stroke?: boolean;
}

export const PageArrowDownIcon = ({ stroke }: PageArrowDownIconProps) => {
  return (
    <svg
      width={stroke ? '20px' : '16px'}
      height={stroke ? '20px' : '16px'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke={stroke ? 'rgba(17, 17, 17, 1)' : '#7248F7'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
