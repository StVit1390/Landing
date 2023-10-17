'use client'
// Core
import React, {useEffect, useState} from 'react'

// Styles
import * as S from './styles'

// View
import {Header} from '../components/header'
import { FirstSection } from '../components/firstSection'

export default function Home() {
    const [mounted, setMounted] = useState(false)
    useEffect(()=>setMounted(true),[])

  return (
    <S.Wrap style={{visibility: mounted ? 'visible' : 'hidden'}}>
      <Header />
      <FirstSection/>
    </S.Wrap>
  )
}

