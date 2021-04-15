import {ReactElement} from 'react';
import ReactMapGL from 'react-map-gl';
import { useTheme } from '../theme/styleProvider'
import 'mapbox-gl/dist/mapbox-gl.css';
import {mapData} from '../config'
import Connections from './Connections'
import {MapStyle , viewportObj} from '../global'
import { useViewPort, MapWrapper } from './MapWapper';

function Map():ReactElement {
  const {theme} = useTheme()
  const {viewport,setViewport} = useViewPort()
  
  return (
    <MapWrapper>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={(viewport:viewportObj):void => setViewport(viewport)}
        mapboxApiAccessToken={mapData.accessToken}
        mapStyle={mapData.mapStyle[theme as keyof MapStyle]}
        // mapStyle={'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json'}
        // mapStyle={BASEMAP.POSITRON_NOLABELS}
      >
        <Connections viewport={viewport}/>
      </ReactMapGL>
    </MapWrapper>
  );
}

export default Map;