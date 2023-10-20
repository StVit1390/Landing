// MUI
import { styled } from '@mui/system'

interface SectionWrapProps {
    bgImg: string
}

export const SectionWrap = styled('section')<SectionWrapProps>`
    display: flex;
    padding: 50px 15%;
    background-image: url(http://localhost:1337${({bgImg})=> bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const BannerInfo = styled('div')`
    width: 50%;
    display: flex;
`

export const BannerInfoWrap = styled('div')`
    display: flex;
    flex-direction: column;
    align-self: center;
    & > *:not(:last-child) {
    margin-bottom: 20px;
    }
`

export const BannerBanks = styled('div')`
    width: 50%;
`

export const BannerBanksWrap = styled('div')`
    background-color: ${({ theme }) => theme.palette.common.white};
    border-radius: 7px;
    padding: 30px;
    margin-left: 100px;
`

export const Fields = styled('div')`
    margin-top: 20px;
     & > *:not(:last-child) {
    margin-bottom: 40px;
  }
`