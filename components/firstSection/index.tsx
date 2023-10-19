// Core
import React, {FC, useEffect, useState} from "react";

// Tools
import axios from "axios";

// Styles
import * as S from './styles'
import { Button } from "@mui/material";


export const FirstSection:FC = () => {
    const [data, setData] = useState({
        coverImg:'',
        title: '',
        description: '',
        btnName: '',
    })

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/main-banners/?populate=*`).then((res: any) => {
            setData({
                coverImg: `http://localhost:1337${res.data.data[0].attributes.coverImage.data.attributes.url}`, 
                title: res.data.data[0].attributes.tittle,
                description: res.data.data[0].attributes.description,
                btnName: res.data.data[0].attributes.btnName,
            })
        })
    }, [])

    return (
        <S.SectionWrap img={data.coverImg}>
            <S.LeftSide>
                <S.BannerWrap>
                    <S.BannerContent>
                        <S.Tittle>{data.title}</S.Tittle>
                        <S.Content>{data.description}</S.Content>
                        <Button variant="contained" size="large">{data.btnName}</Button>
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