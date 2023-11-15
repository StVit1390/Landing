// Core
import React, { FC, useEffect, useState, useContext } from "react";

// Tools
import axios from "axios";

// Locale
import { LocalContext } from '../../app/page';

// Styles
import * as S from './styles'

// MUI
import { Button } from "@mui/material";


export const FirstSection:FC = () => {
    const [data, setData] = useState({
        bgImg:'',
        img: '',
        title: '',
        description: '',
        btnName: '',
    })

    const { local } = useContext(LocalContext)

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/main-banners/?populate=*&locale=${local}`).then((res: any) => {
            setData({
                bgImg: `http://localhost:1337${res.data.data[0].attributes.bgImg.data.attributes.url}`, 
                img: `http://localhost:1337${res.data.data[0].attributes.img.data.attributes.url}`,
                title: res.data.data[0].attributes.tittle,
                description: res.data.data[0].attributes.description,
                btnName: res.data.data[0].attributes.btnName,
            })
        })
    }, [local])


    return (
        <S.SectionWrap bgImg={data.bgImg} img={data.img}>
            <S.LeftSide>
                <S.BannerWrap>
                    <S.BannerContent>
                        <S.Tittle variant="h1">{data.title}</S.Tittle>
                        <S.Content variant="h4">{data.description}</S.Content>
                        <S.Btn variant="contained" color="primary" size="large">{data.btnName}</S.Btn>
                    </S.BannerContent>
                </S.BannerWrap>
            </S.LeftSide>
        </S.SectionWrap>
    )
}