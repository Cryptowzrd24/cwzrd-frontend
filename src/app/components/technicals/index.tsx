import React from "react";
import Messages from "../../../../public/icons/News-Letter/mesages";
import Like from "../../../../public/icons/News-Letter/like";
import Image from "next/image";
import graphImg from "../../../public/images/news-letter/graph.png";
import TechnicalCard from "./technicalCard";
import TechnicalCardContent from "./technicalCardContent";
function Technicals() {
  return (
    <div className="max-w-[1440px] mx-auto p-3 ">
      <p className="font-medium text-[18px] mb-3 ">TECHNICALS</p>
      <div className="flex items-center gap-5 justify-between">
        <div className="font-medium text-[56px]  leading-[61px] max-w-[630px] w-full">
          Crypto
          <span
            style={{
              background:
                "linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-semibold text-[56px]  leading-[61px] font-[#111111CC] pl-3"
          >
            Technicals
          </span>{" "}
        </div>
        <p
          className="text-[20px] leading-7 max-w-[630px] w-full"
          style={{ color: "rgba(17, 17, 17, 0.8)" }}
        >
          {" "}
          Receive expert commentary, market trends, and technical analysis
          straight to your inbox
        </p>
      </div>
      <div className="mt-20 mb-20">
        <TechnicalCardContent />
      </div>
    </div>
  );
}

export default Technicals;
