import React from 'react'
import styled from 'styled-components'
import {device} from '../theme/styleProvider'

const MapWapper = styled.section`
  display:none; 
  @media only screen and ${device.sm}{
    display: flex;
    flex: 0 0 50%;
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`

function MapContainer():React.ReactElement {
  return (
    <MapWapper>
      x
    </MapWapper>
  )
}

export default MapContainer
