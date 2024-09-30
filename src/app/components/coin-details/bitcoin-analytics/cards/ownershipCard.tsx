'use client';

import { Box, Stack, Tooltip, Typography } from '@mui/material';
import React, { useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { HeaderTooltip } from '@/app/components/header-tooltip';
import infoIcon from '@/app/assets/icons/detailIcon.svg';
import Image from 'next/image';
import { formatPrice } from '@/utils/format-price';

// Data for the chart
const addressByTimeHeldData = {
  addressesByTimeHeldAgg: {
    holdersPercent: 70.81773578959964,
    holdersCount: 38114417,
    cruisersPercent: 24.62248543490168,
    cruisersCount: 13251930,
    tradersPercent: 4.55977877549868,
    tradersCount: 2454093,
  },
  addressByTimeHeldDetails: [
    {
      date: '2023-09-29',
      holders: 33919095,
      cruisers: 12142275,
      traders: 2708569,
    },
    {
      date: '2023-09-30',
      holders: 33924785,
      cruisers: 12047118,
      traders: 2679576,
    },
    {
      date: '2023-10-01',
      holders: 33928821,
      cruisers: 11989759,
      traders: 2680326,
    },
    {
      date: '2023-10-02',
      holders: 33926743,
      cruisers: 11957178,
      traders: 2662734,
    },
    {
      date: '2023-10-03',
      holders: 33934610,
      cruisers: 11919829,
      traders: 2546002,
    },
    {
      date: '2023-10-04',
      holders: 33941999,
      cruisers: 11886058,
      traders: 2591163,
    },
    {
      date: '2023-10-05',
      holders: 33943297,
      cruisers: 11866089,
      traders: 2630789,
    },
    {
      date: '2023-10-06',
      holders: 33940545,
      cruisers: 11863221,
      traders: 2681398,
    },
    {
      date: '2023-10-07',
      holders: 33943476,
      cruisers: 11828310,
      traders: 2722188,
    },
    {
      date: '2023-10-08',
      holders: 33946720,
      cruisers: 11819019,
      traders: 2751588,
    },
    {
      date: '2023-10-09',
      holders: 33949494,
      cruisers: 11804026,
      traders: 2639292,
    },
    {
      date: '2023-10-10',
      holders: 33947625,
      cruisers: 11755715,
      traders: 2669074,
    },
    {
      date: '2023-10-11',
      holders: 33950966,
      cruisers: 11749671,
      traders: 2695974,
    },
    {
      date: '2023-10-12',
      holders: 33945103,
      cruisers: 11744433,
      traders: 2714116,
    },
    {
      date: '2023-10-13',
      holders: 33949202,
      cruisers: 11747589,
      traders: 2730578,
    },
    {
      date: '2023-10-14',
      holders: 33958521,
      cruisers: 11751894,
      traders: 2760257,
    },
    {
      date: '2023-10-15',
      holders: 33963162,
      cruisers: 11760142,
      traders: 2790238,
    },
    {
      date: '2023-10-16',
      holders: 33964117,
      cruisers: 11719659,
      traders: 2725825,
    },
    {
      date: '2023-10-17',
      holders: 33968226,
      cruisers: 11698092,
      traders: 2737105,
    },
    {
      date: '2023-10-18',
      holders: 33968157,
      cruisers: 11683155,
      traders: 2705571,
    },
    {
      date: '2023-10-19',
      holders: 33975458,
      cruisers: 11672637,
      traders: 2722622,
    },
    {
      date: '2023-10-20',
      holders: 33968914,
      cruisers: 11668264,
      traders: 2790895,
    },
    {
      date: '2023-10-21',
      holders: 33974794,
      cruisers: 11651994,
      traders: 2839156,
    },
    {
      date: '2023-10-22',
      holders: 33970503,
      cruisers: 11648422,
      traders: 2881582,
    },
    {
      date: '2023-10-23',
      holders: 33971841,
      cruisers: 11623177,
      traders: 2790228,
    },
    {
      date: '2023-10-24',
      holders: 33969724,
      cruisers: 11606860,
      traders: 2875180,
    },
    {
      date: '2023-10-25',
      holders: 33973364,
      cruisers: 11614762,
      traders: 2883533,
    },
    {
      date: '2023-10-26',
      holders: 33975572,
      cruisers: 11615786,
      traders: 2865052,
    },
    {
      date: '2023-10-27',
      holders: 33977267,
      cruisers: 11624200,
      traders: 2886714,
    },
    {
      date: '2023-10-28',
      holders: 33986970,
      cruisers: 11640958,
      traders: 2928786,
    },
    {
      date: '2023-10-29',
      holders: 33990476,
      cruisers: 11662572,
      traders: 2932569,
    },
    {
      date: '2023-10-30',
      holders: 33992900,
      cruisers: 11672107,
      traders: 2866369,
    },
    {
      date: '2023-10-31',
      holders: 33991251,
      cruisers: 11676077,
      traders: 2874114,
    },
    {
      date: '2023-11-01',
      holders: 33991225,
      cruisers: 11704011,
      traders: 2899872,
    },
    {
      date: '2023-11-02',
      holders: 33997186,
      cruisers: 11719471,
      traders: 2938936,
    },
    {
      date: '2023-11-03',
      holders: 34011844,
      cruisers: 11736020,
      traders: 3061640,
    },
    {
      date: '2023-11-04',
      holders: 34026101,
      cruisers: 11757564,
      traders: 3194735,
    },
    {
      date: '2023-11-05',
      holders: 34037964,
      cruisers: 11777731,
      traders: 3203782,
    },
    {
      date: '2023-11-06',
      holders: 34049089,
      cruisers: 11788518,
      traders: 3180841,
    },
    {
      date: '2023-11-07',
      holders: 34060723,
      cruisers: 11786882,
      traders: 3236608,
    },
    {
      date: '2023-11-08',
      holders: 34087672,
      cruisers: 11788317,
      traders: 3338771,
    },
    {
      date: '2023-11-09',
      holders: 34128443,
      cruisers: 11773091,
      traders: 3437727,
    },
    {
      date: '2023-11-10',
      holders: 34170835,
      cruisers: 11742695,
      traders: 3464346,
    },
    {
      date: '2023-11-11',
      holders: 34215702,
      cruisers: 11727972,
      traders: 3543982,
    },
    {
      date: '2023-11-12',
      holders: 34256801,
      cruisers: 11724269,
      traders: 3653446,
    },
    {
      date: '2023-11-13',
      holders: 34305304,
      cruisers: 11700161,
      traders: 3586755,
    },
    {
      date: '2023-11-14',
      holders: 34354809,
      cruisers: 11672587,
      traders: 3623988,
    },
    {
      date: '2023-11-15',
      holders: 34393503,
      cruisers: 11669946,
      traders: 3684738,
    },
    {
      date: '2023-11-16',
      holders: 34432654,
      cruisers: 11674241,
      traders: 3786055,
    },
    {
      date: '2023-11-17',
      holders: 34465808,
      cruisers: 11675708,
      traders: 3766262,
    },
    {
      date: '2023-11-18',
      holders: 34499017,
      cruisers: 11691430,
      traders: 3829046,
    },
    {
      date: '2023-11-19',
      holders: 34526918,
      cruisers: 11715204,
      traders: 3858449,
    },
    {
      date: '2023-11-20',
      holders: 34550019,
      cruisers: 11727453,
      traders: 3806370,
    },
    {
      date: '2023-11-21',
      holders: 34578586,
      cruisers: 11730492,
      traders: 3806751,
    },
    {
      date: '2023-11-22',
      holders: 34603778,
      cruisers: 11743712,
      traders: 3857030,
    },
    {
      date: '2023-11-23',
      holders: 34631532,
      cruisers: 11769827,
      traders: 3860546,
    },
    {
      date: '2023-11-24',
      holders: 34649723,
      cruisers: 11793684,
      traders: 3797299,
    },
    {
      date: '2023-11-25',
      holders: 34670623,
      cruisers: 11831473,
      traders: 3806992,
    },
    {
      date: '2023-11-26',
      holders: 34686509,
      cruisers: 11868182,
      traders: 3813985,
    },
    {
      date: '2023-11-27',
      holders: 34704831,
      cruisers: 11885042,
      traders: 3802639,
    },
    {
      date: '2023-11-28',
      holders: 34722815,
      cruisers: 11884244,
      traders: 3764358,
    },
    {
      date: '2023-11-29',
      holders: 34744267,
      cruisers: 11900584,
      traders: 3728642,
    },
    {
      date: '2023-11-30',
      holders: 34755854,
      cruisers: 11901211,
      traders: 3729668,
    },
    {
      date: '2023-12-01',
      holders: 34772746,
      cruisers: 11926887,
      traders: 3715348,
    },
    {
      date: '2023-12-02',
      holders: 34794527,
      cruisers: 11997736,
      traders: 3736295,
    },
    {
      date: '2023-12-03',
      holders: 34812153,
      cruisers: 12054870,
      traders: 3761179,
    },
    {
      date: '2023-12-04',
      holders: 34822170,
      cruisers: 12073842,
      traders: 3737318,
    },
    {
      date: '2023-12-05',
      holders: 34840446,
      cruisers: 12099590,
      traders: 3759177,
    },
    {
      date: '2023-12-06',
      holders: 34849785,
      cruisers: 12124104,
      traders: 3787356,
    },
    {
      date: '2023-12-07',
      holders: 34864670,
      cruisers: 12151410,
      traders: 3744018,
    },
    {
      date: '2023-12-08',
      holders: 34877373,
      cruisers: 12184930,
      traders: 3713815,
    },
    {
      date: '2023-12-09',
      holders: 34892148,
      cruisers: 12223193,
      traders: 3739127,
    },
    {
      date: '2023-12-10',
      holders: 34904919,
      cruisers: 12274513,
      traders: 3733950,
    },
    {
      date: '2023-12-11',
      holders: 34914363,
      cruisers: 12287625,
      traders: 3651885,
    },
    {
      date: '2023-12-12',
      holders: 34933542,
      cruisers: 12301904,
      traders: 3680911,
    },
    {
      date: '2023-12-13',
      holders: 34968689,
      cruisers: 12327065,
      traders: 3742551,
    },
    {
      date: '2023-12-14',
      holders: 34998587,
      cruisers: 12360869,
      traders: 3796700,
    },
    {
      date: '2023-12-15',
      holders: 35021941,
      cruisers: 12392887,
      traders: 3844856,
    },
    {
      date: '2023-12-16',
      holders: 35049093,
      cruisers: 12421868,
      traders: 3907650,
    },
    {
      date: '2023-12-17',
      holders: 35079288,
      cruisers: 12452398,
      traders: 3918265,
    },
    {
      date: '2023-12-18',
      holders: 35100880,
      cruisers: 12463217,
      traders: 3906322,
    },
    {
      date: '2023-12-19',
      holders: 35122592,
      cruisers: 12482447,
      traders: 3944105,
    },
    {
      date: '2023-12-20',
      holders: 35141952,
      cruisers: 12520591,
      traders: 3971304,
    },
    {
      date: '2023-12-21',
      holders: 35160637,
      cruisers: 12566331,
      traders: 4024386,
    },
    {
      date: '2023-12-22',
      holders: 35176357,
      cruisers: 12602563,
      traders: 3987621,
    },
    {
      date: '2023-12-23',
      holders: 35193131,
      cruisers: 12625536,
      traders: 3965513,
    },
    {
      date: '2023-12-24',
      holders: 35204770,
      cruisers: 12672489,
      traders: 3959247,
    },
    {
      date: '2023-12-25',
      holders: 35218910,
      cruisers: 12709591,
      traders: 3954443,
    },
    {
      date: '2023-12-26',
      holders: 35231332,
      cruisers: 12738209,
      traders: 3949235,
    },
    {
      date: '2023-12-27',
      holders: 35247505,
      cruisers: 12778869,
      traders: 3980886,
    },
    {
      date: '2023-12-28',
      holders: 35266106,
      cruisers: 12812384,
      traders: 3913846,
    },
    {
      date: '2023-12-29',
      holders: 35283626,
      cruisers: 12846871,
      traders: 3895053,
    },
    {
      date: '2023-12-30',
      holders: 35305615,
      cruisers: 12875753,
      traders: 3890199,
    },
    {
      date: '2024-01-01',
      holders: 35334690,
      cruisers: 12988291,
      traders: 3835516,
    },
    {
      date: '2024-01-02',
      holders: 35341615,
      cruisers: 12986409,
      traders: 3748810,
    },
    {
      date: '2024-01-03',
      holders: 35351962,
      cruisers: 13025766,
      traders: 3669514,
    },
    {
      date: '2024-01-04',
      holders: 35351196,
      cruisers: 13012592,
      traders: 3614130,
    },
    {
      date: '2024-01-05',
      holders: 35365379,
      cruisers: 13060618,
      traders: 3662629,
    },
    {
      date: '2024-01-06',
      holders: 35374350,
      cruisers: 13060419,
      traders: 3662899,
    },
    {
      date: '2024-01-07',
      holders: 35382162,
      cruisers: 13080594,
      traders: 3647116,
    },
    {
      date: '2024-01-08',
      holders: 35391894,
      cruisers: 13123938,
      traders: 3639710,
    },
    {
      date: '2024-01-09',
      holders: 35395470,
      cruisers: 13140052,
      traders: 3582560,
    },
    {
      date: '2024-01-10',
      holders: 35405376,
      cruisers: 13160527,
      traders: 3562856,
    },
    {
      date: '2024-01-11',
      holders: 35406606,
      cruisers: 13178626,
      traders: 3552457,
    },
    {
      date: '2024-01-12',
      holders: 35402546,
      cruisers: 13126662,
      traders: 3499691,
    },
    {
      date: '2024-01-13',
      holders: 35424050,
      cruisers: 13151941,
      traders: 3581733,
    },
    {
      date: '2024-01-14',
      holders: 35447822,
      cruisers: 13210397,
      traders: 3579303,
    },
    {
      date: '2024-01-15',
      holders: 35460554,
      cruisers: 13227705,
      traders: 3530659,
    },
    {
      date: '2024-01-16',
      holders: 35477964,
      cruisers: 13237527,
      traders: 3499907,
    },
    {
      date: '2024-01-17',
      holders: 35494504,
      cruisers: 13265921,
      traders: 3505474,
    },
    {
      date: '2024-01-18',
      holders: 35498400,
      cruisers: 13286424,
      traders: 3476096,
    },
    {
      date: '2024-01-19',
      holders: 35511653,
      cruisers: 13296555,
      traders: 3498596,
    },
    {
      date: '2024-01-20',
      holders: 35523995,
      cruisers: 13318957,
      traders: 3521797,
    },
    {
      date: '2024-01-21',
      holders: 35540516,
      cruisers: 13363759,
      traders: 3524409,
    },
    {
      date: '2024-01-22',
      holders: 35543632,
      cruisers: 13346147,
      traders: 3414888,
    },
    {
      date: '2024-01-23',
      holders: 35549608,
      cruisers: 13360600,
      traders: 3370288,
    },
    {
      date: '2024-01-24',
      holders: 35549358,
      cruisers: 13305420,
      traders: 3343726,
    },
    {
      date: '2024-01-25',
      holders: 35552635,
      cruisers: 13133539,
      traders: 3256998,
    },
    {
      date: '2024-01-26',
      holders: 35562295,
      cruisers: 13110894,
      traders: 3306505,
    },
    {
      date: '2024-01-27',
      holders: 35569385,
      cruisers: 13089324,
      traders: 3291012,
    },
    {
      date: '2024-01-28',
      holders: 35581342,
      cruisers: 13114255,
      traders: 3321337,
    },
    {
      date: '2024-01-29',
      holders: 35593242,
      cruisers: 13108578,
      traders: 3266931,
    },
    {
      date: '2024-01-30',
      holders: 35603816,
      cruisers: 13092811,
      traders: 3287234,
    },
    {
      date: '2024-01-31',
      holders: 35614310,
      cruisers: 13104911,
      traders: 3242253,
    },
    {
      date: '2024-02-01',
      holders: 35628164,
      cruisers: 13100638,
      traders: 3231697,
    },
    {
      date: '2024-02-02',
      holders: 35642759,
      cruisers: 13106172,
      traders: 3248894,
    },
    {
      date: '2024-02-03',
      holders: 35659520,
      cruisers: 13154822,
      traders: 3243653,
    },
    {
      date: '2024-02-04',
      holders: 35673660,
      cruisers: 13185098,
      traders: 3197340,
    },
    {
      date: '2024-02-05',
      holders: 35687064,
      cruisers: 13165732,
      traders: 3157630,
    },
    {
      date: '2024-02-06',
      holders: 35699634,
      cruisers: 13110743,
      traders: 3139886,
    },
    {
      date: '2024-02-07',
      holders: 35714614,
      cruisers: 13123166,
      traders: 3084570,
    },
    {
      date: '2024-02-08',
      holders: 35729054,
      cruisers: 13130363,
      traders: 3048185,
    },
    {
      date: '2024-02-09',
      holders: 35733848,
      cruisers: 13092655,
      traders: 2996605,
    },
    {
      date: '2024-02-10',
      holders: 35736780,
      cruisers: 13026246,
      traders: 3011549,
    },
    {
      date: '2024-02-11',
      holders: 35744930,
      cruisers: 12962926,
      traders: 3030556,
    },
    {
      date: '2024-02-12',
      holders: 35751249,
      cruisers: 12880101,
      traders: 3042280,
    },
    {
      date: '2024-02-13',
      holders: 35759963,
      cruisers: 12836674,
      traders: 3041578,
    },
    {
      date: '2024-02-14',
      holders: 35773925,
      cruisers: 12833327,
      traders: 3064221,
    },
    {
      date: '2024-02-15',
      holders: 35784036,
      cruisers: 12815277,
      traders: 3052214,
    },
    {
      date: '2024-02-16',
      holders: 35801742,
      cruisers: 12787857,
      traders: 3091386,
    },
    {
      date: '2024-02-17',
      holders: 35815919,
      cruisers: 12762614,
      traders: 3086773,
    },
    {
      date: '2024-02-18',
      holders: 35827799,
      cruisers: 12751343,
      traders: 3103254,
    },
    {
      date: '2024-02-19',
      holders: 35834351,
      cruisers: 12732226,
      traders: 3100744,
    },
    {
      date: '2024-02-20',
      holders: 35843681,
      cruisers: 12716320,
      traders: 3120238,
    },
    {
      date: '2024-02-21',
      holders: 35856180,
      cruisers: 12720684,
      traders: 3165610,
    },
    {
      date: '2024-02-22',
      holders: 35868726,
      cruisers: 12730142,
      traders: 3202449,
    },
    {
      date: '2024-02-23',
      holders: 35882196,
      cruisers: 12714537,
      traders: 3197003,
    },
    {
      date: '2024-02-24',
      holders: 35897357,
      cruisers: 12696394,
      traders: 3193247,
    },
    {
      date: '2024-02-25',
      holders: 35903817,
      cruisers: 12644459,
      traders: 3195384,
    },
    {
      date: '2024-02-26',
      holders: 35911894,
      cruisers: 12624759,
      traders: 3216820,
    },
    {
      date: '2024-02-27',
      holders: 35895332,
      cruisers: 12604862,
      traders: 3308007,
    },
    {
      date: '2024-02-28',
      holders: 35884681,
      cruisers: 12580594,
      traders: 3420398,
    },
    {
      date: '2024-02-29',
      holders: 35889074,
      cruisers: 12565565,
      traders: 3546707,
    },
    {
      date: '2024-03-01',
      holders: 35892921,
      cruisers: 12555297,
      traders: 3587431,
    },
    {
      date: '2024-03-02',
      holders: 35912470,
      cruisers: 12554112,
      traders: 3625985,
    },
    {
      date: '2024-03-03',
      holders: 35920545,
      cruisers: 12541768,
      traders: 3673962,
    },
    {
      date: '2024-03-04',
      holders: 35906627,
      cruisers: 12528230,
      traders: 3759212,
    },
    {
      date: '2024-03-05',
      holders: 35817154,
      cruisers: 12501987,
      traders: 3808786,
    },
    {
      date: '2024-03-06',
      holders: 35817959,
      cruisers: 12490801,
      traders: 3867831,
    },
    {
      date: '2024-03-07',
      holders: 35811875,
      cruisers: 12478172,
      traders: 3875444,
    },
    {
      date: '2024-03-08',
      holders: 35819062,
      cruisers: 12475699,
      traders: 3939621,
    },
    {
      date: '2024-03-09',
      holders: 35837795,
      cruisers: 12456687,
      traders: 3954468,
    },
    {
      date: '2024-03-10',
      holders: 35850034,
      cruisers: 12457912,
      traders: 3966178,
    },
    {
      date: '2024-03-11',
      holders: 35833792,
      cruisers: 12465511,
      traders: 3829087,
    },
    {
      date: '2024-03-12',
      holders: 35841582,
      cruisers: 12437277,
      traders: 3782662,
    },
    {
      date: '2024-03-13',
      holders: 35770288,
      cruisers: 12443271,
      traders: 3747500,
    },
    {
      date: '2024-03-14',
      holders: 35778406,
      cruisers: 12425702,
      traders: 3736025,
    },
    {
      date: '2024-03-15',
      holders: 35781785,
      cruisers: 12422598,
      traders: 3809903,
    },
    {
      date: '2024-03-16',
      holders: 35790876,
      cruisers: 12420230,
      traders: 3764180,
    },
    {
      date: '2024-03-17',
      holders: 35802626,
      cruisers: 12403953,
      traders: 3754163,
    },
    {
      date: '2024-03-18',
      holders: 35814403,
      cruisers: 12393764,
      traders: 3807605,
    },
    {
      date: '2024-03-19',
      holders: 35830701,
      cruisers: 12377786,
      traders: 3824695,
    },
    {
      date: '2024-03-20',
      holders: 35831485,
      cruisers: 12367994,
      traders: 3786866,
    },
    {
      date: '2024-03-21',
      holders: 35843356,
      cruisers: 12364850,
      traders: 3825360,
    },
    {
      date: '2024-03-22',
      holders: 35857173,
      cruisers: 12375027,
      traders: 3818940,
    },
    {
      date: '2024-03-23',
      holders: 35848942,
      cruisers: 12348189,
      traders: 3809192,
    },
    {
      date: '2024-03-24',
      holders: 35861350,
      cruisers: 12275471,
      traders: 3780896,
    },
    {
      date: '2024-03-25',
      holders: 35864307,
      cruisers: 12248919,
      traders: 3777545,
    },
    {
      date: '2024-03-26',
      holders: 35878106,
      cruisers: 12260696,
      traders: 3779647,
    },
    {
      date: '2024-03-27',
      holders: 35894907,
      cruisers: 12272700,
      traders: 3795195,
    },
    {
      date: '2024-03-28',
      holders: 35913374,
      cruisers: 12280220,
      traders: 3786204,
    },
    {
      date: '2024-03-29',
      holders: 35934674,
      cruisers: 12315185,
      traders: 3783160,
    },
    {
      date: '2024-03-30',
      holders: 35965517,
      cruisers: 12339726,
      traders: 3741221,
    },
    {
      date: '2024-03-31',
      holders: 36003104,
      cruisers: 12358695,
      traders: 3755562,
    },
    {
      date: '2024-04-01',
      holders: 36026894,
      cruisers: 12340430,
      traders: 3675416,
    },
    {
      date: '2024-04-02',
      holders: 36045176,
      cruisers: 12337032,
      traders: 3637253,
    },
    {
      date: '2024-04-03',
      holders: 36076069,
      cruisers: 12314519,
      traders: 3691499,
    },
    {
      date: '2024-04-04',
      holders: 36095144,
      cruisers: 12306236,
      traders: 3613123,
    },
    {
      date: '2024-04-05',
      holders: 36143916,
      cruisers: 12238159,
      traders: 3597314,
    },
    {
      date: '2024-04-06',
      holders: 36168821,
      cruisers: 12223008,
      traders: 3588969,
    },
    {
      date: '2024-04-07',
      holders: 36183393,
      cruisers: 12235017,
      traders: 3581668,
    },
    {
      date: '2024-04-08',
      holders: 36187991,
      cruisers: 12245330,
      traders: 3612338,
    },
    {
      date: '2024-04-09',
      holders: 36204232,
      cruisers: 12275513,
      traders: 3594628,
    },
    {
      date: '2024-04-10',
      holders: 36230643,
      cruisers: 12311659,
      traders: 3643807,
    },
    {
      date: '2024-04-11',
      holders: 36253394,
      cruisers: 12363436,
      traders: 3689491,
    },
    {
      date: '2024-04-12',
      holders: 36273347,
      cruisers: 12406866,
      traders: 3722799,
    },
    {
      date: '2024-04-13',
      holders: 36292687,
      cruisers: 12445673,
      traders: 3709386,
    },
    {
      date: '2024-04-14',
      holders: 36309325,
      cruisers: 12478919,
      traders: 3703354,
    },
    {
      date: '2024-04-15',
      holders: 36326080,
      cruisers: 12524769,
      traders: 3718602,
    },
    {
      date: '2024-04-16',
      holders: 36341933,
      cruisers: 12549953,
      traders: 3715577,
    },
    {
      date: '2024-04-17',
      holders: 36363205,
      cruisers: 12590500,
      traders: 3742546,
    },
    {
      date: '2024-04-18',
      holders: 36382293,
      cruisers: 12632317,
      traders: 3756854,
    },
    {
      date: '2024-04-19',
      holders: 36400197,
      cruisers: 12656123,
      traders: 3838557,
    },
    {
      date: '2024-04-20',
      holders: 36424942,
      cruisers: 12689846,
      traders: 3869875,
    },
    {
      date: '2024-04-21',
      holders: 36448754,
      cruisers: 12726043,
      traders: 3867553,
    },
    {
      date: '2024-04-22',
      holders: 36467244,
      cruisers: 12752677,
      traders: 3861417,
    },
    {
      date: '2024-04-23',
      holders: 36487664,
      cruisers: 12788236,
      traders: 3860904,
    },
    {
      date: '2024-04-24',
      holders: 36501874,
      cruisers: 12819601,
      traders: 3822723,
    },
    {
      date: '2024-04-25',
      holders: 36516983,
      cruisers: 12851183,
      traders: 3781987,
    },
    {
      date: '2024-04-26',
      holders: 36532930,
      cruisers: 12885266,
      traders: 3811305,
    },
    {
      date: '2024-04-27',
      holders: 36551159,
      cruisers: 12917053,
      traders: 3839226,
    },
    {
      date: '2024-04-28',
      holders: 36564909,
      cruisers: 12947687,
      traders: 3797950,
    },
    {
      date: '2024-04-29',
      holders: 36576440,
      cruisers: 12959858,
      traders: 3758611,
    },
    {
      date: '2024-04-30',
      holders: 36592654,
      cruisers: 12968504,
      traders: 3772444,
    },
    {
      date: '2024-05-01',
      holders: 36601159,
      cruisers: 13001428,
      traders: 3747029,
    },
    {
      date: '2024-05-02',
      holders: 36614116,
      cruisers: 13025647,
      traders: 3690837,
    },
    {
      date: '2024-05-03',
      holders: 36627274,
      cruisers: 13076841,
      traders: 3654178,
    },
    {
      date: '2024-05-04',
      holders: 36642845,
      cruisers: 13134402,
      traders: 3646829,
    },
    {
      date: '2024-05-05',
      holders: 36655377,
      cruisers: 13176325,
      traders: 3621122,
    },
    {
      date: '2024-05-06',
      holders: 36660835,
      cruisers: 13222604,
      traders: 3582756,
    },
    {
      date: '2024-05-07',
      holders: 36671232,
      cruisers: 13260913,
      traders: 3520543,
    },
    {
      date: '2024-05-08',
      holders: 36675219,
      cruisers: 13312582,
      traders: 3471167,
    },
    {
      date: '2024-05-09',
      holders: 36689333,
      cruisers: 13364298,
      traders: 3427165,
    },
    {
      date: '2024-05-10',
      holders: 36707605,
      cruisers: 13424167,
      traders: 3403544,
    },
    {
      date: '2024-05-11',
      holders: 36728812,
      cruisers: 13452570,
      traders: 3366836,
    },
    {
      date: '2024-05-12',
      holders: 36751768,
      cruisers: 13468085,
      traders: 3298669,
    },
    {
      date: '2024-05-13',
      holders: 36774886,
      cruisers: 13459870,
      traders: 3211458,
    },
    {
      date: '2024-05-14',
      holders: 36792677,
      cruisers: 13487747,
      traders: 3146489,
    },
    {
      date: '2024-05-15',
      holders: 36799556,
      cruisers: 13510634,
      traders: 3128702,
    },
    {
      date: '2024-05-16',
      holders: 36810558,
      cruisers: 13546635,
      traders: 3092033,
    },
    {
      date: '2024-05-17',
      holders: 36832296,
      cruisers: 13548226,
      traders: 3066114,
    },
    {
      date: '2024-05-18',
      holders: 36862660,
      cruisers: 13545067,
      traders: 3012628,
    },
    {
      date: '2024-05-19',
      holders: 36871995,
      cruisers: 13549332,
      traders: 2940907,
    },
    {
      date: '2024-05-20',
      holders: 36884475,
      cruisers: 13530227,
      traders: 2937015,
    },
    {
      date: '2024-05-21',
      holders: 36897379,
      cruisers: 13507878,
      traders: 2920254,
    },
    {
      date: '2024-05-22',
      holders: 36913451,
      cruisers: 13477127,
      traders: 2916698,
    },
    {
      date: '2024-05-23',
      holders: 36932238,
      cruisers: 13455503,
      traders: 2922199,
    },
    {
      date: '2024-05-24',
      holders: 36957262,
      cruisers: 13453143,
      traders: 2921442,
    },
    {
      date: '2024-05-25',
      holders: 36978561,
      cruisers: 13482932,
      traders: 2915128,
    },
    {
      date: '2024-05-26',
      holders: 36998117,
      cruisers: 13527306,
      traders: 2885409,
    },
    {
      date: '2024-05-27',
      holders: 37011173,
      cruisers: 13600916,
      traders: 2803199,
    },
    {
      date: '2024-05-28',
      holders: 37028131,
      cruisers: 13591257,
      traders: 2774178,
    },
    {
      date: '2024-05-29',
      holders: 37051053,
      cruisers: 13626069,
      traders: 2803378,
    },
    {
      date: '2024-05-30',
      holders: 37069198,
      cruisers: 13688294,
      traders: 2785780,
    },
    {
      date: '2024-05-31',
      holders: 37086333,
      cruisers: 13712719,
      traders: 2816912,
    },
    {
      date: '2024-06-01',
      holders: 37113243,
      cruisers: 13735377,
      traders: 2835653,
    },
    {
      date: '2024-06-02',
      holders: 37137203,
      cruisers: 13749376,
      traders: 2819458,
    },
    {
      date: '2024-06-03',
      holders: 37156219,
      cruisers: 13752148,
      traders: 2804813,
    },
    {
      date: '2024-06-04',
      holders: 37175153,
      cruisers: 13751899,
      traders: 2826609,
    },
    {
      date: '2024-06-05',
      holders: 37206111,
      cruisers: 13753079,
      traders: 2859861,
    },
    {
      date: '2024-06-06',
      holders: 37248370,
      cruisers: 13747368,
      traders: 2878466,
    },
    {
      date: '2024-06-07',
      holders: 37275765,
      cruisers: 13742536,
      traders: 2931064,
    },
    {
      date: '2024-06-08',
      holders: 37301586,
      cruisers: 13725232,
      traders: 2967410,
    },
    {
      date: '2024-06-09',
      holders: 37326398,
      cruisers: 13711273,
      traders: 2997561,
    },
    {
      date: '2024-06-10',
      holders: 37349060,
      cruisers: 13701234,
      traders: 2976988,
    },
    {
      date: '2024-06-11',
      holders: 37371428,
      cruisers: 13676490,
      traders: 2973738,
    },
    {
      date: '2024-06-12',
      holders: 37391997,
      cruisers: 13658481,
      traders: 2969478,
    },
    {
      date: '2024-06-13',
      holders: 37411446,
      cruisers: 13657500,
      traders: 2995061,
    },
    {
      date: '2024-06-14',
      holders: 37433240,
      cruisers: 13675514,
      traders: 3031800,
    },
    {
      date: '2024-06-15',
      holders: 37454289,
      cruisers: 13674126,
      traders: 3005159,
    },
    {
      date: '2024-06-16',
      holders: 37475488,
      cruisers: 13646473,
      traders: 2874076,
    },
    {
      date: '2024-06-17',
      holders: 37484932,
      cruisers: 13641897,
      traders: 2761950,
    },
    {
      date: '2024-06-18',
      holders: 37495955,
      cruisers: 13624192,
      traders: 2716414,
    },
    {
      date: '2024-06-19',
      holders: 37509737,
      cruisers: 13636364,
      traders: 2701445,
    },
    {
      date: '2024-06-20',
      holders: 37522787,
      cruisers: 13649116,
      traders: 2663501,
    },
    {
      date: '2024-06-21',
      holders: 37539403,
      cruisers: 13647434,
      traders: 2653736,
    },
    {
      date: '2024-06-22',
      holders: 37550559,
      cruisers: 13651450,
      traders: 2629579,
    },
    {
      date: '2024-06-23',
      holders: 37564556,
      cruisers: 13654385,
      traders: 2602926,
    },
    {
      date: '2024-06-24',
      holders: 37568154,
      cruisers: 13606716,
      traders: 2559703,
    },
    {
      date: '2024-06-25',
      holders: 37579267,
      cruisers: 13605039,
      traders: 2521217,
    },
    {
      date: '2024-06-26',
      holders: 37594688,
      cruisers: 13597816,
      traders: 2533577,
    },
    {
      date: '2024-06-27',
      holders: 37600398,
      cruisers: 13570637,
      traders: 2535560,
    },
    {
      date: '2024-06-28',
      holders: 37609517,
      cruisers: 13542249,
      traders: 2576296,
    },
    {
      date: '2024-06-29',
      holders: 37631055,
      cruisers: 13499699,
      traders: 2587967,
    },
    {
      date: '2024-06-30',
      holders: 37641375,
      cruisers: 13499040,
      traders: 2584296,
    },
    {
      date: '2024-07-01',
      holders: 37654216,
      cruisers: 13476416,
      traders: 2597837,
    },
    {
      date: '2024-07-02',
      holders: 37672783,
      cruisers: 13419649,
      traders: 2588653,
    },
    {
      date: '2024-07-03',
      holders: 37676073,
      cruisers: 13371599,
      traders: 2587932,
    },
    {
      date: '2024-07-04',
      holders: 37686038,
      cruisers: 13345339,
      traders: 2593387,
    },
    {
      date: '2024-07-05',
      holders: 37707295,
      cruisers: 13332530,
      traders: 2609951,
    },
    {
      date: '2024-07-06',
      holders: 37700444,
      cruisers: 13324198,
      traders: 2603533,
    },
    {
      date: '2024-07-07',
      holders: 37706093,
      cruisers: 13296172,
      traders: 2614911,
    },
    {
      date: '2024-07-08',
      holders: 37706710,
      cruisers: 13294438,
      traders: 2568673,
    },
    {
      date: '2024-07-09',
      holders: 37703158,
      cruisers: 13273732,
      traders: 2536774,
    },
    {
      date: '2024-07-10',
      holders: 37696035,
      cruisers: 13280221,
      traders: 2548904,
    },
    {
      date: '2024-07-11',
      holders: 37699669,
      cruisers: 13296325,
      traders: 2551331,
    },
    {
      date: '2024-07-12',
      holders: 37709844,
      cruisers: 13282840,
      traders: 2546136,
    },
    {
      date: '2024-07-13',
      holders: 37729273,
      cruisers: 13266624,
      traders: 2560745,
    },
    {
      date: '2024-07-14',
      holders: 37729057,
      cruisers: 13179616,
      traders: 2539892,
    },
    {
      date: '2024-07-15',
      holders: 37732735,
      cruisers: 13137460,
      traders: 2519299,
    },
    {
      date: '2024-07-16',
      holders: 37721566,
      cruisers: 13113568,
      traders: 2528199,
    },
    {
      date: '2024-07-17',
      holders: 37725365,
      cruisers: 13096708,
      traders: 2513791,
    },
    {
      date: '2024-07-18',
      holders: 37729184,
      cruisers: 13021439,
      traders: 2504969,
    },
    {
      date: '2024-07-19',
      holders: 37736659,
      cruisers: 12986148,
      traders: 2529753,
    },
    {
      date: '2024-07-20',
      holders: 37748291,
      cruisers: 12930559,
      traders: 2541041,
    },
    {
      date: '2024-07-21',
      holders: 37746497,
      cruisers: 12925898,
      traders: 2547489,
    },
    {
      date: '2024-07-22',
      holders: 37752851,
      cruisers: 12897641,
      traders: 2526129,
    },
    {
      date: '2024-07-23',
      holders: 37762855,
      cruisers: 12887418,
      traders: 2560028,
    },
    {
      date: '2024-07-24',
      holders: 37775180,
      cruisers: 12871128,
      traders: 2572272,
    },
    {
      date: '2024-07-25',
      holders: 37787221,
      cruisers: 12860143,
      traders: 2601716,
    },
    {
      date: '2024-07-26',
      holders: 37798733,
      cruisers: 12867521,
      traders: 2627052,
    },
    {
      date: '2024-07-27',
      holders: 37809517,
      cruisers: 12866549,
      traders: 2641838,
    },
    {
      date: '2024-07-28',
      holders: 37814966,
      cruisers: 12890733,
      traders: 2648823,
    },
    {
      date: '2024-07-29',
      holders: 37818787,
      cruisers: 12895009,
      traders: 2633001,
    },
    {
      date: '2024-07-30',
      holders: 37824085,
      cruisers: 12907576,
      traders: 2653106,
    },
    {
      date: '2024-07-31',
      holders: 37834274,
      cruisers: 12939201,
      traders: 2617182,
    },
    {
      date: '2024-08-01',
      holders: 37842255,
      cruisers: 12947775,
      traders: 2605584,
    },
    {
      date: '2024-08-02',
      holders: 37852125,
      cruisers: 12928024,
      traders: 2617113,
    },
    {
      date: '2024-08-03',
      holders: 37855479,
      cruisers: 12925098,
      traders: 2615821,
    },
    {
      date: '2024-08-04',
      holders: 37864384,
      cruisers: 12911417,
      traders: 2624717,
    },
    {
      date: '2024-08-05',
      holders: 37858719,
      cruisers: 12891718,
      traders: 2644797,
    },
    {
      date: '2024-08-06',
      holders: 37843413,
      cruisers: 12874856,
      traders: 2661989,
    },
    {
      date: '2024-08-07',
      holders: 37844298,
      cruisers: 12862093,
      traders: 2642869,
    },
    {
      date: '2024-08-08',
      holders: 37854551,
      cruisers: 12867559,
      traders: 2661411,
    },
    {
      date: '2024-08-09',
      holders: 37862735,
      cruisers: 12874591,
      traders: 2663759,
    },
    {
      date: '2024-08-10',
      holders: 37874884,
      cruisers: 12887575,
      traders: 2656898,
    },
    {
      date: '2024-08-11',
      holders: 37840956,
      cruisers: 12881391,
      traders: 2655305,
    },
    {
      date: '2024-08-12',
      holders: 37816232,
      cruisers: 12881338,
      traders: 2618257,
    },
    {
      date: '2024-08-13',
      holders: 37780529,
      cruisers: 12884159,
      traders: 2634294,
    },
    {
      date: '2024-08-14',
      holders: 37789421,
      cruisers: 12890090,
      traders: 2656831,
    },
    {
      date: '2024-08-15',
      holders: 37800616,
      cruisers: 12881488,
      traders: 2648667,
    },
    {
      date: '2024-08-16',
      holders: 37817238,
      cruisers: 12889150,
      traders: 2649197,
    },
    {
      date: '2024-08-17',
      holders: 37840912,
      cruisers: 12896803,
      traders: 2668075,
    },
    {
      date: '2024-08-18',
      holders: 37857749,
      cruisers: 12906223,
      traders: 2712028,
    },
    {
      date: '2024-08-19',
      holders: 37873991,
      cruisers: 12910481,
      traders: 2672463,
    },
    {
      date: '2024-08-20',
      holders: 37887364,
      cruisers: 12906574,
      traders: 2710136,
    },
    {
      date: '2024-08-21',
      holders: 37905988,
      cruisers: 12919217,
      traders: 2719146,
    },
    {
      date: '2024-08-22',
      holders: 37920025,
      cruisers: 12936839,
      traders: 2708262,
    },
    {
      date: '2024-08-23',
      holders: 37932988,
      cruisers: 12950257,
      traders: 2710481,
    },
    {
      date: '2024-08-24',
      holders: 37948246,
      cruisers: 12970397,
      traders: 2719083,
    },
    {
      date: '2024-08-25',
      holders: 37960516,
      cruisers: 12994788,
      traders: 2718685,
    },
    {
      date: '2024-08-26',
      holders: 37969543,
      cruisers: 13006127,
      traders: 2677128,
    },
    {
      date: '2024-08-27',
      holders: 37981583,
      cruisers: 13001569,
      traders: 2671187,
    },
    {
      date: '2024-08-28',
      holders: 37987415,
      cruisers: 13032744,
      traders: 2607388,
    },
    {
      date: '2024-08-29',
      holders: 37992109,
      cruisers: 13047328,
      traders: 2627937,
    },
    {
      date: '2024-08-30',
      holders: 37970028,
      cruisers: 13045068,
      traders: 2607076,
    },
    {
      date: '2024-08-31',
      holders: 37986269,
      cruisers: 13062814,
      traders: 2610460,
    },
    {
      date: '2024-09-01',
      holders: 37984944,
      cruisers: 13080347,
      traders: 2598438,
    },
    {
      date: '2024-09-02',
      holders: 37986208,
      cruisers: 13097546,
      traders: 2565867,
    },
    {
      date: '2024-09-03',
      holders: 37998472,
      cruisers: 13115274,
      traders: 2567863,
    },
    {
      date: '2024-09-04',
      holders: 38007996,
      cruisers: 13152831,
      traders: 2535795,
    },
    {
      date: '2024-09-05',
      holders: 38020984,
      cruisers: 13171948,
      traders: 2526949,
    },
    {
      date: '2024-09-06',
      holders: 38034114,
      cruisers: 13178219,
      traders: 2539789,
    },
    {
      date: '2024-09-07',
      holders: 38045108,
      cruisers: 13194454,
      traders: 2546405,
    },
    {
      date: '2024-09-08',
      holders: 38056042,
      cruisers: 13201330,
      traders: 2565621,
    },
    {
      date: '2024-09-09',
      holders: 38064834,
      cruisers: 13204430,
      traders: 2496922,
    },
    {
      date: '2024-09-10',
      holders: 38075685,
      cruisers: 13177744,
      traders: 2507978,
    },
    {
      date: '2024-09-11',
      holders: 38081891,
      cruisers: 13175894,
      traders: 2533131,
    },
    {
      date: '2024-09-12',
      holders: 38073957,
      cruisers: 13177986,
      traders: 2552110,
    },
    {
      date: '2024-09-13',
      holders: 38071722,
      cruisers: 13161698,
      traders: 2535453,
    },
    {
      date: '2024-09-14',
      holders: 38079244,
      cruisers: 13162108,
      traders: 2561481,
    },
    {
      date: '2024-09-15',
      holders: 38080602,
      cruisers: 13167087,
      traders: 2551506,
    },
    {
      date: '2024-09-16',
      holders: 38083568,
      cruisers: 13174142,
      traders: 2554933,
    },
    {
      date: '2024-09-17',
      holders: 38087121,
      cruisers: 13199862,
      traders: 2493391,
    },
    {
      date: '2024-09-18',
      holders: 38087539,
      cruisers: 13194923,
      traders: 2499964,
    },
    {
      date: '2024-09-19',
      holders: 38092749,
      cruisers: 13205737,
      traders: 2495127,
    },
    {
      date: '2024-09-20',
      holders: 38081854,
      cruisers: 13212594,
      traders: 2468954,
    },
    {
      date: '2024-09-21',
      holders: 38080467,
      cruisers: 13244446,
      traders: 2471133,
    },
    {
      date: '2024-09-22',
      holders: 38091056,
      cruisers: 13252876,
      traders: 2483945,
    },
    {
      date: '2024-09-23',
      holders: 38071191,
      cruisers: 13255468,
      traders: 2440906,
    },
    {
      date: '2024-09-24',
      holders: 38080192,
      cruisers: 13247285,
      traders: 2427052,
    },
    {
      date: '2024-09-25',
      holders: 38092047,
      cruisers: 13249552,
      traders: 2425262,
    },
    {
      date: '2024-09-26',
      holders: 38102702,
      cruisers: 13246293,
      traders: 2439904,
    },
    {
      date: '2024-09-27',
      holders: 38114417,
      cruisers: 13251930,
      traders: 2454093,
    },
  ],
};

const OwnershipCard = () => {
  // Prepare the data for the chart
  const chartData = addressByTimeHeldData.addressByTimeHeldDetails.map(
    (item) => ({
      date: item.date,
      holders: item.holders,
      cruisers: item.cruisers,
      traders: item.traders,
    }),
  );

  const seriesDataHolders = chartData.map((item) => item.holders);
  const seriesDataCruisers = chartData.map((item) => item.cruisers);
  const seriesDataTraders = chartData.map((item) => item.traders);
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
        formatter: function (): any {
          // Show only significant dates like in the image (May '23, Aug '23, etc.)
          const date: any = new Date((this as any)?.value);
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

        const holders = formatPrice(this.points[0].y);
        const traders = formatPrice(this.points[1].y);
        const cruisers = formatPrice(this.points[2].y);

        return `
        <div style="padding: 16px; border-radius: 8px; background: white; box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.05); width: 220px; max-height: 128px;">
          <div style="display: flex; justify-content: space-between; padding-bottom: 16px;">
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${date}</div>
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${time}</div>
          </div>
          <div style="display: flex; justify-content: space-between; padding-top: 6px;">
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4); display:flex; gap:4px;align-items:center;">
             <div style="width:8px; height: 8px; background-color:rgba(247, 72, 72, 1); border-radius:50%"></div>
              Cruisers:
            </div>
            <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase">
              ${cruisers}
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; padding-top: 6px; align-items:center;">
          <div style="display: flex; justify-content:start; align-items:center; gap:4px;">
          <div style="width:8px; height: 8px; background-color:rgba(55, 97, 251, 1); border-radius:50%"></div>
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4)">Traders:</div>
          </div>
            <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase;">
            ${traders}
            </div>
          </div>

             <div style="display: flex; justify-content: space-between; padding-top: 6px;">
            <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4); display:flex; gap:4px;align-items:center;">
             <div style="width:8px; height: 8px; background-color:rgba(69, 202, 148, 1); border-radius:50%"></div>
Holders:
            </div>
            <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase">
            ${holders}
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
        name: 'Holders',
        data: seriesDataHolders,
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(69, 202, 148, 0.5)'],
            [1, 'rgba(71, 211, 78, 0.01)'],
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
        name: 'Traders',
        data: seriesDataTraders,
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(55, 97, 251, 0.5)'],
            [1, 'rgba(55, 97, 251, 0.01)'],
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
        name: 'Cruisers',
        data: seriesDataCruisers,
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(247, 72, 72, 0.5)'],
            [1, 'rgba(247, 72, 72, 0.01)'],
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
          Addresses by time held
        </Typography>
        <Tooltip
          title={<HeaderTooltip headerName={'Address_Ownership'} />}
          arrow={false}
          classes={{ tooltip: 'custom-tooltip' }}
        >
          <Image src={infoIcon} alt="" className="info-icon" />
        </Tooltip>
      </Box>
      <Box sx={{ display: 'flex', gap: '56px', alignItems: 'center' }}>
        {/* Legend for Holders */}
        <Stack>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Box
              sx={{
                border: '1px solid rgba(247, 132, 26, 1)',
                borderRadius: '50%',
                width: '5px',
                height: '5px',
                background: 'rgba(247, 132, 26, 1)',
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
                Cruisers
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                {addressByTimeHeldData.addressesByTimeHeldAgg.cruisersPercent.toFixed(
                  2,
                )}
                %
              </Typography>
            </Stack>
          </Box>
        </Stack>
        {/* Legend for Traders */}
        <Stack>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Box
              sx={{
                border: '1px solid rgba(55, 97, 251, 1)',
                borderRadius: '50%',
                width: '5px',
                height: '5px',
                background: 'rgba(55, 97, 251, 1)',
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
                Traders
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                {addressByTimeHeldData.addressesByTimeHeldAgg.tradersPercent.toFixed(
                  2,
                )}
                %
              </Typography>
            </Stack>
          </Box>
        </Stack>
        {/* Legend for Holders */}
        <Stack>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <Box
              sx={{
                border: '1px solid rgba(69, 202, 148, 1)',
                borderRadius: '50%',
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
                Holders
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                {addressByTimeHeldData.addressesByTimeHeldAgg.holdersPercent.toFixed(
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

export default OwnershipCard;
