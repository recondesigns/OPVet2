  
import React from 'react'
import styled from 'styled-components'
import { AppStateContext } from './providers/Store'

import { Header } from './components/Header'

const AppContainer = styled.div`
    border: 1px solid dodgerblue;
`

export default function App() {
    return (
        <AppContainer>
            <Header />
        </AppContainer>
    )
}
