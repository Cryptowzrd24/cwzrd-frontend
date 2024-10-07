import React from 'react';
import { priceNumberFormatter } from '../../data-table/price';

interface CustomTooltipProps {
  point: any;
  date: string;
  time: string;
  volume: number | string;
  sales?: number;
  tokenId?: string;
  imageCacheRef: React.MutableRefObject<Record<string, string>>;
  currentTokenImage: string;
  isScatter: boolean;
  apiData: any;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  point,
  date,
  time,
  volume,
  sales,
  tokenId,
  imageCacheRef,
  currentTokenImage,
  isScatter,
  apiData,
}) => {
  if (isScatter) {
    return (
      <div
        style={{
          width: '200px',
          boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: '16px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginLeft: '8px', marginTop: '8px' }}>
            {!imageCacheRef.current[tokenId!] ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '184px',
                  height: '169px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    border: '2px solid rgba(114, 72, 247, 0.8)',
                    borderLeftColor: 'transparent',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    animation: 'spin89345 1s linear infinite',
                  }}
                ></div>
              </div>
            ) : (
              <img
                src={imageCacheRef.current[tokenId!] || currentTokenImage}
                alt="banner"
                style={{
                  width: '184px',
                  height: '169px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            )}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '8px',
              paddingInline: '16px',
            }}
          >
            <span
              style={{
                fontSize: '10px',
                fontWeight: 400,
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {date}
            </span>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 400,
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {time}
            </span>
          </div>

          <div
            style={{
              height: '36px',
              width: '184px',
              borderRadius: '8px',
              background: 'rgba(17, 17, 17, 0.05)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '8px',
              marginBottom: '8px',
              marginLeft: '8px',
              gap: '24px',
              opacity: '80%',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  lineHeight: '13px',
                  color: 'rgba(17, 17, 17, 0.6)',
                  fontFamily: 'Sf Pro Display',
                }}
              >
                Item
              </span>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  fontFamily: 'Sf Pro Display',
                  color: 'rgba(17, 17, 17, 1)',
                  lineHeight: '15.6px',
                }}
              >
                #{tokenId}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  lineHeight: '13px',
                  color: 'rgba(17, 17, 17, 0.6)',
                  fontFamily: 'Sf Pro Display',
                }}
              >
                Price
              </span>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  fontFamily: 'Sf Pro Display',
                  lineHeight: '15.6px',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                {priceNumberFormatter(point.y)}{' '}
                {apiData[0]?.nativeCurrencySymbol}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        padding: '16px',
        borderRadius: '8px',
        background: 'white',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        width: '220px',
        maxHeight: '128px',
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
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'rgba(31, 215, 115, 1)',
              borderRadius: '50%',
            }}
          ></div>
          Price
        </div>
        <div
          style={{
            fontSize: '14px',
            fontWeight: 500,
            color: 'rgba(17, 17, 17, 1)',
            textTransform: 'uppercase',
          }}
        >
          {priceNumberFormatter(point.y)} {apiData[0]?.nativeCurrencySymbol}
        </div>
      </div>
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
            gap: '4px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'rgba(247, 132, 26, 1)',
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
          {priceNumberFormatter(volume)} {apiData[0]?.nativeCurrencySymbol}
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
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'rgba(114, 72, 247, 1)',
              borderRadius: '50%',
            }}
          ></div>
          Sales Count
        </div>
        <div
          style={{
            fontSize: '14px',
            fontWeight: 500,
            color: 'rgba(17, 17, 17, 1)',
            textTransform: 'uppercase',
          }}
        >
          {sales}
        </div>
      </div>
    </div>
  );
};

export default CustomTooltip;
