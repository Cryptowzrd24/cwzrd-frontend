import React from "react";
import Like from "../../../../public/icons/News-Letter/like";
import Messages from "../../../../public/icons/News-Letter/mesages";
import Image from "next/image";
import graphImg from "../../../public/images/news-letter/graph.png";
interface TechnicalProps {
  id: string;
  date: string;
  title: string;
  desc: string;
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  value1: string;
  value2: string;
  image: string;
}

const TechnicalCard: React.FC<TechnicalProps> = ({
  date,
  title,
  desc,
  icon1,
  icon2,
  value1,
  value2,
  image,
}) => {
  return (
    <div
      className="flex flex-col  max-w-[394px] w-full shadow-md rounded-[16px] px-4 py-2"
      style={{
        background: `
          linear-gradient(to right, rgba(55, 169, 251, 0.1), rgba(55, 169, 251, 0) 50%),
          linear-gradient(to left, rgba(55, 169, 251, 0.1), rgba(55, 169, 251, 0) 50%)
        `,
        backgroundSize: "100% 50%", // Each gradient covers 50% of the height
        backgroundRepeat: "no-repeat", // No repeat for either gradient
        backgroundPosition: "top, bottom" // First gradient on top, second at bottom
      }}
    >
      <p className="text-[14px] font-bold text-[#3761FB] mb-3 tracking-widest">
        {date}
      </p>
      <p className="text-[20px] font-medium mb-2">{title}</p>
      <p className="text-[14px]  mb-6">{desc} </p>
      <div className="flex items-center gap-3 mb-6">
        <div className="px-3 py-2 border-[1px] rounded-[100px] flex cursor-pointer gap-2 items-center">
          {icon1}
          <span>{value1}</span>
        </div>
        <div className="px-3 py-2 border-[1px] rounded-[100px] flex cursor-pointer gap-2 items-center">
          {icon2}
          <span>{value2}</span>
        </div>
      </div>
      <Image src={image} alt="grah" width={362} height={200} />
    </div>
  );
};

export default TechnicalCard;
