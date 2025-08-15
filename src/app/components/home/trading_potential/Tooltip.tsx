import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import CheckRoundGreenIcon from '../../../../../public/icons/home/GreenRoundCheck.svg';

type TooltipProps = {
  text: string;
  type?: 'success' | 'error';
  height?: number;
  width?: number;
};

const Tooltip: FC<TooltipProps> = ({
  text,
  // type = 'success',
  height = 20,
  width = 20,
}) => {
  return (
    <Box
      sx={{
        bgcolor: 'black',
      }}
    >
      <Image
        src={CheckRoundGreenIcon}
        width={width}
        height={height}
        alt="green check icon"
      />
      <Typography>{text}</Typography>
    </Box>
  );
};

export default Tooltip;
