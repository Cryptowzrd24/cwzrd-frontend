import React from 'react';

interface CustomTooltipProps {
  date: string;
  time: string;
  graphType: string;
  selectedGraph: string;
  selectedCompareCoinId: string | null;
  coinSymbol: string;
  compareCoinSymbol: string;
  open: string;
  high: string;
  low: string;
  close: string;
  price: string;
  marketCap: string;
  comparePrice: string | null;
  compareMarketCap: string | null;
  volume: string;
  priceChangeFirstCoin: string | null;
  priceChangeSecondCoin: string | null;
  firstPriceChangeColor: string;
  secondPriceChangeColor: string;
  firstCoinIndex: boolean;
  secondCoinIndex: boolean;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  date,
  time,
  graphType,
  selectedGraph,
  selectedCompareCoinId,
  coinSymbol,
  compareCoinSymbol,
  open,
  high,
  low,
  close,
  price,
  marketCap,
  comparePrice,
  compareMarketCap,
  volume,
  priceChangeFirstCoin,
  priceChangeSecondCoin,
  firstPriceChangeColor,
  secondPriceChangeColor,
  firstCoinIndex,
  secondCoinIndex,
}) => {
  return (
    <div
      style={{
        padding: '16px',
        borderRadius: '8px',
        background: 'white',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        width: '250px',
        maxHeight: '194px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: '16px',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            fontWeight: 400,
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          {date}
        </div>
        <div
          style={{
            fontSize: '11px',
            fontWeight: 400,
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          {time}
        </div>
      </div>
      {graphType === 'candlestick' ? (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '6px',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 400,
                color: 'rgba(17, 17, 17, 0.4)',
              }}
            >
              Open
            </div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              ${open}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '6px',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 400,
                color: 'rgba(17, 17, 17, 0.4)',
              }}
            >
              High
            </div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              ${high}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '6px',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 400,
                color: 'rgba(17, 17, 17, 0.4)',
              }}
            >
              Low
            </div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              ${low}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '6px',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 400,
                color: 'rgba(17, 17, 17, 0.4)',
              }}
            >
              Close
            </div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              ${close}
            </div>
          </div>
        </>
      ) : selectedCompareCoinId === undefined ? (
        // When selectedCompareCoinId is null
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              fontSize: '11px',
              fontWeight: 400,
              color: 'rgba(17, 17, 17, 0.4)',
            }}
          >
            {graphType === 'line' && selectedGraph === 'Market Cap'
              ? 'Market Cap'
              : 'Price'}
          </div>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'rgba(17, 17, 17, 1)',
              textTransform: 'uppercase',
            }}
          >
            $
            {graphType === 'line' && selectedGraph === 'Market Cap'
              ? marketCap
              : price}
          </div>
        </div>
      ) : (
        <>
          {firstCoinIndex && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '6px',
                gap: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: 'rgba(114, 72, 247, 1)',
                    borderRadius: '50%',
                  }}
                ></div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 400,
                    color: 'rgba(17, 17, 17, 0.4)',
                  }}
                >
                  {graphType === 'line' && selectedGraph === 'Market Cap'
                    ? `Market Cap(${coinSymbol}):`
                    : `Price(${coinSymbol}):`}
                </div>
              </div>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: firstPriceChangeColor,
                  textTransform: 'uppercase',
                }}
              >
                {graphType === 'line' && selectedGraph === 'Market Cap'
                  ? `$${marketCap}(${priceChangeFirstCoin}%)`
                  : `$${price}(${priceChangeFirstCoin}%)`}
              </div>
            </div>
          )}

          {secondCoinIndex && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '6px',
                gap: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    width: '13px',
                    height: '12px',
                    backgroundColor: '#FF775E',
                    borderRadius: '50%',
                  }}
                ></div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 400,
                    color: 'rgba(17, 17, 17, 0.4)',
                  }}
                >
                  {graphType === 'line' && selectedGraph === 'Market Cap'
                    ? `Market Cap(${compareCoinSymbol}):`
                    : `Price(${compareCoinSymbol}):`}
                </div>
              </div>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: secondPriceChangeColor,
                  textTransform: 'uppercase',
                }}
              >
                {graphType === 'line' && selectedGraph === 'Market Cap'
                  ? `$${compareMarketCap}(${priceChangeSecondCoin}%)`
                  : `$${comparePrice}(${priceChangeSecondCoin}%)`}
              </div>
            </div>
          )}
        </>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '6px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {selectedCompareCoinId && (
            <div
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#919191dd',
                borderRadius: '50%',
              }}
            ></div>
          )}
          <div
            style={{
              fontSize: '11px',
              fontWeight: 400,
              color: 'rgba(17, 17, 17, 0.4)',
            }}
          >
            Volume
          </div>
        </div>
        <div
          style={{
            fontSize: '14px',
            fontWeight: 500,
            color: 'rgba(17, 17, 17, 1)',
            textTransform: 'uppercase',
          }}
        >
          ${volume}
        </div>
      </div>
    </div>
  );
};

export default CustomTooltip;
