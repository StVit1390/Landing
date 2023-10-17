// Core
import type { AppProps } from 'next/app'
import React from 'react'

// MUI
import { CssBaseline, ThemeProvider } from '@mui/material'

// Theme
import {theme} from './theme/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}