import React from 'react'
import styled from 'styled-components'

const BoothContainer = styled.div`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgreen;
    border: 1px solid white;

    & > p {
        margin: 0px;
        font-size: 10px;
    }

    &:hover {
        color: red;
    }
`

function handleClick() {
    console.log('fired')
}

export default function Booth(props) {
    const { top, left, number } = props

    return (
        <BoothContainer top={top} left={left} onClick={handleClick}>
            <p>{number}</p>
        </BoothContainer>
    )
}