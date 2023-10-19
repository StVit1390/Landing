// Core
import React, { FC } from "react";

// Styles
import * as S from './styles'

// MUI
import { Typography } from "@mui/material";

// Tools
import copy from 'clipboard-copy';

interface AccountFielProps {
    name: string,
    acc: number
}

export const AccountField: FC<AccountFielProps> = ({name, acc}) => {
    const textToCopy = acc.toString();

    const handleCopyClick = () => {
        copy(textToCopy)
    };


    
    return (
        <S.Field>
            <Typography variant="body1">{name}</Typography>
            <Typography variant="h5">{textToCopy.replace(/(\d{4})(?=\d)/g, "$1 ")}</Typography>
            <S.Copy onClick={handleCopyClick}></S.Copy>
        </S.Field>
    )

}
