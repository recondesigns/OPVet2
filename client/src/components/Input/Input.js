import React from 'react'
import styled from 'styled-components'


const InputContainer = styled.div`
    width: 100%;
    /* border: 1px solid lightcoral; */
`

const LabelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid blue; */
`

const LabelText = styled.h3`
    margin: 0px 0px 0px 0px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.015em;
    color: #403926;
`

const StyledInput = styled.input`
    margin: 8px 0px 8px 0px;
    padding: 0px 16px 0px 16px;
    width: 100%;
    box-sizing: border-box;
    height: 32px;
    background: #F4F4F4;
    border-radius: 4px;
    border: none;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #545454;
`

export default function Input(props) {
    const { label, warningStatus, warningMessage, onChange } = props

    return (
        <InputContainer>
            <LabelContainer>
                <LabelText>{label}</LabelText>
                <WarningIcon warning={warningStatus} />
            </LabelContainer>
            <StyledInput onChange={onChange} />
            <HelperText message={warningMessage} />
        </InputContainer>
    )
}