import {ReactElement, useState} from 'react';
import ReactMapGL from 'react-map-gl';
import styled from 'styled-components'
import { useTheme } from '../theme/styleProvider'
import 'mapbox-gl/dist/mapbox-gl.css';
import {mapData, device} from '../config'
import Connections from './Connections'
import {MapStyle, viewportObj} from '../global'

const MapWapper = styled.section`
  display:none; 
  @media only screen and ${device.sm}{
    display: flex;
    flex: 0 0 50%;
  }
`

function Map():ReactElement {
  const {theme} = useTheme()
  const initialViewport: viewportObj = {
    latitude: mapData.latitude,
    longitude: mapData.longitude,
    zoom: mapData.zoom,
  }
  const [viewport, setViewport] = useState(initialViewport);
  // const url = window.location.origin;
  
  return (
    <MapWapper>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={(viewport:viewportObj):void => setViewport(viewport)}
        mapboxApiAccessToken={mapData.accessToken}
        mapStyle={mapData.mapStyle[theme as keyof MapStyle]}
        // mapboxApiUrl={`${url}/api`}
      >
        <Connections viewport={viewport}/>
      </ReactMapGL>
    </MapWapper>
  );
}

export default Map;