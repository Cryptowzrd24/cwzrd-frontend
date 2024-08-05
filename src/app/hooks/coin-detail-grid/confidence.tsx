import React from 'react';

const HighBadge = (props: any) => {
  const badgeStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px 12px',
    marginTop: '10px',
    height: '26px',
    borderRadius: '8px',
    background:
      props?.props?.value === 'High'
        ? 'linear-gradient(180deg, rgba(69, 202, 148, 0.1) 0%, rgba(151, 209, 78, 0.1) 100%)'
        : props?.props?.value === 'Low'
          ? 'linear-gradient(180deg, rgba(255, 0, 0, 0.1) 0%, rgba(139, 0, 0, 0.1) 100%)'
          : 'linear-gradient(180deg, rgba(255, 165, 0, 0.1) 0%, rgba(255, 140, 0, 0.1) 100%)',
    color:
      props?.props?.value === 'High'
        ? '#32CD32'
        : props?.props?.value === 'Low'
          ? '#FF0000'
          : '#FFA500',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: '12px',
    width: '53px',
  };

  console.log(props);
  return <div style={badgeStyle}>{props?.props?.value?.toUpperCase()}</div>;
};

const Confidence = (props: any) => {
  return (
    <div
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        height: 'inherit',
      }}
    >
      <HighBadge props={props} />
    </div>
  );
};

export default Confidence;
