import React from 'react'
import styled from 'styled-components'
import {device} from '../theme/styleProvider'
import arcs from '../data/arcs.json';

const FlightContainer = styled.section`
  flex: 0 0 100%;
  display:flex;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  @media only screen and ${device.sm}{
    flex: 0 0 50%;
  }
`
const FlightGroup = styled.ul`
  list-style: none;
  heigth: 100%;
  width: 100%;
  padding: 0;
  > :nth-child(even) {
    background: ${({ theme }) => theme.primary.body};
    color: ${({ theme }) => theme.primary.text};
  }
`
const Row = styled.li`
  margin:.5rem;
  padding:.5rem;
  display: flex;
  justify-content: space-evenly;  
`
const Col = styled.div`
  flex: 1 0 auto;
`


function FlightList():React.ReactElement {
  return (
    <FlightContainer>
      <FlightGroup>
        {arcs.slice(0,9).map(({flyFrom,flyTo},ind)=>(
          <Row key={ind}>
            <Col>{`From: ${flyFrom}`}</Col>
            <Col>{`To: ${flyTo}`}</Col>
          </Row>
        ))}
      </FlightGroup>
    </FlightContainer>
  )
}

export default FlightList
