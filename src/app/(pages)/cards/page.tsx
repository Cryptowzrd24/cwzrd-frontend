import React from "react";

import GraphCard from "@/app/components/common/graphCard.component";
import Card1 from "@/app/components/common/card1.component";


import frogImage from "@/app/assets/images/frogImage.png";
import btc from "@/app/assets/images/btc.png"
import nft from "@/app/assets/images/nft.png"
import Card2 from "@/app/components/common/card2.component";

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
                type="time"
                heading="✨ Recently Added"
                items={[
                    { medal: "🥇", image: frogImage, text1: "PEPI", text2: "PEPI", time: 4 },
                    { medal: "🥇", image: frogImage, text1: "PEPI", text2: "PEPI", time: 4 },
                    { medal: "🥇", image: frogImage, text1: "PEPI", text2: "PEPI", time: 4 }
                ]}
            />

            <Card1
                type="percent"
                heading="⭐️ Trending"
                items={[
                    { medal: "🥇", image: btc, text1: "Bitcoin", text2: "BTC", percent: 29.32 },
                    { medal: "🥇", image: btc, text1: "Bitcoin", text2: "BTC", percent: 29.32 },
                    { medal: "🥇", image: btc, text1: "Bitcoin", text2: "BTC", percent: -0.12 },
                ]}
            />

            <Card1
                type="visited"
                heading="👁️ Most Visited"
                items={[
                    { medal: "🥇", image: btc, text1: "Bitcoin", text2: "BTC", count: 1900 },
                    { medal: "🥇", image: btc, text1: "Bitcoin", text2: "BTC", count: 500 },
                    { medal: "🥇", image: btc, text1: "Bitcoin", text2: "BTC", count: 2600 },
                ]}
            />

            <Card1
                type="price"
                heading="📈 Highest Volume"
                items={[
                    { medal: "🥇", image: btc, text1: "Bitcoin", text2: "BTC", price: 37381.03 },
                    { medal: "🥇", image: btc, text1: "Bitcoin", text2: "BTC", price: 37381.03 },
                    { medal: "🥇", image: btc, text1: "Bitcoin", text2: "BTC", price: 37381.03 },
                ]}
            />

            <Card1
                type="nft"
                heading="🎖 Top NFT Colllections"
                items={[
                    { medal: "🥇", image: nft, text1: "PudgyPenguins", text2: "ETH", count: 254567 },
                    { medal: "🥇", image: nft, text1: "PudgyPenguins", text2: "ETH", count: 254567 },
                    { medal: "🥇", image: nft, text1: "PudgyPenguins", text2: "ETH", count: 254567 },
                ]}
            />

            <Card2
                heading="🎖 Top Categories"
                items={[
                    { medal: "🥇", text1: "Base Ecosystem" , images : [nft, btc, frogImage ] },
                    { medal: "🥇", text1: "Base Ecosystem" , images : [nft, btc, frogImage ] },
                    { medal: "🥇", text1: "Base Ecosystem" , images : [nft, btc, frogImage ] },
                ]}
            />
        </div>

    </>)
}

export default Components;