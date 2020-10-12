import React from 'react'
import styled from 'styled-components'
import Booth from './Booth'
import { booths } from '../../dummyData'

const BoothSelectorContainer = styled.div`
    position: relative;
    width: 500px;
    height: 300px;
    /* display: flex;
    flex-wrap: wrap;
    grid-gap: 2px; */
    border: 1px dotted lightcoral;
`

export default function BoothSelector() {

    function setArr() {
        const tempArr = []
        let currentXCoord = 0
        let currentYCoord = -32
        const xIndex = 0
        const yIndex = 0


        for (let i = 0; i < 10; i++) {
            const { boothNumber } = booths[i]
            tempArr.push(booths[i])
        }

        let list = tempArr.map((booth, idx) => {
            const { boothNumber } = booth
            currentYCoord = currentYCoord + 32

            return <Booth key={idx} top={`${currentYCoord}px`} left={`${currentXCoord}px`} number={boothNumber} />
        })
        return list
    }

    let selector = setArr()
    
    return (
        <BoothSelectorContainer>
            {selector}
            {/* <Booth top={'0px'} left={'0px'} number={'A01'} /> */}
        </BoothSelectorContainer>
    )
}