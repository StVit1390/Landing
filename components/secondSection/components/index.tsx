// Core
import React, { FC } from "react";

// Styles 
import * as S from './styles'

// MUI
import { Typography} from "@mui/material";

// Elements
import {Btn} from '../../../elements/button'

interface CardProps {
    id: number,
    quote: string,
    description: string,
    goal: number,
    img: string,
    waterMark: string,
    justify: boolean
}

export const Card:FC<CardProps> = ({id, quote, description, goal, img, waterMark, justify}) => {
    
    return (
        <S.Card justify={justify}>
            <S.ImgWrap>
                <S.Img src={`http://localhost:1337${img}`}></S.Img>
                <Typography>{quote}</Typography>
                <S.ImgFooter>
                    <Typography variant="h6">Goal {goal}</Typography>
                    <Btn>Donate</Btn>
                </S.ImgFooter>
            </S.ImgWrap>
            <S.Content waterMark={waterMark} justify={justify}>
                <S.TypographyWrap>
                    <Typography variant="h6" sx={{paddingLeft: '40px'}}>
                        {description}
                    </Typography>
                </S.TypographyWrap>
            </S.Content>
        </S.Card>
    )
}