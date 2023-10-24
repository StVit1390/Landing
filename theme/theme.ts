// MUI
import { createTheme } from "@mui/material";

export const palette = {
        common: {
            black: '#000',
            white: '#fff',

        },
        background: {
            default: '#F6F6F6',
            paper: '#F1F1F1',
            main: '#EBEBEB',
            alternate: '#E2E2E2',
        },

        primary: {
            main: '#10AFAB',
        },
        secondary: {
            main: '#fff'
        },
        text: {
            primary: '#000',
        },
}

const mainTheme = createTheme({
    palette: {
        common: {
            black: palette.common.black,
            white: palette.common.white,
            
        },
        background: {
            default: palette.background.default,
            paper: palette.background.paper,
            main: palette.background.main,
            alternate: palette.background.alternate,
        },

        primary: {
            main: palette.primary.main,
        },
        secondary:{
            main: palette.secondary.main
        },
        text: {
            primary: palette.text.primary,
        },
        
    },
    typography: {
        h1: {
            fontSize: '4.5rem',
            fontWeight: 600, 
        },
        h2: {
            fontSize: '3rem',
            fontWeight: 600,
        },
        h3: {
            fontSize: '2.25rem',
            fontWeight: 600,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 600,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 500,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
        },
        body2: {
            fontSize: '0.875rem',
        },
        subtitle1: {
            fontSize: '1rem',
        },
        subtitle2: {
            fontSize: '0.75rem',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {

            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: palette.common.white,
                    height: '63px',
                    width: '162px',
                    borderRadius: '7px',
                    justifyContent: 'space-around',
                    textTransform: 'none'
                },
                sizeLarge: {
                    width: '207px',
                },
                outlined: {
                    color: palette.primary.main,
                    background: palette.common.white,
                    '&:hover': {
                        background: palette.common.white
                    }
                    // border: 'none',
                }
            }
        },

    },
})

export default mainTheme