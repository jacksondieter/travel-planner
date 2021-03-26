import React from 'react'
import DeckGL, { ArcLayer } from 'deck.gl';
import arcs from '../data/arcs.json';
export default function Connections({viewport}) {
  return (
    <DeckGL
      initialViewState={viewport}
      layers={[
        new ArcLayer({
          id: 'flight-arcs',
          data: arcs,
          getSourcePosition: (d) => d.source,
          getTargetPosition: (d) => d.target,
          getSourceColor: () => [255, 0, 0, 120],
          getTargetColor: () => [0, 255, 0, 120],
          getStrokeWidth: () => 2,
        }),
      ]}
    />
  );
}
