import React from 'react';

import GraphCard from '@/app/components/common/graphCard.component';
import Card1 from '@/app/components/common/card1.component';
import Card2 from '@/app/components/common/card2.component';
import Card3 from '@/app/components/common/card3.component';
import Card4 from '@/app/components/common/card4.component';
import Card5 from '@/app/components/common/card5.component';
import Card6 from '@/app/components/common/card6.component';
import Card7 from '@/app/components/common/card7.component';

import { colorConfig } from '@/app/helpers/config';

import btc from '@/app/assets/images/btc.png';
import nft from '@/app/assets/images/nft.png';
import frogImage from '@/app/assets/images/frogImage.png';
import dogImage from '@/app/assets/images/dogImage.png';
import cardBgImage from '@/app/assets/images/cardImagebg.png';
import cardBgImage2 from '@/app/assets/images/cardImagebg2.png';
import cardBgImage3 from '@/app/assets/images/cardImagebg3.png';
import cardBgImage4 from '@/app/assets/images/cardImagebg4.png';
import cardBgImage5 from '@/app/assets/images/cardImagebg5.png';
import cardBgImage6 from '@/app/assets/images/cardImagebg6.png';
import cardBgImage7 from '@/app/assets/images/cardImagebg7.png';
import cardBgImage8 from '@/app/assets/images/cardImagebg8.png';
import coinBgImage from '@/app/assets/images/coinImage.png';
import newsImage from '@/app/assets/images/newsBgImage.png';
import vectorImage from '@/app/assets/images/vector.png';
import cardPerson from '@/app/assets/images/cardPersonTiles.png';
import Card8 from '@/app/components/common/card8.componnet';
import Card9 from '@/app/components/common/card9.component';
import Card10 from '@/app/components/common/card10.component';
import Card11 from '@/app/components/common/card11.component';
import GaugeChart from '@/app/components/common/guage-chart';
import TvlChainCard from '@/app/components/common/tvl-chains-card';
import KpiGuageChart from '@/app/components/common/kpi-guage-chart';
import GraphCardTop from '@/app/components/common/graph-card-top';
import TopNftCollection from '@/app/components/common/top-nft-collections-card';
import CandlestickChart from '@/app/components/elements/candleStickGraph';
import CandlestickCard from '@/app/components/common/candlestickCard';
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

  return (
    <>
      <div
        style={{
          margin: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TvlChainCard isDarkTheme={true} />
        <TvlChainCard isDarkTheme={false} />
        <KpiGuageChart isDarkTheme={false} />
        <GaugeChart value={0} />
        <CandlestickCard
          heading="🪙 Bitcoin"
          value={{ data: '36,606,531,750.36', prefix: '$' }}
          percent={6.32}
        />
        <GraphCard
          heading="🔥 Market CAP"
          value={{ data: '36,606,531,750.36', prefix: '$' }}
          percent={6.32}
          graphAttr={{ type: 'area', data: areachartData }}
        />

        <GraphCard
          heading="🩸 Bitcoin Dominance"
          value={{ data: '51.88', postfix: '%' }}
          percent={-0.32}
          graphAttr={{ type: 'area', data: areachartData }}
        />

        <GraphCard
          heading="🔥 24 hour volume"
          value={{ data: '51.88', prefix: '$' }}
          percent={-0.32}
          graphAttr={{ type: 'bar', data: areachartData }}
        />
        <GraphCard
          heading="👀 Popularity"
          value={{ data: '51.88', prefix: '$' }}
          percent={0.32}
          graphAttr={{ type: 'bar', data: areachartData }}
        />
        <GraphCardTop
          heading="🚀 Top Gain"
          percent={0.32}
          graphAttr={{ type: 'area', data: areachartData }}
        />
        <GraphCardTop
          heading="🚨 Top Losers"
          percent={-0.32}
          graphAttr={{ type: 'area', data: areachartData }}
        />
        <TopNftCollection
          heading="🎖 Top NFT Colllections"
          percent={-0.32}
          graphAttr={{ type: 'area', data: areachartData }}
        />
        <CandlestickChart />
        <Card1
          type="time"
          heading="✨ Recently Added"
          items={[
            {
              medal: '🥇',
              image: frogImage,
              text1: 'PEPI',
              text2: 'PEPI',
              time: 4,
            },
            {
              medal: '🥇',
              image: frogImage,
              text1: 'PEPI',
              text2: 'PEPI',
              time: 4,
            },
            {
              medal: '🥇',
              image: frogImage,
              text1: 'PEPI',
              text2: 'PEPI',
              time: 4,
            },
          ]}
        />

        <Card1
          type="percent"
          heading="⭐️ Trending"
          items={[
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              percent: 29.32,
            },
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              percent: 29.32,
            },
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              percent: -0.12,
            },
          ]}
        />

        <Card1
          type="percent"
          heading="🚀 Top Gain"
          items={[
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              percent: 29.32,
            },
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              percent: 29.32,
            },
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              percent: 0.12,
            },
          ]}
        />

        <Card1
          type="percent"
          heading="🚨 Top Losers"
          items={[
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              percent: -29.32,
            },
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              percent: -29.32,
            },
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              percent: -0.12,
            },
          ]}
        />

        <Card1
          type="visited"
          heading="👁️ Most Visited"
          items={[
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              count: 1900,
            },
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              count: 500,
            },
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              count: 2600,
            },
          ]}
        />

        <Card1
          type="price"
          heading="📈 Highest Volume"
          items={[
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              price: 37381.03,
            },
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              price: 37381.03,
            },
            {
              medal: '🥇',
              image: btc,
              text1: 'Bitcoin',
              text2: 'BTC',
              price: 37381.03,
            },
          ]}
        />

        <Card1
          type="nft"
          heading="🎖 Top NFT Colllections"
          items={[
            {
              medal: '🥇',
              image: nft,
              text1: 'PudgyPenguins',
              text2: 'ETH',
              count: 254567,
            },
            {
              medal: '🥇',
              image: nft,
              text1: 'PudgyPenguins',
              text2: 'ETH',
              count: 254567,
            },
            {
              medal: '🥇',
              image: nft,
              text1: 'PudgyPenguins',
              text2: 'ETH',
              count: 254567,
            },
          ]}
        />

        <Card2
          heading="🎖 Top Categories"
          items={[
            {
              medal: '🥇',
              text1: 'Base Ecosystem',
              images: [nft, btc, frogImage],
            },
            {
              medal: '🥇',
              text1: 'Base Ecosystem',
              images: [nft, btc, frogImage],
            },
            {
              medal: '🥇',
              text1: 'Base Ecosystem',
              images: [nft, btc, frogImage],
            },
          ]}
        />

        <Card3
          heading="Trending"
          name="Bitcoin"
          value="+29.32%"
          desc="took the first place with a gain of"
          end="in 7 days."
        />

        <Card3
          heading="Recently Added"
          name="PEPI"
          value="24 minutes ago"
          desc="is the most recent crypto, which added"
        />

        <Card3
          heading="Most Visited"
          name="Bitcoin"
          value="18.3k"
          desc="is placing in the first place with"
          end="visitors"
        />

        <Card3
          heading="Top Categories"
          name="Base Ecosystem"
          desc="takes first place for top categories."
        />

        <Card3
          heading="Top NFT Colllections"
          name="PudgyPenguins"
          desc="is the Top NFT Colllections with"
          value="254,567 ETH"
        />

        <Card3
          heading="Highest Volume"
          name="Bitcoin"
          desc="took the first place with total volume"
          value="$37,381.03."
        />

        <Card3
          heading="Top Gain"
          name="Dogwifhat"
          desc="took the first place with a gain of"
          value="+29.32%"
          end="in 7 days."
        />

        <Card3
          heading="Top Losers"
          name="Dogwifhat"
          desc="took the first place with a gain of"
          value="-19.88 %"
          end="in 7 days."
        />

        {/*  with image bg */}

        <Card3
          transparentButton={true}
          bgImage={cardBgImage}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.green}
          heading="Trending"
          name="Bitcoin"
          value="+29.32%"
          desc="are placing in the first place with"
          end="in 7 days."
        />

        <Card3
          transparentButton={true}
          bgImage={cardBgImage2}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.red}
          heading="Recently Added"
          name="PEPI"
          value="24 minutes ago"
          desc="is the most recent crypto, which added"
        />

        <Card3
          transparentButton={true}
          bgImage={cardBgImage3}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.green}
          heading="Trending"
          name="Bitcoin"
          value="+18.3k"
          desc="are placing in the first place with"
          end="visitor."
        />

        <Card3
          transparentButton={true}
          bgImage={cardBgImage4}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.red}
          heading="Top Categories"
          name="Base Ecosystem"
          desc="takes first place for top categories."
        />

        <Card3
          transparentButton={true}
          bgImage={cardBgImage5}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.red}
          heading="Top NFT Colllections"
          name="PudgyPenguins"
          desc="is the Top NFT Colllections with"
          value="254,567 ETH"
        />

        <Card3
          transparentButton={true}
          bgImage={cardBgImage6}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.green}
          heading="Highest Volume"
          name="Bitcoin"
          desc="took the first place with total volume"
          value="$37,381.03."
        />

        <Card3
          transparentButton={true}
          bgImage={cardBgImage7}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.green}
          heading="Top Gain"
          name="Dogwifhat"
          desc="took the first place with a gain of"
          value="+29.32%"
          end="in 7 days."
        />

        <Card3
          transparentButton={true}
          bgImage={cardBgImage8}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.green}
          heading="Top Losers"
          name="Dogwifhat"
          desc="took the first place with a gain of"
          value="-19.88 %"
          end="in 7 days."
        />

        {/*  with blend image bg */}

        <Card3
          blendImage={btc}
          transparentButton={true}
          bgImage={cardBgImage}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.green}
          heading="Trending"
          name="Bitcoin"
          value="+29.32%"
          desc="are placing in the first place with"
          end="in 7 days."
        />

        <Card3
          blendImage={frogImage}
          transparentButton={true}
          bgImage={cardBgImage2}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.red}
          heading="Recently Added"
          name="PEPI"
          value="24 minutes ago"
          desc="is the most recent crypto, which added"
        />

        <Card3
          blendImage={btc}
          transparentButton={true}
          bgImage={cardBgImage3}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.green}
          heading="Trending"
          name="Bitcoin"
          value="+18.3k"
          desc="are placing in the first place with"
          end="visitor."
        />

        <Card3
          blendImage={btc}
          transparentButton={true}
          bgImage={cardBgImage4}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.red}
          heading="Top Categories"
          name="Base Ecosystem"
          desc="takes first place for top categories."
        />

        <Card3
          blendImage={nft}
          transparentButton={true}
          bgImage={cardBgImage5}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.red}
          heading="Top NFT Colllections"
          name="PudgyPenguins"
          desc="is the Top NFT Colllections with"
          value="254,567 ETH"
        />

        <Card3
          blendImage={btc}
          transparentButton={true}
          bgImage={cardBgImage6}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.green}
          heading="Highest Volume"
          name="Bitcoin"
          desc="took the first place with total volume"
          value="$37,381.03."
        />

        <Card3
          blendImage={dogImage}
          transparentButton={true}
          bgImage={cardBgImage7}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.green}
          heading="Top Gain"
          name="Dogwifhat"
          desc="took the first place with a gain of"
          value="+29.32%"
          end="in 7 days."
        />

        <Card3
          blendImage={dogImage}
          transparentButton={true}
          bgImage={cardBgImage8}
          staticTextColor={colorConfig.white}
          textColor={colorConfig.green}
          heading="Top Losers"
          name="Dogwifhat"
          desc="took the first place with a gain of"
          value="-19.88 %"
          end="in 7 days."
        />

        {/*  with color bg */}

        <Card3
          allWhite={true}
          bgColor="linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)"
          staticTextColor={colorConfig.white}
          heading="Trending"
          name="Bitcoin"
          value="+29.32%"
          desc="are placing in the first place with"
          end="in 7 days."
        />

        <Card3
          allWhite={true}
          bgColor="linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)"
          staticTextColor={colorConfig.white}
          heading="Recently Added"
          name="PEPI"
          value="24 minutes ago"
          desc="is the most recent crypto, which added"
        />

        <Card3
          bgColor="linear-gradient(116.74deg, #634DFD -4.07%, #7E44F1 100.68%)"
          staticTextColor={colorConfig.white}
          textColor={colorConfig.green}
          heading="Trending"
          name="Bitcoin"
          value="+18.3k"
          desc="are placing in the first place with"
          end="visitor."
        />

        <Card3
          transparentButton={true}
          bgColor="linear-gradient(98.54deg, #200D5E 0%, #6C1B92 100%)"
          staticTextColor={colorConfig.white}
          textColor={colorConfig.green}
          heading="Top Categories"
          name="Base Ecosystem"
          desc="takes first place for top categories."
        />

        <Card3
          allWhite={true}
          bgColor="linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)"
          staticTextColor={colorConfig.white}
          heading="Top NFT Colllections"
          name="PudgyPenguins"
          desc="is the Top NFT Colllections with"
          value="254,567 ETH"
        />

        <Card3
          allWhite={true}
          bgColor="linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)"
          staticTextColor={colorConfig.white}
          heading="Highest Volume"
          name="Bitcoin"
          desc="took the first place with total volume"
          value="$37,381.03."
        />

        <Card3
          bgColor="linear-gradient(116.74deg, #634DFD -4.07%, #7E44F1 100.68%)"
          staticTextColor={colorConfig.white}
          textColor={colorConfig.green}
          heading="Top Gain"
          name="Dogwifhat"
          desc="took the first place with a gain of"
          value="+29.32%"
          end="in 7 days."
        />

        <Card3
          transparentButton={true}
          bgColor="linear-gradient(98.54deg, #200D5E 0%, #6C1B92 100%)"
          staticTextColor={colorConfig.white}
          textColor={colorConfig.green}
          heading="Top Losers"
          name="Dogwifhat"
          desc="took the first place with a gain of"
          value="-19.88 %"
          end="in 7 days."
        />

        <Card4
          bgImage={coinBgImage}
          heading={'News'}
          staticTextColor={colorConfig.white}
          mainText="Why is Crypto Market Up Today?"
          date={new Date()}
          name={'John Smith'}
        />

        <Card4
          bgImage={newsImage}
          heading={'📈️ News'}
          staticTextColor={colorConfig.white}
          mainText="Gucci Burberry join Booming Scotland."
          date={new Date()}
          name={'John Smith'}
        />

        <Card5
          heading="❇️ Features"
          image={vectorImage}
          text={"Learn from fellow traders' insights and strategies."}
        />

        <Card6
          heading="❇️ Features"
          staticTextColor={colorConfig.white}
          image={cardPerson}
          mainText={'Private Members Chat'}
          subText={
            'Come chat it up with our analysts Billy & Martin and our worldwide community.'
          }
        />

        <Card7
          heading="❇️ Features"
          staticTextColor={colorConfig.white}
          text={'Enjoy all our features!'}
          bg={'linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)'}
          options={[
            'Shared Knowledge',
            'Resource Sharing',
            'Expert Q&A',
            'Exclusive Opportunities',
            'Supportive People',
            'Member Profiles',
          ]}
          notinFormatOptions={false}
        />

        <Card7
          heading="❇️ Features"
          staticTextColor={colorConfig.white}
          text={'Enjoy all our features!'}
          bg={'linear-gradient(180deg, #45CA94 0%, #97D14E 100%)'}
          options={[
            'Shared Knowledge',
            'Resource Sharing',
            'Exclusive Opportunities',
            'Member Profiles',
            'Expert Q&A',
            'Supportive People',
          ]}
          notinFormatOptions={true}
        />

        <Card8
          heading="👥 Community"
          text1="Join the Cryptowzrd"
          text2="Community Today!"
        />

        <Card8
          heading="👥 Community"
          text1={`About 10,700+`}
          text2="people who already joined us"
          staticTextColor={colorConfig.white}
          bg={'linear-gradient(to right bottom, #111111, #490f0f)'}
          footerButton={'Join now'}
        />

        <Card8
          heading="👥 Community"
          text1={`About 10,700+`}
          text2="people who already joined us"
          staticTextColor={colorConfig.white}
          bgImage={cardBgImage4}
          footerButton={'Become A Member'}
        />

        <Card9
          heading="⭐️ Member’s Profit"
          staticTextColor={colorConfig.white}
          text1={'Celebrating Success'}
          text2="in Our Community"
        />

        <Card10
          heading="Technicals"
          staticTextColor={colorConfig.white}
          text1="BITCOIN POTENTIAL $4k Target On Potential Major BEARISH FLAT"
          text2="This sort of pattern would certainly shock the herd. A potential Wave B suckers Rally galore .Then SNAP..."
          messageCount={24}
          rocketCount={138}
        />

        <Card11
          heading="👤 brokers"
          text="In order to accurately follow our calls with our preferred assets, correct prices, lot sizes and profits we recommend using our brokers."
        />
      </div>
    </>
  );
};

export default Components;
