import React, { useEffect } from 'react'
import styled from 'styled-components'
import { fabric } from 'fabric'
import { booths } from './utils'
import './canvas.css'

const CanvasContainer = styled.div`
    border: 1px solid dodgerblue;
`

export default function Canvas() {

    useEffect(() => {
        var canvas = new fabric.Canvas('canvas')

        booths.forEach((booth) => {
            const {
                top,
                left,
                width,
                height,
                fill,
                stroke,
                strokeWidth,
                vendor
             } = booth

            let newBoothObj = new fabric.Rect({
                top: top,
                left: left,
                width: width,
                height: height,
                fill: fill,
                stroke: stroke,
                strokeWidth: strokeWidth,
                vendor: vendor,
                hasControls: false,
                lockMovementX: true,
                lockMovementY: true
            })

            canvas.add(newBoothObj)
        })

        canvas.on('mouse:down', function(options) {
            if (options.target) {
                const { vendor } = options.target
                // alert(vendor)
                console.log(vendor)
            }   
        })
    }, [])

    return (
        <CanvasContainer>
            <h1>Canvas Component</h1>
            <canvas id='canvas' width='300' height='300'></canvas>
        </CanvasContainer>
    )
}