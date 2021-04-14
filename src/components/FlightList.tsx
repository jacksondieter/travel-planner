import { FC, ReactElement } from 'react'
import styled from 'styled-components'
import {device} from '../config'
import { FlightProps } from '../global';
import { useStore } from '../store';

const FlightContainer = styled.section`
  flex: 0 0 100%;
  display:flex;
  background: ${({ theme }):string => theme.body};
  color: ${({ theme }):string => theme.text};
  @media only screen and ${device.sm}{
    flex: 0 0 50%;
  }
`
const Group = styled.ul`
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

const FlightGroup:FC<FlightProps> = (props) => {
  const {flights} = props
  return(
    <Group>
      {flights.map(({flyFrom,flyTo},ind)=>(
        <Row key={ind}>
          <Col>{`From: ${flyFrom}`}</Col>
          <Col>{`To: ${flyTo}`}</Col>
        </Row>
      ))}
    </Group>
    
  )
}

function FlightList():ReactElement {
  const {data} = useStore().state
  const selectedData = data.slice(0,9)
  return (
    <FlightContainer>
      <FlightGroup flights={selectedData}/>
    </FlightContainer>
  )
}

export default FlightList
