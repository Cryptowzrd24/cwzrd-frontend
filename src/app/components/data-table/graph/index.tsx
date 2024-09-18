import styles from './index.module.css';

export const GraphComp = (props: any) => {
  const isExchangeTable = 'score' in props.data;
  const percentChange7d = props?.data?.percent_change_7d;
  const image = `https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${props.data.coin_id}.svg`;
  const exchangeImage = `https://s3.coinmarketcap.com/generated/sparklines/exchanges/web/7d/usd/${props?.data?.ex_id}.svg`;

  return (
    <>
      {!isExchangeTable ? (
        <div className={styles['graph-component']}>
          {props.data.coin_id ? (
            <img
              style={{
                marginTop: '8px',
                width: '100%',
                height: '100%',
                filter:
                  percentChange7d && String(percentChange7d)?.includes('-')
                    ? 'brightness(0) saturate(100%) invert(46%) sepia(99%) saturate(379%) hue-rotate(311deg) brightness(100%) contrast(93%)'
                    : 'brightness(0) saturate(100%) invert(68%) sepia(13%) saturate(1609%) hue-rotate(104deg) brightness(97%) contrast(94%)',
              }}
              src={image}
              alt="graph"
            />
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center' }}>--</div>
          )}
        </div>
      ) : (
        <div className={styles['graph-component']}>
          {props.data.ex_id ? (
            <img
              style={{
                marginTop: '8px',
                width: '100%',
                height: '100%',
                filter:
                  Number(props.data.score) < 4.9
                    ? 'brightness(0) saturate(100%) invert(46%) sepia(99%) saturate(379%) hue-rotate(311deg) brightness(100%) contrast(93%)'
                    : 'brightness(0) saturate(100%) invert(68%) sepia(13%) saturate(1609%) hue-rotate(104deg) brightness(97%) contrast(94%)',
              }}
              src={exchangeImage}
              alt="graph"
            />
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center' }}>--</div>
          )}
        </div>
      )}
    </>
  );
};
