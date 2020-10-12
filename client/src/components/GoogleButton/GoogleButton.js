import React from 'react'
import styled from 'styled-components'
// import googleDark from '../../assets/images/google-dark-default.svg'

const GoogleButtonContainer = styled.button`
    margin: 32px 0px 0px 0px;
    width: 100%;
    padding: 0px 8px 0px 8px;
    height: 48px;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 2px;
    background: #4285F4;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.2);
`

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px dotted gray; */
`

const ButtonTextContainer = styled.div`
    width: 100%;
`

const ButtonText = styled.p`
    margin: 0px 24px 0px 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    /* border: 1px dotted blue; */
`

export default function GoogleButton(props) {
    const { onClick } = props

return (
        <GoogleButtonContainer onClick={onClick}>
            <IconContainer>
                <img src={googleDark} alt={'Create an account, or sign in using your Google account.'} />
            </IconContainer>
            <ButtonTextContainer>
                <ButtonText>Sign in with Google</ButtonText>
            </ButtonTextContainer>
        </GoogleButtonContainer>
    )
}