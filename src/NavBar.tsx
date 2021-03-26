import React from 'react'
import { useTheme } from './theme/styleProvider';
import {NavBar} from './components/atom'

type NavBarProps = { title: string }
const NavBarComponent: React.FC<NavBarProps> = ({ title }) => {
  const [,toggleTheme] = useTheme()
  return (
    <NavBar>
      <NavBar.Brand>{title}</NavBar.Brand>
      <div onClick={()=>toggleTheme()}>switch</div>
    </NavBar>
  );
};

export default NavBarComponent;