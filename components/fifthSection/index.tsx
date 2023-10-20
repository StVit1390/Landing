// Core
import React, { FC, useState, useEffect } from "react";

// Tools
import axios from "axios";

// Styles
import * as S from './style'

// MUI
import { Typography } from "@mui/material";

// View
import { Card } from "../fifthSection/components/Card";

export const FifthSection:FC = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/work-ins?populate=cards&populate=cards.icon`).then((res: any) => {
            setData(res.data.data[0]);
        })
    }, [])

    console.log(data && data.attributes.cards.data);
    

    return (
        <S.SectionWrap>
            <Typography variant="h2">Work in company name means</Typography>
            <Typography variant="h5">{data && data.attributes.quote}</Typography>
            <Typography variant="h5">{data && data.attributes.quote2}</Typography>
            <S.Cards>
                {
                    data && data.attributes.cards.data.map((el:any)=>{
                        
                        return (
                            <Card 
                                key={el.id} 
                                tittle={el.attributes.tittle}
                                description={el.attributes.description}
                                icon={el.attributes.icon.data.attributes.url}
                            />
                        )
                    })  
                }
            </S.Cards>
        </S.SectionWrap>
    )
}