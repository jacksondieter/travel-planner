import { useEffect, ReactElement } from 'react';
import FlightList from './components/FlightList';
// import Map from './components/MapLeafletContainer'
import Map from './components/MapdeckContainer'
// import Map from './components/MapBoxContainer'
import { Container } from './components/atom';
import NavBarComponent from './components/NavBar';
import arcs from './data/arcs.json';
import { useStore } from './store';

function App():ReactElement {
  const {loadData} = useStore()
  useEffect(() => {
    const payload = arcs.map((item,ind)=> ({...item,id:ind}))
    loadData(payload)
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