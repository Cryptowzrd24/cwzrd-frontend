'use client';

import { Box, Stack, Tooltip, Typography } from '@mui/material';
import React, { useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { formatPrice } from '@/utils/format-price';
import { HeaderTooltip } from '@/app/components/header-tooltip';
import infoIcon from '@/app/assets/icons/detailIcon.svg';
import Image from 'next/image';

const holdingsData = {
  addressesByHoldings: {
    addressByHoldingsAgg: {
      percent0To1K: 80.64,
      count0To1K: 43824139,
      percent1KTo100k: 18.19,
      count1KTo100k: 9885447,
      percent100kPlus: 1.1699,
      count100kPlus: 635795,
    },
    addressesByHoldingsDetails: [
      {
        date: '2023-09-29',
        addresses0To1K: '42104306',
        addresses1KTo100K: '6868925',
        addresses100KPlus: '326431',
      },
      {
        date: '2023-09-30',
        addresses0To1K: '41983762',
        addresses1KTo100K: '6870849',
        addresses100KPlus: '326590',
      },
      {
        date: '2023-10-01',
        addresses0To1K: '41873087',
        addresses1KTo100K: '6925659',
        addresses100KPlus: '329879',
      },
      {
        date: '2023-10-02',
        addresses0To1K: '41771364',
        addresses1KTo100K: '6972373',
        addresses100KPlus: '332637',
      },
      {
        date: '2023-10-03',
        addresses0To1K: '41685907',
        addresses1KTo100K: '6914874',
        addresses100KPlus: '329376',
      },
      {
        date: '2023-10-04',
        addresses0To1K: '41692291',
        addresses1KTo100K: '6926565',
        addresses100KPlus: '330029',
      },
      {
        date: '2023-10-05',
        addresses0To1K: '41683269',
        addresses1KTo100K: '6955154',
        addresses100KPlus: '331354',
      },
      {
        date: '2023-10-06',
        addresses0To1K: '41734529',
        addresses1KTo100K: '6948842',
        addresses100KPlus: '331397',
      },
      {
        date: '2023-10-07',
        addresses0To1K: '41723875',
        addresses1KTo100K: '6967547',
        addresses100KPlus: '332155',
      },
      {
        date: '2023-10-08',
        addresses0To1K: '41757356',
        addresses1KTo100K: '6957593',
        addresses100KPlus: '331979',
      },
      {
        date: '2023-10-09',
        addresses0To1K: '41666633',
        addresses1KTo100K: '6925575',
        addresses100KPlus: '330202',
      },
      {
        date: '2023-10-10',
        addresses0To1K: '41658712',
        addresses1KTo100K: '6913737',
        addresses100KPlus: '329564',
      },
      {
        date: '2023-10-11',
        addresses0To1K: '41752773',
        addresses1KTo100K: '6847141',
        addresses100KPlus: '326300',
      },
      {
        date: '2023-10-12',
        addresses0To1K: '41789539',
        addresses1KTo100K: '6818826',
        addresses100KPlus: '324890',
      },
      {
        date: '2023-10-13',
        addresses0To1K: '41792880',
        addresses1KTo100K: '6838313',
        addresses100KPlus: '325783',
      },
      {
        date: '2023-10-14',
        addresses0To1K: '41834240',
        addresses1KTo100K: '6841907',
        addresses100KPlus: '324131',
      },
      {
        date: '2023-10-15',
        addresses0To1K: '41854491',
        addresses1KTo100K: '6863204',
        addresses100KPlus: '325453',
      },
      {
        date: '2023-10-16',
        addresses0To1K: '41581743',
        addresses1KTo100K: '7022537',
        addresses100KPlus: '334930',
      },
      {
        date: '2023-10-17',
        addresses0To1K: '41601091',
        addresses1KTo100K: '6998689',
        addresses100KPlus: '333251',
      },
      {
        date: '2023-10-18',
        addresses0To1K: '41525883',
        addresses1KTo100K: '7024501',
        addresses100KPlus: '336107',
      },
      {
        date: '2023-10-19',
        addresses0To1K: '41544994',
        addresses1KTo100K: '7020888',
        addresses100KPlus: '334444',
      },
      {
        date: '2023-10-20',
        addresses0To1K: '41505165',
        addresses1KTo100K: '7110880',
        addresses100KPlus: '341638',
      },
      {
        date: '2023-10-21',
        addresses0To1K: '41496903',
        addresses1KTo100K: '7154118',
        addresses100KPlus: '344533',
      },
      {
        date: '2023-10-22',
        addresses0To1K: '41528190',
        addresses1KTo100K: '7157142',
        addresses100KPlus: '344784',
      },
      {
        date: '2023-10-23',
        addresses0To1K: '41197154',
        addresses1KTo100K: '7356119',
        addresses100KPlus: '361582',
      },
      {
        date: '2023-10-24',
        addresses0To1K: '41062395',
        addresses1KTo100K: '7528021',
        addresses100KPlus: '390961',
      },
      {
        date: '2023-10-25',
        addresses0To1K: '41045737',
        addresses1KTo100K: '7562231',
        addresses100KPlus: '393314',
      },
      {
        date: '2023-10-26',
        addresses0To1K: '41046590',
        addresses1KTo100K: '7548735',
        addresses100KPlus: '392415',
      },
      {
        date: '2023-10-27',
        addresses0To1K: '41118101',
        addresses1KTo100K: '7508141',
        addresses100KPlus: '389543',
      },
      {
        date: '2023-10-28',
        addresses0To1K: '41154147',
        addresses1KTo100K: '7538210',
        addresses100KPlus: '391763',
      },
      {
        date: '2023-10-29',
        addresses0To1K: '41167119',
        addresses1KTo100K: '7552938',
        addresses100KPlus: '392854',
      },
      {
        date: '2023-10-30',
        addresses0To1K: '41100910',
        addresses1KTo100K: '7564014',
        addresses100KPlus: '393568',
      },
      {
        date: '2023-10-31',
        addresses0To1K: '41115841',
        addresses1KTo100K: '7559277',
        addresses100KPlus: '393225',
      },
      {
        date: '2023-11-01',
        addresses0To1K: '41126238',
        addresses1KTo100K: '7599027',
        addresses100KPlus: '396687',
      },
      {
        date: '2023-11-02',
        addresses0To1K: '41163314',
        addresses1KTo100K: '7620557',
        addresses100KPlus: '398542',
      },
      {
        date: '2023-11-03',
        addresses0To1K: '41361773',
        addresses1KTo100K: '7579697',
        addresses100KPlus: '394849',
      },
      {
        date: '2023-11-04',
        addresses0To1K: '41489891',
        addresses1KTo100K: '7618028',
        addresses100KPlus: '397274',
      },
      {
        date: '2023-11-05',
        addresses0To1K: '41531921',
        addresses1KTo100K: '7617102',
        addresses100KPlus: '397237',
      },
      {
        date: '2023-11-06',
        addresses0To1K: '41512820',
        addresses1KTo100K: '7634586',
        addresses100KPlus: '397812',
      },
      {
        date: '2023-11-07',
        addresses0To1K: '41553800',
        addresses1KTo100K: '7658073',
        addresses100KPlus: '399088',
      },
      {
        date: '2023-11-08',
        addresses0To1K: '41648975',
        addresses1KTo100K: '7691216',
        addresses100KPlus: '401307',
      },
      {
        date: '2023-11-09',
        addresses0To1K: '41670105',
        addresses1KTo100K: '7787090',
        addresses100KPlus: '408802',
      },
      {
        date: '2023-11-10',
        addresses0To1K: '41700031',
        addresses1KTo100K: '7795226',
        addresses100KPlus: '409335',
      },
      {
        date: '2023-11-11',
        addresses0To1K: '41798302',
        addresses1KTo100K: '7805764',
        addresses100KPlus: '410305',
      },
      {
        date: '2023-11-12',
        addresses0To1K: '41946540',
        addresses1KTo100K: '7805275',
        addresses100KPlus: '409414',
      },
      {
        date: '2023-11-13',
        addresses0To1K: '41907100',
        addresses1KTo100K: '7802948',
        addresses100KPlus: '408881',
      },
      {
        date: '2023-11-14',
        addresses0To1K: '42048920',
        addresses1KTo100K: '7726799',
        addresses100KPlus: '402373',
      },
      {
        date: '2023-11-15',
        addresses0To1K: '42065938',
        addresses1KTo100K: '7801132',
        addresses100KPlus: '407824',
      },
      {
        date: '2023-11-16',
        addresses0To1K: '42191376',
        addresses1KTo100K: '7819950',
        addresses100KPlus: '408325',
      },
      {
        date: '2023-11-17',
        addresses0To1K: '42238160',
        addresses1KTo100K: '7790335',
        addresses100KPlus: '405974',
      },
      {
        date: '2023-11-18',
        addresses0To1K: '42326457',
        addresses1KTo100K: '7812366',
        addresses100KPlus: '407364',
      },
      {
        date: '2023-11-19',
        addresses0To1K: '42369305',
        addresses1KTo100K: '7848158',
        addresses100KPlus: '409801',
      },
      {
        date: '2023-11-20',
        addresses0To1K: '42325539',
        addresses1KTo100K: '7872979',
        addresses100KPlus: '412016',
      },
      {
        date: '2023-11-21',
        addresses0To1K: '42394914',
        addresses1KTo100K: '7838976',
        addresses100KPlus: '408623',
      },
      {
        date: '2023-11-22',
        addresses0To1K: '42470454',
        addresses1KTo100K: '7851555',
        addresses100KPlus: '409189',
      },
      {
        date: '2023-11-23',
        addresses0To1K: '42478161',
        addresses1KTo100K: '7897851',
        addresses100KPlus: '412571',
      },
      {
        date: '2023-11-24',
        addresses0To1K: '42411024',
        addresses1KTo100K: '7940393',
        addresses100KPlus: '415962',
      },
      {
        date: '2023-11-25',
        addresses0To1K: '42483298',
        addresses1KTo100K: '7936975',
        addresses100KPlus: '415484',
      },
      {
        date: '2023-11-26',
        addresses0To1K: '42560525',
        addresses1KTo100K: '7920827',
        addresses100KPlus: '413989',
      },
      {
        date: '2023-11-27',
        addresses0To1K: '42606601',
        addresses1KTo100K: '7900717',
        addresses100KPlus: '411860',
      },
      {
        date: '2023-11-28',
        addresses0To1K: '42545087',
        addresses1KTo100K: '7938291',
        addresses100KPlus: '414700',
      },
      {
        date: '2023-11-29',
        addresses0To1K: '42514574',
        addresses1KTo100K: '7968603',
        addresses100KPlus: '416980',
      },
      {
        date: '2023-11-30',
        addresses0To1K: '42539294',
        addresses1KTo100K: '7958288',
        addresses100KPlus: '415811',
      },
      {
        date: '2023-12-01',
        addresses0To1K: '42529678',
        addresses1KTo100K: '7993467',
        addresses100KPlus: '418487',
      },
      {
        date: '2023-12-02',
        addresses0To1K: '42563251',
        addresses1KTo100K: '8067678',
        addresses100KPlus: '424277',
      },
      {
        date: '2023-12-03',
        addresses0To1K: '42610614',
        addresses1KTo100K: '8116428',
        addresses100KPlus: '427805',
      },
      {
        date: '2023-12-04',
        addresses0To1K: '42475284',
        addresses1KTo100K: '8243635',
        addresses100KPlus: '441032',
      },
      {
        date: '2023-12-05',
        addresses0To1K: '42394793',
        addresses1KTo100K: '8378839',
        addresses100KPlus: '452198',
      },
      {
        date: '2023-12-06',
        addresses0To1K: '42397942',
        addresses1KTo100K: '8432662',
        addresses100KPlus: '457260',
      },
      {
        date: '2023-12-07',
        addresses0To1K: '42421902',
        addresses1KTo100K: '8410561',
        addresses100KPlus: '454247',
      },
      {
        date: '2023-12-08',
        addresses0To1K: '42404172',
        addresses1KTo100K: '8440883',
        addresses100KPlus: '457671',
      },
      {
        date: '2023-12-09',
        addresses0To1K: '42480498',
        addresses1KTo100K: '8442775',
        addresses100KPlus: '457803',
      },
      {
        date: '2023-12-10',
        addresses0To1K: '42548952',
        addresses1KTo100K: '8434162',
        addresses100KPlus: '456875',
      },
      {
        date: '2023-12-11',
        addresses0To1K: '42624662',
        addresses1KTo100K: '8310092',
        addresses100KPlus: '445722',
      },
      {
        date: '2023-12-12',
        addresses0To1K: '42728091',
        addresses1KTo100K: '8273365',
        addresses100KPlus: '441504',
      },
      {
        date: '2023-12-13',
        addresses0To1K: '42784069',
        addresses1KTo100K: '8334807',
        addresses100KPlus: '446028',
      },
      {
        date: '2023-12-14',
        addresses0To1K: '42863482',
        addresses1KTo100K: '8370924',
        addresses100KPlus: '448350',
      },
      {
        date: '2023-12-15',
        addresses0To1K: '42960567',
        addresses1KTo100K: '8377487',
        addresses100KPlus: '448229',
      },
      {
        date: '2023-12-16',
        addresses0To1K: '43077692',
        addresses1KTo100K: '8380745',
        addresses100KPlus: '446772',
      },
      {
        date: '2023-12-17',
        addresses0To1K: '43178321',
        addresses1KTo100K: '8353520',
        addresses100KPlus: '444710',
      },
      {
        date: '2023-12-18',
        addresses0To1K: '43210641',
        addresses1KTo100K: '8343258',
        addresses100KPlus: '443117',
      },
      {
        date: '2023-12-19',
        addresses0To1K: '43199194',
        addresses1KTo100K: '8426736',
        addresses100KPlus: '449811',
      },
      {
        date: '2023-12-20',
        addresses0To1K: '43231666',
        addresses1KTo100K: '8475358',
        addresses100KPlus: '453420',
      },
      {
        date: '2023-12-21',
        addresses0To1K: '43299205',
        addresses1KTo100K: '8521232',
        addresses100KPlus: '457514',
      },
      {
        date: '2023-12-22',
        addresses0To1K: '43306398',
        addresses1KTo100K: '8528217',
        addresses100KPlus: '458520',
      },
      {
        date: '2023-12-23',
        addresses0To1K: '43345801',
        addresses1KTo100K: '8507832',
        addresses100KPlus: '457139',
      },
      {
        date: '2023-12-24',
        addresses0To1K: '43431267',
        addresses1KTo100K: '8477456',
        addresses100KPlus: '454377',
      },
      {
        date: '2023-12-25',
        addresses0To1K: '43482643',
        addresses1KTo100K: '8472854',
        addresses100KPlus: '454042',
      },
      {
        date: '2023-12-26',
        addresses0To1K: '43564744',
        addresses1KTo100K: '8430478',
        addresses100KPlus: '450148',
      },
      {
        date: '2023-12-27',
        addresses0To1K: '43622678',
        addresses1KTo100K: '8459080',
        addresses100KPlus: '452094',
      },
      {
        date: '2023-12-28',
        addresses0To1K: '43592041',
        addresses1KTo100K: '8473933',
        addresses100KPlus: '452949',
      },
      {
        date: '2023-12-29',
        addresses0To1K: '43681112',
        addresses1KTo100K: '8422834',
        addresses100KPlus: '448191',
      },
      {
        date: '2023-12-30',
        addresses0To1K: '43741148',
        addresses1KTo100K: '8409760',
        addresses100KPlus: '447243',
      },
      {
        date: '2024-01-01',
        addresses0To1K: '43735863',
        addresses1KTo100K: '8495144',
        addresses100KPlus: '454074',
      },
      {
        date: '2024-01-02',
        addresses0To1K: '43522503',
        addresses1KTo100K: '8615236',
        addresses100KPlus: '465678',
      },
      {
        date: '2024-01-03',
        addresses0To1K: '43658239',
        addresses1KTo100K: '8463654',
        addresses100KPlus: '451929',
      },
      {
        date: '2024-01-04',
        addresses0To1K: '43518838',
        addresses1KTo100K: '8528155',
        addresses100KPlus: '457497',
      },
      {
        date: '2024-01-05',
        addresses0To1K: '43647398',
        addresses1KTo100K: '8512759',
        addresses100KPlus: '455043',
      },
      {
        date: '2024-01-06',
        addresses0To1K: '43623391',
        addresses1KTo100K: '8543313',
        addresses100KPlus: '457536',
      },
      {
        date: '2024-01-07',
        addresses0To1K: '43619983',
        addresses1KTo100K: '8557900',
        addresses100KPlus: '458563',
      },
      {
        date: '2024-01-08',
        addresses0To1K: '43579475',
        addresses1KTo100K: '8636654',
        addresses100KPlus: '465993',
      },
      {
        date: '2024-01-09',
        addresses0To1K: '43464147',
        addresses1KTo100K: '8706886',
        addresses100KPlus: '473627',
      },
      {
        date: '2024-01-10',
        addresses0To1K: '43504891',
        addresses1KTo100K: '8679419',
        addresses100KPlus: '471023',
      },
      {
        date: '2024-01-11',
        addresses0To1K: '43432774',
        addresses1KTo100K: '8752437',
        addresses100KPlus: '479050',
      },
      {
        date: '2024-01-12',
        addresses0To1K: '43582452',
        addresses1KTo100K: '8515458',
        addresses100KPlus: '457560',
      },
      {
        date: '2024-01-13',
        addresses0To1K: '43794833',
        addresses1KTo100K: '8439110',
        addresses100KPlus: '450351',
      },
      {
        date: '2024-01-14',
        addresses0To1K: '43903134',
        addresses1KTo100K: '8413237',
        addresses100KPlus: '447719',
      },
      {
        date: '2024-01-15',
        addresses0To1K: '43869889',
        addresses1KTo100K: '8427314',
        addresses100KPlus: '448284',
      },
      {
        date: '2024-01-16',
        addresses0To1K: '43839386',
        addresses1KTo100K: '8452480',
        addresses100KPlus: '450099',
      },
      {
        date: '2024-01-17',
        addresses0To1K: '43893066',
        addresses1KTo100K: '8450164',
        addresses100KPlus: '449237',
      },
      {
        date: '2024-01-18',
        addresses0To1K: '43962408',
        addresses1KTo100K: '8381221',
        addresses100KPlus: '443864',
      },
      {
        date: '2024-01-19',
        addresses0To1K: '44056133',
        addresses1KTo100K: '8337121',
        addresses100KPlus: '440125',
      },
      {
        date: '2024-01-20',
        addresses0To1K: '44080011',
        addresses1KTo100K: '8368628',
        addresses100KPlus: '442685',
      },
      {
        date: '2024-01-21',
        addresses0To1K: '44137384',
        addresses1KTo100K: '8374535',
        addresses100KPlus: '443340',
      },
      {
        date: '2024-01-22',
        addresses0To1K: '44112368',
        addresses1KTo100K: '8282837',
        addresses100KPlus: '436039',
      },
      {
        date: '2024-01-23',
        addresses0To1K: '44212965',
        addresses1KTo100K: '8170418',
        addresses100KPlus: '423685',
      },
      {
        date: '2024-01-24',
        addresses0To1K: '44090672',
        addresses1KTo100K: '8206193',
        addresses100KPlus: '428205',
      },
      {
        date: '2024-01-25',
        addresses0To1K: '43851292',
        addresses1KTo100K: '8190854',
        addresses100KPlus: '427588',
      },
      {
        date: '2024-01-26',
        addresses0To1K: '43765730',
        addresses1KTo100K: '8301592',
        addresses100KPlus: '438932',
      },
      {
        date: '2024-01-27',
        addresses0To1K: '43673595',
        addresses1KTo100K: '8358670',
        addresses100KPlus: '444011',
      },
      {
        date: '2024-01-28',
        addresses0To1K: '43702780',
        addresses1KTo100K: '8394124',
        addresses100KPlus: '446586',
      },
      {
        date: '2024-01-29',
        addresses0To1K: '43627695',
        addresses1KTo100K: '8419100',
        addresses100KPlus: '448513',
      },
      {
        date: '2024-01-30',
        addresses0To1K: '43585581',
        addresses1KTo100K: '8472210',
        addresses100KPlus: '452627',
      },
      {
        date: '2024-01-31',
        addresses0To1K: '43590385',
        addresses1KTo100K: '8446914',
        addresses100KPlus: '450730',
      },
      {
        date: '2024-02-01',
        addresses0To1K: '43621525',
        addresses1KTo100K: '8417226',
        addresses100KPlus: '448304',
      },
      {
        date: '2024-02-02',
        addresses0To1K: '43626249',
        addresses1KTo100K: '8447393',
        addresses100KPlus: '450734',
      },
      {
        date: '2024-02-03',
        addresses0To1K: '43674003',
        addresses1KTo100K: '8459058',
        addresses100KPlus: '451489',
      },
      {
        date: '2024-02-04',
        addresses0To1K: '43712727',
        addresses1KTo100K: '8421190',
        addresses100KPlus: '448733',
      },
      {
        date: '2024-02-05',
        addresses0To1K: '43667435',
        addresses1KTo100K: '8420509',
        addresses100KPlus: '449029',
      },
      {
        date: '2024-02-06',
        addresses0To1K: '43601856',
        addresses1KTo100K: '8424708',
        addresses100KPlus: '450244',
      },
      {
        date: '2024-02-07',
        addresses0To1K: '43523200',
        addresses1KTo100K: '8471108',
        addresses100KPlus: '454589',
      },
      {
        date: '2024-02-08',
        addresses0To1K: '43414589',
        addresses1KTo100K: '8556657',
        addresses100KPlus: '462903',
      },
      {
        date: '2024-02-09',
        addresses0To1K: '43213368',
        addresses1KTo100K: '8661918',
        addresses100KPlus: '474368',
      },
      {
        date: '2024-02-10',
        addresses0To1K: '43114116',
        addresses1KTo100K: '8707450',
        addresses100KPlus: '479556',
      },
      {
        date: '2024-02-11',
        addresses0To1K: '43034707',
        addresses1KTo100K: '8745453',
        addresses100KPlus: '484793',
      },
      {
        date: '2024-02-12',
        addresses0To1K: '42915657',
        addresses1KTo100K: '8792303',
        addresses100KPlus: '492207',
      },
      {
        date: '2024-02-13',
        addresses0To1K: '42869924',
        addresses1KTo100K: '8799727',
        addresses100KPlus: '495104',
      },
      {
        date: '2024-02-14',
        addresses0To1K: '42714368',
        addresses1KTo100K: '8934847',
        addresses100KPlus: '548798',
      },
      {
        date: '2024-02-15',
        addresses0To1K: '42600419',
        addresses1KTo100K: '9020202',
        addresses100KPlus: '557448',
      },
      {
        date: '2024-02-16',
        addresses0To1K: '42627211',
        addresses1KTo100K: '9022493',
        addresses100KPlus: '557827',
      },
      {
        date: '2024-02-17',
        addresses0To1K: '42660932',
        addresses1KTo100K: '8977162',
        addresses100KPlus: '553759',
      },
      {
        date: '2024-02-18',
        addresses0To1K: '42655966',
        addresses1KTo100K: '8997295',
        addresses100KPlus: '555685',
      },
      {
        date: '2024-02-19',
        addresses0To1K: '42622692',
        addresses1KTo100K: '9013222',
        addresses100KPlus: '557956',
      },
      {
        date: '2024-02-20',
        addresses0To1K: '42648194',
        addresses1KTo100K: '9002200',
        addresses100KPlus: '556398',
      },
      {
        date: '2024-02-21',
        addresses0To1K: '42731673',
        addresses1KTo100K: '8983407',
        addresses100KPlus: '553950',
      },
      {
        date: '2024-02-22',
        addresses0To1K: '42789112',
        addresses1KTo100K: '8984906',
        addresses100KPlus: '553862',
      },
      {
        date: '2024-02-23',
        addresses0To1K: '42823543',
        addresses1KTo100K: '8945948',
        addresses100KPlus: '550811',
      },
      {
        date: '2024-02-24',
        addresses0To1K: '42807587',
        addresses1KTo100K: '8954665',
        addresses100KPlus: '551315',
      },
      {
        date: '2024-02-25',
        addresses0To1K: '42733113',
        addresses1KTo100K: '8982352',
        addresses100KPlus: '554763',
      },
      {
        date: '2024-02-26',
        addresses0To1K: '42647063',
        addresses1KTo100K: '9068735',
        addresses100KPlus: '564244',
      },
      {
        date: '2024-02-27',
        addresses0To1K: '42507907',
        addresses1KTo100K: '9243763',
        addresses100KPlus: '583105',
      },
      {
        date: '2024-02-28',
        addresses0To1K: '42331010',
        addresses1KTo100K: '9473389',
        addresses100KPlus: '607849',
      },
      {
        date: '2024-02-29',
        addresses0To1K: '42362823',
        addresses1KTo100K: '9548889',
        addresses100KPlus: '616214',
      },
      {
        date: '2024-03-01',
        addresses0To1K: '42393250',
        addresses1KTo100K: '9553343',
        addresses100KPlus: '615598',
      },
      {
        date: '2024-03-02',
        addresses0To1K: '42450511',
        addresses1KTo100K: '9552842',
        addresses100KPlus: '615758',
      },
      {
        date: '2024-03-03',
        addresses0To1K: '42478110',
        addresses1KTo100K: '9567237',
        addresses100KPlus: '617474',
      },
      {
        date: '2024-03-04',
        addresses0To1K: '42356649',
        addresses1KTo100K: '9727722',
        addresses100KPlus: '636247',
      },
      {
        date: '2024-03-05',
        addresses0To1K: '42359890',
        addresses1KTo100K: '9666385',
        addresses100KPlus: '628190',
      },
      {
        date: '2024-03-06',
        addresses0To1K: '42356111',
        addresses1KTo100K: '9713917',
        addresses100KPlus: '633103',
      },
      {
        date: '2024-03-07',
        addresses0To1K: '42251370',
        addresses1KTo100K: '9787985',
        addresses100KPlus: '652679',
      },
      {
        date: '2024-03-08',
        addresses0To1K: '42248299',
        addresses1KTo100K: '9852656',
        addresses100KPlus: '659973',
      },
      {
        date: '2024-03-09',
        addresses0To1K: '42274593',
        addresses1KTo100K: '9840202',
        addresses100KPlus: '660703',
      },
      {
        date: '2024-03-10',
        addresses0To1K: '42269279',
        addresses1KTo100K: '9866631',
        addresses100KPlus: '664765',
      },
      {
        date: '2024-03-11',
        addresses0To1K: '42088747',
        addresses1KTo100K: '9897092',
        addresses100KPlus: '669101',
      },
      {
        date: '2024-03-12',
        addresses0To1K: '41999641',
        addresses1KTo100K: '9915558',
        addresses100KPlus: '672848',
      },
      {
        date: '2024-03-13',
        addresses0To1K: '41835328',
        addresses1KTo100K: '9968655',
        addresses100KPlus: '683605',
      },
      {
        date: '2024-03-14',
        addresses0To1K: '41892101',
        addresses1KTo100K: '9900204',
        addresses100KPlus: '674362',
      },
      {
        date: '2024-03-15',
        addresses0To1K: '42057552',
        addresses1KTo100K: '9820459',
        addresses100KPlus: '662807',
      },
      {
        date: '2024-03-16',
        addresses0To1K: '42100732',
        addresses1KTo100K: '9746803',
        addresses100KPlus: '654277',
      },
      {
        date: '2024-03-17',
        addresses0To1K: '42127592',
        addresses1KTo100K: '9710773',
        addresses100KPlus: '648915',
      },
      {
        date: '2024-03-18',
        addresses0To1K: '42119202',
        addresses1KTo100K: '9767235',
        addresses100KPlus: '655875',
      },
      {
        date: '2024-03-19',
        addresses0To1K: '42304101',
        addresses1KTo100K: '9627924',
        addresses100KPlus: '627705',
      },
      {
        date: '2024-03-20',
        addresses0To1K: '42278113',
        addresses1KTo100K: '9609202',
        addresses100KPlus: '625574',
      },
      {
        date: '2024-03-21',
        addresses0To1K: '42218718',
        addresses1KTo100K: '9703764',
        addresses100KPlus: '637626',
      },
      {
        date: '2024-03-22',
        addresses0To1K: '42333418',
        addresses1KTo100K: '9618398',
        addresses100KPlus: '625864',
      },
      {
        date: '2024-03-23',
        addresses0To1K: '42292341',
        addresses1KTo100K: '9614374',
        addresses100KPlus: '626149',
      },
      {
        date: '2024-03-24',
        addresses0To1K: '42147101',
        addresses1KTo100K: '9663769',
        addresses100KPlus: '633388',
      },
      {
        date: '2024-03-25',
        addresses0To1K: '41935864',
        addresses1KTo100K: '9819802',
        addresses100KPlus: '661649',
      },
      {
        date: '2024-03-26',
        addresses0To1K: '41878736',
        addresses1KTo100K: '9895806',
        addresses100KPlus: '670407',
      },
      {
        date: '2024-03-27',
        addresses0To1K: '41935816',
        addresses1KTo100K: '9884632',
        addresses100KPlus: '668854',
      },
      {
        date: '2024-03-28',
        addresses0To1K: '41945926',
        addresses1KTo100K: '9890614',
        addresses100KPlus: '669751',
      },
      {
        date: '2024-03-29',
        addresses0To1K: '42004386',
        addresses1KTo100K: '9886749',
        addresses100KPlus: '668378',
      },
      {
        date: '2024-03-30',
        addresses0To1K: '42023521',
        addresses1KTo100K: '9880890',
        addresses100KPlus: '668546',
      },
      {
        date: '2024-03-31',
        addresses0To1K: '42066577',
        addresses1KTo100K: '9905942',
        addresses100KPlus: '671336',
      },
      {
        date: '2024-04-01',
        addresses0To1K: '42029365',
        addresses1KTo100K: '9872592',
        addresses100KPlus: '667281',
      },
      {
        date: '2024-04-02',
        addresses0To1K: '42137593',
        addresses1KTo100K: '9754819',
        addresses100KPlus: '653549',
      },
      {
        date: '2024-04-03',
        addresses0To1K: '42291762',
        addresses1KTo100K: '9682541',
        addresses100KPlus: '634284',
      },
      {
        date: '2024-04-04',
        addresses0To1K: '42125988',
        addresses1KTo100K: '9760662',
        addresses100KPlus: '654353',
      },
      {
        date: '2024-04-05',
        addresses0To1K: '42079367',
        addresses1KTo100K: '9771221',
        addresses100KPlus: '655298',
      },
      {
        date: '2024-04-06',
        addresses0To1K: '42018052',
        addresses1KTo100K: '9827390',
        addresses100KPlus: '661856',
      },
      {
        date: '2024-04-07',
        addresses0To1K: '41983598',
        addresses1KTo100K: '9875461',
        addresses100KPlus: '667518',
      },
      {
        date: '2024-04-08',
        addresses0To1K: '41958463',
        addresses1KTo100K: '9939711',
        addresses100KPlus: '673985',
      },
      {
        date: '2024-04-09',
        addresses0To1K: '42025792',
        addresses1KTo100K: '9905807',
        addresses100KPlus: '669274',
      },
      {
        date: '2024-04-10',
        addresses0To1K: '42159391',
        addresses1KTo100K: '9887850',
        addresses100KPlus: '665367',
      },
      {
        date: '2024-04-11',
        addresses0To1K: '42206248',
        addresses1KTo100K: '9955030',
        addresses100KPlus: '671543',
      },
      {
        date: '2024-04-12',
        addresses0To1K: '42414891',
        addresses1KTo100K: '9855167',
        addresses100KPlus: '659456',
      },
      {
        date: '2024-04-13',
        addresses0To1K: '42661117',
        addresses1KTo100K: '9684748',
        addresses100KPlus: '628385',
      },
      {
        date: '2024-04-14',
        addresses0To1K: '42738597',
        addresses1KTo100K: '9655330',
        addresses100KPlus: '624174',
      },
      {
        date: '2024-04-15',
        addresses0To1K: '42774314',
        addresses1KTo100K: '9694041',
        addresses100KPlus: '627597',
      },
      {
        date: '2024-04-16',
        addresses0To1K: '42891435',
        addresses1KTo100K: '9623666',
        addresses100KPlus: '618862',
      },
      {
        date: '2024-04-17',
        addresses0To1K: '43032816',
        addresses1KTo100K: '9577403',
        addresses100KPlus: '612532',
      },
      {
        date: '2024-04-18',
        addresses0To1K: '43065816',
        addresses1KTo100K: '9616096',
        addresses100KPlus: '616051',
      },
      {
        date: '2024-04-19',
        addresses0To1K: '43167536',
        addresses1KTo100K: '9637208',
        addresses100KPlus: '616630',
      },
      {
        date: '2024-04-20',
        addresses0To1K: '43155258',
        addresses1KTo100K: '9729821',
        addresses100KPlus: '626082',
      },
      {
        date: '2024-04-21',
        addresses0To1K: '43167886',
        addresses1KTo100K: '9770630',
        addresses100KPlus: '630330',
      },
      {
        date: '2024-04-22',
        addresses0To1K: '43148415',
        addresses1KTo100K: '9824084',
        addresses100KPlus: '635334',
      },
      {
        date: '2024-04-23',
        addresses0To1K: '43158717',
        addresses1KTo100K: '9864172',
        addresses100KPlus: '640409',
      },
      {
        date: '2024-04-24',
        addresses0To1K: '43239591',
        addresses1KTo100K: '9799214',
        addresses100KPlus: '631884',
      },
      {
        date: '2024-04-25',
        addresses0To1K: '43316128',
        addresses1KTo100K: '9735874',
        addresses100KPlus: '624644',
      },
      {
        date: '2024-04-26',
        addresses0To1K: '43385984',
        addresses1KTo100K: '9745016',
        addresses100KPlus: '624994',
      },
      {
        date: '2024-04-27',
        addresses0To1K: '43515877',
        addresses1KTo100K: '9698143',
        addresses100KPlus: '619914',
      },
      {
        date: '2024-04-28',
        addresses0To1K: '43496259',
        addresses1KTo100K: '9718430',
        addresses100KPlus: '622352',
      },
      {
        date: '2024-04-29',
        addresses0To1K: '43513140',
        addresses1KTo100K: '9688740',
        addresses100KPlus: '619526',
      },
      {
        date: '2024-04-30',
        addresses0To1K: '43626652',
        addresses1KTo100K: '9621126',
        addresses100KPlus: '612321',
      },
      {
        date: '2024-05-01',
        addresses0To1K: '43830101',
        addresses1KTo100K: '9452173',
        addresses100KPlus: '593839',
      },
      {
        date: '2024-05-02',
        addresses0To1K: '43830458',
        addresses1KTo100K: '9434942',
        addresses100KPlus: '591697',
      },
      {
        date: '2024-05-03',
        addresses0To1K: '43690915',
        addresses1KTo100K: '9586037',
        addresses100KPlus: '607839',
      },
      {
        date: '2024-05-04',
        addresses0To1K: '43617108',
        addresses1KTo100K: '9710952',
        addresses100KPlus: '622516',
      },
      {
        date: '2024-05-05',
        addresses0To1K: '43637873',
        addresses1KTo100K: '9717759',
        addresses100KPlus: '623694',
      },
      {
        date: '2024-05-06',
        addresses0To1K: '43629798',
        addresses1KTo100K: '9737257',
        addresses100KPlus: '625643',
      },
      {
        date: '2024-05-07',
        addresses0To1K: '43660012',
        addresses1KTo100K: '9697572',
        addresses100KPlus: '621608',
      },
      {
        date: '2024-05-08',
        addresses0To1K: '43751769',
        addresses1KTo100K: '9621029',
        addresses100KPlus: '612675',
      },
      {
        date: '2024-05-09',
        addresses0To1K: '43767435',
        addresses1KTo100K: '9626699',
        addresses100KPlus: '613167',
      },
      {
        date: '2024-05-10',
        addresses0To1K: '43826837',
        addresses1KTo100K: '9622852',
        addresses100KPlus: '612132',
      },
      {
        date: '2024-05-11',
        addresses0To1K: '43887762',
        addresses1KTo100K: '9579160',
        addresses100KPlus: '607802',
      },
      {
        date: '2024-05-12',
        addresses0To1K: '43844889',
        addresses1KTo100K: '9591087',
        addresses100KPlus: '609053',
      },
      {
        date: '2024-05-13',
        addresses0To1K: '43726270',
        addresses1KTo100K: '9632895',
        addresses100KPlus: '613554',
      },
      {
        date: '2024-05-14',
        addresses0To1K: '43714082',
        addresses1KTo100K: '9625705',
        addresses100KPlus: '613632',
      },
      {
        date: '2024-05-15',
        addresses0To1K: '43621611',
        addresses1KTo100K: '9719342',
        addresses100KPlus: '624448',
      },
      {
        date: '2024-05-16',
        addresses0To1K: '43539999',
        addresses1KTo100K: '9801244',
        addresses100KPlus: '634492',
      },
      {
        date: '2024-05-17',
        addresses0To1K: '43506177',
        addresses1KTo100K: '9828262',
        addresses100KPlus: '638709',
      },
      {
        date: '2024-05-18',
        addresses0To1K: '43426107',
        addresses1KTo100K: '9867571',
        addresses100KPlus: '653188',
      },
      {
        date: '2024-05-19',
        addresses0To1K: '43383953',
        addresses1KTo100K: '9853196',
        addresses100KPlus: '651600',
      },
      {
        date: '2024-05-20',
        addresses0To1K: '43268993',
        addresses1KTo100K: '9946314',
        addresses100KPlus: '662924',
      },
      {
        date: '2024-05-21',
        addresses0To1K: '43157200',
        addresses1KTo100K: '10022672',
        addresses100KPlus: '672153',
      },
      {
        date: '2024-05-22',
        addresses0To1K: '43179677',
        addresses1KTo100K: '9986087',
        addresses100KPlus: '667988',
      },
      {
        date: '2024-05-23',
        addresses0To1K: '43266929',
        addresses1KTo100K: '9910296',
        addresses100KPlus: '659195',
      },
      {
        date: '2024-05-24',
        addresses0To1K: '43298549',
        addresses1KTo100K: '9902060',
        addresses100KPlus: '657717',
      },
      {
        date: '2024-05-25',
        addresses0To1K: '43287560',
        addresses1KTo100K: '9951795',
        addresses100KPlus: '663744',
      },
      {
        date: '2024-05-26',
        addresses0To1K: '43333537',
        addresses1KTo100K: '9941574',
        addresses100KPlus: '662198',
      },
      {
        date: '2024-05-27',
        addresses0To1K: '43304258',
        addresses1KTo100K: '9971831',
        addresses100KPlus: '665489',
      },
      {
        date: '2024-05-28',
        addresses0To1K: '43338309',
        addresses1KTo100K: '9921925',
        addresses100KPlus: '659633',
      },
      {
        date: '2024-05-29',
        addresses0To1K: '43435997',
        addresses1KTo100K: '9913053',
        addresses100KPlus: '657759',
      },
      {
        date: '2024-05-30',
        addresses0To1K: '43476486',
        addresses1KTo100K: '9933614',
        addresses100KPlus: '659486',
      },
      {
        date: '2024-05-31',
        addresses0To1K: '43570506',
        addresses1KTo100K: '9914913',
        addresses100KPlus: '656861',
      },
      {
        date: '2024-06-01',
        addresses0To1K: '43645231',
        addresses1KTo100K: '9909470',
        addresses100KPlus: '655888',
      },
      {
        date: '2024-06-02',
        addresses0To1K: '43651585',
        addresses1KTo100K: '9923555',
        addresses100KPlus: '657216',
      },
      {
        date: '2024-06-03',
        addresses0To1K: '43594824',
        addresses1KTo100K: '9981546',
        addresses100KPlus: '663129',
      },
      {
        date: '2024-06-04',
        addresses0To1K: '43582227',
        addresses1KTo100K: '10029744',
        addresses100KPlus: '668011',
      },
      {
        date: '2024-06-05',
        addresses0To1K: '43581609',
        addresses1KTo100K: '10088951',
        addresses100KPlus: '674812',
      },
      {
        date: '2024-06-06',
        addresses0To1K: '43642903',
        addresses1KTo100K: '10083863',
        addresses100KPlus: '673758',
      },
      {
        date: '2024-06-07',
        addresses0To1K: '43744185',
        addresses1KTo100K: '10061237',
        addresses100KPlus: '670270',
      },
      {
        date: '2024-06-08',
        addresses0To1K: '43836927',
        addresses1KTo100K: '10018146',
        addresses100KPlus: '665482',
      },
      {
        date: '2024-06-09',
        addresses0To1K: '43868753',
        addresses1KTo100K: '10026487',
        addresses100KPlus: '666319',
      },
      {
        date: '2024-06-10',
        addresses0To1K: '43852903',
        addresses1KTo100K: '10033247',
        addresses100KPlus: '667453',
      },
      {
        date: '2024-06-11',
        addresses0To1K: '43949146',
        addresses1KTo100K: '9941532',
        addresses100KPlus: '657299',
      },
      {
        date: '2024-06-12',
        addresses0To1K: '43913061',
        addresses1KTo100K: '9972719',
        addresses100KPlus: '660499',
      },
      {
        date: '2024-06-13',
        addresses0To1K: '44019096',
        addresses1KTo100K: '9916549',
        addresses100KPlus: '654685',
      },
      {
        date: '2024-06-14',
        addresses0To1K: '44176943',
        addresses1KTo100K: '9853083',
        addresses100KPlus: '636852',
      },
      {
        date: '2024-06-15',
        addresses0To1K: '44193937',
        addresses1KTo100K: '9829643',
        addresses100KPlus: '636319',
      },
      {
        date: '2024-06-16',
        addresses0To1K: '44047686',
        addresses1KTo100K: '9835493',
        addresses100KPlus: '639183',
      },
      {
        date: '2024-06-17',
        addresses0To1K: '43961492',
        addresses1KTo100K: '9816949',
        addresses100KPlus: '636662',
      },
      {
        date: '2024-06-18',
        addresses0To1K: '43958581',
        addresses1KTo100K: '9773046',
        addresses100KPlus: '631259',
      },
      {
        date: '2024-06-19',
        addresses0To1K: '43972541',
        addresses1KTo100K: '9770621',
        addresses100KPlus: '630711',
      },
      {
        date: '2024-06-20',
        addresses0To1K: '43942901',
        addresses1KTo100K: '9786181',
        addresses100KPlus: '632651',
      },
      {
        date: '2024-06-21',
        addresses0To1K: '44019326',
        addresses1KTo100K: '9722503',
        addresses100KPlus: '625075',
      },
      {
        date: '2024-06-22',
        addresses0To1K: '44011674',
        addresses1KTo100K: '9720969',
        addresses100KPlus: '625270',
      },
      {
        date: '2024-06-23',
        addresses0To1K: '44021931',
        addresses1KTo100K: '9703049',
        addresses100KPlus: '623212',
      },
      {
        date: '2024-06-24',
        addresses0To1K: '44119163',
        addresses1KTo100K: '9535939',
        addresses100KPlus: '605796',
      },
      {
        date: '2024-06-25',
        addresses0To1K: '44063515',
        addresses1KTo100K: '9560442',
        addresses100KPlus: '607891',
      },
      {
        date: '2024-06-26',
        addresses0To1K: '44064752',
        addresses1KTo100K: '9578393',
        addresses100KPlus: '609263',
      },
      {
        date: '2024-06-27',
        addresses0To1K: '44051236',
        addresses1KTo100K: '9572889',
        addresses100KPlus: '608799',
      },
      {
        date: '2024-06-28',
        addresses0To1K: '44091363',
        addresses1KTo100K: '9556315',
        addresses100KPlus: '606715',
      },
      {
        date: '2024-06-29',
        addresses0To1K: '44099520',
        addresses1KTo100K: '9540645',
        addresses100KPlus: '604887',
      },
      {
        date: '2024-06-30',
        addresses0To1K: '44050507',
        addresses1KTo100K: '9589917',
        addresses100KPlus: '610617',
      },
      {
        date: '2024-07-01',
        addresses0To1K: '43968998',
        addresses1KTo100K: '9666691',
        addresses100KPlus: '619108',
      },
      {
        date: '2024-07-02',
        addresses0To1K: '43980376',
        addresses1KTo100K: '9613214',
        addresses100KPlus: '613576',
      },
      {
        date: '2024-07-03',
        addresses0To1K: '44015995',
        addresses1KTo100K: '9540257',
        addresses100KPlus: '605431',
      },
      {
        date: '2024-07-04',
        addresses0To1K: '44142012',
        addresses1KTo100K: '9416548',
        addresses100KPlus: '592284',
      },
      {
        date: '2024-07-05',
        addresses0To1K: '44350851',
        addresses1KTo100K: '9251294',
        addresses100KPlus: '573711',
      },
      {
        date: '2024-07-06',
        addresses0To1K: '44218344',
        addresses1KTo100K: '9350610',
        addresses100KPlus: '585300',
      },
      {
        date: '2024-07-07',
        addresses0To1K: '44220419',
        addresses1KTo100K: '9339175',
        addresses100KPlus: '583662',
      },
      {
        date: '2024-07-08',
        addresses0To1K: '44222581',
        addresses1KTo100K: '9294099',
        addresses100KPlus: '579224',
      },
      {
        date: '2024-07-09',
        addresses0To1K: '44097057',
        addresses1KTo100K: '9357118',
        addresses100KPlus: '585571',
      },
      {
        date: '2024-07-10',
        addresses0To1K: '44043462',
        addresses1KTo100K: '9416659',
        addresses100KPlus: '591120',
      },
      {
        date: '2024-07-11',
        addresses0To1K: '44063753',
        addresses1KTo100K: '9418510',
        addresses100KPlus: '591142',
      },
      {
        date: '2024-07-12',
        addresses0To1K: '44095680',
        addresses1KTo100K: '9381731',
        addresses100KPlus: '587492',
      },
      {
        date: '2024-07-13',
        addresses0To1K: '44032359',
        addresses1KTo100K: '9455585',
        addresses100KPlus: '594786',
      },
      {
        date: '2024-07-14',
        addresses0To1K: '43853017',
        addresses1KTo100K: '9518564',
        addresses100KPlus: '603109',
      },
      {
        date: '2024-07-15',
        addresses0To1K: '43647580',
        addresses1KTo100K: '9650037',
        addresses100KPlus: '618000',
      },
      {
        date: '2024-07-16',
        addresses0To1K: '43561083',
        addresses1KTo100K: '9704665',
        addresses100KPlus: '623710',
      },
      {
        date: '2024-07-17',
        addresses0To1K: '43475463',
        addresses1KTo100K: '9756611',
        addresses100KPlus: '629918',
      },
      {
        date: '2024-07-18',
        addresses0To1K: '43440109',
        addresses1KTo100K: '9716866',
        addresses100KPlus: '624740',
      },
      {
        date: '2024-07-19',
        addresses0To1K: '43372166',
        addresses1KTo100K: '9774749',
        addresses100KPlus: '631768',
      },
      {
        date: '2024-07-20',
        addresses0To1K: '43235421',
        addresses1KTo100K: '9858633',
        addresses100KPlus: '651961',
      },
      {
        date: '2024-07-21',
        addresses0To1K: '43227896',
        addresses1KTo100K: '9865351',
        addresses100KPlus: '652761',
      },
      {
        date: '2024-07-22',
        addresses0To1K: '43160655',
        addresses1KTo100K: '9886556',
        addresses100KPlus: '655536',
      },
      {
        date: '2024-07-23',
        addresses0To1K: '43262512',
        addresses1KTo100K: '9833159',
        addresses100KPlus: '640755',
      },
      {
        date: '2024-07-24',
        addresses0To1K: '43294474',
        addresses1KTo100K: '9813695',
        addresses100KPlus: '636537',
      },
      {
        date: '2024-07-25',
        addresses0To1K: '43394134',
        addresses1KTo100K: '9752048',
        addresses100KPlus: '629024',
      },
      {
        date: '2024-07-26',
        addresses0To1K: '43295177',
        addresses1KTo100K: '9871410',
        addresses100KPlus: '652847',
      },
      {
        date: '2024-07-27',
        addresses0To1K: '43259071',
        addresses1KTo100K: '9926004',
        addresses100KPlus: '658957',
      },
      {
        date: '2024-07-28',
        addresses0To1K: '43313774',
        addresses1KTo100K: '9909890',
        addresses100KPlus: '656984',
      },
      {
        date: '2024-07-29',
        addresses0To1K: '43270966',
        addresses1KTo100K: '9941914',
        addresses100KPlus: '660043',
      },
      {
        date: '2024-07-30',
        addresses0To1K: '43439545',
        addresses1KTo100K: '9834090',
        addresses100KPlus: '637260',
      },
      {
        date: '2024-07-31',
        addresses0To1K: '43469088',
        addresses1KTo100K: '9813124',
        addresses100KPlus: '634570',
      },
      {
        date: '2024-08-01',
        addresses0To1K: '43565535',
        addresses1KTo100K: '9731694',
        addresses100KPlus: '624489',
      },
      {
        date: '2024-08-02',
        addresses0To1K: '43593192',
        addresses1KTo100K: '9708532',
        addresses100KPlus: '621641',
      },
      {
        date: '2024-08-03',
        addresses0To1K: '43733649',
        addresses1KTo100K: '9581148',
        addresses100KPlus: '607703',
      },
      {
        date: '2024-08-04',
        addresses0To1K: '43852597',
        addresses1KTo100K: '9476518',
        addresses100KPlus: '597503',
      },
      {
        date: '2024-08-05',
        addresses0To1K: '44172930',
        addresses1KTo100K: '9183487',
        addresses100KPlus: '564905',
      },
      {
        date: '2024-08-06',
        addresses0To1K: '44042108',
        addresses1KTo100K: '9288935',
        addresses100KPlus: '575304',
      },
      {
        date: '2024-08-07',
        addresses0To1K: '43965339',
        addresses1KTo100K: '9329861',
        addresses100KPlus: '580150',
      },
      {
        date: '2024-08-08',
        addresses0To1K: '43845553',
        addresses1KTo100K: '9469391',
        addresses100KPlus: '594662',
      },
      {
        date: '2024-08-09',
        addresses0To1K: '43750553',
        addresses1KTo100K: '9570265',
        addresses100KPlus: '606355',
      },
      {
        date: '2024-08-10',
        addresses0To1K: '43760720',
        addresses1KTo100K: '9577419',
        addresses100KPlus: '607307',
      },
      {
        date: '2024-08-11',
        addresses0To1K: '43763119',
        addresses1KTo100K: '9537520',
        addresses100KPlus: '603102',
      },
      {
        date: '2024-08-12',
        addresses0To1K: '43749769',
        addresses1KTo100K: '9493670',
        addresses100KPlus: '598479',
      },
      {
        date: '2024-08-13',
        addresses0To1K: '43684401',
        addresses1KTo100K: '9537642',
        addresses100KPlus: '603024',
      },
      {
        date: '2024-08-14',
        addresses0To1K: '43713827',
        addresses1KTo100K: '9544967',
        addresses100KPlus: '603633',
      },
      {
        date: '2024-08-15',
        addresses0To1K: '43830953',
        addresses1KTo100K: '9434521',
        addresses100KPlus: '591385',
      },
      {
        date: '2024-08-16',
        addresses0To1K: '43820163',
        addresses1KTo100K: '9467685',
        addresses100KPlus: '593828',
      },
      {
        date: '2024-08-17',
        addresses0To1K: '43831443',
        addresses1KTo100K: '9501319',
        addresses100KPlus: '599119',
      },
      {
        date: '2024-08-18',
        addresses0To1K: '43895652',
        addresses1KTo100K: '9507122',
        addresses100KPlus: '599317',
      },
      {
        date: '2024-08-19',
        addresses0To1K: '43909201',
        addresses1KTo100K: '9479045',
        addresses100KPlus: '594782',
      },
      {
        date: '2024-08-20',
        addresses0To1K: '43869642',
        addresses1KTo100K: '9557765',
        addresses100KPlus: '602761',
      },
      {
        date: '2024-08-21',
        addresses0To1K: '43884841',
        addresses1KTo100K: '9581275',
        addresses100KPlus: '604328',
      },
      {
        date: '2024-08-22',
        addresses0To1K: '43885538',
        addresses1KTo100K: '9600060',
        addresses100KPlus: '605623',
      },
      {
        date: '2024-08-23',
        addresses0To1K: '43792275',
        addresses1KTo100K: '9709367',
        addresses100KPlus: '618195',
      },
      {
        date: '2024-08-24',
        addresses0To1K: '43760378',
        addresses1KTo100K: '9777826',
        addresses100KPlus: '625633',
      },
      {
        date: '2024-08-25',
        addresses0To1K: '43777343',
        addresses1KTo100K: '9795142',
        addresses100KPlus: '627616',
      },
      {
        date: '2024-08-26',
        addresses0To1K: '43798533',
        addresses1KTo100K: '9757010',
        addresses100KPlus: '623365',
      },
      {
        date: '2024-08-27',
        addresses0To1K: '43977358',
        addresses1KTo100K: '9597023',
        addresses100KPlus: '606070',
      },
      {
        date: '2024-08-28',
        addresses0To1K: '44037402',
        addresses1KTo100K: '9518551',
        addresses100KPlus: '597706',
      },
      {
        date: '2024-08-29',
        addresses0To1K: '44020481',
        addresses1KTo100K: '9570191',
        addresses100KPlus: '602812',
      },
      {
        date: '2024-08-30',
        addresses0To1K: '44036551',
        addresses1KTo100K: '9515345',
        addresses100KPlus: '596385',
      },
      {
        date: '2024-08-31',
        addresses0To1K: '44055652',
        addresses1KTo100K: '9531784',
        addresses100KPlus: '598217',
      },
      {
        date: '2024-09-01',
        addresses0To1K: '44120269',
        addresses1KTo100K: '9477508',
        addresses100KPlus: '592062',
      },
      {
        date: '2024-09-02',
        addresses0To1K: '44096134',
        addresses1KTo100K: '9486916',
        addresses100KPlus: '592682',
      },
      {
        date: '2024-09-03',
        addresses0To1K: '44108298',
        addresses1KTo100K: '9504829',
        addresses100KPlus: '594593',
      },
      {
        date: '2024-09-04',
        addresses0To1K: '44213353',
        addresses1KTo100K: '9423637',
        addresses100KPlus: '585744',
      },
      {
        date: '2024-09-05',
        addresses0To1K: '44235648',
        addresses1KTo100K: '9425035',
        addresses100KPlus: '585310',
      },
      {
        date: '2024-09-06',
        addresses0To1K: '44404976',
        addresses1KTo100K: '9301198',
        addresses100KPlus: '572058',
      },
      {
        date: '2024-09-07',
        addresses0To1K: '44478627',
        addresses1KTo100K: '9265238',
        addresses100KPlus: '568212',
      },
      {
        date: '2024-09-08',
        addresses0To1K: '44488310',
        addresses1KTo100K: '9290284',
        addresses100KPlus: '570509',
      },
      {
        date: '2024-09-09',
        addresses0To1K: '44313200',
        addresses1KTo100K: '9397260',
        addresses100KPlus: '581834',
      },
      {
        date: '2024-09-10',
        addresses0To1K: '44246891',
        addresses1KTo100K: '9453104',
        addresses100KPlus: '587523',
      },
      {
        date: '2024-09-11',
        addresses0To1K: '44302806',
        addresses1KTo100K: '9429878',
        addresses100KPlus: '584340',
      },
      {
        date: '2024-09-12',
        addresses0To1K: '44243001',
        addresses1KTo100K: '9495660',
        addresses100KPlus: '591500',
      },
      {
        date: '2024-09-13',
        addresses0To1K: '44131850',
        addresses1KTo100K: '9564192',
        addresses100KPlus: '598946',
      },
      {
        date: '2024-09-14',
        addresses0To1K: '44112397',
        addresses1KTo100K: '9612772',
        addresses100KPlus: '603779',
      },
      {
        date: '2024-09-15',
        addresses0To1K: '44142034',
        addresses1KTo100K: '9582065',
        addresses100KPlus: '601207',
      },
      {
        date: '2024-09-16',
        addresses0To1K: '44232780',
        addresses1KTo100K: '9515431',
        addresses100KPlus: '593683',
      },
      {
        date: '2024-09-17',
        addresses0To1K: '44128295',
        addresses1KTo100K: '9577053',
        addresses100KPlus: '601052',
      },
      {
        date: '2024-09-18',
        addresses0To1K: '44075288',
        addresses1KTo100K: '9626507',
        addresses100KPlus: '606354',
      },
      {
        date: '2024-09-19',
        addresses0To1K: '43956303',
        addresses1KTo100K: '9742887',
        addresses100KPlus: '619946',
      },
      {
        date: '2024-09-20',
        addresses0To1K: '43899046',
        addresses1KTo100K: '9767275',
        addresses100KPlus: '622462',
      },
      {
        date: '2024-09-21',
        addresses0To1K: '43937946',
        addresses1KTo100K: '9761272',
        addresses100KPlus: '622063',
      },
      {
        date: '2024-09-22',
        addresses0To1K: '43973631',
        addresses1KTo100K: '9757214',
        addresses100KPlus: '622223',
      },
      {
        date: '2024-09-23',
        addresses0To1K: '43884738',
        addresses1KTo100K: '9783312',
        addresses100KPlus: '624608',
      },
      {
        date: '2024-09-24',
        addresses0To1K: '43870026',
        addresses1KTo100K: '9784774',
        addresses100KPlus: '624747',
      },
      {
        date: '2024-09-25',
        addresses0To1K: '43874839',
        addresses1KTo100K: '9791535',
        addresses100KPlus: '625476',
      },
      {
        date: '2024-09-26',
        addresses0To1K: '43872290',
        addresses1KTo100K: '9814137',
        addresses100KPlus: '627423',
      },
      {
        date: '2024-09-27',
        addresses0To1K: '43824139',
        addresses1KTo100K: '9885447',
        addresses100KPlus: '635795',
      },
    ],
  },
};

const PossessionCard = () => {
  const chartData =
    holdingsData.addressesByHoldings.addressesByHoldingsDetails.map((item) => ({
      date: item.date,
      '0-1k': parseInt(item.addresses0To1K),
      '1k-100k': parseInt(item.addresses1KTo100K),
      '100k+': parseInt(item.addresses100KPlus),
    }));

  const seriesData0To1K = chartData.map((item) => item['0-1k']);
  const seriesData1KTo100K = chartData.map((item) => item['1k-100k']);
  const seriesData100KPlus = chartData.map((item) => item['100k+']);
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
          return formatPrice((this as any).value, false);
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

        const zeroToOnek = formatPrice(this.points[2].y);
        const onekToHundredk = formatPrice(this.points[1].y);
        const hundredkPlus = formatPrice(this.points[0].y);

        return `
        <div style="padding: 16px; border-radius: 8px; background: white; box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.05); width: 220px; max-height: 128px;">
          <div style="display: flex; justify-content: space-between; padding-bottom: 16px;">
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${date}</div>
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${time}</div>
          </div>
          <div style="display: flex; justify-content: space-between; padding-top: 6px;">
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4); display:flex; gap:4px;align-items:center;">
             <div style="width:8px; height: 8px; background-color:rgba(247, 132, 26, 1); border-radius:50%"></div>
              $0-$1k:
            </div>
            <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase">
              ${zeroToOnek}
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; padding-top: 6px; align-items:center;">
          <div style="display: flex; justify-content:start; align-items:center; gap:4px;">
          <div style="width:8px; height: 8px; background-color:rgba(55, 97, 251, 1); border-radius:50%"></div>
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4)">$1k-100K:</div>
          </div>
            <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase;">
            ${onekToHundredk}
            </div>
          </div>

             <div style="display: flex; justify-content: space-between; padding-top: 6px;">
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4); display:flex; gap:4px;align-items:center;">
             <div style="width:8px; height: 8px; background-color:rgba(69, 202, 148, 1); border-radius:50%"></div>
              $100k+:
            </div>
            <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase">
            ${hundredkPlus}
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
        name: '$100k+',
        data: seriesData100KPlus,
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
          radius: 4, // Circle marker size
        },
      },
      {
        name: '$1k - $100k',
        data: seriesData1KTo100K,
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(55, 97, 251, 0.5)'],
            [1, 'rgba(55, 97, 251, 0.2)'],
          ],
        },
        lineColor: 'rgba(55, 97, 251, 1)',
        marker: {
          fillColor: 'rgba(55, 97, 251, 1)', // Same color as line
          lineColor: '#ffffff', // White border
          lineWidth: 1,
          radius: 4, // Circle marker size
        },
      },
      {
        name: '$0 - $1k',
        data: seriesData0To1K,
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(247, 132, 26, 0.5)'],
            [1, 'rgba(247, 132, 26, 0.2)'],
          ],
        },
        lineColor: 'rgba(247, 132, 26, 1)',
        lineWidth: 2,
        marker: {
          fillColor: 'rgba(247, 132, 26, 1)', // Same color as line
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
          Addresses by possessions
        </Typography>
        <Tooltip
          title={<HeaderTooltip headerName={'Address_By_Holding'} />}
          arrow={false}
          classes={{ tooltip: 'custom-tooltip' }}
        >
          <Image src={infoIcon} alt="" className="info-icon" />
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
        {/* Legend for 0 - 1k */}
        <Stack sx={{ minWidth: '130px' }}>
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
                $0 - $1k
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                {holdingsData.addressesByHoldings.addressByHoldingsAgg.percent0To1K.toFixed(
                  2,
                )}
                %
              </Typography>
            </Stack>
          </Box>
        </Stack>
        {/* Legend for 1k - 100k */}
        <Stack sx={{ minWidth: '130px' }}>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Box
              sx={{
                border: '1px solid rgba(55, 169, 251, 1)',
                borderRadius: '50%',
                width: '5px',
                height: '5px',
                background: 'linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)',
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
                $1k - $100,000k
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                {holdingsData.addressesByHoldings.addressByHoldingsAgg.percent1KTo100k.toFixed(
                  2,
                )}
                %
              </Typography>
            </Stack>
          </Box>
        </Stack>
        {/* Legend for 100k+ */}
        <Stack sx={{ minWidth: '130px' }}>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Box
              sx={{
                border: '1px solid rgba(71, 211, 78, 1)',
                borderRadius: '50%',
                width: '5px',
                height: '5px',
                background: 'linear-gradient(180deg, #45CA94 0%, #97D14E 100%)',
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
                $100,000k+
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                {holdingsData.addressesByHoldings.addressByHoldingsAgg.percent100kPlus.toFixed(
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

export default PossessionCard;
