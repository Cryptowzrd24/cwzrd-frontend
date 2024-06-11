import React from "react";
import { LiveCardData } from "../data";
import LiveExplorerCard from "./liveExplorerCard";

function LiveExplorerCardList() {
  return (
    <div className="max-w-[330px] w-full">
      {LiveCardData.map((card) => (
        <LiveExplorerCard
          key={card.id}
          title={card.title}
          desc={card.desc}
          image={card.image}
          id={card.id}
        />
      ))}
    </div>
  );
}

export default LiveExplorerCardList;
