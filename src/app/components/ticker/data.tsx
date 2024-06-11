import BitcoinIcon from "../../../../public/icons/Ticker-Section/bitcoin";
import BnbIcon from "../../../../public/icons/Ticker-Section/bnb";
import EthereumIcon from "../../../../public/icons/Ticker-Section/ethereum";
import NgnIcon from "../../../../public/icons/Ticker-Section/gng";
import LtcIcon from "../../../../public/icons/Ticker-Section/ltc";
import SolanaIcon from "../../../../public/icons/Ticker-Section/solana";
import TetherIcon from "../../../../public/icons/Ticker-Section/tether";

interface TickerProps {
  id: string;
  icon: JSX.Element;
  name: string;
  amount: string;
  margin: string;
}

export const ticker: TickerProps[] = [
  {
    id: "1",
    icon: <BitcoinIcon />,
    name: "BTC",
    amount: "$2984.08",
    margin: "+7.37%",
  },
  {
    id: "2",

    icon: <LtcIcon />,
    name: "LTC",
    amount: "$2984.08",
    margin: "-7.37%",
  },
  {
    id: "3",

    icon: <EthereumIcon />,
    name: "ETH",
    amount: "$2984.08",
    margin: "-7.37%",
  },
  {
    id: "4",

    icon: <TetherIcon />,
    name: "USDT",
    amount: "$2984.08",
    margin: "+7.37%",
  },
  {
    id: "5",

    icon: <SolanaIcon />,
    name: "SOL",
    amount: "$2984.08",
    margin: "+7.37%",
  },
  {
    id: "6",

    icon: <NgnIcon />,
    name: "NGN",
    amount: "$2984.08",
    margin: "-7.37%",
  },
  {
    id: "7",

    icon: <BnbIcon />,
    name: "BNB",
    amount: "$2984.08",
    margin: "+7.37%",
  },
];
