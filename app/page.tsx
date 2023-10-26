'use client'
// Core
import React, { useEffect, useState } from 'react';

// Styles
import * as S from './styles';

// View
import { Header } from '../components/header';
import { FirstSection } from '../components/firstSection';
import { SecondSection } from '../components/secondSection';
import { ThirdSection } from '../components/thirdSection';
import { FourthSection } from '../components/fourthSection';
import { FifthSection } from '../components/fifthSection';
import { SixthSection } from '../components/sixthSection';
import { SeventhSection } from '../components/seventhSection';
import { EighthSection } from '../components/eighthSection'
import { Footer } from '../components/footer'

// MUI
import { CssBaseline, ThemeProvider } from '@mui/material';

import mainTheme from '../theme/theme'




export default function Home() {
    const [mounted, setMounted] = useState(false)
    useEffect(()=>setMounted(true),[])

  return (

    <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <S.Wrap style={{ visibility: mounted ? 'visible' : 'hidden' }}>
          <Header />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
          <EighthSection />
          <Footer />
        </S.Wrap>
    </ThemeProvider> 
   
  )
}

