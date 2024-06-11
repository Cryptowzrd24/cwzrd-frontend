import React from 'react';
import Card from './news-letter-cards/card';
import CardContent from './news-letter-cards/cardContent';
import Image from 'next/image';
import cardBackround from '../../../public/images/news-letter/card-background.png';
import LiveExplorer from './live-explorer-cards/liveExplorer';
import LiveExplorerCard from './live-explorer-cards/liveExplorerCard';
import LiveExplorerCardList from './live-explorer-cards/liveExplorerCardList';
import ArrowRight from '../../../../public/icons/News-Letter/arrowRight';
function NewsLetter() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto p-3 ">
        <p className="font-medium text-[18px] mb-3">NEWSLETTER</p>
        <div className="flex items-center justify-between w-full ">
          <div className="font-medium text-[56px]  leading-[61px] max-w-[630px] ">
            News: All About{' '}
            <span
              style={{
                background:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              className="font-semibold text-[56px]  leading-[61px] font-[#111111CC]"
            >
              Crypto
            </span>{' '}
          </div>
          <p
            className="text-[20px] leading-7 max-w-[630px] w-full"
            style={{ color: 'rgba(17, 17, 17, 0.8)' }}
          >
            {' '}
            Stay informed and ahead of the curve with our curated selection of
            articles and reports.
          </p>
        </div>
        <div className="mt-20 flex gap-8 justify-between">
          <div className="max-w-[1080px] w-full ">
            <CardContent />
          </div>
          <div className="max-w-[330px] w-full ">
            <LiveExplorer />
          </div>{' '}
        </div>
        <div className="mt-6 flex justify-center items-center ">
          <p
            className="font-semibold text-[18px] rounded-[56px] flex items-center gap-2 cursor-pointer"
            style={{
              background: 'rgb(227 212 212 / 30%)',
              padding: '16px 24px',
            }}
          >
            See All News
            <span>
              <ArrowRight />
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
