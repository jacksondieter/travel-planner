import { FC } from 'react'
import DeckGL, { ArcLayer, Position, RGBAColor } from 'deck.gl';
import {useStore} from '../store'
import {ConnectionProps} from '../global'

const Connections:FC<ConnectionProps> = ({viewport}) => {
  const {data, selectedData} = useStore()
  const layers = new ArcLayer({
    id: 'flight-arcs',
    data:data,
    getSourcePosition: (d:any):Position => d.source,
    getTargetPosition: (d:any):Position => d.target,
    getSourceColor: ():RGBAColor => [0, 255, 0, 120],
    getTargetColor: ():RGBAColor => [255, 0, 0, 120],
    getWidth:(d:any):number => (selectedData === null)?3:(selectedData === d.id)?10:0,
    updateTriggers:{
      getWidth:selectedData
    },
  })

  return (
    <DeckGL
      initialViewState={viewport}
      layers={[layers]}
    />
  );
}

export default Connections;