import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

import Star from '../../../../../public/images/membership/star.svg';
import Image from 'next/image';
import FAQQuestion from './FAQQuestion';

const FAQSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width:768px)': {
          flexDirection: 'column',
        },
      }}
    >
      <Box
        sx={{
          width: '38%',
          '@media (max-width:786px)': {
            width: '100%',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '18px',
            marginBottom: '4px',
            textTransform: 'uppercase',
            fontFamily: 'Sf Pro Display',
            color: 'rgba(255,255,255,1)',
            letterSpacing: '1.4px',
            '@media (max-width:660px)': {
              fontSize: '14px',
            },
          }}
        >
          Effortless trading
        </Typography>

        <Typography
          sx={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '38px',
            marginBottom: '36px',
            fontFamily: 'Sf Pro Display',
            color: 'rgba(255,255,255,1)',
            '@media (max-width:660px)': {
              fontSize: '24px',
              marginBottom: '24px',
            },
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Box
          sx={{
            maxWidth: '374px',
            '@media (max-width:768px)': {
              display: 'none',
            },
          }}
        >
          <Image src={Star} alt="star" style={{ width: '100%' }} />
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: '522px',
          '@media (max-width:768px)': {
            maxWidth: 'none',
          },
        }}
      >
        <FAQQuestion
          title="What is CRYPTOWZRD?"
          summary={`CRYPTOWZRD is more than a service, it’s your gateway to dominating the crypto markets. We deliver relentless 24/7 market analysis, precision-driven trade signals, and an unrivaled library of educational resources. We don’t just teach you crypto, we transform the way you think, trade, and succeed. In a market that never sleeps, we give you the tools, insights, and confidence to stay ahead of the curve and seize every opportunity.Learn, trade, and succeed with the ultimate edge.. anytime, anywhere. The future of crypto starts with you, let us guide the way.`}
        />
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          flexItem
          sx={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
            pb: '16px',
            mb: '16px',
          }}
        />
        <FAQQuestion
          title="Is CRYPTOWZRD suitable for beginners?"
          summary="Absolutely. CRYPTOWZRD is the ultimate platform for all investors, from curious beginners to seasoned pros. Whether you’re setting up your first trading account or sharpening advanced trading strategies, we’ve got you covered with 26 expert-written books, 20 actionable guides, and a 76-video masterclass spanning 24 hours packed with 100 lessons to elevate your skills.

But the real magic? Our 24/7 support - a team of experts ready to answer your questions and guide you through every step of the crypto journey. CRYPTOWZRD isn’t just a resource; it’s the powerhouse that empowers investors at every level to thrive in the fast-moving crypto world."
        />
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          flexItem
          sx={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
            pb: '16px',
            mb: '16px',
          }}
        />
        <FAQQuestion
          title="Do you offer trade signals?"
          summary="Welcome to the future of trading at CRYPTOWZRD, where success is just a few clicks away. With our elite direct trade signals, you don’t just trade.. you dominate. 

We redefine trading with our unmatched Aggressive Scalping Strategy. Perfected by experts, this strategy is designed to capitalize on rapid market movements, delivering consistent, high-impact results in any market conditions.

Every signal comes fully loaded with entry prices, risk levels, stop-loss setups, position sizing, profit targets, and the exact reasoning behind the move, giving you complete confidence in every decision. 

Here’s the game-changer: we provide full trade management and real-time updates from start to finish, so you’re never left guessing. 

Forget the stress of complicated strategies - let us handle the heavy lifting while you focus on results. This is trading at its easiest, smartest, and most profitable."
        />
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          flexItem
          sx={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
            pb: '16px',
            mb: '16px',
          }}
        />
        <FAQQuestion
          title="Can I pay monthly?"
          summary="We don’t offer monthly payments - and for good reason. The moment you join, you unlock instant, unlimited access to our entire arsenal: every trade signal, every educational resource, every piece of exclusive content, all designed to elevate your crypto game to the next level. 

This isn’t a subscription; it’s a lifetime membership for a one-time investment. No recurring fees, no limits - just unparalleled value that pays for itself many times over. 

Why pay monthly for less when you can make one powerful move and gain everything you need to master the crypto markets forever?"
        />
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          flexItem
          sx={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
            pb: '16px',
            mb: '16px',
          }}
        />
        <FAQQuestion
          title="How much do I need to start investing?"
          summary="At CRYPTOWZRD, the amount needed to start investing is minimal, our strategies are designed to help you turn a small account into huge profits. With our proven approach, you’ll learn how to reinvest profits and compound gains, creating exponential growth over time. 

We focus on teaching you the skills and techniques to maximize every opportunity, no matter your starting balance. This isn’t just about making trades, it’s about building a system that works for you, growing your account steadily and strategically. Start small, think big, and let us guide you to extraordinary results."
        />
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          flexItem
          sx={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
            pb: '16px',
            mb: '16px',
          }}
        />
        <FAQQuestion
          title="How quick can I get started?"
          summary="You can get started immediately - within 30 seconds of purchasing your lifetime membership. Once you sign up, our system works instantly to send you all the access details via email, with automatic verification ensuring a seamless start. 

No waiting, no delays.. just instant access to everything you need to dive into the world of crypto and start your journey toward success. The moment you decide, you’re in!"
        />
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          flexItem
          sx={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
            pb: '16px',
            mb: '16px',
          }}
        />
      </Box>
    </Box>
  );
};

export default FAQSection;
