import { useEffect, ReactElement } from 'react';
import FlightList from './components/FlightList';
// import Map from './components/MapContainer';
import Map from './components/MapBoxContainer'
import { Container } from './components/atom';
import NavBarComponent from './components/NavBar';
import arcs from './data/arcs.json';
import { useStore, actionTypes } from './store';

function App():ReactElement {
  const {dispatch} = useStore()
  useEffect(() => {
    dispatch({type:actionTypes.loadData,payload:arcs})
  }, [arcs])
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