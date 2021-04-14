import {mapObj,Color, Size, Device} from '../global'

// https://colorhunt.co/palette/252807

export const color:Color = {
  darker:'#276678',
  dark:'#1687a7',
  light:'#d3e0ea',
  lighter:'#f6f5f5',
}

export const size:Size = {
  xs: '320px',
  sm: '769px',
  lg: '1200px',
}
export const device:Device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`
}

const accessToken:string = process.env.REACT_APP_API_KEY || ''

export const url:string = process.env.PUBLIC_URL

export const mapData:mapObj = {
  longitude:47.3836514,
  latitude:8.5482374,
  zoom:3,
  mapUrl:'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  mapAtr:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors.',
  mapUrl2:`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
  mapAtr2:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  mapStyle:{
    light:'mapbox://styles/jacksondieter/ckmnfm6g3371717qny156yw9w',
    dark:'mapbox://styles/jacksondieter/ckmnadrp80eqc17ode77mywq4',
  },
  previewStyle:`https://api.mapbox.com/styles/v1/jacksondieter/ckmnadrp80eqc17ode77mywq4.html?fresh=true&title=view&access_token=${accessToken}`,
  accessToken,
}
