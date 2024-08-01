import React from 'react';

const ThresholdCellRenderer = (props: any) => {
  const value = props.value * 100; // Convert value to percentage
  const roundedValue = parseFloat(value.toFixed(4));

  if (isNaN(value)) {
    return <span>--</span>;
  }

  return (
    <span>
      {roundedValue < 0.01 && roundedValue > 0
        ? `<${value.toFixed(2)}%`
        : `${value.toFixed(2)}%`}
    </span>
  );
};

export default ThresholdCellRenderer;
