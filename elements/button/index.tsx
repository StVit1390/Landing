// Core
import React, { FC } from 'react'

// MUI
import { Button, makeStyles } from '@mui/material'

// Theme 
import { palette } from '../../theme/theme'

interface BtnProps {
    children: string
}



export const Btn:FC<BtnProps> = ({children}) => {

    return (
        <Button variant='contained' sx={{ background: palette.palette.primary.main, padding: '22px 53px', textTransform: 'none', }}>
            {children}
        </Button>
    )
}