import { FC } from 'react'
import styled from 'styled-components'
import {Props, NavBarObjs, ContainerObjs} from '../../global'

const HeaderStl = styled.header`
  flex: 0 0 80px;
  width: 100%;
`

const MainStl = styled.main`
  flex:1 0 auto;
  display:flex;
  max-height: calc(100% - 100px);
`

const FooterStl = styled.footer`
  flex: 0 0 1.2rem;
  margin: .5rem;
  padding-left: .5rem;
`

const NavBarStl = styled.nav`
  height: 80px;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  position: sticky;
  top:0px;
  background: ${({ theme }):string => theme.primary.body};
  color: ${({ theme }):string => theme.primary.text};
`

const BrandStl = styled.a`
  font-family: 'Courier New', 'Courier', 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;
  font-size:1.8em;
  font-weight:600;
  flex:0 0 auto;
  margin-right:auto;
  margin-left:.5rem;
`

export const NavBar:NavBarObjs = ({children}) => (<NavBarStl>{children}</NavBarStl>)
const Brand:FC<Props> = ({children}) => (<BrandStl>{children}</BrandStl>)
NavBar.Brand = Brand

export const Container:ContainerObjs = ({children}) => (<div className='app'>{children}</div>)
const Header:FC<Props> = ({children}) => (<HeaderStl>{children}</HeaderStl>)
const Main:FC<Props> = ({children}) => (<MainStl>{children}</MainStl>)
const Footer:FC<Props> = ({children}) => (<FooterStl>{children}</FooterStl>)
Container.Header = Header
Container.Main = Main
Container.Footer = Footer