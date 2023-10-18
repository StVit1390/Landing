// MUI
import { styled } from '@mui/system'

// Theme
import {theme} from '../../theme/theme'

export const SecondSectionWrap = styled('section')`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 15% ;
    background-color: ${theme.palette.common.white};
`

export const Cards = styled('div')`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;