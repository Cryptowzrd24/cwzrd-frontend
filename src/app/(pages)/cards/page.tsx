import React from "react";

import GraphCard from "@/app/components/common/graphCard.component";
import Card1 from "@/app/components/common/card1.component";


const Components = () => {

    const areachartData = [
        { x: 1, y: 5 },
        { x: 2, y: 10 },
        { x: 3, y: 15 },
        { x: 4, y: 8 },
        { x: 5, y: 1 },
        { x: 6, y: 6 },
        { x: 7, y: 2 },
        { x: 8, y: 3 },
        { x: 9, y: 9 },
        { x: 10, y: 7 },
        { x: 11, y: 1 },
        { x: 12, y: 12 },
        { x: 13, y: 2 },
        { x: 14, y: 5 },
        { x: 15, y: 1 },
        { x: 16, y: 15 },
        { x: 17, y: 7 },
    ];


    return (<>

        <div style={{ margin: "20px" }}>
            <GraphCard
                heading="🔥 Market CAP"
                value={{ data: "36,606,531,750.36", prefix: "$" }}
                percent={6.32}
                graphAttr={{ type: 'area', data: areachartData }}
            />

            <GraphCard
                heading="🩸 Bitcoin Dominance"
                value={{ data: "51.88", postfix: "%" }}
                percent={-0.32}
                graphAttr={{ type: 'area', data: areachartData }}
            />

            <GraphCard
                heading="🔥 24 hour volume"
                value={{ data: "51.88", prefix: "$" }}
                percent={-0.32}
                graphAttr={{ type: 'bar', data: areachartData }}
            />

            <Card1 
                heading="✨ Recently Added" 
                items={[{medal: "🥇", text1: "PEPI", text2: "PEPI", time: 4}]}
            />
        </div>

    </>)
}

export default Components;