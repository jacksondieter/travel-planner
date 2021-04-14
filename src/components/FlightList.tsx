import {ReactElement} from 'react'
import styled from 'styled-components'
import {device} from '../config'
import arcs from '../data/arcs.json';

const FlightContainer = styled.section`
  flex: 0 0 100%;
  display:flex;
  background: ${({ theme }):string => theme.body};
  color: ${({ theme }):string => theme.text};
  @media only screen and ${device.sm}{
    flex: 0 0 50%;
  }
`
const FlightGroup = styled.ul`
  list-style: none;
  heigth: 100%;
  width: 100%;
  padding: 0;
  @keyframes color-rotate {
    from{ filter: hue-rotate(0deg);}
    to{filter: hue-rotate(360deg);}
  }
  &>li:hover{
    cursor:auto;
  }
  > :nth-child(even) {
    background: ${({ theme }):string => theme.primary.body};
    color: ${({ theme }):string => theme.primary.text};
    clip-path: polygon(100% 100%, 98% 50%, 100% 0%, 0% 0%, 0% 100%);
    &:hover{
      animation: color-rotate 1s;
      animation-iteration-count: infinite;
      animation-direction:alternate;
    }
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


function FlightList():ReactElement {
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
