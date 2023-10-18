// Core
import React, { FC } from 'react'

// MUI
import { Button, makeStyles } from '@mui/material'

// Theme 
import { theme } from '../../theme/theme'

interface BtnProps {
    children: string
}



export const Btn:FC<BtnProps> = ({children}) => {



    return (
        <Button variant='contained' sx={{background: theme.palette.primary.main, padding: '22px 53px', textTransform: 'none', '&:hover': {background: theme.palette.primary.main}}}>
            {children}
        </Button>
    )
}