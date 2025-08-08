export interface Benefit {
  id: number;
  title: string;
  description: string;
  hasButton: boolean;
  background: string;
  textColor: string;
  titleColor?: string;
  descriptionColor?: string;
  imagePlaceholder: {
    width: string;
    height: string;
    background: string;
    borderRadius: string;
    display: string;
    alignItems: string;
    justifyContent: string;
    position: string;
    overflow: string;
    border?: string;
    isBackground?: boolean;
    isForeground?: boolean;
  };
  subIcons?: Array<{
    icon: string;
    background: string;
    size: number;
    glow?: boolean;
  }>;
  cardWidth: number;
  cardHeight: number;
  titleFontSize: string;
  titleLineHeight: string;
  titleLetterSpacing: string;
  descriptionFontSize: string;
  descriptionLineHeight: string;
  descriptionLetterSpacing: string;
  descriptionOpacity?: number;
}

export const benefitsData: Benefit[] = [
  {
    id: 1,
    title: 'Airdrop Calls',
    description: "Don't miss out on free opportunities. Stay informed on the latest airdrop calls and discover how to earn from them.",
    hasButton: true,
    background: 'white',
    textColor: 'white',
    titleColor: 'white',
    descriptionColor: 'white',
    cardWidth: 628,
    cardHeight: 311,
    titleFontSize: '20px',
    titleLineHeight: '24px',
    titleLetterSpacing: '0.20px',
    descriptionFontSize: '14px',
    descriptionLineHeight: '15.40px',
    descriptionLetterSpacing: '0.14px',
    imagePlaceholder: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(0deg, #270FAD 0%, #270FAD 100%)',
      borderRadius: '16px',
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      overflow: 'hidden',
      isBackground: true,
    },
  },
  {
    id: 2,
    title: 'Professional Mentorship',
    description: 'Receive direct mentorship from experienced traders. Our professional guidance ensures you have the support needed to improve your skills and strategies.',
    hasButton: false,
    background: 'white',
    textColor: 'white',
    titleColor: 'white',
    descriptionColor: 'white',
    cardWidth: 410,
    cardHeight: 311,
    titleFontSize: '20px',
    titleLineHeight: '24px',
    titleLetterSpacing: '0.20px',
    descriptionFontSize: '14px',
    descriptionLineHeight: '18.20px',
    descriptionLetterSpacing: '0.14px',
    imagePlaceholder: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(0deg, #00EEFF 0%, #00EEFF 100%)',
      borderRadius: '16px',
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      overflow: 'hidden',
      isBackground: true,
    },
  },
  {
    id: 3,
    title: 'Market Outlooks',
    description: 'Get a clear perspective on market trends with our expert market outlooks. Know where the market is heading and adjust your strategies accordingly.',
    hasButton: false,
    background: '#16152F',
    textColor: 'white',
    titleColor: 'white',
    descriptionColor: 'rgba(255, 255, 255, 0.72)',
    cardWidth: 338,
    cardHeight: 311,
    titleFontSize: '20px',
    titleLineHeight: '24px',
    titleLetterSpacing: '0.20px',
    descriptionFontSize: '14px',
    descriptionLineHeight: '18.20px',
    descriptionLetterSpacing: '0.14px',
    imagePlaceholder: {
      width: '100%',
      height: '100%',
      background: '#16152F',
      borderRadius: '16px',
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      overflow: 'hidden',
      isBackground: true,
    },
  },
  {
    id: 4,
    title: 'Risk Management Guidance',
    description: 'Learn to protect your investments and trade confidently with proven risk management techniques.',
    hasButton: false,
    background: 'white',
    textColor: '#111111',
    titleColor: '#111111',
    descriptionColor: '#111111',
    cardWidth: 338,
    cardHeight: 311,
    titleFontSize: '16px',
    titleLineHeight: '19.20px',
    titleLetterSpacing: '0.16px',
    descriptionFontSize: '14px',
    descriptionLineHeight: '18.20px',
    descriptionLetterSpacing: '0.14px',
    descriptionOpacity: 0.56,
    imagePlaceholder: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(0deg, #00FF37 0%, #00FF37 100%)',
      borderRadius: '16px',
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      overflow: 'hidden',
      isBackground: true,
    },
  },
  {
    id: 5,
    title: 'Expert Lessons on Trading',
    description: 'Learn from the best with expert-led lessons on trading. Gain the knowledge you need to execute smart strategies and achieve long-term success.',
    hasButton: false,
    background: 'white',
    textColor: 'white',
    titleColor: 'white',
    descriptionColor: 'white',
    cardWidth: 338,
    cardHeight: 311,
    titleFontSize: '16px',
    titleLineHeight: '19.20px',
    titleLetterSpacing: '0.16px',
    descriptionFontSize: '14px',
    descriptionLineHeight: '15.40px',
    descriptionLetterSpacing: '0.14px',
    imagePlaceholder: {
      width: '100%',
      height: '100%',
      background: 'radial-gradient(ellipse 34.68% 40.25% at 42.89% 13.53%, rgba(0, 0, 0, 0) 0%, black 100%), #82C7FF',
      borderRadius: '16px',
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      overflow: 'hidden',
      border: '1px solid #D7D7D7',
      isBackground: true,
    },
  },
  {
    id: 6,
    title: 'Educational Guides',
    description: 'Access comprehensive guides designed to educate and empower traders at all levels. Master the markets with our in-depth resources.',
    hasButton: false,
    background: 'white',
    textColor: '#111111',
    titleColor: '#111111',
    descriptionColor: '#111111',
    cardWidth: 1000,
    cardHeight: 216,
    titleFontSize: '20px',
    titleLineHeight: '24px',
    titleLetterSpacing: '0.20px',
    descriptionFontSize: '16px',
    descriptionLineHeight: '20.80px',
    descriptionLetterSpacing: '0.16px',
    descriptionOpacity: 0.56,
    subIcons: [
      { icon: '🧠', background: 'white', size: 52 },
      { icon: '📁', background: 'white', size: 56 },
      { icon: '🎓', background: '#41B9F5', size: 72, glow: true },
      { icon: '⚡', background: 'white', size: 58 },
      { icon: '📄', background: 'white', size: 44 },
    ],
    imagePlaceholder: {
      width: '100%',
      height: '100%',
      background: 'white',
      borderRadius: '16px',
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      overflow: 'hidden',
      isBackground: true,
    },
  },
  {
    id: 7,
    title: 'WZRD Strategies',
    description: 'Designed to maximize profits and minimize risk.',
    hasButton: false,
    background: 'white',
    textColor: '#111111',
    titleColor: '#111111',
    descriptionColor: '#111111',
    cardWidth: 410,
    cardHeight: 311,
    titleFontSize: '20px',
    titleLineHeight: '24px',
    titleLetterSpacing: '0.20px',
    descriptionFontSize: '16px',
    descriptionLineHeight: '17.60px',
    descriptionLetterSpacing: '0.16px',
    imagePlaceholder: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(0deg, #7248F7 0%, #7248F7 100%)',
      borderRadius: '16px',
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      overflow: 'hidden',
      isBackground: true,
    },
  },
  {
    id: 8,
    title: 'Take Profit Guidance',
    description: 'Maximize your earnings with expert take profit strategies. We help identify the perfect moments to cash in on your trades.',
    hasButton: true,
    background: 'white',
    textColor: 'white',
    titleColor: 'white',
    descriptionColor: 'white',
    cardWidth: 628,
    cardHeight: 311,
    titleFontSize: '20px',
    titleLineHeight: '24px',
    titleLetterSpacing: '0.20px',
    descriptionFontSize: '14px',
    descriptionLineHeight: '18.20px',
    descriptionLetterSpacing: '0.14px',
    descriptionOpacity: 0.56,
    imagePlaceholder: {
      width: '100%',
      height: '100%',
      background: 'radial-gradient(ellipse 95.44% 211.15% at 93.63% 67.54%, rgba(0, 0, 0, 0.24) 0%, black 100%), #FFF600',
      borderRadius: '16px',
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      overflow: 'hidden',
      isBackground: true,
    },
  },
]; 