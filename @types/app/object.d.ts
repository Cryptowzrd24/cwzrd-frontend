export {};

declare global {
  interface HighchartsChartOptions {
    chart: {
      type: 'area' | 'column';
      plotBorderWidth: number;
      plotMarginBottom: number;
    };
    xAxis: {
      labels: {
        enabled: boolean;
      };
      title: {
        text: string | null;
      };
      lineWidth: number;
      gridLineWidth: number;
      lineColor: string;
    };
    yAxis: {
      labels: {
        enabled: boolean;
      };
      title: {
        text: string | null;
      };
      lineWidth: number;
      gridLineWidth: number;
    };
    legend: {
      enabled: boolean;
    };
    credits: {
      enabled: boolean;
    };
    title: { text: string | null };
    series: any;
    tooltip: any;
  }

  interface HighchartsSeriesOptions {
    name: string;
    data: any[];
    lineWidth: number;
    color: string;
    fillOpacity: number;
    threshold: number | null;
    fillColor: {
      linearGradient: { x1: number; x2: number; y1: number; y2: number };
      stops: [string | number, string][];
    };
    marker: {
      enabled: boolean;
    };
  }
}
