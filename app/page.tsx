'use client'
// Core
import React, { useEffect, useState, useContext, createContext } from 'react';

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

// MUI Theme
import mainTheme from '../theme/theme'

export const LocalContext = createContext<{ local: string, setLocal: React.Dispatch<React.SetStateAction<string>> }>({ local: 'en', setLocal: () => {} })


export default function Home() {
    const [mounted, setMounted] = useState(false)
    useEffect(()=>setMounted(true),[])

    const [local, setLocal] = useState('en')

  return (
    <LocalContext.Provider value={{local, setLocal}}>
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
    </LocalContext.Provider>
  )
}

