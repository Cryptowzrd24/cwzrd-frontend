import { usePathname } from 'next/navigation';
import React from 'react';

const StarIcon = ({ color }: any) => {
  const pathname = usePathname();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
      width={20}
      height={20}
    >
      <path
        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
        fill={pathname.includes('/favorites') ? color : 'none'}
        stroke={color ? color : 'black'}
        stroke-linejoin="round"
        stroke-width="27"
      />
    </svg>
  );
};

export default StarIcon;
