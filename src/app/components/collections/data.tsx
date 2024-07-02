import React from 'react';
import Verified from '../../../../public/icons/verified';

interface cardProps {
  id: string;
  image: string;
  subtitle: string;
  icon: React.ReactNode;
  title: string;
  status: string;
  statusAction: string;
  price: string;
  amount: string;
}
export const cardData: cardProps[] = [
  {
    id: '1',
    image: '/images/collections/Rectangle 40918.png',
    subtitle: 'zafGod.eth',
    icon: <Verified />,
    title: 'Dragon Street #47',
    status: 'Status',
    statusAction: 'Complete',
    price: 'Price',
    amount: '0.000069 ETH',
  },
  {
    id: '2',
    image: '/images/collections/Rectangle 40918 (1).png',
    subtitle: 'zafGod.eth',
    icon: <Verified />,
    title: 'Dragon Street #47',
    status: 'Status',
    statusAction: 'Complete',
    price: 'Price',
    amount: '0.005 ETH',
  },
  {
    id: '3',
    image: '/images/collections/Rectangle 40918 (2).png',
    subtitle: 'zafGod.eth',
    icon: <Verified />,
    title: 'Dragon Street #47',
    status: 'Status',
    statusAction: 'Complete',
    price: 'Price',
    amount: '0.69 ETH',
  },
  {
    id: '4',
    image: '/images/collections/Rectangle 40918 (3).png',
    subtitle: 'zafGod.eth',
    icon: <Verified />,
    title: 'Dragon Street #47',
    status: 'Status',
    statusAction: 'Complete',
    price: 'Price',
    amount: '0.0069 ETH',
  },
];
