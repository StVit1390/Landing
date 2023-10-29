// MUI
import { styled } from '@mui/system'
import { Typography } from '@mui/material'

// Color
import {palette} from '../../theme/theme'
;

interface SectionWrapProps {
    img: string; // Определите тип img, например, string
}

export const SectionWrap = styled('section')<SectionWrapProps>`
    display: flex;
    background: rgb(231,231,231);
    height: 673px;
    background-image: url(${({img})=>img});
    background-repeat: no-repeat;
    background-position: center;
    padding: 0 15%;
    @media screen and (max-width: 1400px) {
        padding: 0 5%;
    }

    @media screen and (max-width: 1100px) {
        padding: 0 1%;
        display: flex;
        justify-content: center;
    }
`

export const LeftSide = styled('div')`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    
`

export const BannerWrap = styled('div')`
    display: flex;
    padding: 20px;
    border-radius: 10px;
    background: ${palette.common.white};
    align-items: center;
    justify-content: center;
`

export const BannerContent = styled('div')`
    display: flex;
    flex-direction: column;
    border: 1px dashed ${palette.primary.main};
    border-radius: 10px;
    padding: 28px;
    & > *:not(:last-child) {
    margin-bottom: 20px;
    }
`

export const Tittle = styled(Typography)`
    color: ${({theme})=> theme.palette.text.alternate};
    line-height: 110%;
    font-weight: 700;
    @media screen and (max-width: 700px) {
        font-size: 50px;
    }
`
export const Content = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.alternate};
    line-height: 140%;
    font-weight: 500;
    margin-top: 20px;
     @media screen and (max-width: 700px) {
        font-size: 1.2rem;
    }
`

export const Help = styled('a')`
    cursor: pointer;
    text-decoration: none;
    background-color: ${palette.primary.main};
    padding: 22px 50px;
    width: fit-content;
    color: ${palette.common.white};
    border-radius: 10px;
    margin-top: 30px;
`


export const RightSide = styled('div')`
    display: flex;
    position: relative;
`

interface coordinates {
    x?: string,
    y?: string,
}



export const IconWrap = styled('div')<coordinates>`
    width: 79px;
    height: 79px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    position: absolute;
    top: ${({coordinates}) => coordinates.y||0};
    left: ${({coordinates}) => coordinates.x||0};
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.2);
`

export const Icon = styled('img')`
    width: 32px;
    height: 32px;
`

