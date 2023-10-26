// Core
import React, { FC, useEffect, useState } from 'react'

// Tools
import axios from 'axios'

// MUI
import { Typography } from '@mui/material'

// View
import { Card } from './components'

// Styles
import * as S from './styles'

export const SecondSection:FC = () => {
   
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects/?populate=*`).then((res: any) => {
            setData(res.data.data);
        })
    }, [])


    return (
        <S.SecondSectionWrap id="secondSection">
            <Typography variant='h2' sx={{marginBottom:'20px'}}>Our projects</Typography>
            <S.Cards>
                {data && data.map((el: any, i:number) => {
                    if (i % 2 === 0){
                        return <Card
                            justify={false}
                            key={el.id}
                            id={el.id}
                            quote={el.attributes.quote}
                            description={el.attributes.description}
                            goal={el.attributes.goal}
                            img={el.attributes.img.data.attributes.url}
                            waterMark={el.attributes.waterMark.data.attributes.url} />
                    }else{
                        return <Card
                            justify={true}
                            key={el.id}
                            id={el.id}
                            quote={el.attributes.quote}
                            description={el.attributes.description}
                            goal={el.attributes.goal}
                            img={el.attributes.img.data.attributes.url}
                            waterMark={el.attributes.waterMark.data.attributes.url} />
                    }
                    
                })}
            </S.Cards>
        </S.SecondSectionWrap>
    )
}