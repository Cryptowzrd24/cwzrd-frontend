import React from "react";
import LogoWhite from "../../../../public/icons/logoWhite";
import { FooterData } from "./data";
import Link from "next/link";

function Footer() {
  return (
    <div
      className="  w-full m-auto  px-[75px] pt-20 pb-12"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(99, 77, 253, 1), rgba(126, 68, 241, 1))",
      }}
    >
      <div className="max-w-[1440px] flex justify-between items-center w-full m-auto pb-10 border-b-[1px] border-white">
        <p className="font-medium text-[64px] leading-[70px] text-[#fff] max-w-[640px] w-full">
          Join the Cryptowzrd Community Today!
        </p>
        <p
          className=" text-[18px] leading-[27px] max-w-[520px] w-full"
          style={{ color: "rgba(255, 255, 255, 0.8)" }}
        >
          Unlock the door to trading success and become a part of the Cryptowzrd
          community! Gain access to our comprehensive educational resources,
          powerful trading tools, and supportive community.
        </p>
      </div>
      <div className="max-w-[1440px] flex justify-between items-center w-full m-auto pt-10 ">
        <Link href="/" >
          <LogoWhite />
        </Link>
        <div className="flex gap-8">
          {FooterData.map((item, index) => (
            <a
              key={item.id}
              href="#"
              style={{ color: "rgba(255, 255, 255, 1)", cursor: "pointer" }}
            >
              {" "}
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
