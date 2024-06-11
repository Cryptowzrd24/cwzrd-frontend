import React from "react";
import { ticker } from "./data";
function Ticker() {
  return (
    <div className="flex items-center gap-2 bg-[#7248F7] p-4 justify-between text-white ">
      {ticker.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.icon}
          <span>{item.name}</span>
          <span>{item.amount}</span>
          <span
            className={`${
              item.margin.startsWith("+")
                ? "bg-green-500 py-[2px] px-1 rounded-[11px] text-[11px]"
                : "bg-red-500 py-[2px] px-1 rounded-[11px] text-[11px]"
            } text-white p-1 rounded`}
          >
            {item.margin}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Ticker;
