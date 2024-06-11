"use client";
// import HeroSection from "@/sections/hero-section";
import React, { useState } from "react";

const Hero: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("SHOW");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex flex-col mt-20 max-w-[1440px] mx-auto p-3">
      <div className="flex justify-between">
        <p className="text-[18px] font-medium">MARKET CAP</p>
        <div className="flex gap-3 items-center">
          <div className="border-[0.5px] rounded-[72px] p-1 flex cursor-pointer gap-2">
            <p
              onClick={() => setActiveButton("HIDE")}
              className={`px-3 py-2 rounded-[72px] text-[10px] ${
                activeButton === "HIDE" ? "bg-[#7248F7] text-white" : ""
              }`}
            >
              HIDE
            </p>
            <p
              onClick={() => setActiveButton("SHOW")}
              className={`px-3 py-2 rounded-[72px] text-[10px] ${
                activeButton === "SHOW" ? "bg-[#7248F7] text-white" : ""
              }`}
            >
              SHOW
            </p>
          </div>
          <p className="text-[18px] cursor-pointer">SHOW STATS</p>
        </div>
      </div>

      <div className="font-bold text-[64px] max-w-6xl leading-[64px] mb-8">
        Today{" "}
        <span
          style={{
            background:
              "linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Cryptocurrency prices
        </span>{" "}
        by Market Cap
      </div>
      <div className="text-[20px]  max-w-[600px] leading-[30px]">
        The overall market capitalization of the crypto market is 
        <span style={{ color: "#7248F7", fontWeight: "600" }}>€2.26T.</span> an
        increase of
        <span style={{ color: "#1FD773 ", fontWeight: "600" }}>+3.75% </span>
        in the last 24 hours.{" "}
        {isExpanded && (
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti iure optio facilis voluptatum similique corporis doloribus laborum iusto, cupiditate eveniet dolore tempore eaque rerum delectus provident porro nisi? Similique.
          </span>
        )}
        <span
          style={{ color: "#7248F7", cursor: "pointer" }}
          onClick={handleToggle}
        >
          {isExpanded ? " Read Less" : " Read More"}
        </span>
      </div>
      {/* <HeroSection
        title="Today Cryptocurrency prices by  Market Cap"
        details="The overall market capitalization of the crypto market is €2.26T. an increase of +3.75% in the last 24 hours."
        boldTitle="cryptocurrency"
      /> */}
    </div>
  );
};

export default Hero;
