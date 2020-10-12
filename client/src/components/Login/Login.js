import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from '../../providers/Store'
import { Input } from '../Input'
import { GoogleButton } from '../GoogleButton'
// import { FacebookButton } from '../FacebookButton'
// import { fakeUserDataBase } from '../../test-users'

const LoginContainer = styled.div`
    margin-top: 60px;
    box-sizing: border-box;
    width: 328px;
    /* height: 600px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 24px 48px 24px;
    background: #DAD3C1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    @media (min-width: 768px) {
        width: 624px;
        /* height: 720px; */
        padding: 48px 48px 48px 48px;
    }
`

const Heading = styled.h3`
    margin: 0px 0px 0px 0px;
    width: 100%;
    height: 64px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.015em;
    color: #403926;
    overflow: hidden;
`

const SubHeading = styled.h6`
    margin: 0px 0px 16px 0px;
    width: 100%;
    height: 72px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.015em;
    color: #403926;
    overflow: hidden;
`

const TermsContainer = styled.div`
    margin: 8px 0px 0px 0px;
    padding: 8px 16px 8px 16px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #DAD3C1;
    box-sizing: border-box;
    border-radius: 4px;
`

const TermsText = styled.p`
    margin: 0px 0px 0px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #545454;
`

const ContentWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    @media (min-width: 768px) {
        padding: 0px 120px 0px 120px;
    }
`

export default function Login() {
    const [, setAppState] = useContext(AppStateContext)
    const [userEmail, setUserEmail] = useState('n/a')
    let users = fakeUserDataBase
    let emailInput = ''

    function getEmail(e) {
        const { value } = e.target
        emailInput = value
    }

    function setEmail() {
        setUserEmail(emailInput)

        users.forEach((user) => {
            const { name, isAdmin, companyName, description } = user
            const { boothNumber, powered } = user.booth

            if (name.toLowerCase() === userEmail.toLocaleLowerCase()) {
                setAppState({
                    userLoggedIn: true,
                    currentUser: {
                        name: name,
                        isAdmin: isAdmin,
                        description: description,
                        companyName: companyName,
                        address: '',
                        suite: '',
                        city: '',
                        state: '',
                        zipcode: '',
                        booth: {
                            boothNumber: boothNumber,
                            powered: powered
                        }
                    }
                })
            }
        })
    }

    return (
        <LoginContainer>
            <Heading>{'Welome.'}</Heading>
            <SubHeading>{'Please sign in, or register an account with O.P. Veteran to start vendor registration.'}</SubHeading>
            <ContentWrapper>
                <Input onChange={getEmail} label={'Email'} warningStatus={false} warningMessage={''} />
                <Input label={'Password'} warningStatus={false} warningMessage={''} />
                <TermsContainer>
                    <TermsText>{'By creating and account, you accept our Terms and Conditions.'}</TermsText>
                </TermsContainer>
                <GoogleButton onClick={setEmail} />
                <FacebookButton />
            </ContentWrapper>
        </LoginContainer>
    )
}