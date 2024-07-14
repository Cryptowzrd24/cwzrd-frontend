import Like from '../../../../public/icons/News-Letter/like';
import Messages from '../../../../public/icons/News-Letter/mesages';
import Avatar from '../../../../public/icons/News-Letter/avatar';

interface TechnicalProps {
  id: string;
  date: string;
  title: string;
  desc: string;
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  value1: string;
  value2: string;
  image: string;
}

export const TechnicalCardData: TechnicalProps[] = [
  {
    id: '1',
    date: '06/06/2023 at 00:06 AM',
    title: 'BITCOIN POTENTIAL $4k Target On Potential Major BEARISH FLAT',
    desc: 'This sort of pattern would certainly shock the herd. A potential Wave B...',
    icon1: <Messages />,
    icon2: <Like />,
    value1: '9',
    value2: '43',
    image: '/images/news-letter/graph.png',
  },
  {
    id: '2',
    date: '06/06/2023 at 00:06 AM',
    title: 'BITCOIN POTENTIAL $4k Target On Potential Major BEARISH FLAT',
    desc: 'This sort of pattern would certainly shock the herd. A potential Wave B...',
    icon1: <Messages />,
    icon2: <Avatar />,
    value1: '9',
    value2: '43',
    image: '/images/news-letter/graph.png',
  },
  {
    id: '3',
    date: '06/06/2023 at 00:06 AM',
    title: 'BITCOIN POTENTIAL $4k Target On Potential Major BEARISH FLAT',
    desc: 'This sort of pattern would certainly shock the herd. A potential Wave B...',
    icon1: <Messages />,
    icon2: <Like />,
    value1: '9',
    value2: '43',
    image: '/images/news-letter/graph.png',
  },
  {
    id: '3',
    date: '06/06/2023 at 00:06 AM',
    title: 'BITCOIN POTENTIAL $4k Target On Potential Major BEARISH FLAT',
    desc: 'This sort of pattern would certainly shock the herd. A potential Wave B...',
    icon1: <Messages />,
    icon2: <Like />,
    value1: '9',
    value2: '43',
    image: '/images/news-letter/graph.png',
  },
  {
    id: '3',
    date: '06/06/2023 at 00:06 AM',
    title: 'BITCOIN POTENTIAL $4k Target On Potential Major BEARISH FLAT',
    desc: 'This sort of pattern would certainly shock the herd. A potential Wave B...',
    icon1: <Messages />,
    icon2: <Like />,
    value1: '9',
    value2: '43',
    image: '/images/news-letter/graph.png',
  },
];
