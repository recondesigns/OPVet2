import React from 'react'
import styled from 'styled-components'
import defaultIcon from '../../assets/icons/status-default-icon.svg'
import warningIcon from '../../assets/icons/status-warning-icon.svg'
import errorIcon from '../../assets/icons/status-error-icon.svg'

const IconContainer = styled.div`
    margin: 0px 8px 0px 0px;
    max-width: 24px;
    max-height: 24px;
`

export default function StatusIcon(props) {
    const { iconStatus } = props

    function setIcon(status) {
        if (status === 'active') {
            return <img src={defaultIcon} alt={`Default icon.`} />
        } else if (status === 'warning') {
            return <img src={warningIcon} alt={`Warning icon.`} />
        } else if (status === 'error') {
            return <img src={errorIcon} alt={`Error icon.`} />
        }
    }

    let icon = setIcon(iconStatus)

return (
        <IconContainer>
            {icon}
        </IconContainer>
    )
}