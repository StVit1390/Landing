// Core
import styled from 'styled-components'

// Colors
import {palette} from '../../../../theme/theme'

export const Lang = styled.div`
    display: flex;
    height: 63px;
    width: 71px;
    background-color: #EBEBEB;
    align-items: center;
    border-radius: 10px;
    margin-right: 15px;
    background-image: url('/vector.png');
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 80%;
    padding-left: 15px;
    cursor: pointer;
    position: relative;
`

export const LangFoldWrap = styled.div`
    position: absolute;
    width: 71px;
    background-color: #EBEBEB;
    border-radius: 10px;
    left: 0;
`

export const LangFold = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    &:hover {
        background-color: antiquewhite;
    }
`
