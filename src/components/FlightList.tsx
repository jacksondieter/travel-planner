import React from 'react'
import styled from 'styled-components'
import {device} from '../theme/styleProvider'

const FlightContainer = styled.section`
  flex: 0 0 100%;
  display:flex;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  @media only screen and ${device.sm}{
    flex: 0 0 50%;
  }
`

function FlightList():React.ReactElement {
  return (
    <FlightContainer>
      y
    </FlightContainer>
  )
}

export default FlightList
