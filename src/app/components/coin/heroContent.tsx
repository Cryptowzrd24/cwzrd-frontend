import { Box, Typography } from '@mui/material';
import numeral from 'numeral';
import StatsContainer from './statsContainer';

async function fetchStatsData() {
  const res = await fetch('https://backend.cwzrd.co.uk/api/stats/', {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  if (!data || !data.quote) {
    return { notFound: true };
  }

  return data;
}

const HeroContent = async () => {
  const data = await fetchStatsData();
  const marketCap = numeral(data?.results?.[0].quote?.USD.total_market_cap)
    .format('0.00a')
    .toUpperCase();
  const marketCapChange =
    data?.results?.[0].quote?.USD.total_market_cap_yesterday_percentage_change.toFixed(
      2,
    );
  const volumeCap = numeral(
    data?.results?.[0].quote?.USD?.total_volume_24h ?? 0,
  )
    .format('0.00a')
    .toUpperCase();
  const volumeCapChange =
    data?.results?.[0].quote?.USD.total_volume_24h_yesterday_percentage_change.toFixed(
      2,
    );

  const isMarketCapPositiveChange = parseFloat(marketCapChange) > 0;
  const marketCapChangeColor = isMarketCapPositiveChange
    ? '#1FD773'
    : '#F74848';
  const formattedMarketCapChange = `${marketCapChange >= 0 ? '+' : ''}${marketCapChange}`;

  const marketCapChangeText = isMarketCapPositiveChange
    ? 'an increase of'
    : 'a decrease of';

  const isVolumeCapPositiveChange = parseFloat(volumeCapChange) > 0;
  const volumeCapChangeColor = isVolumeCapPositiveChange
    ? '#1FD773'
    : '#F74848';
  const formattedVolumeCapChange = `${isVolumeCapPositiveChange ? '+' : ''}${volumeCapChange}`;

  const volumeCapChangeText = isVolumeCapPositiveChange
    ? 'an increase of'
    : 'a decrease of';

  const defiVolume = numeral(data?.results?.[0].quote?.USD.defi_volume_24h)
    .format('0.00a')
    .toUpperCase();
  const defiVolumePercent = (
    (data?.results?.[0].quote?.USD.defi_volume_24h /
      data?.results?.[0].quote?.USD.total_volume_24h) *
    100
  ).toFixed(2);
  const isDefiVolumePositiveChange =
    parseFloat(data?.results?.[0].quote?.USD.defi_24h_percentage_change) > 0;
  const defiVolumeChangeColor = isDefiVolumePositiveChange
    ? '#1FD773'
    : '#F74848';

  const defiVolumeChange =
    data?.results?.[0].quote?.USD.defi_24h_percentage_change.toFixed(2);
  const formattedDefiVolumeChange = `${isDefiVolumePositiveChange ? '+' : ''}${defiVolumeChange}`;

  const stablecoinVolume = numeral(
    data?.results?.[0].quote?.USD.stablecoin_volume_24h,
  )
    .format('0.00a')
    .toUpperCase();
  const defiVolumeChangeText = isDefiVolumePositiveChange
    ? 'an increase of'
    : 'a decrease of';
  const stablecoinVolumePercent = (
    (data?.results?.[0].quote?.USD.stablecoin_volume_24h /
      data?.results?.[0].quote?.USD.total_volume_24h) *
    100
  ).toFixed(2);
  const isStablecoinVolumePositiveChange =
    parseFloat(data?.results?.[0].quote?.USD.stablecoin_24h_percentage_change) >
    0;
  const stablecoinVolumeChangeColor = isStablecoinVolumePositiveChange
    ? '#1FD773'
    : '#F74848';

  const stablecoinVolumeChangeText = isStablecoinVolumePositiveChange
    ? 'an increase of'
    : 'a decrease of';
  const stablecoinVolumeChange =
    data?.results?.[0].quote?.USD.stablecoin_24h_percentage_change.toFixed(2);
  const formattedStablecoinVolumeChange = `${isStablecoinVolumePositiveChange ? '+' : ''}${stablecoinVolumeChange}`;

  const btcDominance = parseFloat(
    data?.results?.[0].btc_dominance || '0',
  ).toFixed(2);
  const btcDominanceChange =
    data?.results?.[0].quote?.USD.total_market_cap_yesterday_percentage_change.toFixed(
      2,
    );

  const isBtcDominancePositiveChange = parseFloat(btcDominanceChange) > 0;
  const btcDominanceChangeColor = isBtcDominancePositiveChange
    ? '#1FD773'
    : '#F74848';
  const formattedBtcDominanceChange = `${isBtcDominancePositiveChange ? '+' : ''}${btcDominanceChange}`;

  const btcDominanceChangeText = isBtcDominancePositiveChange
    ? 'an increase of'
    : 'a decrease of';

  return (
    <>
      <Typography variant="h1" sx={{ maxWidth: '960px', marginTop: '-10px' }}>
        Today{' '}
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Cryptocurrency prices
        </span>{' '}
        by Market Cap
      </Typography>

      <Box
        sx={{
          fontSize: '14px',
          lineHeight: '24px',
          color: 'rgba(17, 17, 17, 0.8)',
          mt: '8px',
          mb: '12px',
        }}
      >
        The overall market capitalization of the crypto market is
        <span
          style={{
            color: 'rgba(17,17,17,0.8)',
            fontWeight: '600',
            fontSize: '14px',
          }}
        >
          {' '}
          ${marketCap}
        </span>
        , {marketCapChangeText}{' '}
        <span
          style={{
            color: marketCapChangeColor,
            fontWeight: '600',
            fontSize: '14px',
          }}
        >
          {formattedMarketCapChange}%
        </span>{' '}
        in the last 24 hours.{' '}
        <span
          style={{
            color: '#808A9D',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '400',
            textDecoration: 'underline',
          }}
          id="toggleMore"
        >
          Read More
        </span>
        <div id="additionalContent" style={{ display: 'none' }}>
          The total crypto market volume over the last 24 hours is
          <span
            style={{
              color: 'rgba(17,17,17,0.8)',
              fontWeight: '600',
              fontSize: '14px',
            }}
          >
            {' '}
            ${volumeCap}
          </span>
          , {volumeCapChangeText}{' '}
          <span
            style={{
              color: volumeCapChangeColor,
              fontWeight: '600',
              fontSize: '14px',
            }}
          >
            {formattedVolumeCapChange}%
          </span>
          . The total volume in DeFi is currently
          <span
            style={{
              color: 'rgba(17,17,17,0.8)',
              fontWeight: '600',
              fontSize: '14px',
            }}
          >
            {' '}
            ${defiVolume}
          </span>
          , {defiVolumeChangeText}{' '}
          <span
            style={{
              color: defiVolumeChangeColor,
              fontWeight: '600',
              fontSize: '14px',
            }}
          >
            {formattedDefiVolumeChange}%
          </span>
          , which is{' '}
          <span style={{ fontWeight: 600 }}>{defiVolumePercent}%</span> of the
          total crypto market 24-hour volume. The volume of all stable coins is
          now
          <span
            style={{
              color: 'rgba(17,17,17,0.8)',
              fontWeight: '600',
              fontSize: '14px',
            }}
          >
            {' '}
            ${stablecoinVolume}
          </span>
          , {stablecoinVolumeChangeText}{' '}
          <span
            style={{
              color: stablecoinVolumeChangeColor,
              fontWeight: '600',
              fontSize: '14px',
            }}
          >
            {formattedStablecoinVolumeChange}%
          </span>
          , which is{' '}
          <span style={{ fontWeight: 600 }}>{stablecoinVolumePercent}%</span> of
          the total crypto market 24-hour volume. <br />
          Bitcoin’s dominance is currently
          <span
            style={{
              color: 'rgba(17,17,17,0.8)',
              fontWeight: '600',
              fontSize: '14px',
            }}
          >
            {' '}
            {btcDominance}%
          </span>
          , {btcDominanceChangeText}{' '}
          <span
            style={{
              color: btcDominanceChangeColor,
              fontWeight: '600',
              fontSize: '14px',
            }}
          >
            {formattedBtcDominanceChange}%
          </span>
          .{' '}
          <span
            style={{
              color: '#808A9D',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '400',
              textDecoration: 'underline',
            }}
            id="toggleLess"
          >
            Read Less
          </span>
        </div>
      </Box>
      <StatsContainer />
    </>
  );
};

export default HeroContent;
