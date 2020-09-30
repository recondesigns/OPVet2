import React from 'react'
import styled from 'styled-components'
import { Canvas } from './components/Canvas'

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid darkgreen;
`

export default function App() {
    return (
        <AppContainer>
            <Canvas />
        </AppContainer>
    )
}