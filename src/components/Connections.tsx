import { FC } from 'react'
import DeckGL, { ArcLayer, Position, RGBAColor } from 'deck.gl';
import arcs from '../data/arcs.json';
import {ConnectionProps} from '../global'

const Connections:FC<ConnectionProps> = ({viewport}) => {
  return (
    <DeckGL
      initialViewState={viewport}
      layers={[
        new ArcLayer({
          id: 'flight-arcs',
          data: arcs,
          getSourcePosition: (d:any):Position => d.source,
          getTargetPosition: (d:any):Position => d.target,
          getSourceColor: ():RGBAColor => [255, 0, 0, 120],
          getTargetColor: ():RGBAColor => [0, 255, 0, 120],
          getStrokeWidth: ():number => 2,
        }),
      ]}
    />
  );
}

export default Connections;