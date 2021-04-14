import { ReactNode, FC, Dispatch } from 'react';

export type GlobalProps = {
  theme: StyleThemes;
}

export interface Style{
  body: string;
  text: string;
}

export interface StyleThemes extends Style{
  primary: Style;
}

export type Themes = {
  dark: StyleThemes;
  light: StyleThemes
}

export type Theme = 'dark' | 'light' | string;

export interface ThemeContextProps { 
  theme: Theme; 
  toggleTheme: () => void;
}

export type Props = {
  children: ReactNode;
}


export interface viewportObj{
  latitude: number;
  longitude: number;
  zoom: number;
}

export type NavBarProps = { title: string }

export interface NavBarObjs extends FC<Props>{
  Brand: FC<Props>;
}

export interface ContainerObjs extends FC<Props>{
  Header: FC<Props>;
  Main: FC<Props>;
  Footer: FC<Props>;
}

export type ConnectionProps = {
  viewport: viewportObj
}

export type Index = 'light' | 'dark';

export type MapStyle = {
  [k in Index]: string
}

export interface mapObj {
  longitude: number;
  latitude: number;
  zoom: number;
  mapUrl: string;
  mapAtr: string;
  mapUrl2: string;
  mapAtr2: string;
  mapStyle: MapStyle;
  previewStyle: string;
  accessToken: string;
}

export interface Color {
  darker: string;
  dark: string;
  light: string;
  lighter: string;
}

export interface Size {
  xs: string;
  sm: string;
  lg: string;
}

export interface Device {
  xs: string;
  sm: string;
  lg: string;
}

export interface State {
  data: any[];
  selectedData: number | null;
}

export interface Action {
  type: string;
  payload: any
}

export interface StoreContextProps {
  state: State;
  dispatch: Dispatch;
}

export interface FlightObj {
  flyFrom: string;
  flyTo: string;
  source: number[];
  target: number[];
}

export interface FlightProps {
  flights: FlightObj[]
}