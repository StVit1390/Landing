// Core
import React, { FC, useState, useEffect } from "react";

// Tools
import axios from "axios";

// Styles
import * as S from './styles'

// MUI
import { Typography } from "@mui/material";

export const SixthSection:FC = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/partners?populate=*`).then((res: any) => {
            setData(res.data.data);
        })
    }, [])


    return (
        <S.SectionWrap id="sixthSection">
            <Typography variant="h2">Our partners</Typography>
            <S.PartnersWrap>
                {
                    data && data.map((el: any) => {
                        return <S.PartnerIcon key={el.id} src={`http://localhost:1337${el.attributes.icon.data.attributes.url}`}></S.PartnerIcon>
                    })
                }
            </S.PartnersWrap>
        </S.SectionWrap>
    )
}