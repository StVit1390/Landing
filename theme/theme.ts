// MUI
import { createTheme } from "@mui/material";

export const palette = {
    palette: {
        common: {
            black: '#000',
            white: '#fff',

        },
        background: {
            default: "#F6F6F6",
            paper: "#f1f1f1",
            customBackground: '#ebebeb'
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

    },
}

const mainTheme = createTheme({
    palette: {
        common: {
            black: palette.palette.common.black,
            white: palette.palette.common.white,
            
        },
        background: {
            default: palette.palette.background.default,
            paper: palette.palette.background.paper,
        },

        primary: {
            main: palette.palette.primary.main,
        },
        secondary:{
            main: palette.palette.secondary.main
        },
        text: {
            primary: palette.palette.text.primary,
        },
        
    },
    typography: {
        h1: {
            fontSize: '4.5rem',
            fontWeight: 600, 
        },
        h2: {
            fontSize: '3rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '2.25rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
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
            fontSize: '0.875rem',
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
                    color: palette.palette.common.white,
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
                    color: palette.palette.primary.main,
                    background: palette.palette.common.white,
                    border: 'none',
                }
            }
        },

    },
})

export default mainTheme