import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import CheckRoundGreenIcon from '../../../../../public/icons/home/GreenRoundCheck.svg';
import ArrowCircleOrangeUpRightIcon from '../../../../../public/icons/home/arrow_circle_orange_up-right.svg';
import CheckCircleOrangeIcon from '../../../../../public/icons/home/check_circle_orange.svg';
import NewsPaperRedIcon from '../../../../../public/icons/home/newspaper_red.svg';

type CheckTooltipProps = {
  text: string;
  type?:
    | 'market-outlook-arrow'
    | 'market-outlook-check'
    | 'skills-strategies'
    | 'in-depth-economy';
  height?: number;
  width?: number;
  fontSize?: string;
};

const CheckTooltip: FC<CheckTooltipProps> = ({
  text,
  type = 'skills-strategies',
  height = 16,
  width = 16,
  fontSize = '12px',
}) => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
        padding: '6px 12px',
        borderRadius: '25px',
        width: 'auto',
        display: 'flex',
        flexWrap: 'no-wrap',
        gap: '6px',
      }}
    >
      <Image
        src={
          type === 'skills-strategies'
            ? CheckRoundGreenIcon
            : type === 'in-depth-economy'
              ? NewsPaperRedIcon
              : type === 'market-outlook-arrow'
                ? ArrowCircleOrangeUpRightIcon
                : CheckCircleOrangeIcon
        }
        width={width}
        height={height}
        alt="green check icon"
      />
      <Typography
        sx={{
          width: 'auto',
          fontSize: `${fontSize} !important`,
          textWrap: 'nowrap',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default CheckTooltip;
