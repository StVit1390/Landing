// MUI
import { styled } from '@mui/system'


export const SectionWrap = styled('section')`
    padding: 0 15%;
    background: ${({theme})=>theme.palette.background.default};
    display: flex;
    flex-direction: column;
    align-items: center;
    & h2{
        margin: 100px 0 30px 0;
    }
`

export const PartnerIcon = styled('img')`
    width: calc(20% - 10px);
    padding: 50px;
    margin: 5px;
`

export const PartnersWrap = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
