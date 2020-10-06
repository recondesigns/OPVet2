import React from 'react'
import styled from 'styled-components'

import backArrow from '../../assets/icons/backArrow.svg'

const BackContainer = styled.div`
    margin: 0px 0px 0px 16px;
    height: 24px;
    display: flex;
`

const ArrowContainer = styled.div`
    margin: 0px 8px 0px 0px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    & > img {
        width: 16px;
        height: 16px;
    }
`

const ExitText = styled.p`
    margin: 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: none;
    align-items: center;
    letter-spacing: 0.01em;
    color: #403926;
    @media (min-width: 768px) {
        display: flex;
    }
`

export default function Back() {
    return (
        <BackContainer>
            <ArrowContainer>
                <img src={backArrow} alt={'Go back to O.P. Veteran'} />
            </ArrowContainer>
            <ExitText>{'Exit'}</ExitText>
        </BackContainer>
    )
}
