// MUI
import { styled } from "@mui/system";

export const FourthSectionWrap = styled('section')`
    padding: 0 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > *:not(:last-child) {
    margin: 100px 0 40px 0 ;
    }
`

export const FourthSectionContent = styled('div')`
    display: flex;
    flex-direction: column;
    background: ${({theme})=> theme.palette.background.default};
    padding: 50px;
    & > *:not(:last-child) {
    margin-bottom: 100px ;
    }
`

export const FirstFloor = styled('div')`
    display: flex;
`

export const FirstFloorLeft = styled('div')`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > *:not(:last-child) {
    margin-bottom: 30px;
    }
`

export const FirstFloorRight = styled('div')`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > *:not(:last-child) {
    margin-top: 15px ;
    }
    
`
interface ImgProps {
    img:string
}

export const Img = styled('div') <ImgProps>`
    background-image: url(${({img})=>img});
    height: 450px;
    width: 100%;
    max-width: 310px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 11px;
`

export const ImgBottom = styled('img')`
    width: 100%;
`

export const SecondFloor = styled('div')`
    display: flex;
    justify-content: space-between;
`

export const SecondFloorLeft = styled('div')`
    width: calc(50% - 10px);
     & > *:not(:last-child) {
    margin-bottom: 20px ;
    }
`

export const oSecondFloorRight = styled('div')`
    width: calc(50% - 10px);
`