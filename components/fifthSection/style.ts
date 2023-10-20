// MUI
import { styled } from '@mui/system'

export const SectionWrap = styled('section')`
    padding: 0 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h2{
        margin: 50px 0 20px 0;
    }

    & h5 {
        margin-bottom: 15px;
    }
`

export const Cards = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`