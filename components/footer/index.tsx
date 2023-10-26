// Core
import React, { FC, useState, useEffect } from "react";

// Tools
import axios from "axios";

// Styles
import * as S from './styles'

// MUI
import { Typography } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material//ExpandLess';


export const Footer:FC = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/footers?populate=*`).then((res: any) => {
            setData(res.data.data[0].attributes);
        })
    }, [])

    console.log(data);
    

    return (
        <S.SectionWrap bgImg={data && data.background.data.attributes.url}>
            <S.Logo src={`http://localhost:1337${data && data.logo.data.attributes.url}`}></S.Logo>
            <S.Nav>
                <S.Btn href="#secondSection">
                    <Typography variant="h5">Our projects</Typography>
                </S.Btn>
                <S.Btn href="#fourthSection">
                    <Typography variant="h5">About us</Typography>
                </S.Btn>
                <S.Btn href="#sixthSection">
                    <Typography variant="h5">Partners</Typography>
                </S.Btn>
                <S.Btn href="#seventhSection">
                    <Typography variant="h5">Contact</Typography>
                </S.Btn>
            </S.Nav>
            <S.Contacts>
                <Typography variant="h5">Contacts:</Typography>
                {data && data.phones.data.map((el:any)=>{
                    return(
                        <S.Contact key={el.id}>
                            <Typography variant="h5">{el.attributes.phone.toString().replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4")}</Typography>
                        </S.Contact>
                    )
                })}
                <S.Email>
                    <Typography variant="h5">{data && data.email}</Typography>
                </S.Email>
            </S.Contacts>
            <S.SocialMedia>
                <Typography variant="h5">Social Media:</Typography>
                <S.Links>
                    <S.Link href="#">
                        <S.SocialIcon src="/fb.svg"/>
                        <Typography variant="h5">Foundation.new</Typography>
                    </S.Link>
                    <S.Link href="#">
                        <S.SocialIcon src="/tw.svg" />
                        <Typography variant="h5">Foundation.new</Typography>
                    </S.Link>
                    <S.Link href="#">
                        <S.SocialIcon src="/inst.svg" />
                        <Typography variant="h5">Foundation.new</Typography>
                    </S.Link>
                </S.Links>
            </S.SocialMedia>
            <S.UpBtn
                href="#header"
                variant="outlined"
                size="small"
                endIcon={<ExpandLessIcon />}
               ></S.UpBtn>
            
        </S.SectionWrap>
    )
}