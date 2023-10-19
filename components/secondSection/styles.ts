// MUI
import { styled } from '@mui/system'

export const SecondSectionWrap = styled('section')`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 15% ;
    background-color: ${props => props.theme.palette.common.white};
`

export const Cards = styled('div')`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;


