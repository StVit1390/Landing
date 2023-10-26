// Core
import React, { FC, useState, useEffect } from "react";

// Tools
import axios from "axios";

// Styles
import * as S from './styles'
import { Button, Typography } from "@mui/material";

// View
import { AccountField } from './components/index';

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
                    <Typography variant="h1" color={'white'}>{data && data.attributes.tittle}</Typography>
                    <Typography variant="h5" color={'white'}>{data && data.attributes.description}</Typography>
                    <Button variant="outlined">Donate</Button>
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
