import React from 'react';
import { Box, Typography } from '@mui/material';
import BrainIcon from '../../../../../public/images/home/benefits-section/education_guides/brain.svg';
import DocumentIcon from '../../../../../public/images/home/benefits-section/education_guides/chip.svg';
import GraduationCapIcon from '../../../../../public/images/home/benefits-section/education_guides/scholar_hat.svg';
import FlagIcon from '../../../../../public/images/home/benefits-section/education_guides/glass.svg';
import DataIcon from '../../../../../public/images/home/benefits-section/education_guides/Teach_Poll.svg';
import Image from 'next/image';
import EducartionalGuidesIcon from "../../../../../public/images/home/trading_journey/educational_guide_icons.svg"

const EducationalGuidesRow: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 'auto', lg: '216px' },
        minHeight: { xs: '200px', sm: '216px' },
        background: 'white',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: { xs: '16px 16px 0', sm: '20px 20px 0', lg: '99px' },
        position: 'relative',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
        border: '1px solid rgba(0,0,0,0.05)',
        overflow: 'hidden',
        boxSizing: 'border-box',
        backgroundColor:"#7248F7",
        color:'white',
      }}
    >
      <Box
        sx={{
          boxSizing:"border-box",
          display: 'flex',
          flexDirection: 'column',
          gap: '9px',
          width: { xs: '100%', lg: '30%' },
          textWrap: 'wrap',
          overflow: 'hidden',
          padding: { xs: '16px', sm: '18px', md: '51px 48px 51px 70px' },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '18px', sm: '20px' },
            fontWeight: 700,
            lineHeight: '24px',
            width: '100%',
            textWrap: 'wrap',
            color:'#FFFFFF'

          }}
        >
          Educational Guides
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '14px', sm: '16px' },
            lineHeight: '20.8px',
            opacity: 0.56,
            textWrap: 'wrap',
            width: '100%',
            color:"#FFFFFF"
          }}
        >
          Access comprehensive guides designed to educate and empower traders at
          all levels. Master the markets with our in-depth resources.
        </Typography>
      </Box>

      {/* icons group with glow behind middle */}
      {/* <Box
        sx={{
          position: 'relative',
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          gap: { xs: '16px', sm: '20px', lg: '27.25px' },
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          justifyContent: { xs: 'center', lg: 'space-between' },
          flexShrink: 0,
        }}
      >
        <Box sx={{ width: { xs: 120, sm: 140, lg: 160 }, height: { xs: 120, sm: 140, lg: 160 }, borderRadius: '50%', background: 'radial-gradient(closest-side, rgba(65,185,245,0.35), rgba(65,185,245,0) 70%)', position: 'absolute', left: '50%', transform: 'translateX(-50%)', filter: 'blur(8px)' }} />
        <Box>
          <Image src={BrainIcon} alt="Brain" width={45} height={40} />
        </Box>
        <Box>
          <Image src={DataIcon} alt="Data" width={58} height={58} />
        </Box>
        <Box
          sx={{
            p: '14px',
            borderRadius: '14px',
            background: '#41B9F5',
            boxShadow: '0 3px 120px rgba(65,185,245,0.6)',
          }}
        >
          <Image
            src={GraduationCapIcon}
            alt="Graduation Cap"
            width={56}
            height={56}
          />
        </Box>
        <Box>
          <Image src={FlagIcon} alt="Flag" width={58} height={58} />
        </Box>
        <Box>
          <Image src={DocumentIcon} alt="Document" width={44} height={44} />
        </Box>
      </Box> */}
      <Box sx={{
        // backgroundImage:'url(/images/home/trading_journey/educational_guide_icons.svg)',
        // backgroundSize:'contain',
        // backgroundRepeat:"no-repeat",
        height:'100%',
        width:{sx:"100%",lg:"50%"},
      }}>
        <Image src={EducartionalGuidesIcon} width={500} height={215} alt="dedicated professional icons"/>
      </Box>
    </Box>
  );
};

export default EducationalGuidesRow;
