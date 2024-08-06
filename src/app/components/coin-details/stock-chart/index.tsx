'use client';
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useFetchCoinDetailsGraphDataQuery } from '@/app/redux/coin-details';
import { useFetchHistoricalCoinDataDetailsQuery } from '@/app/redux/reducers/data-grid';
import { usePathname } from 'next/navigation';
import { priceNumberFormatter } from '../../data-table/price';
import numeral from 'numeral';

interface StockChartProps {
  selectedGraph: string;
  selectedFilter: string;
  volumeValue: string;
  isFullScreen: boolean;
  chartRef: any;
  setIsFullScreen: (val: boolean) => void;
}

const StockChart: React.FC<StockChartProps> = React.memo(
  ({
    selectedGraph,
    selectedFilter,
    volumeValue,
    isFullScreen,
    chartRef,
    setIsFullScreen,
  }) => {
    const pathname = usePathname();
    const [options, setOptions] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const chartComponentRef = useRef<any>(null);

    const convertToUppercasePeriod = (input: string) => {
      if (input === '24h') return '1D';
      return input.replace(
        /(\d+)([a-z])/i,
        (_, number, period) => `${number}${period.toUpperCase()}`,
      );
    };

    const getTimeStampForPeriod = (period: string) => {
      const currentTime = Date.now();
      let pastTime;

      switch (period) {
        case '1D':
          pastTime = currentTime - 24 * 60 * 60 * 1000;
          break;
        case '3D':
          pastTime = currentTime - 3 * 24 * 60 * 60 * 1000;
          break;
        case '7D':
          pastTime = currentTime - 7 * 24 * 60 * 60 * 1000;
          break;
        case '1M':
          pastTime = currentTime - 30 * 24 * 60 * 60 * 1000;
          break;
        case '6m':
          pastTime = currentTime - 6 * 30 * 24 * 60 * 60 * 1000;
          break;
        case '1Y':
          pastTime = currentTime - 365 * 24 * 60 * 60 * 1000;
          break;
        case 'ALL':
          pastTime = 0;
          break;
        default:
          throw new Error('Unsupported period.');
      }

      return Math.floor(pastTime / 1000);
    };

    const getInterval = (period: string) => {
      switch (period) {
        case '24h':
          return '1h';
        case '3d':
          return '1h';
        case '7d':
          return '1d';
        case '1m':
          return '1d';
        case '6m':
          return '1w';
        case '1y':
          return '1w';
        case 'ALL':
          return '1M';
        default:
          return '1h';
      }
    };

    const range = useMemo(
      () => convertToUppercasePeriod(volumeValue),
      [volumeValue],
    );
    const timeStart = useMemo(
      () => getTimeStampForPeriod(volumeValue),
      [volumeValue],
    );
    const interval = useMemo(() => getInterval(volumeValue), [volumeValue]);
    const coinId = useMemo(() => pathname.split('/').pop(), [pathname]);

    const { data: apiData } = useFetchCoinDetailsGraphDataQuery(
      {
        coinId,
        range,
      },
      { skip: !coinId },
    );

    const { data: candleStickData } = useFetchHistoricalCoinDataDetailsQuery(
      {
        coinId,
        timeStart: timeStart.toString(),
        interval,
      },
      { skip: !coinId || selectedFilter !== 'candlestick' },
    );

    const graphType =
      selectedFilter === 'candlestick'
        ? 'candlestick'
        : selectedGraph === 'Price'
          ? 'area'
          : 'line';

    const getDate = (timestamp: string) =>
      new Date(parseInt(timestamp, 10) * 1000).getTime();

    const fetchChartData = useCallback(async () => {
      setIsLoading(true);

      if (!apiData?.data?.points) {
        setIsLoading(false);
        return;
      }

      const points = apiData.data.points;
      const data: any[] = [];
      const volume: any[] = [];
      const marketcap: any[] = [];
      const candleStickMarketcap: any[] = [];
      const candleStickVolume: any[] = [];
      const coinThreshold = (Object as any).values(points)[0].v[0];
      const volumeThreshold = (Object as any).values(points)[0].v[1];

      for (const timestamp in points) {
        if (points.hasOwnProperty(timestamp)) {
          const point = points[timestamp];
          data.push([getDate(timestamp), point.v[0]]);
          volume.push([getDate(timestamp), point.v[1]]);
          marketcap.push([getDate(timestamp), point.v[2]]);
        }
      }

      const formattedVolumeData = volume.map(([time, value]) => ({
        x: time,
        y: value,
        color:
          value > volumeThreshold
            ? 'rgba(69, 202, 148, 1)'
            : 'rgba(152, 0, 255, 1)',
      }));

      let yMin, yMax;

      if (graphType === 'line') {
        yMin = Math.min(...marketcap.map((point) => point[1]));
        yMax = Math.max(...marketcap.map((point) => point[1]));
      } else if (graphType === 'candlestick' && candleStickData?.data?.quotes) {
        yMin = Math.min(
          ...candleStickData.data.quotes.map((quote: any) => quote.quote.low),
        );
        yMax = Math.max(
          ...candleStickData.data.quotes.map((quote: any) => quote.quote.high),
        );
      } else {
        yMin = Math.min(...data.map((point) => point[1]));
        yMax = Math.max(...data.map((point) => point[1]));
      }

      let candlestickSeries = [];

      if (selectedFilter === 'candlestick' && candleStickData?.data?.quotes) {
        candlestickSeries = candleStickData.data.quotes.map((quote: any) => {
          candleStickMarketcap.push([
            new Date(quote.timeOpen).getTime(),
            quote.quote.marketCap,
          ]);

          candleStickVolume.push({
            x: new Date(quote.timeOpen).getTime(),
            y: quote.quote.volume,
            color:
              quote.quote.volume > volumeThreshold
                ? 'rgba(69, 202, 148, 1)'
                : 'rgba(152, 0, 255, 1)',
          });

          return {
            x: new Date(quote.timeOpen).getTime(),
            open: quote.quote.open,
            high: quote.quote.high,
            low: quote.quote.low,
            close: quote.quote.close,
            color:
              quote.quote.close > quote.quote.open
                ? 'rgba(69, 202, 148, 1)'
                : 'rgba(152, 0, 255, 1)',
            lineColor:
              quote.quote.close > quote.quote.open
                ? 'rgba(69, 202, 148, 1)'
                : 'rgba(152, 0, 255, 1)',
          };
        });
      }

      setOptions({
        scrollbar: { enabled: false },
        rangeSelector: { enabled: false },
        xAxis: [
          {
            labels: {
              enabled: true,
              style: {
                fontSize: '12px',
                fontFamily: 'Sf Pro Display',
                color: 'rgba(17, 17, 17, 0.4)',
              },
            },
            lineWidth: 0,
            tickWidth: 0,
          },
        ],
        yAxis: [
          {
            plotLines: [
              {
                value: coinThreshold,
                color: '#999',
                dashStyle: 'dot',
                width: 1,
              },
            ],
            labels: {
              align: 'left',
              style: {
                fontSize: '12px',
                fontFamily: 'Sf Pro Display',
                color: 'rgba(17, 17, 17, 0.4)',
              },
              formatter: function (this: any) {
                const value = this.value;
                if (value >= 1000000000000)
                  return (value / 1000000000000).toFixed(1) + 'T';
                if (value >= 1000000000)
                  return (value / 1000000000).toFixed(1) + 'B';
                if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
                if (value >= 1000) return (value / 1000).toFixed(1) + 'K';
                return value;
              },
            },
            height: '80%',
            resize: { enabled: false },
            gridLineWidth: 0.5,
            min: yMin * 0.999,
            max: yMax * 1.001,
          },
          {
            labels: { enabled: false, align: 'left' },
            top: '80%',
            height: '20%',
            offset: 0,
            gridLineWidth: 0,
          },
        ],
        tooltip: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          shadow: false,
          useHTML: true,
          formatter: function (this: any) {
            const date = Highcharts.dateFormat('%m/%d/%Y', this.x);
            const time = Highcharts.dateFormat('%I:%M:%S %p', this.x);
            const volume = numeral(
              (Object as any).values(points)[this.point.index].v[1],
            ).format('0.00a');

            const ohlc = this.points[0].point;
            const open = priceNumberFormatter(ohlc.open);
            const high = priceNumberFormatter(ohlc.high);
            const low = priceNumberFormatter(ohlc.low);
            const close = priceNumberFormatter(ohlc.close);
            const price = priceNumberFormatter(this.y);

            return `
            <div style="padding: 16px; border-radius: 8px; background: white; box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.05); width: 250px; max-height: 194px;">
              <div style="display: flex; justify-content: space-between; padding-bottom: 16px;">
                <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${date}</div>
                <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${time}</div>
              </div>
            ${
              graphType === 'candlestick'
                ? `
                  <div style="display: flex; justify-content: space-between; padding-top: 6px;">
                    <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4)">
                      Open
                    </div>
                    <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1)">
                      $${open}
                    </div>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding-top: 6px;">
                    <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4)">
                      High
                    </div>
                    <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1)">
                      $${high}
                    </div>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding-top: 6px;">
                    <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4)">
                      Low
                    </div>
                    <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1)">
                      $${low}
                    </div>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding-top: 6px;">
                    <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4)">
                      Close
                    </div>
                    <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1)">
                      $${close}
                    </div>
                  </div>
                `
                : `
                <div style="display: flex; justify-content: space-between; padding-top: 6px;">
                  <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4)">
                    Price
                  </div>
                  <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1)">
                    $${price}
                  </div>
                </div>
                `
            }
              <div style="display: flex; justify-content: space-between; padding-top: 6px;">
                <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4)">Volume</div>
                <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase;">$${volume}</div>
              </div>
            </div>
          `;
          },
          shared: true,
          split: false,
        },
        series: [
          {
            type: graphType,
            id: 'graph',
            name: 'AAPL Stock Price',
            data:
              graphType === 'candlestick'
                ? candlestickSeries
                : graphType === 'line'
                  ? marketcap
                  : data,
            color: 'rgba(69, 202, 148, 1)',
            fillColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                [0, 'rgba(69, 202, 148, 0.3)'],
                [1, 'rgba(69, 202, 148, 0.001)'],
              ],
            },
            zones: [
              {
                value: coinThreshold,
                color: 'rgba(255, 0, 0, 1)',
                fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                  stops: [
                    [0, 'rgba(255, 0, 0, 0.3)'],
                    [1, 'rgba(255, 0, 0, 0.001)'],
                  ],
                },
              },
              {
                color: 'rgba(69, 202, 148, 1)',
                fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                  stops: [
                    [0, 'rgba(69, 202, 148, 0.3)'],
                    [1, 'rgba(69, 202, 148, 0.001)'],
                  ],
                },
              },
            ],
            marker: {
              shadow: false,
              radius: 3,
              lineWidth: 0,
              lineColor: '#fff',
              states: {
                hover: {
                  enabled: true,
                  lineWidth: 4,
                  radius: 8,
                  shadow: false,
                },
              },
            },
            dataGrouping: { enabled: false },
          },
          {
            type: 'column',
            id: 'aapl-volume',
            name: 'AAPL Volume',
            data:
              graphType === 'candlestick'
                ? candleStickVolume
                : formattedVolumeData,
            yAxis: 1,
            dataGrouping: { enabled: false }, // Ensure no data grouping for the volume series
          },
          {
            type: 'area',
            id: 'aapl-marketcap',
            name: 'AAPL Marketcap',
            data:
              graphType === 'candlestick' ? candleStickMarketcap : marketcap,
            yAxis: 2,
            color: '#F0F2F5',
            fillColor: '#F0F2F5',
            dataGrouping: { enabled: false }, // Ensure no data grouping for the volume series,
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: false,
                },
              },
            },
          },
        ],
        navigator: {
          height: 48,
          maskFill: '#EFF3FF75',
          outlineWidth: 1,
          outlineColor: 'rgba(17, 17, 17, 0.05)',
          scrollbar: { enabled: true },
          handles: { enabled: true },
          series: {
            type: 'line',
            color: 'rgba(114, 72, 247, 1)',
            fillOpacity: 0,
          },
          xAxis: {
            labels: {
              style: {
                fontSize: '12px',
                fontFamily: 'Sf Pro Display',
                color: 'rgba(17, 17, 17, 0.4)',
              },
            },
          },
        },
        responsive: {
          rules: [
            {
              condition: { maxWidth: 800 },
              chartOptions: { rangeSelector: { inputEnabled: false } },
            },
          ],
        },
        credits: { enabled: false },
        chart: {
          events: {
            load: function () {
              setIsLoading(false);
            },
          },
        },
      });

      // Ensure the chart is fully loaded before hiding the loader
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Adjust timeout as needed for your use case
    }, [apiData, candleStickData, graphType, selectedFilter, volumeValue]);

    useEffect(() => {
      fetchChartData();

      if (chartComponentRef.current) {
        if (selectedFilter !== 'candlestick')
          chartComponentRef.current.chart.zoomOut();
      }
    }, [fetchChartData]);

    const handleKeyDown = (event: any) => {
      if (event.keyCode === 27 && isFullScreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    };

    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
      }
    };

    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('fullscreenchange', handleFullScreenChange);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener(
          'fullscreenchange',
          handleFullScreenChange,
        );
      };
    }, [isFullScreen]);

    return (
      <div
        ref={chartRef}
        style={{
          padding: isFullScreen ? '0' : '0 24px 34px 22px',
          height: isFullScreen ? '90vh' : '620px',
          position: 'relative',
          marginTop: '35px',
        }}
      >
        {isLoading && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              zIndex: 10,
              marginTop: '50px',
            }}
          >
            <div className="spinner" style={{ marginBottom: '10px' }}></div>
            <div
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                marginBottom: '5px',
              }}
            >
              Loading data
            </div>
            <div style={{ fontSize: '14px', color: 'gray' }}>
              Please wait a moment.
            </div>
          </div>
        )}
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={options}
          containerProps={{ style: { height: '100%' } }}
          ref={chartComponentRef}
        />
      </div>
    );
  },
);

export default StockChart;
