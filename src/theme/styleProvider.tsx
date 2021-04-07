import { Fragment, createContext, useState, useContext, FC } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {color} from '../config'
import { Props, Themes, GlobalProps, Theme, ThemeContextProps} from '../global'


export const GlobalStyles = createGlobalStyle<GlobalProps>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {    
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;    
  }

  .app{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    transition: all 0.25s linear;
    background: ${({theme}):string => theme.body};
    color: ${({theme}):string => theme.text};
  }

  main,
  header,
  footer{
    width:100%;
  }
`;

export const themes:Themes = {
  dark: {
    body: color.darker,
    text: color.lighter,
    primary:{
      body: color.dark,
      text: color.light,
    }
  },
  light: {
    body: color.lighter,
    text: color.dark,
    primary:{
      body: color.light,
      text: color.darker,
    }
  },
};


const ThemeContext = createContext<ThemeContextProps>({theme:'light', toggleTheme:()=>{}});

export const StyleProvider:FC<Props> = ({ children })=> {
  const initialTheme:Theme = 'light'
  const [theme, setTheme] = useState(initialTheme);
  function toggleTheme():void{
    setTheme((prevTheme:Theme) => (prevTheme === 'light')? 'dark': 'light')
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProvider theme={themes[theme as keyof Themes]}>
        <Fragment>
          <GlobalStyles />
          {children}
        </Fragment>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}


export function useTheme():ThemeContextProps{
  const context = useContext( ThemeContext )
  if(!context){
    throw new Error('useTheme must be used within a StyleProvider')
  }
  return context
}