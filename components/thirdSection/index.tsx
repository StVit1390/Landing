// Core
import React, { FC, useState, useEffect } from "react";

// Tools
import axios from "axios";

// Styles
import * as S from './styles'
import { Button, Typography } from "@mui/material";

// View
import { AccountField } from './components/index';
import { DonateBtn } from './styles';

export const ThirdSection:FC = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/second-banners/?populate=*`).then((res: any) => {
            setData(res.data.data[0]);
        })
    }, [])

    return (
        <S.SectionWrap  bgImg={data && data.attributes.coverImage.data.attributes.url}>
            <S.BannerInfo>
                <S.BannerInfoWrap>
                    <S.Tittle variant="h1">{data && data.attributes.tittle}</S.Tittle>
                    <S.Description variant="h5">{data && data.attributes.description}</S.Description>
                    <S.DonateBtn variant="outlined">Donate</S.DonateBtn>
                </S.BannerInfoWrap>
            </S.BannerInfo>
            <S.BannerBanks>
                <S.BannerBanksWrap>
                    <Typography variant="h4">Bank details:</Typography>
                    <S.Fields>
                        {data && data.attributes.bank_accounts.data.map((el:any)=>{
                            return <AccountField key={el.id} name={el.attributes.name} acc={el.attributes.address}/>
                        })}
                    </S.Fields>
                </S.BannerBanksWrap>
            </S.BannerBanks>
        </S.SectionWrap>
    )
}
