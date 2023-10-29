// Core
import React, {FC, useContext, useEffect,useState} from 'react';

// Styles 
import * as S from './styles'

// View
import { Lang } from './components/lang';

// Tools
import axios from 'axios';

// MUI
import { Button } from '@mui/material';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

// Context
import { LocalContext } from '../../app/page';

export const Header:FC = () => {

    const [data, setData] = useState({
        logo: '',
        items: [{id: null, attributes:{link:'', item:'sample'}}]
    })

    const {local} = useContext(LocalContext)
    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/headers/?populate=*&locale=${local}`).then((res:any) => {
            setData({
                logo: res.data.data[0].attributes.logo.data.attributes.url,
                items: res.data.data[0].attributes.menu_items.data,
            })
        })
    },[local]) // Header reqest



    
    
    return (
        <S.Header id='header'>
            <S.LogoWrap>
                <S.Logo src={`http://localhost:1337${data && data.logo && data.logo}`}></S.Logo>
            </S.LogoWrap>
            <S.NavMenu>
                {data && data.items && data.items.map((item)=>{
                    return <S.Btn key={item.id} href={`#${item.attributes.link}`}>{item.attributes.item}</S.Btn>
                })}
            </S.NavMenu>
            <S.SupportUsWrap>
                <Lang />
                <S.SupportUs href='#eighthSection' variant='contained' color='primary' size="large" endIcon={<ChatOutlinedIcon />}> Support us</S.SupportUs>
            </S.SupportUsWrap>
        </S.Header>
    )
}

