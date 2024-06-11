import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/news-letter/background.png";
import img2 from "../../../public/images/news-letter/main.png";

interface CardProps {
  img1: string;
  img2: string;
  title1: string;
  title2: string;
  title3: string;
  heading: string;
  description: string;
  subDescription: string;
  date: string;
  author: string;
}

const Card: React.FC<CardProps> = ({
  img1,
  img2,
  title1,
  title2,
  title3,
  heading,
  description,
  subDescription,
  date,
  author,
}) => {
  return (
    <>
      <div className="relative flex gap-8 p-4 rounded-lg w-full bg-[#fff] shadow-sm">
        <div className="flex-none">
          <Image
            src={img2}
            alt="main picture"
            width={300}
            height={160}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full gap-3 relative z-10">
          <div className="flex gap-2 items-center">
            <p className="px-3 py-1 bg-[#7248F71A] text-[#7248F7] text-[10px] font-semibold rounded-full" >
              {title1}
            </p>
            <p className="px-3 py-1 bg-[#7248F71A] text-[#7248F7] text-[10px] font-semibold rounded-full">
              {title2}
            </p>
            <p className="px-3 py-1 bg-[#7248F71A] text-[#7248F7] text-[10px] font-semibold rounded-full">
              {title3}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[18px] font-bold">{heading}</p>
            <p className="text-[13px]">{description}</p>
          </div>
          <div className="bg-[#1111110D] px-4 py-3 rounded-md max-w-lg">
            <p className="text-[11px] font-medium">
              {date} | {author}
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 md:translate-x-0 md:translate-y-0 md:top-0 md:right-0 z-0">
          <Image
            src={img1}
            alt="side picture"
            width={405}
            height={200}
            className="rounded-lg bg-transparent"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
