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
            paper: "#fff",
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
            customBackground: ''
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
        fontFamily: 'Gilroy, sans-serif',
        button: {
            textTransform: 'none'
        }
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
                    height: "63px",
                    width: "162px",
                    borderRadius: '7px',
                },
                sizeLarge: {
                    width: "207px",
                },
                outlined: {
                    color: palette.palette.primary.main,
                }
            }
        },

    },
})

export default mainTheme