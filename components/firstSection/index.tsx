// Core
import React, {FC} from "react";

// Styles
import * as S from './styles'


export const FirstSection:FC = () => {
    return (
        <S.SectionWrap>
            <S.LeftSide>
                <S.BannerWrap>
                    <S.BannerContent>
                        <S.Tittle>Medical Aid Fund</S.Tittle>
                        <S.Content>Our mission is to help those who help us</S.Content>
                        <S.Help>I want to help</S.Help>
                    </S.BannerContent>
                </S.BannerWrap>
            </S.LeftSide>
            <S.RightSide>
                <S.IconWrap coordinates={{ x: '25px', y: '500px', }}>
                    <S.Icon src="/24hours.svg"></S.Icon>
                </S.IconWrap>
                <S.IconWrap coordinates={{ x: '120px', y: '220px', }}>
                    <S.Icon src="/cardiogram.svg"></S.Icon>
                </S.IconWrap>
                <S.IconWrap coordinates={{ x: '450px', y: '300px', }}>
                    <S.Icon src="/aid-kit.svg"></S.Icon>
                </S.IconWrap>
            </S.RightSide>
        </S.SectionWrap>
    )
}