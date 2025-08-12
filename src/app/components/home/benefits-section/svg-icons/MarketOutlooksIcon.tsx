import React from 'react';

interface MarketOutlooksIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const MarketOutlooksIcon: React.FC<MarketOutlooksIconProps> = ({
  width = 576,
  height = 317,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 576 317"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Mobile Device Frame */}
      <rect
        x="0"
        y="0"
        width="576"
        height="317"
        rx="12"
        fill="#1A1A2E"
        stroke="#111111"
        strokeWidth="3"
      />

      {/* Screen */}
      <rect x="8" y="8" width="560" height="301" rx="8" fill="#2D2D4A" />

      {/* Header Bar */}
      <rect x="8" y="8" width="560" height="40" fill="#16152F" />

      {/* Header Text */}
      <text
        x="20"
        y="30"
        fontSize="14"
        fill="white"
        fontFamily="SF Pro Display"
        fontWeight="600"
      >
        Trading Dashboard
      </text>

      {/* Market Data Cards */}
      <rect x="16" y="60" width="180" height="80" rx="8" fill="#16152F" />
      <text
        x="26"
        y="80"
        fontSize="12"
        fill="#00EEFF"
        fontFamily="SF Pro Display"
        fontWeight="600"
      >
        Market Cap
      </text>
      <text
        x="26"
        y="100"
        fontSize="18"
        fill="white"
        fontFamily="SF Pro Display"
        fontWeight="700"
      >
        $1.30T
      </text>
      <text
        x="26"
        y="120"
        fontSize="10"
        fill="#00FF37"
        fontFamily="SF Pro Display"
      >
        +2.4%
      </text>

      <rect x="210" y="60" width="180" height="80" rx="8" fill="#16152F" />
      <text
        x="220"
        y="80"
        fontSize="12"
        fill="#00EEFF"
        fontFamily="SF Pro Display"
        fontWeight="600"
      >
        24h Volume
      </text>
      <text
        x="220"
        y="100"
        fontSize="18"
        fill="white"
        fontFamily="SF Pro Display"
        fontWeight="700"
      >
        $89.2B
      </text>
      <text
        x="220"
        y="120"
        fontSize="10"
        fill="#00FF37"
        fontFamily="SF Pro Display"
      >
        +1.8%
      </text>

      {/* Price Chart */}
      <rect x="16" y="160" width="544" height="120" rx="8" fill="#16152F" />

      {/* Chart Grid Lines */}
      <line x1="16" y1="180" x2="560" y2="180" stroke="#444" strokeWidth="1" />
      <line x1="16" y1="200" x2="560" y2="200" stroke="#444" strokeWidth="1" />
      <line x1="16" y1="220" x2="560" y2="220" stroke="#444" strokeWidth="1" />
      <line x1="16" y1="240" x2="560" y2="240" stroke="#444" strokeWidth="1" />

      {/* Price Line Chart */}
      <path
        d="M30 240 L80 220 L130 210 L180 200 L230 190 L280 180 L330 175 L380 170 L430 165 L480 160 L530 155"
        stroke="#00EEFF"
        strokeWidth="3"
        fill="none"
      />

      {/* Volume Bars */}
      <rect
        x="30"
        y="250"
        width="40"
        height="20"
        fill="#00EEFF"
        opacity="0.6"
      />
      <rect
        x="80"
        y="245"
        width="40"
        height="25"
        fill="#00EEFF"
        opacity="0.6"
      />
      <rect
        x="130"
        y="248"
        width="40"
        height="22"
        fill="#00EEFF"
        opacity="0.6"
      />
      <rect
        x="180"
        y="240"
        width="40"
        height="30"
        fill="#00EEFF"
        opacity="0.6"
      />
      <rect
        x="230"
        y="235"
        width="40"
        height="35"
        fill="#00EEFF"
        opacity="0.6"
      />
      <rect
        x="280"
        y="230"
        width="40"
        height="40"
        fill="#00EEFF"
        opacity="0.6"
      />
      <rect
        x="330"
        y="228"
        width="40"
        height="42"
        fill="#00EEFF"
        opacity="0.6"
      />
      <rect
        x="380"
        y="225"
        width="40"
        height="45"
        fill="#00EEFF"
        opacity="0.6"
      />
      <rect
        x="430"
        y="220"
        width="40"
        height="50"
        fill="#00EEFF"
        opacity="0.6"
      />
      <rect
        x="480"
        y="215"
        width="40"
        height="55"
        fill="#00EEFF"
        opacity="0.6"
      />
      <rect
        x="530"
        y="210"
        width="40"
        height="60"
        fill="#00EEFF"
        opacity="0.6"
      />

      {/* Crypto Tickers */}
      <rect x="16" y="300" width="120" height="40" rx="6" fill="#16152F" />
      <text
        x="26"
        y="320"
        fontSize="12"
        fill="white"
        fontFamily="SF Pro Display"
        fontWeight="600"
      >
        BTC
      </text>
      <text
        x="26"
        y="335"
        fontSize="14"
        fill="#00EEFF"
        fontFamily="SF Pro Display"
        fontWeight="700"
      >
        $43,250
      </text>

      <rect x="146" y="300" width="120" height="40" rx="6" fill="#16152F" />
      <text
        x="156"
        y="320"
        fontSize="12"
        fill="white"
        fontFamily="SF Pro Display"
        fontWeight="600"
      >
        ETH
      </text>
      <text
        x="156"
        y="335"
        fontSize="14"
        fill="#00EEFF"
        fontFamily="SF Pro Display"
        fontWeight="700"
      >
        $2,680
      </text>

      <rect x="276" y="300" width="120" height="40" rx="6" fill="#16152F" />
      <text
        x="286"
        y="320"
        fontSize="12"
        fill="white"
        fontFamily="SF Pro Display"
        fontWeight="600"
      >
        BNB
      </text>
      <text
        x="286"
        y="335"
        fontSize="14"
        fill="#00EEFF"
        fontFamily="SF Pro Display"
        fontWeight="700"
      >
        $312
      </text>

      <rect x="406" y="300" width="120" height="40" rx="6" fill="#16152F" />
      <text
        x="416"
        y="320"
        fontSize="12"
        fill="white"
        fontFamily="SF Pro Display"
        fontWeight="600"
      >
        SOL
      </text>
      <text
        x="416"
        y="335"
        fontSize="14"
        fill="#00EEFF"
        fontFamily="SF Pro Display"
        fontWeight="700"
      >
        $98.50
      </text>
    </svg>
  );
};

export default MarketOutlooksIcon;
