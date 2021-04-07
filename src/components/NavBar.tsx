import { FC } from 'react'
import { useTheme } from '../theme/styleProvider';
import { NavBar } from './atom'
import { NavBarProps } from '../global'

const NavBarComponent: FC<NavBarProps> = ({ title }) => {
  const {toggleTheme} = useTheme()
  const handleToggle = ():void=>toggleTheme()
  return (
    <NavBar>
      <NavBar.Brand>{title}</NavBar.Brand>
      <div onClick={handleToggle}>switch</div>
    </NavBar>
  );
};

export default NavBarComponent;