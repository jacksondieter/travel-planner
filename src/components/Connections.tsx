import { FC } from 'react'
import DeckGL, { ArcLayer, Position, RGBAColor } from 'deck.gl';
import {useStore} from '../store'
import {ConnectionProps} from '../global'

const Connections:FC<ConnectionProps> = ({viewport}) => {
  const {data} = useStore().state
  const selectedData = data.slice(0,9)
  return (
    <DeckGL
      initialViewState={viewport}
      layers={[
        new ArcLayer({
          id: 'flight-arcs',
          data:selectedData,
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