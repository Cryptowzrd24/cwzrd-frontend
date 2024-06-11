import React from "react";
import Hero from "./hero";
import NewsLetter from "../news-letter";
import Technicals from "../technicals";

function Coin() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="mt-14">
        <NewsLetter />
      </div>
      <div className="mt-14">
        <Technicals />
      </div>
    </>
  );
}

export default Coin;
