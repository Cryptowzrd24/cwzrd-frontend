interface CardProps {
  id: string;
  img1: string;
  img2: string;
  title1: string;
  title2: string;
  title3: string;
  heading: string;
  description: string;
  subDescription: string;
  date: string;
  author: string;
}
interface LiveCardProps {
  id: string;
  title: string;
  desc: string;
  image: string;
}

export const CardData: CardProps[] = [
  {
    id: '1',
    img1: '/images/news-letter/background.png',
    img2: '/images/news-letter/main.png',
    title1: 'TRADE',
    title2: 'BITCOIN',
    title3: 'CRYPTO',
    heading:
      'Elon Musk cites whistleblower claims in latest effort to scrap Twitter',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of",
    subDescription: '06/06/2023 at 00:06 AM | John Smith',
    date: '06/06/2023 at 00:06 AM',
    author: 'John Smith',
  },

  {
    id: '2',
    img1: '/images/news-letter/background.png',
    img2: '/images/news-letter/main.png',
    title1: 'TRADE',
    title2: 'BITCOIN',
    title3: 'CRYPTO',
    heading:
      'Elon Musk cites whistleblower claims in latest effort to scrap Twitter',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of",
    subDescription: '06/06/2023 at 00:06 AM | John Smith',
    date: '06/06/2023 at 00:06 AM',
    author: 'John Smith',
  },
  {
    id: '3',
    img1: '/images/news-letter/background.png',
    img2: '/images/news-letter/main.png',
    title1: 'TRADE',
    title2: 'BITCOIN',
    title3: 'CRYPTO',
    heading:
      'Elon Musk cites whistleblower claims in latest effort to scrap Twitter',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of",
    subDescription: '06/06/2023 at 00:06 AM | John Smith',
    date: '06/06/2023 at 00:06 AM',
    author: 'John Smith',
  },
  {
    id: '4',
    img1: '/images/news-letter/background.png',
    img2: '/images/news-letter/main.png',
    title1: 'TRADE',
    title2: 'BITCOIN',
    title3: 'CRYPTO',
    heading:
      'Elon Musk cites whistleblower claims in latest effort to scrap Twitter',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of",
    subDescription: '06/06/2023 at 00:06 AM | John Smith',
    date: '06/06/2023 at 00:06 AM',
    author: 'John Smith',
  },
];

export const LiveCardData: LiveCardProps[] = [
  {
    id: '1',
    title: 'Elon Musk cites whistleblower claims in latest Twitter',
    desc: "NASA's Drew Feusted and Ricky Arnold are to spend...",
    image: '/images/news-letter/img1.png',
  },
  {
    id: '2',
    title: 'Elon Musk cites whistleblower claims in latest Twitter',
    desc: "NASA's Drew Feusted and Ricky Arnold are to spend...",
    image: '/images/news-letter/img2.png',
  },
  {
    id: '3',
    title: 'Elon Musk cites whistleblower claims in latest Twitter',
    desc: "NASA's Drew Feusted and Ricky Arnold are to spend...",
    image: '/images/news-letter/img3.png',
  },
  {
    id: '4',
    title: 'Elon Musk cites whistleblower claims in latest Twitter',
    desc: "NASA's Drew Feusted and Ricky Arnold are to spend...",
    image: '/images/news-letter/img4.png',
  },
];
