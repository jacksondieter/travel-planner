import * as React from 'react';
import ReactMapGL from 'react-map-gl';
import styled from 'styled-components'
import { device, useTheme } from '../theme/styleProvider'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapData from '../config'
import Connections from './Connections'

const MapWapper = styled.section`
  display:none; 
  @media only screen and ${device.sm}{
    display: flex;
    flex: 0 0 50%;
  }
`

function Map():React.ReactElement {
  const [theme] = useTheme()
  const [viewport, setViewport] = React.useState({
    latitude: mapData.latitude,
    longitude: mapData.longitude,
    zoom: mapData.zoom,
  });

  return (
    <MapWapper>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={mapData.accessToken}
        mapStyle={mapData.mapStyle[theme]}
      >
        <Connections viewport={viewport}/>
      </ReactMapGL>
    </MapWapper>
  );
}

export default Map;