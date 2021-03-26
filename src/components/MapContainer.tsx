import React from 'react'
import styled from 'styled-components'
import {device} from '../theme/styleProvider'
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer} from 'react-leaflet';
import mapData from '../config'

const MapWapper = styled(MapContainer)`
  display:none; 
  @media only screen and ${device.sm}{
    display: flex;
    flex: 0 0 50%;
  }
`

function Map():React.ReactElement {
  return (    
    <MapWapper center={[mapData.latitude,mapData.longitude]} zoom={mapData.zoom}>
      <TileLayer url={mapData.mapUrl} attribution={mapData.mapAtr} />
    </MapWapper>
  );
}

export default Map
