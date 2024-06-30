export {};

declare global {
  interface IMarketCapCardProps {
    heading: string;
    value: {
      data: number | string;
      postfix?: string;
      prefix?: string;
    };
    percent: number;
    graphAttr: {
      type: 'area' | 'line' | 'bar';
      data: { x: string | number; y: string | number }[];
    };
  }

  interface IChartProps {
    data: { x: string | number; y: string | number }[];
    color: string;
  }

  interface IStepProps {
    invertColor?: boolean;
    currentStep: number;
    totalSteps?: string[];
    setStep?: (index: number) => void;
  }
}
