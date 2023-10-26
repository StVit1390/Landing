// Core
import React, {FC, useState} from "react";

// Style
import * as S from './style'

// MUI
import { FormControl, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const Lang:FC = () => {

    const [lang, setLang] = useState('EN')
   
    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value);
    };

    return(
    
        <S.CustomFormControl >
            <S.CustomSelect
            sx={{borderRadius: '7px', outline: 'none'}}
            value={lang}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="EN">EN</MenuItem>
                <MenuItem value="PL">PL</MenuItem>
                <MenuItem value="UA">UA</MenuItem>
            </S.CustomSelect>
        </S.CustomFormControl>
        
    )
}