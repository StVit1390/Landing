// Core
import styled from 'styled-components'

import {palette} from '../../theme/theme'

interface SectionWrapProps {
    img: string; // Определите тип img, например, string
}

export const SectionWrap = styled.section<SectionWrapProps>`
    display: flex;
    background: rgb(231,231,231);
    background: linear-gradient(45deg, rgba(231,231,231,0.9051995798319328) 50%, rgba(246,246,246,1) 100%);
    height: 673px;
    background-image: url(${({img})=>img});
    background-repeat: no-repeat;
    padding: 0 15%;
`

export const LeftSide = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    
`

export const BannerWrap = styled.div`
    display: flex;
    padding: 20px;
    border-radius: 10px;
    background: ${palette.palette.common.white};
    align-items: center;
    justify-content: center;
`

export const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px dashed ${palette.palette.primary.main};
    border-radius: 10px;
    padding: 28px;
    & > *:not(:last-child) {
    margin-bottom: 20px;
    }
`

export const Tittle = styled.h2`
    font-size: 64px;
    color: #2E2E2E;
    line-height: 110%;
    font-weight: 700;
`
export const Content = styled.p`
    font-size: 24px;
    color: #2E2E2E;
    line-height: 140%;
    font-weight: 500;
    margin-top: 20px;
`

export const Help = styled.a`
    cursor: pointer;
    text-decoration: none;
    background-color: ${palette.palette.primary.main};
    padding: 22px 50px;
    width: fit-content;
    color: ${palette.palette.common.white};
    border-radius: 10px;
    margin-top: 30px;
`


export const RightSide = styled.div`
    display: flex;
    position: relative;
`

interface coordinates {
    x?: string,
    y?: string,
}



export const IconWrap = styled.div<coordinates>`
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

export const Icon = styled.img`
    width: 32px;
    height: 32px;
`

