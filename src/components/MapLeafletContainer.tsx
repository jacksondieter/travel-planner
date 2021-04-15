import {ReactElement} from 'react'
import styled from 'styled-components'
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer} from 'react-leaflet';
import { mapData, device } from '../config'

const MapWapper = styled(MapContainer)`
  display:none; 
  @media only screen and ${device.sm}{
    display: flex;
    flex: 0 0 50%;
  }
`

function Map():ReactElement {
  return (    
    <MapWapper center={[mapData.latitude,mapData.longitude]} zoom={mapData.zoom}>
      <TileLayer url={mapData.mapUrl} attribution={mapData.mapAtr} />
    </MapWapper>
  );
}

export default Map
