import React from 'react';
import FlightList from './components/FlightList';
import MapContainer from './components/MapContainer';
import { Container } from './components/ui';
import NavBarComponent from './NavBar';

function App() {
  return (
    <Container>
      <Container.Header>
        <NavBarComponent title={'Flights'}/>
      </Container.Header>
      <Container.Main>
        <FlightList/>
        <MapContainer/>
      </Container.Main>
      <Container.Footer>foot</Container.Footer>
    </Container>
  );
}



export default App;