// Core
import React, {FC, useState} from "react";

// Style
import * as S from './style'

export const Lang:FC = () => {

    const [lang, setLang] = useState('EN')
    const [isOpen, setIsOpen] = useState(false)
    const langArr = ['EN','PL','UA']

    console.log(
        "lang", lang,
        "isOpen", isOpen
    );
    

    return(
        <S.Lang onClick={()=> setIsOpen(true)}>
            {lang}
            {isOpen && <S.LangFoldWrap>
                {
                    langArr.map((el: string) => {
                        return (
                            <S.LangFold key={el}onMouseDown={() => {setIsOpen(!isOpen); setLang(el) }}>{el}</S.LangFold>
                        )
                    })
                }
            </S.LangFoldWrap>}
        </S.Lang>
    )
}