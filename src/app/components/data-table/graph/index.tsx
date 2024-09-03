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
            filter: percentChange7d?.includes('-')
              ? 'hue-rotate(300deg) saturate(210%) brightness(0.7) contrast(170%)'
              : 'hue-rotate(85deg) saturate(80%) brightness(0.85)',
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
