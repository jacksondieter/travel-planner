import { useState, FC } from 'react';
import styled from 'styled-components';
import { mapData, device } from '../config';
import { viewportObj, useViewPortProps, Props } from '../global';

const MapStyled = styled.section`
  display:none; 
  @media only screen and ${device.sm}{
    display: flex;
    flex: 0 0 50%;
  }
`;
export const MapWrapper:FC<Props> = ({children})=><MapStyled><div style={{ width: '50vw', position: 'relative' }}>{children}</div></MapStyled>

export const useViewPort = (): useViewPortProps => {
  const initialViewport: viewportObj = {
    latitude: mapData.latitude,
    longitude: mapData.longitude,
    zoom: mapData.zoom,
  };
  const [viewport, setViewport] = useState(initialViewport);
  return { viewport, setViewport };
};
