// MUI
import { styled } from '@mui/system'

export const Card = styled('div')`
    display: flex;
    flex-direction: column;
    width: calc(20% - 20px);
    justify-content: center;
    margin: 10px;
    padding: 40px;
    align-items: center;
    text-align: center;
    & > *:not(:last-child) {
    margin-bottom: 20px ;
    } 
`

export const Icon = styled('img')`

`

export const IconWrap = styled('div')`
    background: ${({theme})=> theme.palette.background.default};
    padding: 20px;
    border-radius: 11px;
    width: fit-content;
`