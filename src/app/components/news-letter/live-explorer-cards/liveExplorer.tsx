import React from 'react';
import Clock from '../../../../../public/icons/News-Letter/clock';
import RightRed from '../../../../../public/icons/News-Letter/rightRed';
import LiveExplorerCardList from './liveExplorerCardList';

function LiveExplorer() {
  const backgroundImage = '/images/news-letter/card-background.png';

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '117% 110%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // width: "100%",
        // height: "auto",
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: "center",
        alignItems: 'start',
        paddingTop: '24px',
        borderRadius: '16px',
        overflow: 'hidden',
        padding: '24px 18px',
      }}
    >
      <div className="flex justify-between mb-8 max-w-[330px] w-full ">
        <p className="font-bold text-[14px] tracking-widest leading-5">
          📰 LIVE EXPLORER
        </p>
        <div className="flex gap-1 items-center justify-center cursor-pointer">
          <p
            style={{
              background:
                'linear-gradient(to left, rgba(247, 132, 26, 1), rgba(247, 72, 72, 1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline',
            }}
          >
            See All
          </p>
          <span style={{ marginBottom: '2px' }}>
            <RightRed />
          </span>
        </div>
      </div>
      <div className="p-3 rounded-[100px] gap-[6px] flex mb-4 bg-white">
        <Clock />
        <p
          className="font-medium text-[10px] leading-3  tracking-widest"
          style={{ color: '#111111' }}
        >
          2 MINUTES AGO
        </p>
      </div>
      <LiveExplorerCardList />
    </div>
  );
}

export default LiveExplorer;
