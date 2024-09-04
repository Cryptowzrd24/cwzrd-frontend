import styles from './index.module.css';

export const GraphComp = (props: any) => {
  const percentChange7d = props?.data?.percent_change_7d;
  const image = `https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${props.data.coin_id}.svg`;
  return (
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
  );
};
