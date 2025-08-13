'use client';

import { Box, Stack, Tooltip, Typography } from '@mui/material';
import React, { useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { HeaderTooltip } from '@/app/components/header-tooltip';
import infoIcon from '@/app/assets/icons/detailIcon.svg';
import Image from 'next/image';

// Data for the chart
const averageTransactionFeesData = {
  averageTransactionFeesDetails: [
    {
      date: '2023-09-29',
      fee: 0.000089,
      feeUsd: 2.4,
    },
    {
      date: '2023-09-30',
      fee: 0.000078,
      feeUsd: 2.11,
    },
    {
      date: '2023-10-01',
      fee: 0.000059,
      feeUsd: 1.62,
    },
    {
      date: '2023-10-02',
      fee: 0.000079,
      feeUsd: 2.21,
    },
    {
      date: '2023-10-03',
      fee: 0.000094,
      feeUsd: 2.57,
    },
    {
      date: '2023-10-04',
      fee: 0.000092,
      feeUsd: 2.52,
    },
    {
      date: '2023-10-05',
      fee: 0.000084,
      feeUsd: 2.32,
    },
    {
      date: '2023-10-06',
      fee: 0.000143,
      feeUsd: 3.95,
    },
    {
      date: '2023-10-07',
      fee: 0.00017,
      feeUsd: 4.74,
    },
    {
      date: '2023-10-08',
      fee: 0.000063,
      feeUsd: 1.77,
    },
    {
      date: '2023-10-09',
      fee: 0.00007,
      feeUsd: 1.94,
    },
    {
      date: '2023-10-10',
      fee: 0.00006,
      feeUsd: 1.66,
    },
    {
      date: '2023-10-11',
      fee: 0.000082,
      feeUsd: 2.2,
    },
    {
      date: '2023-10-12',
      fee: 0.000093,
      feeUsd: 2.48,
    },
    {
      date: '2023-10-13',
      fee: 0.000079,
      feeUsd: 2.13,
    },
    {
      date: '2023-10-14',
      fee: 0.000051,
      feeUsd: 1.38,
    },
    {
      date: '2023-10-15',
      fee: 0.000045,
      feeUsd: 1.22,
    },
    {
      date: '2023-10-16',
      fee: 0.000069,
      feeUsd: 1.96,
    },
    {
      date: '2023-10-17',
      fee: 0.000066,
      feeUsd: 1.87,
    },
    {
      date: '2023-10-18',
      fee: 0.00007,
      feeUsd: 2.01,
    },
    {
      date: '2023-10-19',
      fee: 0.000066,
      feeUsd: 1.89,
    },
    {
      date: '2023-10-20',
      fee: 0.000068,
      feeUsd: 2.0,
    },
    {
      date: '2023-10-21',
      fee: 0.000059,
      feeUsd: 1.77,
    },
    {
      date: '2023-10-22',
      fee: 0.000049,
      feeUsd: 1.47,
    },
    {
      date: '2023-10-23',
      fee: 0.000056,
      feeUsd: 1.82,
    },
    {
      date: '2023-10-24',
      fee: 0.000103,
      feeUsd: 3.49,
    },
    {
      date: '2023-10-25',
      fee: 0.000086,
      feeUsd: 2.96,
    },
    {
      date: '2023-10-26',
      fee: 0.000068,
      feeUsd: 2.32,
    },
    {
      date: '2023-10-27',
      fee: 0.000056,
      feeUsd: 1.91,
    },
    {
      date: '2023-10-28',
      fee: 0.000034,
      feeUsd: 1.18,
    },
    {
      date: '2023-10-29',
      fee: 0.000033,
      feeUsd: 1.14,
    },
    {
      date: '2023-10-30',
      fee: 0.000039,
      feeUsd: 1.35,
    },
    {
      date: '2023-10-31',
      fee: 0.000042,
      feeUsd: 1.45,
    },
    {
      date: '2023-11-01',
      fee: 0.000046,
      feeUsd: 1.61,
    },
    {
      date: '2023-11-02',
      fee: 0.000057,
      feeUsd: 2.01,
    },
    {
      date: '2023-11-03',
      fee: 0.000073,
      feeUsd: 2.52,
    },
    {
      date: '2023-11-04',
      fee: 0.000114,
      feeUsd: 3.98,
    },
    {
      date: '2023-11-05',
      fee: 0.000106,
      feeUsd: 3.7,
    },
    {
      date: '2023-11-06',
      fee: 0.000169,
      feeUsd: 5.93,
    },
    {
      date: '2023-11-07',
      fee: 0.000196,
      feeUsd: 6.89,
    },
    {
      date: '2023-11-08',
      fee: 0.000202,
      feeUsd: 7.21,
    },
    {
      date: '2023-11-09',
      fee: 0.000434,
      feeUsd: 15.94,
    },
    {
      date: '2023-11-10',
      fee: 0.000312,
      feeUsd: 11.54,
    },
    {
      date: '2023-11-11',
      fee: 0.000182,
      feeUsd: 6.76,
    },
    {
      date: '2023-11-12',
      fee: 0.000165,
      feeUsd: 6.09,
    },
    {
      date: '2023-11-13',
      fee: 0.000251,
      feeUsd: 9.27,
    },
    {
      date: '2023-11-14',
      fee: 0.000194,
      feeUsd: 6.93,
    },
    {
      date: '2023-11-15',
      fee: 0.000239,
      feeUsd: 8.75,
    },
    {
      date: '2023-11-16',
      fee: 0.000505,
      feeUsd: 18.56,
    },
    {
      date: '2023-11-17',
      fee: 0.00046,
      feeUsd: 16.7,
    },
    {
      date: '2023-11-18',
      fee: 0.000503,
      feeUsd: 18.39,
    },
    {
      date: '2023-11-19',
      fee: 0.000282,
      feeUsd: 10.44,
    },
    {
      date: '2023-11-20',
      fee: 0.000277,
      feeUsd: 10.34,
    },
    {
      date: '2023-11-21',
      fee: 0.00033,
      feeUsd: 12.11,
    },
    {
      date: '2023-11-22',
      fee: 0.000287,
      feeUsd: 10.54,
    },
    {
      date: '2023-11-23',
      fee: 0.000376,
      feeUsd: 14.01,
    },
    {
      date: '2023-11-24',
      fee: 0.000157,
      feeUsd: 5.93,
    },
    {
      date: '2023-11-25',
      fee: 0.000149,
      feeUsd: 5.64,
    },
    {
      date: '2023-11-26',
      fee: 0.00014,
      feeUsd: 5.26,
    },
    {
      date: '2023-11-27',
      fee: 0.000187,
      feeUsd: 6.93,
    },
    {
      date: '2023-11-28',
      fee: 0.000176,
      feeUsd: 6.63,
    },
    {
      date: '2023-11-29',
      fee: 0.000177,
      feeUsd: 6.71,
    },
    {
      date: '2023-11-30',
      fee: 0.000171,
      feeUsd: 6.48,
    },
    {
      date: '2023-12-01',
      fee: 0.0002,
      feeUsd: 7.65,
    },
    {
      date: '2023-12-02',
      fee: 0.000148,
      feeUsd: 5.8,
    },
    {
      date: '2023-12-03',
      fee: 0.0002,
      feeUsd: 7.97,
    },
    {
      date: '2023-12-04',
      fee: 0.000263,
      feeUsd: 10.85,
    },
    {
      date: '2023-12-05',
      fee: 0.00046,
      feeUsd: 19.77,
    },
    {
      date: '2023-12-06',
      fee: 0.000628,
      feeUsd: 27.52,
    },
    {
      date: '2023-12-07',
      fee: 0.000469,
      feeUsd: 20.38,
    },
    {
      date: '2023-12-08',
      fee: 0.000371,
      feeUsd: 16.28,
    },
    {
      date: '2023-12-09',
      fee: 0.000239,
      feeUsd: 10.49,
    },
    {
      date: '2023-12-10',
      fee: 0.000214,
      feeUsd: 9.38,
    },
    {
      date: '2023-12-11',
      fee: 0.000262,
      feeUsd: 11.0,
    },
    {
      date: '2023-12-12',
      fee: 0.000209,
      feeUsd: 8.66,
    },
    {
      date: '2023-12-13',
      fee: 0.000335,
      feeUsd: 14.06,
    },
    {
      date: '2023-12-14',
      fee: 0.000585,
      feeUsd: 24.83,
    },
    {
      date: '2023-12-15',
      fee: 0.000666,
      feeUsd: 28.21,
    },
    {
      date: '2023-12-16',
      fee: 0.000878,
      feeUsd: 37.02,
    },
    {
      date: '2023-12-17',
      fee: 0.000892,
      feeUsd: 37.27,
    },
    {
      date: '2023-12-18',
      fee: 0.00061,
      feeUsd: 25.38,
    },
    {
      date: '2023-12-19',
      fee: 0.000658,
      feeUsd: 28.05,
    },
    {
      date: '2023-12-20',
      fee: 0.000732,
      feeUsd: 31.67,
    },
    {
      date: '2023-12-21',
      fee: 0.000689,
      feeUsd: 30.17,
    },
    {
      date: '2023-12-22',
      fee: 0.000519,
      feeUsd: 22.78,
    },
    {
      date: '2023-12-23',
      fee: 0.000333,
      feeUsd: 14.57,
    },
    {
      date: '2023-12-24',
      fee: 0.000247,
      feeUsd: 10.71,
    },
    {
      date: '2023-12-25',
      fee: 0.000315,
      feeUsd: 13.65,
    },
    {
      date: '2023-12-26',
      fee: 0.000303,
      feeUsd: 12.91,
    },
    {
      date: '2023-12-27',
      fee: 0.000492,
      feeUsd: 21.13,
    },
    {
      date: '2023-12-28',
      fee: 0.000556,
      feeUsd: 23.93,
    },
    {
      date: '2023-12-29',
      fee: 0.000364,
      feeUsd: 15.37,
    },
    {
      date: '2023-12-30',
      fee: 0.000495,
      feeUsd: 20.83,
    },
    {
      date: '2024-01-01',
      fee: 0.000334,
      feeUsd: 14.44,
    },
    {
      date: '2024-01-02',
      fee: 0.000388,
      feeUsd: 17.48,
    },
    {
      date: '2024-01-03',
      fee: 0.000291,
      feeUsd: 12.47,
    },
    {
      date: '2024-01-04',
      fee: 0.000264,
      feeUsd: 11.56,
    },
    {
      date: '2024-01-05',
      fee: 0.000278,
      feeUsd: 12.06,
    },
    {
      date: '2024-01-06',
      fee: 0.000228,
      feeUsd: 10.02,
    },
    {
      date: '2024-01-07',
      fee: 0.000219,
      feeUsd: 9.64,
    },
    {
      date: '2024-01-08',
      fee: 0.000302,
      feeUsd: 13.64,
    },
    {
      date: '2024-01-09',
      fee: 0.00024,
      feeUsd: 11.11,
    },
    {
      date: '2024-01-10',
      fee: 0.000219,
      feeUsd: 10.08,
    },
    {
      date: '2024-01-11',
      fee: 0.000226,
      feeUsd: 10.67,
    },
    {
      date: '2024-01-12',
      fee: 0.000286,
      feeUsd: 12.6,
    },
    {
      date: '2024-01-13',
      fee: 0.000194,
      feeUsd: 8.32,
    },
    {
      date: '2024-01-14',
      fee: 0.00037,
      feeUsd: 15.69,
    },
    {
      date: '2024-01-15',
      fee: 0.000287,
      feeUsd: 12.22,
    },
    {
      date: '2024-01-16',
      fee: 0.000264,
      feeUsd: 11.32,
    },
    {
      date: '2024-01-17',
      fee: 0.000233,
      feeUsd: 9.93,
    },
    {
      date: '2024-01-18',
      fee: 0.000251,
      feeUsd: 10.46,
    },
    {
      date: '2024-01-19',
      fee: 0.000183,
      feeUsd: 7.53,
    },
    {
      date: '2024-01-20',
      fee: 0.000128,
      feeUsd: 5.34,
    },
    {
      date: '2024-01-21',
      fee: 0.000119,
      feeUsd: 4.97,
    },
    {
      date: '2024-01-22',
      fee: 0.000166,
      feeUsd: 6.73,
    },
    {
      date: '2024-01-23',
      fee: 0.00024,
      feeUsd: 9.45,
    },
    {
      date: '2024-01-24',
      fee: 0.000163,
      feeUsd: 6.5,
    },
    {
      date: '2024-01-25',
      fee: 0.000189,
      feeUsd: 7.52,
    },
    {
      date: '2024-01-26',
      fee: 0.000112,
      feeUsd: 4.59,
    },
    {
      date: '2024-01-27',
      fee: 0.000097,
      feeUsd: 4.07,
    },
    {
      date: '2024-01-28',
      fee: 0.000087,
      feeUsd: 3.69,
    },
    {
      date: '2024-01-29',
      fee: 0.000097,
      feeUsd: 4.12,
    },
    {
      date: '2024-01-30',
      fee: 0.000099,
      feeUsd: 4.27,
    },
    {
      date: '2024-01-31',
      fee: 0.000112,
      feeUsd: 4.82,
    },
    {
      date: '2024-02-01',
      fee: 0.000138,
      feeUsd: 5.89,
    },
    {
      date: '2024-02-02',
      fee: 0.000153,
      feeUsd: 6.58,
    },
    {
      date: '2024-02-03',
      fee: 0.000344,
      feeUsd: 14.81,
    },
    {
      date: '2024-02-04',
      fee: 0.000293,
      feeUsd: 12.49,
    },
    {
      date: '2024-02-05',
      fee: 0.00023,
      feeUsd: 9.84,
    },
    {
      date: '2024-02-06',
      fee: 0.000191,
      feeUsd: 8.2,
    },
    {
      date: '2024-02-07',
      fee: 0.000171,
      feeUsd: 7.45,
    },
    {
      date: '2024-02-08',
      fee: 0.000186,
      feeUsd: 8.36,
    },
    {
      date: '2024-02-09',
      fee: 0.000164,
      feeUsd: 7.65,
    },
    {
      date: '2024-02-10',
      fee: 0.000103,
      feeUsd: 4.9,
    },
    {
      date: '2024-02-11',
      fee: 0.000087,
      feeUsd: 4.18,
    },
    {
      date: '2024-02-12',
      fee: 0.000164,
      feeUsd: 8.03,
    },
    {
      date: '2024-02-13',
      fee: 0.000151,
      feeUsd: 7.48,
    },
    {
      date: '2024-02-14',
      fee: 0.000183,
      feeUsd: 9.25,
    },
    {
      date: '2024-02-15',
      fee: 0.000127,
      feeUsd: 6.62,
    },
    {
      date: '2024-02-16',
      fee: 0.000105,
      feeUsd: 5.47,
    },
    {
      date: '2024-02-17',
      fee: 0.000088,
      feeUsd: 4.54,
    },
    {
      date: '2024-02-18',
      fee: 0.000072,
      feeUsd: 3.73,
    },
    {
      date: '2024-02-19',
      fee: 0.00008,
      feeUsd: 4.15,
    },
    {
      date: '2024-02-20',
      fee: 0.00008,
      feeUsd: 4.15,
    },
    {
      date: '2024-02-21',
      fee: 0.000085,
      feeUsd: 4.39,
    },
    {
      date: '2024-02-22',
      fee: 0.000077,
      feeUsd: 3.98,
    },
    {
      date: '2024-02-23',
      fee: 0.000075,
      feeUsd: 3.84,
    },
    {
      date: '2024-02-24',
      fee: 0.000076,
      feeUsd: 3.9,
    },
    {
      date: '2024-02-25',
      fee: 0.000058,
      feeUsd: 3.0,
    },
    {
      date: '2024-02-26',
      fee: 0.00009,
      feeUsd: 4.78,
    },
    {
      date: '2024-02-27',
      fee: 0.000124,
      feeUsd: 6.97,
    },
    {
      date: '2024-02-28',
      fee: 0.000145,
      feeUsd: 8.75,
    },
    {
      date: '2024-02-29',
      fee: 0.000185,
      feeUsd: 11.47,
    },
    {
      date: '2024-03-01',
      fee: 0.000141,
      feeUsd: 8.75,
    },
    {
      date: '2024-03-02',
      fee: 0.000124,
      feeUsd: 7.68,
    },
    {
      date: '2024-03-03',
      fee: 0.00012,
      feeUsd: 7.46,
    },
    {
      date: '2024-03-04',
      fee: 0.000229,
      feeUsd: 15.0,
    },
    {
      date: '2024-03-05',
      fee: 0.000243,
      feeUsd: 15.63,
    },
    {
      date: '2024-03-06',
      fee: 0.000177,
      feeUsd: 11.53,
    },
    {
      date: '2024-03-07',
      fee: 0.00012,
      feeUsd: 7.99,
    },
    {
      date: '2024-03-08',
      fee: 0.000113,
      feeUsd: 7.67,
    },
    {
      date: '2024-03-09',
      fee: 0.000113,
      feeUsd: 7.75,
    },
    {
      date: '2024-03-10',
      fee: 0.000099,
      feeUsd: 6.86,
    },
    {
      date: '2024-03-11',
      fee: 0.000104,
      feeUsd: 7.29,
    },
    {
      date: '2024-03-12',
      fee: 0.000113,
      feeUsd: 8.0,
    },
    {
      date: '2024-03-13',
      fee: 0.000091,
      feeUsd: 6.62,
    },
    {
      date: '2024-03-14',
      fee: 0.000102,
      feeUsd: 7.28,
    },
    {
      date: '2024-03-15',
      fee: 0.000121,
      feeUsd: 8.32,
    },
    {
      date: '2024-03-16',
      fee: 0.000107,
      feeUsd: 7.24,
    },
    {
      date: '2024-03-17',
      fee: 0.00007,
      feeUsd: 4.65,
    },
    {
      date: '2024-03-18',
      fee: 0.000101,
      feeUsd: 6.81,
    },
    {
      date: '2024-03-19',
      fee: 0.000099,
      feeUsd: 6.43,
    },
    {
      date: '2024-03-20',
      fee: 0.000092,
      feeUsd: 5.93,
    },
    {
      date: '2024-03-21',
      fee: 0.000116,
      feeUsd: 7.72,
    },
    {
      date: '2024-03-22',
      fee: 0.00011,
      feeUsd: 7.11,
    },
    {
      date: '2024-03-23',
      fee: 0.000075,
      feeUsd: 4.85,
    },
    {
      date: '2024-03-24',
      fee: 0.000064,
      feeUsd: 4.22,
    },
    {
      date: '2024-03-25',
      fee: 0.000088,
      feeUsd: 6.04,
    },
    {
      date: '2024-03-26',
      fee: 0.0001,
      feeUsd: 7.03,
    },
    {
      date: '2024-03-27',
      fee: 0.000085,
      feeUsd: 5.97,
    },
    {
      date: '2024-03-28',
      fee: 0.00007,
      feeUsd: 4.95,
    },
    {
      date: '2024-03-29',
      fee: 0.000065,
      feeUsd: 4.57,
    },
    {
      date: '2024-03-30',
      fee: 0.000061,
      feeUsd: 4.27,
    },
    {
      date: '2024-03-31',
      fee: 0.000088,
      feeUsd: 6.19,
    },
    {
      date: '2024-04-01',
      fee: 0.000083,
      feeUsd: 5.82,
    },
    {
      date: '2024-04-02',
      fee: 0.000063,
      feeUsd: 4.22,
    },
    {
      date: '2024-04-03',
      fee: 0.000074,
      feeUsd: 4.86,
    },
    {
      date: '2024-04-04',
      fee: 0.000072,
      feeUsd: 4.83,
    },
    {
      date: '2024-04-05',
      fee: 0.000059,
      feeUsd: 4.01,
    },
    {
      date: '2024-04-06',
      fee: 0.000041,
      feeUsd: 2.84,
    },
    {
      date: '2024-04-07',
      fee: 0.000041,
      feeUsd: 2.87,
    },
    {
      date: '2024-04-08',
      fee: 0.000073,
      feeUsd: 5.15,
    },
    {
      date: '2024-04-09',
      fee: 0.000104,
      feeUsd: 7.29,
    },
    {
      date: '2024-04-10',
      fee: 0.000132,
      feeUsd: 9.12,
    },
    {
      date: '2024-04-11',
      fee: 0.000219,
      feeUsd: 15.44,
    },
    {
      date: '2024-04-12',
      fee: 0.000351,
      feeUsd: 23.93,
    },
    {
      date: '2024-04-13',
      fee: 0.000208,
      feeUsd: 13.47,
    },
    {
      date: '2024-04-14',
      fee: 0.000161,
      feeUsd: 10.31,
    },
    {
      date: '2024-04-15',
      fee: 0.000308,
      feeUsd: 19.9,
    },
    {
      date: '2024-04-16',
      fee: 0.000209,
      feeUsd: 13.15,
    },
    {
      date: '2024-04-17',
      fee: 0.000311,
      feeUsd: 19.32,
    },
    {
      date: '2024-04-18',
      fee: 0.000259,
      feeUsd: 16.16,
    },
    {
      date: '2024-04-19',
      fee: 0.000297,
      feeUsd: 18.6,
    },
    {
      date: '2024-04-20',
      fee: 0.001993,
      feeUsd: 128.16,
    },
    {
      date: '2024-04-21',
      fee: 0.000536,
      feeUsd: 34.85,
    },
    {
      date: '2024-04-22',
      fee: 0.000378,
      feeUsd: 24.91,
    },
    {
      date: '2024-04-23',
      fee: 0.000473,
      feeUsd: 31.47,
    },
    {
      date: '2024-04-24',
      fee: 0.000426,
      feeUsd: 27.85,
    },
    {
      date: '2024-04-25',
      fee: 0.000202,
      feeUsd: 12.94,
    },
    {
      date: '2024-04-26',
      fee: 0.000217,
      feeUsd: 13.91,
    },
    {
      date: '2024-04-27',
      fee: 0.000139,
      feeUsd: 8.8,
    },
    {
      date: '2024-04-28',
      fee: 0.000109,
      feeUsd: 6.94,
    },
    {
      date: '2024-04-29',
      fee: 0.000113,
      feeUsd: 7.1,
    },
    {
      date: '2024-04-30',
      fee: 0.000091,
      feeUsd: 5.64,
    },
    {
      date: '2024-05-01',
      fee: 0.000079,
      feeUsd: 4.63,
    },
    {
      date: '2024-05-02',
      fee: 0.000063,
      feeUsd: 3.68,
    },
    {
      date: '2024-05-03',
      fee: 0.000077,
      feeUsd: 4.71,
    },
    {
      date: '2024-05-04',
      fee: 0.00007,
      feeUsd: 4.42,
    },
    {
      date: '2024-05-05',
      fee: 0.000198,
      feeUsd: 12.66,
    },
    {
      date: '2024-05-06',
      fee: 0.000078,
      feeUsd: 4.99,
    },
    {
      date: '2024-05-07',
      fee: 0.000096,
      feeUsd: 6.11,
    },
    {
      date: '2024-05-08',
      fee: 0.000067,
      feeUsd: 4.16,
    },
    {
      date: '2024-05-09',
      fee: 0.000059,
      feeUsd: 3.67,
    },
    {
      date: '2024-05-10',
      fee: 0.000044,
      feeUsd: 2.7,
    },
    {
      date: '2024-05-11',
      fee: 0.000051,
      feeUsd: 3.12,
    },
    {
      date: '2024-05-12',
      fee: 0.000039,
      feeUsd: 2.4,
    },
    {
      date: '2024-05-13',
      fee: 0.000048,
      feeUsd: 2.96,
    },
    {
      date: '2024-05-14',
      fee: 0.000052,
      feeUsd: 3.21,
    },
    {
      date: '2024-05-15',
      fee: 0.000046,
      feeUsd: 2.95,
    },
    {
      date: '2024-05-16',
      fee: 0.000048,
      feeUsd: 3.13,
    },
    {
      date: '2024-05-17',
      fee: 0.000038,
      feeUsd: 2.5,
    },
    {
      date: '2024-05-18',
      fee: 0.000044,
      feeUsd: 2.98,
    },
    {
      date: '2024-05-19',
      fee: 0.000025,
      feeUsd: 1.7,
    },
    {
      date: '2024-05-20',
      fee: 0.000028,
      feeUsd: 1.94,
    },
    {
      date: '2024-05-21',
      fee: 0.000052,
      feeUsd: 3.69,
    },
    {
      date: '2024-05-22',
      fee: 0.000036,
      feeUsd: 2.54,
    },
    {
      date: '2024-05-23',
      fee: 0.00004,
      feeUsd: 2.74,
    },
    {
      date: '2024-05-24',
      fee: 0.000032,
      feeUsd: 2.14,
    },
    {
      date: '2024-05-25',
      fee: 0.000025,
      feeUsd: 1.74,
    },
    {
      date: '2024-05-26',
      fee: 0.000023,
      feeUsd: 1.57,
    },
    {
      date: '2024-05-27',
      fee: 0.00004,
      feeUsd: 2.79,
    },
    {
      date: '2024-05-28',
      fee: 0.00003,
      feeUsd: 2.07,
    },
    {
      date: '2024-05-29',
      fee: 0.000054,
      feeUsd: 3.65,
    },
    {
      date: '2024-05-30',
      fee: 0.000073,
      feeUsd: 5.01,
    },
    {
      date: '2024-05-31',
      fee: 0.000099,
      feeUsd: 6.7,
    },
    {
      date: '2024-06-01',
      fee: 0.00006,
      feeUsd: 4.04,
    },
    {
      date: '2024-06-02',
      fee: 0.000048,
      feeUsd: 3.27,
    },
    {
      date: '2024-06-03',
      fee: 0.000057,
      feeUsd: 3.92,
    },
    {
      date: '2024-06-04',
      fee: 0.000056,
      feeUsd: 3.92,
    },
    {
      date: '2024-06-05',
      fee: 0.0001,
      feeUsd: 7.14,
    },
    {
      date: '2024-06-06',
      fee: 0.000107,
      feeUsd: 7.61,
    },
    {
      date: '2024-06-07',
      fee: 0.001184,
      feeUsd: 83.13,
    },
    {
      date: '2024-06-08',
      fee: 0.000305,
      feeUsd: 21.15,
    },
    {
      date: '2024-06-09',
      fee: 0.000096,
      feeUsd: 6.66,
    },
    {
      date: '2024-06-10',
      fee: 0.0001,
      feeUsd: 6.96,
    },
    {
      date: '2024-06-11',
      fee: 0.000096,
      feeUsd: 6.48,
    },
    {
      date: '2024-06-12',
      fee: 0.000067,
      feeUsd: 4.62,
    },
    {
      date: '2024-06-13',
      fee: 0.000079,
      feeUsd: 5.3,
    },
    {
      date: '2024-06-14',
      fee: 0.000087,
      feeUsd: 5.74,
    },
    {
      date: '2024-06-15',
      fee: 0.000099,
      feeUsd: 6.57,
    },
    {
      date: '2024-06-16',
      fee: 0.00008,
      feeUsd: 5.32,
    },
    {
      date: '2024-06-17',
      fee: 0.000062,
      feeUsd: 4.1,
    },
    {
      date: '2024-06-18',
      fee: 0.00006,
      feeUsd: 3.94,
    },
    {
      date: '2024-06-19',
      fee: 0.000051,
      feeUsd: 3.33,
    },
    {
      date: '2024-06-20',
      fee: 0.00006,
      feeUsd: 3.94,
    },
    {
      date: '2024-06-21',
      fee: 0.000046,
      feeUsd: 2.98,
    },
    {
      date: '2024-06-22',
      fee: 0.000031,
      feeUsd: 1.96,
    },
    {
      date: '2024-06-23',
      fee: 0.00003,
      feeUsd: 1.93,
    },
    {
      date: '2024-06-24',
      fee: 0.000037,
      feeUsd: 2.27,
    },
    {
      date: '2024-06-25',
      fee: 0.000041,
      feeUsd: 2.5,
    },
    {
      date: '2024-06-26',
      fee: 0.000043,
      feeUsd: 2.68,
    },
    {
      date: '2024-06-27',
      fee: 0.000044,
      feeUsd: 2.68,
    },
    {
      date: '2024-06-28',
      fee: 0.000031,
      feeUsd: 1.87,
    },
    {
      date: '2024-06-29',
      fee: 0.000023,
      feeUsd: 1.38,
    },
    {
      date: '2024-06-30',
      fee: 0.000027,
      feeUsd: 1.64,
    },
    {
      date: '2024-07-01',
      fee: 0.00003,
      feeUsd: 1.9,
    },
    {
      date: '2024-07-02',
      fee: 0.000029,
      feeUsd: 1.81,
    },
    {
      date: '2024-07-03',
      fee: 0.00003,
      feeUsd: 1.8,
    },
    {
      date: '2024-07-04',
      fee: 0.000031,
      feeUsd: 1.84,
    },
    {
      date: '2024-07-05',
      fee: 0.00003,
      feeUsd: 1.67,
    },
    {
      date: '2024-07-06',
      fee: 0.000024,
      feeUsd: 1.35,
    },
    {
      date: '2024-07-07',
      fee: 0.000018,
      feeUsd: 1.04,
    },
    {
      date: '2024-07-08',
      fee: 0.000025,
      feeUsd: 1.4,
    },
    {
      date: '2024-07-09',
      fee: 0.00002,
      feeUsd: 1.16,
    },
    {
      date: '2024-07-10',
      fee: 0.000026,
      feeUsd: 1.49,
    },
    {
      date: '2024-07-11',
      fee: 0.000019,
      feeUsd: 1.13,
    },
    {
      date: '2024-07-12',
      fee: 0.000019,
      feeUsd: 1.08,
    },
    {
      date: '2024-07-13',
      fee: 0.000026,
      feeUsd: 1.55,
    },
    {
      date: '2024-07-14',
      fee: 0.000023,
      feeUsd: 1.36,
    },
    {
      date: '2024-07-15',
      fee: 0.000024,
      feeUsd: 1.5,
    },
    {
      date: '2024-07-16',
      fee: 0.000023,
      feeUsd: 1.49,
    },
    {
      date: '2024-07-17',
      fee: 0.000023,
      feeUsd: 1.48,
    },
    {
      date: '2024-07-18',
      fee: 0.000023,
      feeUsd: 1.45,
    },
    {
      date: '2024-07-19',
      fee: 0.000024,
      feeUsd: 1.56,
    },
    {
      date: '2024-07-20',
      fee: 0.000015,
      feeUsd: 1.0,
    },
    {
      date: '2024-07-21',
      fee: 0.000011,
      feeUsd: 0.770172,
    },
    {
      date: '2024-07-22',
      fee: 0.000017,
      feeUsd: 1.12,
    },
    {
      date: '2024-07-23',
      fee: 0.000013,
      feeUsd: 0.891207,
    },
    {
      date: '2024-07-24',
      fee: 0.000017,
      feeUsd: 1.14,
    },
    {
      date: '2024-07-25',
      fee: 0.000015,
      feeUsd: 0.961436,
    },
    {
      date: '2024-07-26',
      fee: 0.000023,
      feeUsd: 1.51,
    },
    {
      date: '2024-07-27',
      fee: 0.000023,
      feeUsd: 1.56,
    },
    {
      date: '2024-07-28',
      fee: 0.000011,
      feeUsd: 0.732622,
    },
    {
      date: '2024-07-29',
      fee: 0.000013,
      feeUsd: 0.897532,
    },
    {
      date: '2024-07-30',
      fee: 0.000014,
      feeUsd: 0.940598,
    },
    {
      date: '2024-07-31',
      fee: 0.000019,
      feeUsd: 1.24,
    },
    {
      date: '2024-08-01',
      fee: 0.000017,
      feeUsd: 1.11,
    },
    {
      date: '2024-08-02',
      fee: 0.000021,
      feeUsd: 1.35,
    },
    {
      date: '2024-08-03',
      fee: 0.000016,
      feeUsd: 0.99565,
    },
    {
      date: '2024-08-04',
      fee: 0.000014,
      feeUsd: 0.821096,
    },
    {
      date: '2024-08-05',
      fee: 0.000017,
      feeUsd: 0.905557,
    },
    {
      date: '2024-08-06',
      fee: 0.000017,
      feeUsd: 0.938866,
    },
    {
      date: '2024-08-07',
      fee: 0.000021,
      feeUsd: 1.16,
    },
    {
      date: '2024-08-08',
      fee: 0.000018,
      feeUsd: 1.09,
    },
    {
      date: '2024-08-09',
      fee: 0.000022,
      feeUsd: 1.32,
    },
    {
      date: '2024-08-10',
      fee: 0.000012,
      feeUsd: 0.749601,
    },
    {
      date: '2024-08-11',
      fee: 0.00001,
      feeUsd: 0.613596,
    },
    {
      date: '2024-08-12',
      fee: 0.000018,
      feeUsd: 1.09,
    },
    {
      date: '2024-08-13',
      fee: 0.000014,
      feeUsd: 0.834554,
    },
    {
      date: '2024-08-14',
      fee: 0.000016,
      feeUsd: 0.949551,
    },
    {
      date: '2024-08-15',
      fee: 0.000013,
      feeUsd: 0.756203,
    },
    {
      date: '2024-08-16',
      fee: 0.000015,
      feeUsd: 0.90295,
    },
    {
      date: '2024-08-17',
      fee: 0.00001,
      feeUsd: 0.61096,
    },
    {
      date: '2024-08-18',
      fee: 0.000009,
      feeUsd: 0.556767,
    },
    {
      date: '2024-08-19',
      fee: 0.000016,
      feeUsd: 0.941215,
    },
    {
      date: '2024-08-20',
      fee: 0.000014,
      feeUsd: 0.83388,
    },
    {
      date: '2024-08-21',
      fee: 0.000012,
      feeUsd: 0.743853,
    },
    {
      date: '2024-08-22',
      fee: 0.000126,
      feeUsd: 7.64,
    },
    {
      date: '2024-08-23',
      fee: 0.000012,
      feeUsd: 0.769141,
    },
    {
      date: '2024-08-24',
      fee: 0.000009,
      feeUsd: 0.605154,
    },
    {
      date: '2024-08-25',
      fee: 0.00001,
      feeUsd: 0.641765,
    },
    {
      date: '2024-08-26',
      fee: 0.000014,
      feeUsd: 0.900654,
    },
    {
      date: '2024-08-27',
      fee: 0.000012,
      feeUsd: 0.700897,
    },
    {
      date: '2024-08-28',
      fee: 0.000011,
      feeUsd: 0.620914,
    },
    {
      date: '2024-08-29',
      fee: 0.000016,
      feeUsd: 0.937317,
    },
    {
      date: '2024-08-30',
      fee: 0.000015,
      feeUsd: 0.86957,
    },
    {
      date: '2024-08-31',
      fee: 0.000009,
      feeUsd: 0.532653,
    },
    {
      date: '2024-09-01',
      fee: 0.00001,
      feeUsd: 0.576089,
    },
    {
      date: '2024-09-02',
      fee: 0.00001,
      feeUsd: 0.587536,
    },
    {
      date: '2024-09-03',
      fee: 0.000015,
      feeUsd: 0.852161,
    },
    {
      date: '2024-09-04',
      fee: 0.000011,
      feeUsd: 0.613778,
    },
    {
      date: '2024-09-05',
      fee: 0.000015,
      feeUsd: 0.848785,
    },
    {
      date: '2024-09-06',
      fee: 0.000011,
      feeUsd: 0.625623,
    },
    {
      date: '2024-09-07',
      fee: 0.000008,
      feeUsd: 0.455291,
    },
    {
      date: '2024-09-08',
      fee: 0.000007,
      feeUsd: 0.378559,
    },
    {
      date: '2024-09-09',
      fee: 0.000012,
      feeUsd: 0.678893,
    },
    {
      date: '2024-09-10',
      fee: 0.000012,
      feeUsd: 0.700588,
    },
    {
      date: '2024-09-11',
      fee: 0.000016,
      feeUsd: 0.916719,
    },
    {
      date: '2024-09-12',
      fee: 0.000015,
      feeUsd: 0.85681,
    },
    {
      date: '2024-09-13',
      fee: 0.000018,
      feeUsd: 1.06,
    },
    {
      date: '2024-09-14',
      fee: 0.00001,
      feeUsd: 0.62004,
    },
    {
      date: '2024-09-15',
      fee: 0.000009,
      feeUsd: 0.528907,
    },
    {
      date: '2024-09-16',
      fee: 0.000013,
      feeUsd: 0.749787,
    },
    {
      date: '2024-09-17',
      fee: 0.000015,
      feeUsd: 0.909781,
    },
    {
      date: '2024-09-18',
      fee: 0.000013,
      feeUsd: 0.784177,
    },
    {
      date: '2024-09-19',
      fee: 0.000022,
      feeUsd: 1.37,
    },
    {
      date: '2024-09-20',
      fee: 0.000018,
      feeUsd: 1.14,
    },
    {
      date: '2024-09-21',
      fee: 0.000011,
      feeUsd: 0.688554,
    },
    {
      date: '2024-09-22',
      fee: 0.000008,
      feeUsd: 0.532377,
    },
    {
      date: '2024-09-23',
      fee: 0.000013,
      feeUsd: 0.849172,
    },
    {
      date: '2024-09-24',
      fee: 0.000013,
      feeUsd: 0.83462,
    },
    {
      date: '2024-09-25',
      fee: 0.000013,
      feeUsd: 0.843642,
    },
    {
      date: '2024-09-26',
      fee: 0.000018,
      feeUsd: 1.15,
    },
    {
      date: '2024-09-27',
      fee: 0.000025,
      feeUsd: 1.61,
    },
  ],
  averageTransactionFeesAgg: {
    averageFee: 0.000025,
    averageFeeUsd: 1.61,
  },
};

const TransactionCard = () => {
  const chartData =
    averageTransactionFeesData.averageTransactionFeesDetails.map((item) => ({
      date: item.date,
      feeUsd: item.feeUsd,
    }));

  const seriesDataFeesUsd = chartData.map((item) => item.feeUsd);
  const categories = chartData.map((item) => item.date);

  const chartComponentRef = useRef(null);

  const options = {
    credits: {
      enabled: false,
    },
    chart: {
      type: 'area',
      height: 250,
      spacing: [10, 10, 10, 10],
    },
    title: {
      text: null, // Remove the title
    },
    xAxis: {
      categories: categories,
      tickmarkPlacement: 'on',
      tickInterval: Math.floor(categories.length / 4), // Adjust this to show fewer ticks, e.g., 4 ticks
      labels: {
        style: {
          color: '#11111166',
          fontSize: 11,
        },
        formatter: function () {
          // Show only significant dates like in the image (May '23, Aug '23, etc.)
          const date: any = new Date((this as any).value);
          const options = { year: '2-digit', month: 'short' };
          return date.toLocaleDateString('en-US', options);
        },
      },
      title: {
        text: null,
      },
    },
    yAxis: {
      title: {
        enabled: false,
      },
      labels: {
        style: {
          color: '#11111166',
          fontSize: 11,
        },
        formatter: function () {
          return '$' + (this as any).value.toFixed(2); // Formatting the labels to show in USD
        },
      },
    },
    tooltip: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      shadow: false,
      useHTML: true,
      formatter: function (this: any) {
        const dateTime = new Date(this.x);
        const timestamp = dateTime.getTime();
        const date = Highcharts.dateFormat('%m/%d/%Y', timestamp);
        const time = Highcharts.dateFormat('%I:%M:%S %p', timestamp);

        const price = this.y;

        return `
        <div style="padding: 16px; border-radius: 8px; background: white; box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.05); width: 220px; max-height: 128px;">
          <div style="display: flex; justify-content: space-between; padding-bottom: 16px;">
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${date}</div>
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${time}</div>
          </div>
          <div style="display: flex; justify-content: space-between; padding-top: 6px;">
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4); display:flex; gap:4px;align-items:center;">
             <div style="width:8px; height: 8px; background-color:rgba(114, 72, 247, 1); border-radius:50%"></div>
              Average transaction fees:
            </div>
            <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase">
              $${price.toFixed(2)}
            </div>
          </div>

        </div>
      `;
      },
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false, // Hide markers by default
          radius: 3,
          states: {
            hover: {
              enabled: true, // Show markers on hover
            },
          },
        },
      },
    },
    series: [
      {
        name: 'Average Transaction Fee (USD)',
        data: seriesDataFeesUsd,
        color: 'rgba(114, 72, 247, 1)', // Line color
        lineWidth: 2,
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(114, 72, 247, 0.5)'],
            [1, 'rgba(114, 72, 247, 0.2)'],
          ],
        },
        marker: {
          fillColor: 'rgba(114, 72, 247, 1)', // Same color as line
          lineColor: '#ffffff', // White border
          lineWidth: 1,
          radius: 4, // Circle marker size
        },
      },
    ],
    legend: {
      enabled: false,
    },
  };

  return (
    <Box
      sx={{
        borderRadius: '24px',
        padding: '24px',
        color: 'rgba(255, 255, 255, 1)',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
        maxWidth: '630px',
      }}
    >
      <Box
        sx={{ display: 'flex', gap: '4px', alignItems: 'center', mb: '16px' }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: '500',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          Average transaction fees
        </Typography>
        <Tooltip
          title={<HeaderTooltip headerName={'Average_Transaction_Fees'} />}
          arrow={false}
          classes={{ tooltip: 'custom-tooltip' }}
        >
          <Image src={infoIcon} alt="" className="info-icon" />
          {/* <Image className={styles['info-icon']} src={infoIcon} alt="" /> */}
        </Tooltip>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: { xs: '20px', md: '56px' },
          textAlign: { xs: 'center', md: 'left' },
          justifyContent: { xs: 'flex-start', md: 'flex-end' },
          flexWrap: 'wrap',
        }}
      >
        {/* Placeholder for displaying some additional statistics if needed */}
        <Stack sx={{ minWidth: '130px' }}>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Box
              sx={{
                border: '1px solid rgba(114, 72, 247, 1)',
                borderRadius: '50%',
                width: '5px',
                height: '5px',
                background: 'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
              }}
            ></Box>
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: 'rgba(17, 17, 17, 0.6)',
                }}
              >
                Latest Fee
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                $
                {averageTransactionFeesData.averageTransactionFeesAgg.averageFeeUsd.toFixed(
                  2,
                )}{' '}
                {/* |{' '}
                {
                  averageTransactionFeesData.averageTransactionFeesAgg
                    .averageFee
                }{' '}
                BTC */}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ mt: '16px' }}>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          containerProps={{ style: { height: '100%' } }}
          ref={chartComponentRef}
        />
      </Box>
    </Box>
  );
};

export default TransactionCard;
