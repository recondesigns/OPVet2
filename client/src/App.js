  
import React from 'react'
import styled from 'styled-components'
// import { AppStateContext } from './providers/Store'

import { Header } from './components/Header'
import { StatusMessage } from './components/StatusMessage'

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid dodgerblue;
`

export default function App() {
    return (
        <AppContainer>
            <Header />
            <StatusMessage status={'active'} message={'Here is your new messages.'} />
        </AppContainer>
    )
}
