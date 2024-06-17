import React from "react";

import GraphCard from "@/app/components/common/graphCard.component";


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

        <div className="px-20 py-20">
            <GraphCard 
                value={"36,606,531,750.36"} 
                percent={6.32}
                graphAttr = {{type: 'area', data: areachartData} }
            />
        </div>

    </>)
}

export default Components;