import React from 'react'
import styled from 'styled-components'

const HelperTextContainer = styled.div`
    height: 24px;
    display: block;
`

const Text = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #EA7C7C;
`

export default function HelperText(props) {
    const { message } = props

return (
        <HelperTextContainer>
            <Text>{message}</Text>
        </HelperTextContainer>
    )
}