import React from "react";
import { TechnicalCardData } from "./data"; // Adjust the import path accordingly
import TechnicalCard from "./technicalCard";

const TechnicalCardContent: React.FC = () => {
  return (
    <>
      <div className="flex gap-4 p-4 mb-4">
        {TechnicalCardData.map((card) => (
          <TechnicalCard
            key={card.id}
            id={card.id}
            date={card.date}
            title={card.title}
            desc={card.desc}
            icon1={card.icon1}
            icon2={card.icon2}
            value1={card.value1}
            value2={card.value2}
            image={card.image}
          />
        ))}
      </div>
    </>
  );
};

export default TechnicalCardContent;
