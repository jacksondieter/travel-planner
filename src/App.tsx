import {ReactElement} from 'react';
import FlightList from './components/FlightList';
// import Map from './components/MapContainer';
import Map from './components/MapBoxContainer'
import { Container } from './components/atom';
import NavBarComponent from './components/NavBar';

function App():ReactElement {
  return (
    <Container>
      <Container.Header>
        <NavBarComponent title={'Flights'}/>
      </Container.Header>
      <Container.Main>
        <FlightList/>
        <Map/>
      </Container.Main>
      <Container.Footer>foot</Container.Footer>
    </Container>
  );
}



export default App;