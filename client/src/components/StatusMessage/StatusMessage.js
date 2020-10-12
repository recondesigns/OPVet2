import React from 'react'
import styled from 'styled-components'
import StatusIcon from './StatusIcon'
import { setDisplayStatus } from './utils'

const StatusMessageContainer = styled.div`
    box-sizing: border-box;
    width: 344px;
    height: 40px;
    padding: 8px 16px 8px 16px;
    position: relative;
    display: flex;
    align-items: center;
    border: ${props => props.border};
    border-radius: 2px;
    background: #FFFFFF;
    box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);

    @media (min-width: 768px) {
        width: 504px;
        height: 56px;
    }
`

const MessageText = styled.p`
    margin: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: ${props => props.color};
`

export default function StatusMessage(props) {
    const { status, message } = props
    const { border, color } = setDisplayStatus(status)

    return (
        <StatusMessageContainer border={border}>
            <StatusIcon iconStatus={status} />
            <MessageText color={color}>{message}</MessageText>
        </StatusMessageContainer>
    )
}