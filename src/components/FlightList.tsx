import { ReactElement } from 'react'
import styled from 'styled-components'
import {device} from '../config'
import { FlightObj } from '../global';
import { useStore } from '../store';

const FlightContainer = styled.section`
  flex: 0 0 100%;
  display:flex;
  overflow-y:scroll;
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

function FlightGroup():ReactElement {
  const {data,selectData} = useStore()
  const flights:FlightObj[] = data
  const handleSelect = (index:number):void =>selectData(index)

  return(
    <Group>
      {flights.map(({flyFrom,flyTo},index)=>(
        <Row key={index} onMouseEnter={():void=>handleSelect(index)}>
          <Col>{`From: ${flyFrom}`}</Col>
          <Col>{`To: ${flyTo}`}</Col>
        </Row>
      ))}
    </Group>
    
  )
}

function FlightList():ReactElement {
  const {deselectData} = useStore() 
  const handleDeselect = ():void =>deselectData()
  
  return (
    <FlightContainer  onMouseLeave={handleDeselect}>
      <FlightGroup/>
    </FlightContainer>
  )
}

export default FlightList
