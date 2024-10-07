interface IconProps {
  isActive: boolean;
}
function DarkmodeIcon({ isActive }: IconProps) {
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
        fill={isActive ? 'rgb(114, 72, 247)' : 'white'}
      />
      <path
        d="M27.4994 20.6583C27.3683 22.0768 26.836 23.4287 25.9646 24.5557C25.0933 25.6826 23.919 26.5382 22.5792 27.0221C21.2394 27.5061 19.7894 27.5984 18.399 27.2884C17.0086 26.9784 15.7353 26.2788 14.728 25.2715C13.7206 24.2642 13.021 22.9908 12.711 21.6004C12.401 20.21 12.4934 18.7601 12.9773 17.4202C13.4613 16.0804 14.3168 14.9061 15.4438 14.0348C16.5708 13.1634 17.9226 12.6311 19.3411 12.5C18.5106 13.6236 18.111 15.0079 18.2149 16.4012C18.3188 17.7945 18.9193 19.1042 19.9073 20.0922C20.8952 21.0801 22.2049 21.6807 23.5983 21.7846C24.9916 21.8885 26.3759 21.4888 27.4994 20.6583Z"
        stroke="#111111"
        strokeOpacity="0.4"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default DarkmodeIcon;
