import React from "react";

interface HeroProps {
  title: string;
  details: string;
  boldTitle: string;
}
function HeroSection({ title, boldTitle, details }: HeroProps) {
  return (
    <>
      <div className="font-bold text-[64px] max-w-6xl leading-[64px] mb-8">{title}</div>
      <div className="text-[20px] font-semibold max-w-xl leading-[30px]">{details}</div>
    </>
  );
}

export default HeroSection;
