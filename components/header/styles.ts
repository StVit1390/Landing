// MUI
import { styled } from '@mui/system'
import { Button } from '@mui/material'
// Theme
import { palette } from '../../theme/theme'


export const Header = styled('div')`
    display: flex;
    align-items: center;
    height: 125px;
    background: white;
    padding: 0 15%;
    justify-content: space-between;
    @media screen and (max-width: 1400px) {
        padding: 0 5%;
    }

    @media screen and (max-width: 1100px) {
        padding: 0 1%;
        height: 100px;
    }
`

export const LogoWrap = styled('div')`
    display: flex;
    position: relative;
    width: 230px;
    height: 120px;
    @media screen and (max-width: 1100px) {
        width: 115px;
        height: 60px;
    }
`


export const Logo  = styled('img')`
    position: absolute;
    top: 5px;
    background-color: ${palette.common.white};
    border: 10px solid ${palette.common.white};
    border-radius: 10px;
    @media screen and (max-width: 1100px) {
       top: 0;
    }
`

export const NavMenu = styled('div')`
    display: flex;
    align-items: center;
`

export const Btn = styled('a')`
    text-decoration: none;
    line-height: 18px;
    font-size: 1em;
    font-weight: 500;
    color: ${palette.common.black};
    position: relative;
    margin: 0 15px;
    cursor: pointer;
     @media screen and (max-width: 1100px) {
       font-size: 0.75em;
       margin: 0 5px;
    }

    &:hover {
        color: ${palette.primary.main};
        &:hover::after {
            content: '';
            width: 25px;
            height: 2px;
            background: ${palette.primary.main};
            position: absolute;
            bottom: -5px;
            left: 0;
            border-radius: 10px;
        }
    }
`

export const SupportUsWrap = styled('div')`
    display: flex;
    align-items: center;
`

export const SupportUs = styled(Button)`
     @media screen and (max-width: 1100px) {
       width: 150px;
    }
`

