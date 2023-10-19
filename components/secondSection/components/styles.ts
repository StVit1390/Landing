// Core
import React from "react";

// MUI
import { styled } from '@mui/system'

// Theme
import { palette } from '../../../theme/theme'

interface CardProps {
    justify: boolean
}

export const Card = styled('div') <CardProps>`
    display: flex;
    width: 100%;
    border-radius: 10px;
    padding: 20px;
    background-color: ${palette.palette.background.default};
    flex-direction: ${({ justify }) =>  justify ? 'row-reverse' : 'row' };
`

export const ImgWrap = styled('div')`
    width: 35%;
    background-color: ${palette.palette.common.white};
    padding: 20px;
    border-radius: 10px;
`

export const Img = styled('img')`
    width: 100%;
    margin-bottom: 20px;
`

export const ImgFooter = styled('div')`
    display: flex;
    width: 100%;
    padding-top: 20px;
    justify-content: space-between;
    align-items: center;
`

interface ContentProps {
    waterMark: string;
    justify: boolean; 
}

export const Content = styled('div') <ContentProps>`
    width: 65%;
    padding: 20px 100px;
    display: flex;
    align-items: center;
    position: relative;
    &::before {
        content: url(http://localhost:1337${props => props.waterMark});
        position: absolute;
        bottom: 5%;
        right: ${({ justify }) => justify ? '70%' : '5%' };
    }

`

export const TypographyWrap = styled('div')`
    display: flex;
    position: relative;
    padding: 20px 0;
    align-items: center;
    
    &::before {
        content: '';
        height: 100%;
        width: 6px;
        border-radius: 10px;
        background: ${({theme})=>theme.palette.primary.main};
        position: absolute;
        left: 0;
    }
`