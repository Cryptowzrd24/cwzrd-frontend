import CloseIcon from '@mui/icons-material/Close';
import styles from './index.module.scss';
import { useEffect, useRef } from 'react';
import {
  ChartingLibraryWidgetOptions,
  LanguageCode,
  ResolutionString,
  widget,
} from '../../../../../public/static/charting_library';
import { IconButton } from '@mui/material';

export const TradingView = ({
  setShow,
  config,
}: {
  setShow: (_args: string) => void;
  config: Partial<ChartingLibraryWidgetOptions>;
}) => {
  const chartContainerRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

  const handleClose = (event: any) => {
    if (event.target === event.currentTarget) {
      setShow('Price');
    }
  };

  useEffect(() => {
    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: config.symbol,
      // BEWARE: no trailing slash is expected in feed URL
      datafeed: new (window as any).Datafeeds.UDFCompatibleDatafeed(
        'https://demo_feed.tradingview.com',
        undefined,
        {
          maxResponseLength: 1000,
          expectedOrder: 'latestFirst',
        },
      ),
      interval: config.interval as ResolutionString,
      container: chartContainerRef.current,
      library_path: config.library_path,
      locale: config.locale as LanguageCode,
      disabled_features: ['use_localstorage_for_settings'],
      enabled_features: ['study_templates'],
      charts_storage_url: config.charts_storage_url,
      charts_storage_api_version: config.charts_storage_api_version,
      client_id: config.client_id,
      user_id: config.user_id,
      fullscreen: config.fullscreen,
      autosize: config.autosize,
      height: config.height,
    };

    const tvWidget = new widget(widgetOptions);

    tvWidget.onChartReady(() => {
      tvWidget.headerReady().then(() => {
        const button = tvWidget.createButton();
        button.setAttribute('title', 'Click to show a notification popup');
        button.classList.add('apply-common-tooltip');
        button.addEventListener('click', () =>
          tvWidget.showNoticeDialog({
            title: 'Notification',
            body: 'TradingView Charting Library API works correctly',
            callback: () => {
              console.log('Noticed!');
            },
          }),
        );

        button.innerHTML = 'Check API';
      });
    });

    return () => {
      tvWidget.remove();
    };
  }, [config]);

  return (
    <div onClick={handleClose} className={styles.tradingView_container}>
      <div className={styles.tradingView}>
        <IconButton
          onClick={() => setShow('Price')}
          sx={{
            position: 'absolute',
            top: '8px',
            right: '10px',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <CloseIcon
            sx={{
              fontSize: '24px',
              color: 'GrayText',
              opacity: '0.5',
            }}
          />
        </IconButton>
        <div className={styles.tradingView_header}>Technical Analysis</div>
        <div ref={chartContainerRef} className={styles.TVChartContainer} />
      </div>
    </div>
  );
};
