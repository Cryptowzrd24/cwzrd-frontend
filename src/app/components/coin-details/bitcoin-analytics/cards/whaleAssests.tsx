'use client';
import { Box, Stack, Tooltip, Typography } from '@mui/material';
import React, { useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { HeaderTooltip } from '@/app/components/header-tooltip';
import Image from 'next/image';
import infoIcon from '@/app/assets/icons/detailIcon.svg';
import { formatPrice } from '@/utils/format-price';

const historicalConcentrationData = {
  historicalConcentrationDetails: [
    {
      date: '2023-09-29',
      whales: 248597.39,
      others: 19253936.51,
      retail: 17398905.71,
      investors: 1855030.8,
    },
    {
      date: '2023-09-30',
      whales: 248597.39,
      others: 19254799.01,
      retail: 17397214.1,
      investors: 1857584.91,
    },
    {
      date: '2023-10-01',
      whales: 248597.39,
      others: 19255680.26,
      retail: 17398055.96,
      investors: 1857624.3,
    },
    {
      date: '2023-10-02',
      whales: 248597.39,
      others: 19256661.52,
      retail: 17394710.63,
      investors: 1861950.89,
    },
    {
      date: '2023-10-03',
      whales: 248597.39,
      others: 19257686.52,
      retail: 17395735.63,
      investors: 1861950.89,
    },
    {
      date: '2023-10-04',
      whales: 248597.39,
      others: 19258505.29,
      retail: 17396554.4,
      investors: 1861950.89,
    },
    {
      date: '2023-10-05',
      whales: 248597.39,
      others: 19259386.56,
      retail: 17397403.11,
      investors: 1861983.45,
    },
    {
      date: '2023-10-06',
      whales: 248597.39,
      others: 19260386.56,
      retail: 17398079.84,
      investors: 1862306.72,
    },
    {
      date: '2023-10-07',
      whales: 248597.39,
      others: 19261455.31,
      retail: 17399846.94,
      investors: 1861608.37,
    },
    {
      date: '2023-10-08',
      whales: 248597.39,
      others: 19262380.31,
      retail: 17400749.99,
      investors: 1861630.32,
    },
    {
      date: '2023-10-09',
      whales: 248597.39,
      others: 19263355.32,
      retail: 17422605.6,
      investors: 1840749.72,
    },
    {
      date: '2023-10-10',
      whales: 248597.39,
      others: 19264367.81,
      retail: 17403711.14,
      investors: 1860656.67,
    },
    {
      date: '2023-10-11',
      whales: 248597.39,
      others: 19265367.81,
      retail: 17403881.73,
      investors: 1861486.08,
    },
    {
      date: '2023-10-12',
      whales: 248597.39,
      others: 19266399.06,
      retail: 17382936.27,
      investors: 1883462.79,
    },
    {
      date: '2023-10-13',
      whales: 248597.39,
      others: 19267261.55,
      retail: 17383145.59,
      investors: 1884115.96,
    },
    {
      date: '2023-10-14',
      whales: 248597.39,
      others: 19268174.05,
      retail: 17385469.41,
      investors: 1882704.64,
    },
    {
      date: '2023-10-15',
      whales: 248597.39,
      others: 19269217.8,
      retail: 17385019.83,
      investors: 1884197.97,
    },
    {
      date: '2023-10-16',
      whales: 248597.39,
      others: 19270099.05,
      retail: 17405788.53,
      investors: 1864310.52,
    },
    {
      date: '2023-10-17',
      whales: 248597.39,
      others: 19271111.55,
      retail: 17405906.27,
      investors: 1865205.28,
    },
    {
      date: '2023-10-18',
      whales: 248597.39,
      others: 19272017.8,
      retail: 17408101.37,
      investors: 1863916.43,
    },
    {
      date: '2023-10-19',
      whales: 248597.39,
      others: 19272892.79,
      retail: 17408912.24,
      investors: 1863980.55,
    },
    {
      date: '2023-10-20',
      whales: 248597.39,
      others: 19273730.3,
      retail: 17409819.75,
      investors: 1863910.55,
    },
    {
      date: '2023-10-21',
      whales: 248597.39,
      others: 19274667.8,
      retail: 17410757.25,
      investors: 1863910.55,
    },
    {
      date: '2023-10-22',
      whales: 248597.39,
      others: 19275624.05,
      retail: 17411011.5,
      investors: 1864612.55,
    },
    {
      date: '2023-10-23',
      whales: 248597.39,
      others: 19276605.3,
      retail: 17412862.73,
      investors: 1863742.57,
    },
    {
      date: '2023-10-24',
      whales: 248597.39,
      others: 19277392.81,
      retail: 17414810.38,
      investors: 1862582.43,
    },
    {
      date: '2023-10-25',
      whales: 248597.39,
      others: 19278292.81,
      retail: 17414647.98,
      investors: 1863644.83,
    },
    {
      date: '2023-10-26',
      whales: 248597.39,
      others: 19279224.05,
      retail: 17414865.31,
      investors: 1864358.74,
    },
    {
      date: '2023-10-27',
      whales: 248597.39,
      others: 19283715.76,
      retail: 17439905.75,
      investors: 1843810.01,
    },
    {
      date: '2023-10-28',
      whales: 248597.39,
      others: 19284721.46,
      retail: 17434467.45,
      investors: 1850254.01,
    },
    {
      date: '2023-10-29',
      whales: 248597.39,
      others: 19285575.33,
      retail: 17435256.78,
      investors: 1850318.55,
    },
    {
      date: '2023-10-30',
      whales: 248597.39,
      others: 19286588.71,
      retail: 17434817.69,
      investors: 1851771.02,
    },
    {
      date: '2023-10-31',
      whales: 248597.39,
      others: 19287564.12,
      retail: 17435442.1,
      investors: 1852122.02,
    },
    {
      date: '2023-11-01',
      whales: 248597.39,
      others: 19288500.83,
      retail: 17436421.44,
      investors: 1852079.39,
    },
    {
      date: '2023-11-02',
      whales: 248597.39,
      others: 19289403.45,
      retail: 17436899.69,
      investors: 1852503.76,
    },
    {
      date: '2023-11-03',
      whales: 248597.39,
      others: 19290278.67,
      retail: 17429629.65,
      investors: 1860649.02,
    },
    {
      date: '2023-11-04',
      whales: 248597.39,
      others: 19291329.15,
      retail: 17430521.22,
      investors: 1860807.93,
    },
    {
      date: '2023-11-05',
      whales: 248597.39,
      others: 19292347.68,
      retail: 17431411.48,
      investors: 1860936.2,
    },
    {
      date: '2023-11-06',
      whales: 248597.39,
      others: 19293141.0,
      retail: 17431742.91,
      investors: 1861398.09,
    },
    {
      date: '2023-11-07',
      whales: 248597.39,
      others: 19294072.19,
      retail: 17432413.76,
      investors: 1861658.43,
    },
    {
      date: '2023-11-08',
      whales: 248597.39,
      others: 19295002.39,
      retail: 17433425.73,
      investors: 1861576.66,
    },
    {
      date: '2023-11-09',
      whales: 248597.39,
      others: 19295896.15,
      retail: 17443596.66,
      investors: 1852299.49,
    },
    {
      date: '2023-11-10',
      whales: 248597.4,
      others: 19296859.5,
      retail: 17413032.29,
      investors: 1883827.21,
    },
    {
      date: '2023-11-11',
      whales: 248597.4,
      others: 19297860.5,
      retail: 17414918.16,
      investors: 1882942.34,
    },
    {
      date: '2023-11-12',
      whales: 248597.4,
      others: 19298866.37,
      retail: 17415943.49,
      investors: 1882922.88,
    },
    {
      date: '2023-11-13',
      whales: 248597.4,
      others: 19299622.62,
      retail: 17418911.26,
      investors: 1880711.36,
    },
    {
      date: '2023-11-14',
      whales: 248597.4,
      others: 19300485.98,
      retail: 17396774.66,
      investors: 1903711.32,
    },
    {
      date: '2023-11-15',
      whales: 248597.4,
      others: 19301413.05,
      retail: 17399642.67,
      investors: 1901770.38,
    },
    {
      date: '2023-11-16',
      whales: 248597.4,
      others: 19302341.55,
      retail: 17401712.1,
      investors: 1900629.45,
    },
    {
      date: '2023-11-17',
      whales: 248597.4,
      others: 19303279.13,
      retail: 17398532.27,
      investors: 1904746.86,
    },
    {
      date: '2023-11-18',
      whales: 248597.4,
      others: 19304210.29,
      retail: 17398915.83,
      investors: 1905294.46,
    },
    {
      date: '2023-11-19',
      whales: 248597.4,
      others: 19305272.79,
      retail: 17400830.52,
      investors: 1904442.27,
    },
    {
      date: '2023-11-20',
      whales: 248597.4,
      others: 19306310.29,
      retail: 17427262.17,
      investors: 1879048.12,
    },
    {
      date: '2023-11-21',
      whales: 248597.4,
      others: 19307266.18,
      retail: 17443312.02,
      investors: 1863954.16,
    },
    {
      date: '2023-11-22',
      whales: 248597.4,
      others: 19308153.68,
      retail: 17450319.57,
      investors: 1857834.11,
    },
    {
      date: '2023-11-23',
      whales: 248597.4,
      others: 19309072.43,
      retail: 17446872.94,
      investors: 1862199.49,
    },
    {
      date: '2023-11-24',
      whales: 248597.4,
      others: 19310122.25,
      retail: 17448189.33,
      investors: 1861932.92,
    },
    {
      date: '2023-11-25',
      whales: 248597.4,
      others: 19311116.02,
      retail: 17449027.93,
      investors: 1862088.09,
    },
    {
      date: '2023-11-26',
      whales: 248597.4,
      others: 19312028.52,
      retail: 17449837.02,
      investors: 1862191.5,
    },
    {
      date: '2023-11-27',
      whales: 248597.4,
      others: 19312841.02,
      retail: 17450632.77,
      investors: 1862208.25,
    },
    {
      date: '2023-11-28',
      whales: 248597.4,
      others: 19313759.99,
      retail: 17451553.88,
      investors: 1862206.11,
    },
    {
      date: '2023-11-29',
      whales: 248597.4,
      others: 19314609.99,
      retail: 17452589.23,
      investors: 1862020.76,
    },
    {
      date: '2023-11-30',
      whales: 248597.4,
      others: 19315447.96,
      retail: 17451791.53,
      investors: 1863656.43,
    },
    {
      date: '2023-12-01',
      whales: 248597.4,
      others: 19316504.21,
      retail: 17452769.44,
      investors: 1863734.77,
    },
    {
      date: '2023-12-02',
      whales: 248597.4,
      others: 19317297.99,
      retail: 17453027.31,
      investors: 1864270.68,
    },
    {
      date: '2023-12-03',
      whales: 248597.4,
      others: 19318329.45,
      retail: 17453411.63,
      investors: 1864917.82,
    },
    {
      date: '2023-12-04',
      whales: 248597.4,
      others: 19320297.96,
      retail: 17453862.2,
      investors: 1866435.76,
    },
    {
      date: '2023-12-05',
      whales: 248597.4,
      others: 19321160.57,
      retail: 17453436.71,
      investors: 1867723.86,
    },
    {
      date: '2023-12-06',
      whales: 248597.4,
      others: 19322011.34,
      retail: 17452738.37,
      investors: 1869272.97,
    },
    {
      date: '2023-12-07',
      whales: 248597.4,
      others: 19322780.19,
      retail: 17451962.91,
      investors: 1870817.28,
    },
    {
      date: '2023-12-08',
      whales: 248597.4,
      others: 19323623.96,
      retail: 17432478.26,
      investors: 1891145.7,
    },
    {
      date: '2023-12-09',
      whales: 248597.4,
      others: 19324605.27,
      retail: 17411982.7,
      investors: 1912622.57,
    },
    {
      date: '2023-12-10',
      whales: 248597.4,
      others: 19325480.3,
      retail: 17410955.62,
      investors: 1914524.68,
    },
    {
      date: '2023-12-11',
      whales: 248597.4,
      others: 19326467.87,
      retail: 17405982.82,
      investors: 1920485.05,
    },
    {
      date: '2023-12-12',
      whales: 248597.4,
      others: 19327367.86,
      retail: 17401737.72,
      investors: 1925630.14,
    },
    {
      date: '2023-12-13',
      whales: 248597.4,
      others: 19328299.12,
      retail: 17424632.29,
      investors: 1903666.83,
    },
    {
      date: '2023-12-14',
      whales: 248597.4,
      others: 19329211.63,
      retail: 17425277.77,
      investors: 1903933.86,
    },
    {
      date: '2023-12-15',
      whales: 248597.4,
      others: 19330230.39,
      retail: 17424861.07,
      investors: 1905369.32,
    },
    {
      date: '2023-12-16',
      whales: 458607.49,
      others: 19121170.84,
      retail: 17428879.25,
      investors: 1692291.59,
    },
    {
      date: '2023-12-17',
      whales: 458607.49,
      others: 19122108.42,
      retail: 17429816.83,
      investors: 1692291.59,
    },
    {
      date: '2023-12-18',
      whales: 458607.49,
      others: 19123158.6,
      retail: 17432197.52,
      investors: 1690961.08,
    },
    {
      date: '2023-12-19',
      whales: 458607.49,
      others: 19124171.24,
      retail: 17433813.64,
      investors: 1690357.6,
    },
    {
      date: '2023-12-20',
      whales: 458607.49,
      others: 19125077.68,
      retail: 17437814.94,
      investors: 1687262.74,
    },
    {
      date: '2023-12-21',
      whales: 458607.49,
      others: 19125990.18,
      retail: 17439255.22,
      investors: 1686734.96,
    },
    {
      date: '2023-12-22',
      whales: 458607.49,
      others: 19127040.18,
      retail: 17439537.52,
      investors: 1687502.66,
    },
    {
      date: '2023-12-23',
      whales: 458607.49,
      others: 19128040.22,
      retail: 17440112.02,
      investors: 1687928.2,
    },
    {
      date: '2023-12-24',
      whales: 458607.49,
      others: 19129108.74,
      retail: 17441049.08,
      investors: 1688059.66,
    },
    {
      date: '2023-12-25',
      whales: 458607.49,
      others: 19129977.48,
      retail: 17445826.44,
      investors: 1684151.04,
    },
    {
      date: '2023-12-26',
      whales: 458607.49,
      others: 19130846.4,
      retail: 17469042.18,
      investors: 1661804.22,
    },
    {
      date: '2023-12-27',
      whales: 458607.49,
      others: 19131652.65,
      retail: 17450087.48,
      investors: 1681565.17,
    },
    {
      date: '2023-12-28',
      whales: 458607.49,
      others: 19132411.93,
      retail: 17451663.19,
      investors: 1680748.74,
    },
    {
      date: '2023-12-29',
      whales: 458607.49,
      others: 19133355.68,
      retail: 17451832.75,
      investors: 1681522.93,
    },
    {
      date: '2023-12-30',
      whales: 458607.49,
      others: 19134261.94,
      retail: 17443474.51,
      investors: 1690787.43,
    },
    {
      date: '2024-01-01',
      whales: 458607.49,
      others: 19136205.79,
      retail: 17426995.41,
      investors: 1709210.38,
    },
    {
      date: '2024-01-02',
      whales: 458607.55,
      others: 19137024.45,
      retail: 17430955.14,
      investors: 1706069.31,
    },
    {
      date: '2024-01-03',
      whales: 458607.55,
      others: 19138012.07,
      retail: 17409366.24,
      investors: 1728645.83,
    },
    {
      date: '2024-01-04',
      whales: 452607.54,
      others: 19145077.75,
      retail: 17416125.7,
      investors: 1728952.05,
    },
    {
      date: '2024-01-05',
      whales: 452607.54,
      others: 19145940.44,
      retail: 17407963.28,
      investors: 1737977.16,
    },
    {
      date: '2024-01-06',
      whales: 452607.54,
      others: 19146815.44,
      retail: 17422050.45,
      investors: 1724764.99,
    },
    {
      date: '2024-01-07',
      whales: 452607.54,
      others: 19147553.11,
      retail: 17422923.07,
      investors: 1724630.04,
    },
    {
      date: '2024-01-08',
      whales: 452607.54,
      others: 19148321.87,
      retail: 17423223.14,
      investors: 1725098.73,
    },
    {
      date: '2024-01-09',
      whales: 452607.54,
      others: 19149271.96,
      retail: 17420992.57,
      investors: 1728279.39,
    },
    {
      date: '2024-01-10',
      whales: 452607.54,
      others: 19150103.22,
      retail: 17422242.16,
      investors: 1727861.06,
    },
    {
      date: '2024-01-11',
      whales: 452607.54,
      others: 19151184.47,
      retail: 17379235.08,
      investors: 1771949.39,
    },
    {
      date: '2024-01-12',
      whales: 452607.54,
      others: 19152234.18,
      retail: 17394905.11,
      investors: 1757329.07,
    },
    {
      date: '2024-01-13',
      whales: 452607.54,
      others: 19153227.93,
      retail: 17415310.82,
      investors: 1737917.11,
    },
    {
      date: '2024-01-14',
      whales: 452607.54,
      others: 19154028.93,
      retail: 17415752.7,
      investors: 1738276.23,
    },
    {
      date: '2024-01-15',
      whales: 452607.54,
      others: 19154751.15,
      retail: 17395890.19,
      investors: 1758860.96,
    },
    {
      date: '2024-01-16',
      whales: 452607.54,
      others: 19155532.41,
      retail: 17416923.01,
      investors: 1738609.4,
    },
    {
      date: '2024-01-17',
      whales: 452607.54,
      others: 19156388.69,
      retail: 17418265.06,
      investors: 1738123.63,
    },
    {
      date: '2024-01-18',
      whales: 452607.54,
      others: 19157276.19,
      retail: 17398337.37,
      investors: 1758938.82,
    },
    {
      date: '2024-01-19',
      whales: 452607.54,
      others: 19158101.2,
      retail: 17399817.17,
      investors: 1758284.03,
    },
    {
      date: '2024-01-20',
      whales: 452607.54,
      others: 19158994.96,
      retail: 17401634.74,
      investors: 1757360.22,
    },
    {
      date: '2024-01-21',
      whales: 452607.54,
      others: 19159869.95,
      retail: 17422742.9,
      investors: 1737127.05,
    },
    {
      date: '2024-01-22',
      whales: 452607.54,
      others: 19160869.95,
      retail: 17403505.96,
      investors: 1757363.99,
    },
    {
      date: '2024-01-23',
      whales: 452607.54,
      others: 19161834.61,
      retail: 17403389.23,
      investors: 1758445.38,
    },
    {
      date: '2024-01-24',
      whales: 452607.54,
      others: 19162772.13,
      retail: 17427088.89,
      investors: 1735683.24,
    },
    {
      date: '2024-01-25',
      whales: 452607.54,
      others: 19163903.4,
      retail: 17428136.86,
      investors: 1735766.54,
    },
    {
      date: '2024-01-26',
      whales: 452607.54,
      others: 19164853.41,
      retail: 17446616.93,
      investors: 1718236.48,
    },
    {
      date: '2024-01-27',
      whales: 452607.54,
      others: 19165922.18,
      retail: 17448222.49,
      investors: 1717699.69,
    },
    {
      date: '2024-01-28',
      whales: 452607.54,
      others: 19166922.25,
      retail: 17449073.61,
      investors: 1717848.64,
    },
    {
      date: '2024-01-29',
      whales: 452607.54,
      others: 19167897.32,
      retail: 17429407.79,
      investors: 1738489.53,
    },
    {
      date: '2024-01-30',
      whales: 452607.54,
      others: 19168797.32,
      retail: 17440520.89,
      investors: 1728276.43,
    },
    {
      date: '2024-01-31',
      whales: 452607.54,
      others: 19169616.1,
      retail: 17454522.42,
      investors: 1715093.68,
    },
    {
      date: '2024-02-01',
      whales: 452607.54,
      others: 19170572.85,
      retail: 17455132.63,
      investors: 1715440.22,
    },
    {
      date: '2024-02-02',
      whales: 452607.54,
      others: 19171747.85,
      retail: 17456166.7,
      investors: 1715581.15,
    },
    {
      date: '2024-02-03',
      whales: 452607.54,
      others: 19172691.59,
      retail: 17437248.26,
      investors: 1735443.33,
    },
    {
      date: '2024-02-04',
      whales: 452607.54,
      others: 19173660.35,
      retail: 17437897.97,
      investors: 1735762.38,
    },
    {
      date: '2024-02-05',
      whales: 452607.54,
      others: 19174635.4,
      retail: 17416108.57,
      investors: 1758526.83,
    },
    {
      date: '2024-02-06',
      whales: 452607.54,
      others: 19175697.9,
      retail: 17417903.38,
      investors: 1757794.52,
    },
    {
      date: '2024-02-07',
      whales: 452607.54,
      others: 19176697.72,
      retail: 17418726.78,
      investors: 1757970.94,
    },
    {
      date: '2024-02-08',
      whales: 452607.54,
      others: 19177560.26,
      retail: 17420296.61,
      investors: 1757263.65,
    },
    {
      date: '2024-02-09',
      whales: 452607.54,
      others: 19178597.77,
      retail: 17425773.84,
      investors: 1752823.93,
    },
    {
      date: '2024-02-10',
      whales: 452607.54,
      others: 19179547.45,
      retail: 17427582.9,
      investors: 1751964.55,
    },
    {
      date: '2024-02-11',
      whales: 452607.54,
      others: 19180403.71,
      retail: 17429005.81,
      investors: 1751397.9,
    },
    {
      date: '2024-02-12',
      whales: 452607.54,
      others: 19181522.46,
      retail: 17449533.68,
      investors: 1731988.78,
    },
    {
      date: '2024-02-13',
      whales: 452607.54,
      others: 19182366.08,
      retail: 17448800.49,
      investors: 1733565.59,
    },
    {
      date: '2024-02-14',
      whales: 452607.54,
      others: 19183234.88,
      retail: 17448300.12,
      investors: 1734934.76,
    },
    {
      date: '2024-02-15',
      whales: 452607.54,
      others: 19184216.23,
      retail: 17455396.17,
      investors: 1728820.06,
    },
    {
      date: '2024-02-16',
      whales: 452607.54,
      others: 19185053.68,
      retail: 17455848.12,
      investors: 1729205.56,
    },
    {
      date: '2024-02-17',
      whales: 452607.54,
      others: 19185991.18,
      retail: 17456539.4,
      investors: 1729451.78,
    },
    {
      date: '2024-02-18',
      whales: 452607.54,
      others: 19186747.52,
      retail: 17456677.14,
      investors: 1730070.38,
    },
    {
      date: '2024-02-19',
      whales: 452607.54,
      others: 19187597.51,
      retail: 17456233.51,
      investors: 1731364,
    },
    {
      date: '2024-02-20',
      whales: 452607.54,
      others: 19188479.05,
      retail: 17436771.95,
      investors: 1751707.1,
    },
    {
      date: '2024-02-21',
      whales: 452607.54,
      others: 19189341.55,
      retail: 17439586.33,
      investors: 1749755.22,
    },
    {
      date: '2024-02-22',
      whales: 452607.54,
      others: 19190185.28,
      retail: 17440169.54,
      investors: 1750015.74,
    },
    {
      date: '2024-02-23',
      whales: 452607.54,
      others: 19191179.03,
      retail: 17440339.62,
      investors: 1750839.41,
    },
    {
      date: '2024-02-24',
      whales: 452607.54,
      others: 19192035.29,
      retail: 17441232.23,
      investors: 1750803.06,
    },
    {
      date: '2024-02-25',
      whales: 452607.54,
      others: 19193060.3,
      retail: 17440614.07,
      investors: 1752446.23,
    },
    {
      date: '2024-02-26',
      whales: 452607.54,
      others: 19193891.55,
      retail: 17451800.15,
      investors: 1742091.4,
    },
    {
      date: '2024-02-27',
      whales: 452607.54,
      others: 19194697.79,
      retail: 17458557.11,
      investors: 1736140.68,
    },
    {
      date: '2024-02-28',
      whales: 452607.54,
      others: 19195629.07,
      retail: 17459560.09,
      investors: 1736068.98,
    },
    {
      date: '2024-02-29',
      whales: 452607.54,
      others: 19196460.33,
      retail: 17497634.42,
      investors: 1698825.91,
    },
    {
      date: '2024-03-01',
      whales: 452607.54,
      others: 19199622.88,
      retail: 17506559.44,
      investors: 1693063.44,
    },
    {
      date: '2024-03-02',
      whales: 452607.54,
      others: 19200416.63,
      retail: 17505021.97,
      investors: 1695394.66,
    },
    {
      date: '2024-03-03',
      whales: 452607.54,
      others: 19201385.38,
      retail: 17504409.34,
      investors: 1696976.04,
    },
    {
      date: '2024-03-04',
      whales: 452607.55,
      others: 19202191.63,
      retail: 17500547.49,
      investors: 1701644.14,
    },
    {
      date: '2024-03-05',
      whales: 452607.55,
      others: 19204285.35,
      retail: 17494278.72,
      investors: 1710006.63,
    },
    {
      date: '2024-03-06',
      whales: 452607.55,
      others: 19205260.49,
      retail: 17469817.72,
      investors: 1735442.77,
    },
    {
      date: '2024-03-07',
      whales: 452607.55,
      others: 19206435.53,
      retail: 17490380.44,
      investors: 1716055.09,
    },
    {
      date: '2024-03-08',
      whales: 452607.55,
      others: 19207448.1,
      retail: 17513722.93,
      investors: 1693725.17,
    },
    {
      date: '2024-03-09',
      whales: 452607.55,
      others: 19208466.85,
      retail: 17515114.54,
      investors: 1693352.31,
    },
    {
      date: '2024-03-10',
      whales: 452607.55,
      others: 19209360.56,
      retail: 17515802.75,
      investors: 1693557.81,
    },
    {
      date: '2024-03-11',
      whales: 452607.55,
      others: 19210423.32,
      retail: 17493239.38,
      investors: 1717183.94,
    },
    {
      date: '2024-03-12',
      whales: 452607.55,
      others: 19211304.57,
      retail: 17513417.82,
      investors: 1697886.75,
    },
    {
      date: '2024-03-13',
      whales: 248597.47,
      others: 19416514.69,
      retail: 17543092.03,
      investors: 1873422.66,
    },
    {
      date: '2024-03-14',
      whales: 248597.47,
      others: 19417445.98,
      retail: 17539398.92,
      investors: 1878047.06,
    },
    {
      date: '2024-03-15',
      whales: 248597.47,
      others: 19418239.76,
      retail: 17530503.38,
      investors: 1887736.38,
    },
    {
      date: '2024-03-16',
      whales: 248597.47,
      others: 19419140.48,
      retail: 17531132.1,
      investors: 1888008.38,
    },
    {
      date: '2024-03-17',
      whales: 248597.47,
      others: 19420052.98,
      retail: 17532352.18,
      investors: 1887700.8,
    },
    {
      date: '2024-03-18',
      whales: 248597.47,
      others: 19420952.99,
      retail: 17533225.63,
      investors: 1887727.36,
    },
    {
      date: '2024-03-19',
      whales: 248597.47,
      others: 19421934.44,
      retail: 17535351.73,
      investors: 1886582.71,
    },
    {
      date: '2024-03-20',
      whales: 248597.47,
      others: 19422866.16,
      retail: 17537028.58,
      investors: 1885837.58,
    },
    {
      date: '2024-03-21',
      whales: 248597.47,
      others: 19423616.18,
      retail: 17537627,
      investors: 1885989.18,
    },
    {
      date: '2024-03-22',
      whales: 248597.47,
      others: 19424459.92,
      retail: 17538382,
      investors: 1886077.92,
    },
    {
      date: '2024-03-23',
      whales: 248597.47,
      others: 19425434.92,
      retail: 17554819.2,
      investors: 1870615.72,
    },
    {
      date: '2024-03-24',
      whales: 248597.47,
      others: 19426547.65,
      retail: 17555447.47,
      investors: 1871100.18,
    },
    {
      date: '2024-03-25',
      whales: 248597.47,
      others: 19427372.65,
      retail: 17556492.24,
      investors: 1870880.41,
    },
    {
      date: '2024-03-26',
      whales: 248597.47,
      others: 19430210.78,
      retail: 17568291.77,
      investors: 1861919.01,
    },
    {
      date: '2024-03-27',
      whales: 248597.47,
      others: 19431060.78,
      retail: 17549392.53,
      investors: 1881668.25,
    },
    {
      date: '2024-03-28',
      whales: 248597.47,
      others: 19432010.78,
      retail: 17569073.26,
      investors: 1862937.52,
    },
    {
      date: '2024-03-29',
      whales: 248597.47,
      others: 19432910.8,
      retail: 17569325.3,
      investors: 1863585.5,
    },
    {
      date: '2024-03-30',
      whales: 248597.47,
      others: 19433879.55,
      retail: 17570748.26,
      investors: 1863131.29,
    },
    {
      date: '2024-03-31',
      whales: 248597.47,
      others: 19434735.8,
      retail: 17562462.25,
      investors: 1872273.55,
    },
    {
      date: '2024-04-01',
      whales: 248597.47,
      others: 19435673.3,
      retail: 17566939.88,
      investors: 1868733.42,
    },
    {
      date: '2024-04-02',
      whales: 248597.47,
      others: 19436598.3,
      retail: 17565285.91,
      investors: 1871312.39,
    },
    {
      date: '2024-04-03',
      whales: 248597.47,
      others: 19437485.8,
      retail: 17544090.45,
      investors: 1893395.35,
    },
    {
      date: '2024-04-04',
      whales: 248597.47,
      others: 19438348.3,
      retail: 17542039.05,
      investors: 1896309.25,
    },
    {
      date: '2024-04-05',
      whales: 248597.47,
      others: 19439273.31,
      retail: 17542784.13,
      investors: 1896489.18,
    },
    {
      date: '2024-04-06',
      whales: 248597.47,
      others: 19440242.06,
      retail: 17552240.06,
      investors: 1888002,
    },
    {
      date: '2024-04-07',
      whales: 248597.47,
      others: 19441306.56,
      retail: 17553100.67,
      investors: 1888205.89,
    },
    {
      date: '2024-04-08',
      whales: 248597.47,
      others: 19442294.06,
      retail: 17552519.19,
      investors: 1889774.87,
    },
    {
      date: '2024-04-09',
      whales: 248597.47,
      others: 19443206.56,
      retail: 17552567.28,
      investors: 1890639.28,
    },
    {
      date: '2024-04-10',
      whales: 248597.47,
      others: 19444150.31,
      retail: 17551489.07,
      investors: 1892661.24,
    },
    {
      date: '2024-04-11',
      whales: 248597.47,
      others: 19444975.31,
      retail: 17552760.82,
      investors: 1892214.49,
    },
    {
      date: '2024-04-12',
      whales: 248597.47,
      others: 19445825.32,
      retail: 17552835.79,
      investors: 1892989.53,
    },
    {
      date: '2024-04-13',
      whales: 248597.47,
      others: 19446850.31,
      retail: 17533706.67,
      investors: 1913143.64,
    },
    {
      date: '2024-04-14',
      whales: 248597.47,
      others: 19447831.69,
      retail: 17531669.2,
      investors: 1916162.49,
    },
    {
      date: '2024-04-15',
      whales: 248597.47,
      others: 19448762.98,
      retail: 17534188.99,
      investors: 1914573.99,
    },
    {
      date: '2024-04-16',
      whales: 248597.47,
      others: 19449794.59,
      retail: 17531697.11,
      investors: 1918097.48,
    },
    {
      date: '2024-04-17',
      whales: 248597.47,
      others: 19450650.84,
      retail: 17533776.85,
      investors: 1916873.99,
    },
    {
      date: '2024-04-18',
      whales: 248597.47,
      others: 19451557.1,
      retail: 17536376.13,
      investors: 1915180.97,
    },
    {
      date: '2024-04-19',
      whales: 248597.47,
      others: 19452500.95,
      retail: 17537590.38,
      investors: 1914910.57,
    },
    {
      date: '2024-04-20',
      whales: 248597.47,
      others: 19452910.32,
      retail: 17537994.76,
      investors: 1914915.56,
    },
    {
      date: '2024-04-21',
      whales: 248597.47,
      others: 19453347.83,
      retail: 17538360.01,
      investors: 1914987.82,
    },
    {
      date: '2024-04-22',
      whales: 248597.47,
      others: 19453822.83,
      retail: 17539810.35,
      investors: 1914012.48,
    },
    {
      date: '2024-04-23',
      whales: 248597.47,
      others: 19454347.83,
      retail: 17540729.48,
      investors: 1913618.35,
    },
    {
      date: '2024-04-24',
      whales: 248597.47,
      others: 19454832.31,
      retail: 17541170.99,
      investors: 1913661.32,
    },
    {
      date: '2024-04-25',
      whales: 248597.47,
      others: 19455279.18,
      retail: 17541553.24,
      investors: 1913725.94,
    },
    {
      date: '2024-04-26',
      whales: 248597.47,
      others: 19455694.81,
      retail: 17543654.08,
      investors: 1912040.73,
    },
    {
      date: '2024-04-27',
      whales: 248597.47,
      others: 19456132.31,
      retail: 17543935.42,
      investors: 1912196.89,
    },
    {
      date: '2024-04-28',
      whales: 248597.47,
      others: 19456570.41,
      retail: 17544297.17,
      investors: 1912273.24,
    },
    {
      date: '2024-04-29',
      whales: 248597.47,
      others: 19456979.79,
      retail: 17544493.93,
      investors: 1912485.86,
    },
    {
      date: '2024-04-30',
      whales: 248597.47,
      others: 19457420.35,
      retail: 17519731.15,
      investors: 1937689.2,
    },
    {
      date: '2024-05-01',
      whales: 248597.47,
      others: 19457832.85,
      retail: 17521651.91,
      investors: 1936180.94,
    },
    {
      date: '2024-05-02',
      whales: 248597.47,
      others: 19458285.98,
      retail: 17532856.77,
      investors: 1925429.21,
    },
    {
      date: '2024-05-03',
      whales: 248597.47,
      others: 19458689.1,
      retail: 17553606.83,
      investors: 1905082.27,
    },
    {
      date: '2024-05-04',
      whales: 248597.48,
      others: 19459129.7,
      retail: 17553270.7,
      investors: 1905859,
    },
    {
      date: '2024-05-05',
      whales: 248597.48,
      others: 19459565.6,
      retail: 17553945.07,
      investors: 1905620.53,
    },
    {
      date: '2024-05-06',
      whales: 248597.48,
      others: 19459946.85,
      retail: 17554210.52,
      investors: 1905736.33,
    },
    {
      date: '2024-05-07',
      whales: 248597.48,
      others: 19460328.1,
      retail: 17554248.77,
      investors: 1906079.33,
    },
    {
      date: '2024-05-08',
      whales: 248597.48,
      others: 19460724.97,
      retail: 17554775.76,
      investors: 1905949.21,
    },
    {
      date: '2024-05-09',
      whales: 248597.48,
      others: 19461178.11,
      retail: 17555407.51,
      investors: 1905770.6,
    },
    {
      date: '2024-05-10',
      whales: 248597.48,
      others: 19461681.23,
      retail: 17556067.06,
      investors: 1905614.17,
    },
    {
      date: '2024-05-11',
      whales: 248597.48,
      others: 19462178.1,
      retail: 17556181.6,
      investors: 1905996.5,
    },
    {
      date: '2024-05-12',
      whales: 248597.48,
      others: 19462590.58,
      retail: 17556421.78,
      investors: 1906168.8,
    },
    {
      date: '2024-05-13',
      whales: 248597.48,
      others: 19463049.96,
      retail: 17556825.69,
      investors: 1906224.27,
    },
    {
      date: '2024-05-14',
      whales: 248597.48,
      others: 19463474.97,
      retail: 17557298.96,
      investors: 1906176.01,
    },
    {
      date: '2024-05-15',
      whales: 248597.48,
      others: 19463915.59,
      retail: 17557238.48,
      investors: 1906677.11,
    },
    {
      date: '2024-05-16',
      whales: 248597.48,
      others: 19464359.34,
      retail: 17557714.37,
      investors: 1906644.97,
    },
    {
      date: '2024-05-17',
      whales: 248597.48,
      others: 19464843.72,
      retail: 17562878.54,
      investors: 1901965.18,
    },
    {
      date: '2024-05-18',
      whales: 248597.48,
      others: 19465243.88,
      retail: 17563657.31,
      investors: 1901586.57,
    },
    {
      date: '2024-05-19',
      whales: 248597.48,
      others: 19465725.14,
      retail: 17563910.03,
      investors: 1901815.11,
    },
    {
      date: '2024-05-20',
      whales: 248597.48,
      others: 19466212.63,
      retail: 17544251.75,
      investors: 1921960.88,
    },
    {
      date: '2024-05-21',
      whales: 248597.48,
      others: 19466694.56,
      retail: 17550870.27,
      investors: 1915824.29,
    },
    {
      date: '2024-05-22',
      whales: 248597.48,
      others: 19469172.7,
      retail: 17553942.24,
      investors: 1915230.46,
    },
    {
      date: '2024-05-23',
      whales: 248597.48,
      others: 19469700.81,
      retail: 17552136.76,
      investors: 1917564.05,
    },
    {
      date: '2024-05-24',
      whales: 248597.48,
      others: 19470200.81,
      retail: 17552340.42,
      investors: 1917860.39,
    },
    {
      date: '2024-05-25',
      whales: 248597.48,
      others: 19470700.81,
      retail: 17532657.57,
      investors: 1938043.24,
    },
    {
      date: '2024-05-26',
      whales: 248597.48,
      others: 19471225.84,
      retail: 17532972.73,
      investors: 1938253.11,
    },
    {
      date: '2024-05-27',
      whales: 248597.48,
      others: 19471718.17,
      retail: 17531810.15,
      investors: 1939908.02,
    },
    {
      date: '2024-05-28',
      whales: 248597.48,
      others: 19472123.92,
      retail: 17390153.22,
      investors: 2081970.7,
    },
    {
      date: '2024-05-29',
      whales: 248597.48,
      others: 19472551.74,
      retail: 17391845.11,
      investors: 2080706.63,
    },
    {
      date: '2024-05-30',
      whales: 248597.48,
      others: 19472935.93,
      retail: 17401270.21,
      investors: 2071665.72,
    },
    {
      date: '2024-05-31',
      whales: 248597.48,
      others: 19473398.17,
      retail: 17378757.16,
      investors: 2094641.01,
    },
    {
      date: '2024-06-01',
      whales: 248597.48,
      others: 19473838.78,
      retail: 17380053.14,
      investors: 2093785.64,
    },
    {
      date: '2024-06-02',
      whales: 248597.48,
      others: 19474276.11,
      retail: 17380424.65,
      investors: 2093851.46,
    },
    {
      date: '2024-06-03',
      whales: 248597.48,
      others: 19474966.62,
      retail: 17380892.78,
      investors: 2094073.84,
    },
    {
      date: '2024-06-04',
      whales: 248597.48,
      others: 19475384.18,
      retail: 17381038.22,
      investors: 2094345.96,
    },
    {
      date: '2024-06-05',
      whales: 248597.48,
      others: 19475768.56,
      retail: 17382304,
      investors: 2093464.56,
    },
    {
      date: '2024-06-06',
      whales: 248597.48,
      others: 19476184.07,
      retail: 17384534.78,
      investors: 2091649.29,
    },
    {
      date: '2024-06-07',
      whales: 248597.48,
      others: 19476627.33,
      retail: 17384834.09,
      investors: 2091793.24,
    },
    {
      date: '2024-06-08',
      whales: 248597.48,
      others: 19477164.81,
      retail: 17383163.86,
      investors: 2094000.95,
    },
    {
      date: '2024-06-09',
      whales: 248597.48,
      others: 19477642.91,
      retail: 17383553.28,
      investors: 2094089.63,
    },
    {
      date: '2024-06-10',
      whales: 248597.48,
      others: 19478077.3,
      retail: 17384439.5,
      investors: 2093637.8,
    },
    {
      date: '2024-06-11',
      whales: 248597.48,
      others: 19478461.69,
      retail: 17382697.87,
      investors: 2095763.82,
    },
    {
      date: '2024-06-12',
      whales: 248597.48,
      others: 19478917.92,
      retail: 17380935.61,
      investors: 2097982.31,
    },
    {
      date: '2024-06-13',
      whales: 248597.48,
      others: 19479371.02,
      retail: 17381218.14,
      investors: 2098152.88,
    },
    {
      date: '2024-06-14',
      whales: 248597.48,
      others: 19479771.02,
      retail: 17379936.69,
      investors: 2099834.33,
    },
    {
      date: '2024-06-15',
      whales: 248597.48,
      others: 19480189.66,
      retail: 17359344.53,
      investors: 2120845.13,
    },
    {
      date: '2024-06-16',
      whales: 248597.49,
      others: 19480699.23,
      retail: 17359694.5,
      investors: 2121004.73,
    },
    {
      date: '2024-06-17',
      whales: 248597.49,
      others: 19481136.75,
      retail: 17357469.92,
      investors: 2123666.83,
    },
    {
      date: '2024-06-18',
      whales: 248597.49,
      others: 19481611.75,
      retail: 17358768.57,
      investors: 2122843.18,
    },
    {
      date: '2024-06-19',
      whales: 248597.49,
      others: 19482039.87,
      retail: 17380800.35,
      investors: 2101239.52,
    },
    {
      date: '2024-06-20',
      whales: 248597.49,
      others: 19482455.49,
      retail: 17359655.9,
      investors: 2122799.59,
    },
    {
      date: '2024-06-21',
      whales: 248597.49,
      others: 19482937.99,
      retail: 17359175.63,
      investors: 2123762.36,
    },
    {
      date: '2024-06-22',
      whales: 248597.49,
      others: 19483413.0,
      retail: 17359491.62,
      investors: 2123921.38,
    },
    {
      date: '2024-06-23',
      whales: 248597.49,
      others: 19483763.0,
      retail: 17359714.08,
      investors: 2124048.92,
    },
    {
      date: '2024-06-24',
      whales: 248597.49,
      others: 19484237.97,
      retail: 17353062.6,
      investors: 2131175.37,
    },
    {
      date: '2024-06-25',
      whales: 248597.49,
      others: 19484624.5,
      retail: 17354279.08,
      investors: 2130345.42,
    },
    {
      date: '2024-06-26',
      whales: 248597.49,
      others: 19485054.81,
      retail: 17352967.94,
      investors: 2132086.87,
    },
    {
      date: '2024-06-27',
      whales: 248597.49,
      others: 19485460.06,
      retail: 17369167.89,
      investors: 2116292.17,
    },
    {
      date: '2024-06-28',
      whales: 248597.49,
      others: 19485881.94,
      retail: 17347083.17,
      investors: 2138798.77,
    },
    {
      date: '2024-06-29',
      whales: 248597.49,
      others: 19486372.55,
      retail: 17356927.04,
      investors: 2129445.51,
    },
    {
      date: '2024-06-30',
      whales: 248597.49,
      others: 19486750.71,
      retail: 17357600.19,
      investors: 2129150.52,
    },
    {
      date: '2024-07-01',
      whales: 248597.49,
      others: 19487191.34,
      retail: 17356189.7,
      investors: 2131001.64,
    },
    {
      date: '2024-07-02',
      whales: 248597.49,
      others: 19487653.84,
      retail: 17336002.75,
      investors: 2151651.09,
    },
    {
      date: '2024-07-03',
      whales: 248597.49,
      others: 19488106.96,
      retail: 17336100.28,
      investors: 2152006.68,
    },
    {
      date: '2024-07-04',
      whales: 248597.49,
      others: 19488544.45,
      retail: 17310194.57,
      investors: 2178349.88,
    },
    {
      date: '2024-07-05',
      whales: 248597.49,
      others: 19488922.57,
      retail: 17286702.03,
      investors: 2202220.54,
    },
    {
      date: '2024-07-06',
      whales: 248597.49,
      others: 19489438.19,
      retail: 17274210.49,
      investors: 2215227.7,
    },
    {
      date: '2024-07-07',
      whales: 248597.49,
      others: 19489878.82,
      retail: 17274292.74,
      investors: 2215586.08,
    },
    {
      date: '2024-07-08',
      whales: 248597.49,
      others: 19490375.69,
      retail: 17285943.14,
      investors: 2204432.55,
    },
    {
      date: '2024-07-09',
      whales: 248597.49,
      others: 19490856.94,
      retail: 17288849.34,
      investors: 2202007.6,
    },
    {
      date: '2024-07-10',
      whales: 248597.49,
      others: 19491281.95,
      retail: 17309439.07,
      investors: 2181842.88,
    },
    {
      date: '2024-07-11',
      whales: 248597.49,
      others: 19491719.38,
      retail: 17289159.57,
      investors: 2202559.81,
    },
    {
      date: '2024-07-12',
      whales: 248597.49,
      others: 19492188.13,
      retail: 17303332.09,
      investors: 2188856.04,
    },
    {
      date: '2024-07-13',
      whales: 248597.49,
      others: 19492669.38,
      retail: 17303702.82,
      investors: 2188966.56,
    },
    {
      date: '2024-07-14',
      whales: 248597.49,
      others: 19493191.28,
      retail: 17303622.1,
      investors: 2189569.18,
    },
    {
      date: '2024-07-15',
      whales: 248597.49,
      others: 19493668.92,
      retail: 17305228.5,
      investors: 2188440.42,
    },
    {
      date: '2024-07-16',
      whales: 248597.49,
      others: 19494128.29,
      retail: 17327191.28,
      investors: 2166937.01,
    },
    {
      date: '2024-07-17',
      whales: 248597.49,
      others: 19494625.16,
      retail: 17325674.81,
      investors: 2168950.35,
    },
    {
      date: '2024-07-18',
      whales: 248597.49,
      others: 19495028.84,
      retail: 17325498.87,
      investors: 2169529.97,
    },
    {
      date: '2024-07-19',
      whales: 248597.49,
      others: 19495488.21,
      retail: 17324257.16,
      investors: 2171231.05,
    },
    {
      date: '2024-07-20',
      whales: 248597.49,
      others: 19496003.84,
      retail: 17324643.35,
      investors: 2171360.49,
    },
    {
      date: '2024-07-21',
      whales: 248597.49,
      others: 19496531.96,
      retail: 17324884.63,
      investors: 2171647.33,
    },
    {
      date: '2024-07-22',
      whales: 248597.49,
      others: 19497091.33,
      retail: 17325456.21,
      investors: 2171635.12,
    },
    {
      date: '2024-07-23',
      whales: 248597.49,
      others: 19497619.46,
      retail: 17330736.82,
      investors: 2166882.64,
    },
    {
      date: '2024-07-24',
      whales: 248597.49,
      others: 19498056.95,
      retail: 17337590.23,
      investors: 2160466.72,
    },
    {
      date: '2024-07-25',
      whales: 248597.49,
      others: 19498566.32,
      retail: 17334295.34,
      investors: 2164270.98,
    },
    {
      date: '2024-07-26',
      whales: 248597.49,
      others: 19499066.38,
      retail: 17334741.43,
      investors: 2164324.95,
    },
    {
      date: '2024-07-27',
      whales: 248597.49,
      others: 19499547.63,
      retail: 17337462.52,
      investors: 2162085.11,
    },
    {
      date: '2024-07-28',
      whales: 248597.49,
      others: 19500009.47,
      retail: 17338775.67,
      investors: 2161233.8,
    },
    {
      date: '2024-07-29',
      whales: 248597.49,
      others: 19500565.72,
      retail: 17353323.97,
      investors: 2147241.75,
    },
    {
      date: '2024-07-30',
      whales: 248597.49,
      others: 19501034.43,
      retail: 17339684.42,
      investors: 2161350.01,
    },
    {
      date: '2024-07-31',
      whales: 248597.49,
      others: 19501475.57,
      retail: 17368059.17,
      investors: 2133416.4,
    },
    {
      date: '2024-08-01',
      whales: 248597.5,
      others: 19501913.07,
      retail: 17378364.87,
      investors: 2123548.2,
    },
    {
      date: '2024-08-02',
      whales: 248597.5,
      others: 19502303.75,
      retail: 17400797.32,
      investors: 2101506.43,
    },
    {
      date: '2024-08-03',
      whales: 248597.5,
      others: 19502725.63,
      retail: 17400773.44,
      investors: 2101952.19,
    },
    {
      date: '2024-08-04',
      whales: 248597.5,
      others: 19503167.84,
      retail: 17400248.74,
      investors: 2102919.1,
    },
    {
      date: '2024-08-05',
      whales: 248597.5,
      others: 19503655.43,
      retail: 17395122.93,
      investors: 2108532.5,
    },
    {
      date: '2024-08-06',
      whales: 248597.5,
      others: 19504092.93,
      retail: 17397565.54,
      investors: 2106527.39,
    },
    {
      date: '2024-08-07',
      whales: 248597.5,
      others: 19504474.18,
      retail: 17404667.91,
      investors: 2099806.27,
    },
    {
      date: '2024-08-08',
      whales: 248597.5,
      others: 19504877.31,
      retail: 17403978.56,
      investors: 2100898.75,
    },
    {
      date: '2024-08-09',
      whales: 248597.5,
      others: 19505283.55,
      retail: 17421947.99,
      investors: 2083335.56,
    },
    {
      date: '2024-08-10',
      whales: 248597.5,
      others: 19505686.68,
      retail: 17441384.47,
      investors: 2064302.21,
    },
    {
      date: '2024-08-11',
      whales: 248597.5,
      others: 19506189.8,
      retail: 17441652.44,
      investors: 2064537.36,
    },
    {
      date: '2024-08-12',
      whales: 248597.5,
      others: 19506617.93,
      retail: 17441662.65,
      investors: 2064955.28,
    },
    {
      date: '2024-08-13',
      whales: 248597.51,
      others: 19507083.55,
      retail: 17441271.21,
      investors: 2065812.34,
    },
    {
      date: '2024-08-14',
      whales: 248597.51,
      others: 19507496.05,
      retail: 17441478.28,
      investors: 2066017.77,
    },
    {
      date: '2024-08-15',
      whales: 248597.51,
      others: 19507996.05,
      retail: 17441706.07,
      investors: 2066289.98,
    },
    {
      date: '2024-08-16',
      whales: 248597.51,
      others: 19508439.79,
      retail: 17421933.44,
      investors: 2086506.35,
    },
    {
      date: '2024-08-17',
      whales: 248597.51,
      others: 19508905.42,
      retail: 17421241.42,
      investors: 2087664,
    },
    {
      date: '2024-08-18',
      whales: 248597.51,
      others: 19509392.92,
      retail: 17421127.23,
      investors: 2088265.69,
    },
    {
      date: '2024-08-19',
      whales: 248597.51,
      others: 19509799.14,
      retail: 17419764.27,
      investors: 2090034.87,
    },
    {
      date: '2024-08-20',
      whales: 248597.51,
      others: 19510267.9,
      retail: 17418925.35,
      investors: 2091342.55,
    },
    {
      date: '2024-08-21',
      whales: 248597.51,
      others: 19510727.36,
      retail: 17417874.1,
      investors: 2092853.26,
    },
    {
      date: '2024-08-22',
      whales: 248597.51,
      others: 19511227.37,
      retail: 17418126.51,
      investors: 2093100.86,
    },
    {
      date: '2024-08-23',
      whales: 248597.51,
      others: 19511739.99,
      retail: 17397133.01,
      investors: 2114606.98,
    },
    {
      date: '2024-08-24',
      whales: 248597.51,
      others: 19512218.11,
      retail: 17398017.55,
      investors: 2114200.56,
    },
    {
      date: '2024-08-25',
      whales: 248597.51,
      others: 19512633.73,
      retail: 17397654.97,
      investors: 2114978.76,
    },
    {
      date: '2024-08-26',
      whales: 248597.51,
      others: 19513077.64,
      retail: 17399954.03,
      investors: 2113123.61,
    },
    {
      date: '2024-08-27',
      whales: 248597.51,
      others: 19513521.39,
      retail: 17462146.17,
      investors: 2051375.22,
    },
    {
      date: '2024-08-28',
      whales: 248597.51,
      others: 19514024.52,
      retail: 17481752.95,
      investors: 2032271.57,
    },
    {
      date: '2024-08-29',
      whales: 248597.51,
      others: 19514437.02,
      retail: 17482570.17,
      investors: 2031866.85,
    },
    {
      date: '2024-08-30',
      whales: 248597.51,
      others: 19514880.75,
      retail: 17482115.08,
      investors: 2032765.67,
    },
    {
      date: '2024-08-31',
      whales: 248597.51,
      others: 19515340.12,
      retail: 17483365.28,
      investors: 2031974.84,
    },
    {
      date: '2024-09-01',
      whales: 248597.51,
      others: 19515783.87,
      retail: 17484235.79,
      investors: 2031548.08,
    },
    {
      date: '2024-09-02',
      whales: 248597.51,
      others: 19516305.74,
      retail: 17465711.06,
      investors: 2050594.68,
    },
    {
      date: '2024-09-03',
      whales: 248597.51,
      others: 19516771.37,
      retail: 17444963.57,
      investors: 2071807.8,
    },
    {
      date: '2024-09-04',
      whales: 248597.51,
      others: 19517243.24,
      retail: 17445507.7,
      investors: 2071735.54,
    },
    {
      date: '2024-09-05',
      whales: 248597.51,
      others: 19517727.62,
      retail: 17462245.16,
      investors: 2055482.46,
    },
    {
      date: '2024-09-06',
      whales: 248597.51,
      others: 19518180.74,
      retail: 17474217.6,
      investors: 2043963.14,
    },
    {
      date: '2024-09-07',
      whales: 248597.51,
      others: 19518674.49,
      retail: 17474212.58,
      investors: 2044461.91,
    },
    {
      date: '2024-09-08',
      whales: 248597.51,
      others: 19519196.35,
      retail: 17474264.78,
      investors: 2044931.57,
    },
    {
      date: '2024-09-09',
      whales: 248597.51,
      others: 19519649.47,
      retail: 17454365.75,
      investors: 2065283.72,
    },
    {
      date: '2024-09-10',
      whales: 248597.51,
      others: 19520077.6,
      retail: 17434787.71,
      investors: 2085289.89,
    },
    {
      date: '2024-09-11',
      whales: 248597.51,
      others: 19520415.09,
      retail: 17434780.45,
      investors: 2085634.64,
    },
    {
      date: '2024-09-12',
      whales: 248597.51,
      others: 19520890.1,
      retail: 17434391.01,
      investors: 2086499.09,
    },
    {
      date: '2024-09-13',
      whales: 248597.51,
      others: 19521274.47,
      retail: 17443954.47,
      investors: 2077320,
    },
    {
      date: '2024-09-14',
      whales: 248597.52,
      others: 19521709.1,
      retail: 17441153.63,
      investors: 2080555.47,
    },
    {
      date: '2024-09-15',
      whales: 248597.52,
      others: 19522180.98,
      retail: 17441897.4,
      investors: 2080283.58,
    },
    {
      date: '2024-09-16',
      whales: 248597.52,
      others: 19522571.64,
      retail: 17463913.37,
      investors: 2058658.27,
    },
    {
      date: '2024-09-17',
      whales: 248597.52,
      others: 19523631.06,
      retail: 17482847.62,
      investors: 2040783.44,
    },
    {
      date: '2024-09-18',
      whales: 248597.52,
      others: 19524066.76,
      retail: 17483638.2,
      investors: 2040428.56,
    },
    {
      date: '2024-09-19',
      whales: 248597.52,
      others: 19524450.22,
      retail: 17483855.62,
      investors: 2040594.6,
    },
    {
      date: '2024-09-20',
      whales: 248597.52,
      others: 19525157.22,
      retail: 17459731.07,
      investors: 2065426.15,
    },
    {
      date: '2024-09-21',
      whales: 248597.52,
      others: 19525632.06,
      retail: 17460108.01,
      investors: 2065524.05,
    },
    {
      date: '2024-09-22',
      whales: 248597.52,
      others: 19526058.66,
      retail: 17460114.93,
      investors: 2065943.73,
    },
    {
      date: '2024-09-23',
      whales: 248597.52,
      others: 19526518.04,
      retail: 17483221.52,
      investors: 2043296.52,
    },
    {
      date: '2024-09-24',
      whales: 248597.52,
      others: 19526974.13,
      retail: 17459766.33,
      investors: 2067207.8,
    },
    {
      date: '2024-09-25',
      whales: 248597.52,
      others: 19527423.09,
      retail: 17460010.19,
      investors: 2067412.9,
    },
    {
      date: '2024-09-26',
      whales: 248597.52,
      others: 19527829.06,
      retail: 17460442.84,
      investors: 2067386.22,
    },
    {
      date: '2024-09-27',
      whales: 248597.52,
      others: 19528257.61,
      retail: 17461490.39,
      investors: 2066767.22,
    },
  ],
  historicalConcentrationAgg: {
    whalesPercent: 1.257012,
    whalesVolume: 248597.52,
    othersPercent: 98.742987,
    othersVolume: 19528257.61,
    investorPercent: 10.450434,
    investorVolume: 2066767.22,
    retailPercent: 88.292553,
    retailVolume: 17461490.39,
  },
};

const WhaleAssetsCard = () => {
  // Prepare the data for the chart
  const chartData =
    historicalConcentrationData.historicalConcentrationDetails.map((item) => ({
      date: item.date,
      whales: item.whales,
      others: item.others,
      retail: item.retail,
      investors: item.investors,
    }));

  const seriesDataWhales = chartData.map((item) => item.whales);
  const seriesDataRetail = chartData.map((item) => item.retail);
  const seriesDataInvestors = chartData.map((item) => item.investors);
  const categories = chartData.map((item) => item.date);

  const chartComponentRef = useRef(null);

  // Highcharts configuration
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
          return (this as any).value / 1000000 + 'M'; // Formatting the labels to show in millions
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

        const whales = formatPrice(this.points[2].y);
        const investors = formatPrice(this.points[1].y);
        const retail = formatPrice(this.points[0].y);

        return `
        <div style="padding: 16px; border-radius: 8px; background: white; box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.05); width: 220px; max-height: 128px;">
          <div style="display: flex; justify-content: space-between; padding-bottom: 16px;">
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${date}</div>
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${time}</div>
          </div>
          <div style="display: flex; justify-content: space-between; padding-top: 6px;">
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4); display:flex; gap:4px;align-items:center;">
             <div style="width:8px; height: 8px; background-color:rgba(247, 72, 72, 1); border-radius:50%"></div>
            Whales
            </div>
            <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase">
              ${whales}
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; padding-top: 6px; align-items:center;">
          <div style="display: flex; justify-content:start; align-items:center; gap:4px;">
          <div style="width:8px; height: 8px; background-color:rgba(55, 97, 251, 1); border-radius:50%"></div>
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4)">Investors:</div>
          </div>
            <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase;">
            ${investors}
            </div>
          </div>

             <div style="display: flex; justify-content: space-between; padding-top: 6px;">
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4); display:flex; gap:4px;align-items:center;">
             <div style="width:8px; height: 8px; background-color:rgba(69, 202, 148, 1); border-radius:50%"></div>
              Retail:
            </div>
            <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase">
            ${retail}
            </div>
          </div>

        </div>
      `;
      },
      shared: true,
      split: false,
    },
    plotOptions: {
      area: {
        stacking: 'normal', // Stacking the area chart
        lineColor: '#666666',
        lineWidth: 1,
        marker: {
          enabled: false, // Hide markers by default
          radius: 4, // Circle radius size
          symbol: 'circle', // Ensure the marker is a circle
          lineWidth: 1,
          lineColor: '#ffffff', // White border
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
        name: 'Retail',
        data: seriesDataRetail,
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(69, 202, 148, 0.5)'],
            [1, 'rgba(69, 202, 148, 0.2)'],
          ],
        },
        lineColor: 'rgba(69, 202, 148, 1)',
        marker: {
          fillColor: 'rgba(69, 202, 148, 1)', // Same color as line
          lineColor: '#ffffff', // White border
          lineWidth: 1,
        },
      },
      {
        name: 'Investors',
        data: seriesDataInvestors,
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(55, 97, 251, 0.5)'],
            [1, 'rgba(55, 97, 251, 0.2))'],
          ],
        },
        lineColor: 'rgba(55, 97, 251, 1)',
        marker: {
          fillColor: 'rgba(55, 97, 251, 1)', // Same color as line
          lineColor: '#ffffff', // White border
          lineWidth: 1,
        },
      },
      {
        name: 'Whales',
        data: seriesDataWhales,
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(247, 72, 72, 0.5)'],
            [1, 'rgba(247, 72, 72, 0.2)'],
          ],
        },
        lineColor: 'rgba(247, 72, 72, 1)',
        marker: {
          fillColor: 'rgba(247, 72, 72, 1)', // Same color as line
          lineColor: '#ffffff', // White border
          lineWidth: 1,
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
        sx={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',

          mb: '16px',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: '500',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          Whale Assets
        </Typography>
        <Tooltip
          title={<HeaderTooltip headerName={'Whale_Assets'} />}
          arrow={false}
          classes={{ tooltip: 'custom-tooltip' }}
        >
          <Image src={infoIcon} alt="" className="info-icon" />
          {/* <Image className={styles['info-icon']} src={infoIcon} alt="" /> */}
        </Tooltip>
      </Box>
      <Box sx={{ display: 'flex', gap: '56px', alignItems: 'center' }}>
        {/* Legend for Whales */}
        <Stack>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Box
              sx={{
                border: '1px solid rgba(247, 72, 72, 1)',
                borderRadius: '50%',
                width: '5px',
                height: '5px',
                background:
                  'linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)',
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
                Whales
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                {historicalConcentrationData.historicalConcentrationAgg.whalesPercent.toFixed(
                  2,
                )}
                %
              </Typography>
            </Stack>
          </Box>
        </Stack>
        {/* Legend for Others */}
        <Stack>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Box
              sx={{
                border: '1px solid rgba(69, 202, 148, 1)', // Adjust border color as needed
                borderRadius: '50%', // Ensures the Box is circular
                width: '5px',
                height: '5px',
                background: 'rgba(69, 202, 148, 1)',
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
                Others
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                {historicalConcentrationData.historicalConcentrationAgg.othersPercent.toFixed(
                  2,
                )}
                %
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

export default WhaleAssetsCard;
