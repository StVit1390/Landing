// Core
import React, { FC, useState, useEffect } from "react";

//Tools
import axios from "axios";

// Styles
import * as S from './styles'
import { Typography } from "@mui/material";

export const FourthSection:FC = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/about-uses/?populate=*`).then((res: any) => {
            setData(res.data.data[0]);
        })
    }, [])

    console.log(data);
    

    return (
        <S.FourthSectionWrap>
            <Typography variant="h2">About us</Typography>
            <S.FourthSectionContent>
                <S.FirstFloor>
                    <S.FirstFloorLeft>
                        <Typography variant="h3">{data && data.attributes.tittle}</Typography>
                        <Typography variant="h5">{data && data.attributes.description}</Typography>
                        <Typography variant="h4">{data && data.attributes.quote}</Typography>
                    </S.FirstFloorLeft>
                    <S.FirstFloorRight>
                        <S.Img img={`http://localhost:1337${data && data.attributes.img.data.attributes.url}`} />
                        <Typography variant="h5">Jach Dye CEO</Typography>
                        <Typography>{data && data.attributes.imgDescription}</Typography>
                    </S.FirstFloorRight>
                </S.FirstFloor>
                <S.SecondFloor>
                    <S.SecondFloorLeft>
                        <Typography variant="h3">{data && data.attributes.subTittle}</Typography>
                        <Typography variant="h5">{data && data.attributes.subDescription}</Typography>
                    </S.SecondFloorLeft>
                    <S.oSecondFloorRight>
                        <S.ImgBottom src={`http://localhost:1337${data && data.attributes.subImg.data.attributes.url}`} />
                    </S.oSecondFloorRight>
                </S.SecondFloor>
            </S.FourthSectionContent>
        </S.FourthSectionWrap>
    )
}