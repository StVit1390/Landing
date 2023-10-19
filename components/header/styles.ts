// Core
import styled from 'styled-components'

// Theme
import { palette } from '../../theme/theme'

export const Header = styled.div`
    display: flex;
    height: 125px;
    background: ${palette.palette.common.white};
    padding: 0 15%;
    justify-content: space-between;
`

export const LogoWrap = styled.div`
    display: flex;
    position: relative;
    width: 230px;
    height: 120px;
`


export const Logo  = styled.img`
    position: absolute;
    top: 15px;
    border: 10px solid ${palette.palette.common.white};
    border-radius: 10px;
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
`

export const Btn = styled.a`
    text-decoration: none;
    line-height: 18px;
    font-size: 1em;
    
    font-weight: 500;
    color: ${palette.palette.common.black};
    position: relative;
    margin: 0 15px;
    cursor: pointer;

    &:hover {
        color: ${palette.palette.primary.main};
        &:hover::after {
            content: '';
            width: 25px;
            height: 2px;
            background: ${palette.palette.primary.main};
            position: absolute;
            bottom: -5px;
            left: 0;
            border-radius: 10px;
        }
    }
`

export const ContactUsWrap = styled.div`
    display: flex;
    align-items: center;
`

export const ContactUs = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: ${palette.palette.common.white};
    width: 207px;
    height: 63px;
    background-color: ${palette.palette.primary.main};
    background-image: url('/chat.png');
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 85%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    padding-left: 25px;
    border-radius: 10px;
`

