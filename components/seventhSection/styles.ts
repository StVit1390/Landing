// MUI
import { styled } from '@mui/system'

interface SectionWrapProps {
    bg: string
    icon: string
}

export const SectionWrap = styled('section')<SectionWrapProps>`
    padding: 95px 15%;
    overflow: hidden;
    background-image: url(http://localhost:1337${({bg})=>bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: space-between;
    position: relative;
        &::before {
            content: '';
            position: absolute;
            background-image: url(http://localhost:1337${({ icon }) => icon}) ;
            width: 450px;
            height: 450px;
            background-repeat: no-repeat;
            background-position: center;
            bottom: -208px;
            left: 60px;
        }
`

export const Contacts = styled('div')`  
    width: calc(33% - 20px);
     & h2{
        color: ${({ theme }) => theme.palette.common.white};
    }
     & h5 {
        color: ${({ theme }) => theme.palette.common.white};
        margin-left: 50px;
        font-weight: 600;
    }
     & > *:not(:last-child) {
    margin-bottom: 20px ;
    } 
`

export const PhoneWrap = styled('div')`
    position: relative ;
    display: flex;
    align-items: center;
    &:before {
        content: '';
        background: url('/call.svg');
        position: absolute;
        width: 24px;
        height: 24px;
        background-size: cover;
        background-repeat: no-repeat;

    }
`

export const EmailWrap = styled('div')`
    position: relative;
    display: flex;
    align-items: center;
    &:before {
        content: '';
        background: url('/mail.svg');
        position: absolute;
        width: 24px;
        height: 24px;
        background-size: cover;
        background-repeat: no-repeat;

    }
`

export const Map = styled('div')`  
    width: calc(33% - 20px);
`

export const MapDummy = styled('img')`

`

export const Accounts = styled('div')`  
    width: calc(33% - 20px);
`

export const BannerBanksWrap = styled('div')`
    background-color: ${({ theme }) => theme.palette.common.white};
    border-radius: 7px;
    padding: 30px;
`

export const Fields = styled('div')`
    margin-top: 20px;
     & > *:not(:last-child) {
    margin-bottom: 40px;
  }
`