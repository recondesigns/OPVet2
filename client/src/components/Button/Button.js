import React from 'react'
import styled from 'styled-components'

import { setButtonStyle } from './utils'

const StyledButton = styled.button`
  box-sizing: border-box;
  width: 216px;
  height: 40px;
  /* background: #F4B860; */
  background: ${props => props.background};
  /* background: ${props => props.background}; */
  /* border: ${props => props.border}; */
  /* border: 2px solid #F4B860; */
  border: ${props => props.border};
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  /* color: #403926; */
  color: ${props => props.color};
`

  export default function Button(props) {
      const { buttonText, buttonStyle } = props
      const{ color, background, border } = (setButtonStyle(buttonStyle))

      return (
          <StyledButton background={background} color={color} border={border}>{buttonText}</StyledButton>
      )
  }