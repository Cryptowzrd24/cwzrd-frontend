'use client';

import React from 'react';
import AreaChart from '../../elements/areaGraphCard.element';
import BarChart from '../../elements/barGraphCard.element';
import { getGraphColor } from '@/app/helpers/functions';
import { Card } from '@mui/material';

const Graph = ({ graphAttr, change }: any) => {
  const color = getGraphColor(change);

  return (
    <Card sx={{ boxShadow: 'none', border: 'none' }}>
      <div>
        {graphAttr?.type === 'area' ? (
          <AreaChart data={graphAttr.data} color={color} isMarker={false} />
        ) : null}
        {graphAttr?.type === 'bar' ? (
          <BarChart data={graphAttr.data} color={color} />
        ) : null}
      </div>
    </Card>
  );
};

export default Graph;
