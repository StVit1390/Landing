// MUI
import { createTheme } from "@mui/material";

// Fonts
import GilroyRegular from '../public/font/Gilroy-Regular.woff2';
import GilroyMedium from '../public/font/Gilroy-Medium.woff2';
import GilroyBold from '../public/font/Gilroy-Bold.woff2';

export const theme = createTheme({
    palette: {
        common: {
            black: '#000',
            white: '#fff',
            background: '#F6F6F6',
        },
        primary: {
            main: '#10AFAB',
        },
        text: {
            primary: '#000',
        },
        
    },
    typography: {
        fontFamily: 'Gilroy, sans-serif',
        button: {
            textTransform: 'none'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                fonts:{
                    '@font-face': [
                        {
                            fontFamily: 'Gilroy',
                            src: `url(${GilroyRegular}) format('woff2')`,
                            fontWeight: 400,
                            fontStyle: 'normal',
                        },
                        {
                            fontFamily: 'Gilroy',
                            src: `url(${GilroyMedium}) format('woff2')`,
                            fontWeight: 500,
                            fontStyle: 'normal',
                        },
                        {
                            fontFamily: 'Gilroy',
                            src: `url(${GilroyBold}) format('woff2')`,
                            fontWeight: 700,
                            fontStyle: 'normal',
                        },
                    ],

                }
                   
            },
        },
    },
})
