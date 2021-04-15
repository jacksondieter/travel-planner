import { ReactElement } from 'react'
import DeckGL, { ArcLayer, TileLayer, BitmapLayer, Position, RGBAColor } from 'deck.gl';
import {useStore} from '../store'
import { MapWrapper, useViewPort } from './MapWapper';

function Map():ReactElement {
  const {viewport} = useViewPort()  
  const {data, selectedData} = useStore()

  const arcLayers = new ArcLayer({
    id: 'flight-arcs',
    data:data,
    getSourcePosition: (d:any):Position => d.source,
    getTargetPosition: (d:any):Position => d.target,
    getSourceColor: ():RGBAColor => [0, 255, 0, 120],
    getTargetColor: ():RGBAColor => [255, 0, 0, 120],
    getWidth:(d:any):number => (selectedData === null)?2:(selectedData === d.id)?10:0,
    updateTriggers:{
      getWidth:selectedData
    },
  })

  const tileLayers = new TileLayer({
    id: 'TileLayer',
    data: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',

    /* props from TileLayer class */
  
    // extent: null,
    // getTileData: null,
    // maxCacheByteSize: null,
    // maxCacheSize: null,
    // maxRequests: 6,
    maxZoom: 19,
    minZoom: 0,
    // onTileError: null,
    // onTileLoad: null,
    // onTileUnload: null,
    // onViewportLoad: null,
    // refinementStrategy: 'best-available',
    renderSubLayers: (props):any => {
      const {
        bbox: {west, south, east, north}
      } = props.tile;

      return new BitmapLayer(props, {
        data: undefined,
        image: props.data,
        bounds: [west, south, east, north]
      });
    },
    // tileSize: 512,
    // zRange: null,
    
    /* props inherited from Layer class */
    
    // autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
    // opacity: 1,
    pickable: true,
    // visible: true,
    // wrapLongitude: false,
  });
  
  return (
    <MapWrapper>
      <DeckGL
        initialViewState={viewport}
        layers={[tileLayers,arcLayers]}
        // mapStyle={'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'}
        controller
      />
    </MapWrapper>
    
    
    
    
  );
}

export default Map;