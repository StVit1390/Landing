// Core
import React, {FC, useEffect,useState} from 'react';

// Styles 
import * as S from './styles'

// View
import { Lang } from './components/lang';

// Tools
import axios from 'axios';


export const Header:FC = () => {

    const [data, setData] = useState({
        logo: '',
        items: [{id: null, attributes:{link:'', item:'sample'}}]
    })

    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/headers/?populate=*`).then((res:any) => {
            setData({
                logo: res.data.data[0].attributes.logo.data.attributes.url,
                items: res.data.data[0].attributes.menu_items.data,
            })
        })
    },[]) // Header reqest
    
    return (
        <S.Header>
            <S.LogoWrap>
                <S.Logo src={`http://localhost:1337${data && data.logo && data.logo}`}></S.Logo>
            </S.LogoWrap>
            <S.NavMenu>
                {data && data.items && data.items.map((item)=>{
                    return <S.Btn key={item.id} href={`#${item.attributes.link}`}>{item.attributes.item}</S.Btn>
                })}
            </S.NavMenu>
            <S.ContactUsWrap>
                <Lang />
                <S.ContactUs>Support us</S.ContactUs>
            </S.ContactUsWrap>
        </S.Header>
    )
}

