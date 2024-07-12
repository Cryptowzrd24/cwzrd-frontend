'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import { ArrowDown } from '../../../../public/icons/arrowDown';
import { useFetchStatsDataQuery } from '@/app/redux/reducers/data-grid';

interface GasData {
  value: number;
  second: number;
}

interface ApiData {
  id: string;
  active_exchanges: number;
  btc_dominance: number;
  eth_dominance: number;

  quote: {
    USD: {
      total_market_cap: number;
      total_market_cap_yesterday_percentage_change: number;
      total_volume_24h?: number;
      total_volume_24h_yesterday_percentage_change?: number;
    };
  };
}

interface RowData {
  label: string;
  value: string;
  change?: string;
}

interface StatItemProps {
  label: string;
  value: string;
  change?: string;
  data?: {
    slow: GasData;
    standard: GasData;
    fast: GasData;
  };
}

const GasInfo = ({ label, value, second }: GasData & { label: string }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
    <Typography
      sx={{
        fontSize: 13,
        fontWeight: 400,
        lineHeight: '16.9px',
        color: '#11111199',
      }}
    >
      {label}
    </Typography>
    <Typography
      sx={{
        fontSize: 18,
        fontWeight: 500,
        color: '#111111',
        lineHeight: '23.4px',
      }}
    >
      {value} Gwei
    </Typography>
    <Typography
      sx={{
        fontSize: 13,
        fontWeight: 400,
        color: '#11111199',
        lineHeight: '16.9px',
      }}
    >
      ~{second} secs
    </Typography>
  </Box>
);

const GasTooltipContent = ({
  data,
}: {
  data: { slow: GasData; standard: GasData; fast: GasData };
}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <GasInfo label="Slow" {...data.slow} />
      <Divider />
      <GasInfo label="Standard" {...data.standard} />
      <Divider />
      <GasInfo label="Fast" {...data.fast} />
    </Box>
    <Typography
      sx={{
        padding: '11px 16px',
        background: '#7248F71A',
        borderRadius: '8px',
        lineHeight: '18px',
        fontWeight: 500,
        fontSize: '14px',
        color: '#7248F7',
      }}
    >
      Powered by Etherscan
    </Typography>
  </Box>
);

const Divider = () => (
  <Box
    sx={{
      width: '1px',
      height: '40px',
      background: '#1111111A',
      marginInline: '16px',
    }}
  />
);

const StatItem = ({ label, value, change, data }: StatItemProps) => (
  <Tooltip
    componentsProps={{
      tooltip: {
        sx: {
          background: '#FFFFFF !important',
          boxShadow: '0px 4px 28px 0px #0000000D',
          width: '350px',
          padding: '16px',
        },
      },
    }}
    title={data ? <GasTooltipContent data={data} /> : ''}
    placement="bottom"
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        padding: data ? '11px 16px' : '0px',
        background: data ? '#7248F71A' : 'transparent',
        borderRadius: '40px',
        cursor: data ? 'pointer' : 'default',
      }}
    >
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '18px',
          color: '#11111199',
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '18px',
          color: '#7248F7',
        }}
      >
        {value}
      </Typography>
      {change && (
        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 500,
            lineHeight: '14.3px',
            padding: '2px 5px',
            marginLeft: '4px',
            borderRadius: '11px',
            color: change.includes('+') ? '#1FD773' : '#F74848',
            backgroundColor: change.includes('+') ? '#1FD7731A' : '#F748481A',
          }}
        >
          {change}
        </Typography>
      )}
      {data && <ArrowDown />}
    </Box>
  </Tooltip>
);

const Stats = () => {
  const { data } = useFetchStatsDataQuery({});
  console.log('data stats---------------------', data);
  const [rowData, setRowData] = useState<RowData[]>([]);
  useEffect(() => {
    if (data && data.results) {
      const formattedData: RowData[] = data.results.map((item: ApiData) => [
        {
          label: 'Exchanges:',
          value: item.active_exchanges.toString(),
        },
        {
          label: 'Market Cap:',
          value: `$${(item.quote.USD.total_market_cap / 1e12).toFixed(2)}T`,
          change: item.quote.USD.total_market_cap_yesterday_percentage_change
            ? `${item.quote.USD.total_market_cap_yesterday_percentage_change.toFixed(2)}%`
            : '0.00%',
        },
        {
          label: '24h Vol:',
          value: `$${(item.quote?.USD?.total_volume_24h ?? 0 / 1e9)?.toFixed(2) || '0.00'}B`,
          change: item.quote.USD.total_volume_24h_yesterday_percentage_change
            ? `${item.quote.USD.total_volume_24h_yesterday_percentage_change?.toFixed(2) || '0.00'}%`
            : '0.00%',
        },
        {
          label: 'Dominance:',
          value: `BTC: ${parseFloat(item.btc_dominance?.toString() ?? '0').toFixed(2)}% ETH: ${parseFloat(item.eth_dominance?.toString() ?? '0').toFixed(2)}%`,
        },
      ]);
      setRowData(formattedData.flat());
    }
  }, [data]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '24px',
        boxShadow: '0px 4px 28px 0px #0000000D',
        marginTop: '40px',
      }}
    >
      {rowData.map((stat, index) => (
        <StatItem
          key={index}
          label={stat.label}
          value={stat.value}
          change={stat.change}
        />
      ))}
    </Box>
  );
};
export default Stats;
