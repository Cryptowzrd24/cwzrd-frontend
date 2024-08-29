import React from 'react';

function ProfileIcon({color}:any) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.6673 28V25.3333C26.6673 23.9188 26.1054 22.5623 25.1052 21.5621C24.105 20.5619 22.7485 20 21.334 20H10.6673C9.25283 20 7.89628 20.5619 6.89608 21.5621C5.89589 22.5623 5.33398 23.9188 5.33398 25.3333V28"
        stroke={color ? color : "#fffff"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9993 14.6667C18.9449 14.6667 21.3327 12.2789 21.3327 9.33333C21.3327 6.38781 18.9449 4 15.9993 4C13.0538 4 10.666 6.38781 10.666 9.33333C10.666 12.2789 13.0538 14.6667 15.9993 14.6667Z"
        stroke={color ? color : "#fffff"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ProfileIcon;
