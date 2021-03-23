import React, { createContext, useState, useContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// export type Theme = React.CSSProperties;

// type Themes = {
//   dark: Theme;
//   light: Theme;
// };

// https://colorhunt.co/palette/252807
const darker = '#276678'
const dark = '#1687a7'
const light = '#d3e0ea'
const lighter = '#f6f5f5'

const size = {
  xs: '320px',
  sm: '769px',
  lg: '1200px',
}
export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`
}

export const GlobalStyles = createGlobalStyle`
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
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  main,
  header,
  footer{
    width:100%;
  }
`;

export const themes = {
  dark: {
    body: darker,
    text: lighter,
    primary:{
      body: dark,
      text: light,
    }
  },
  light: {
    body: lighter,
    text: dark,
    primary:{
      body: light,
      text: darker,
    }
  },
};

const ThemeContext = createContext();

export function StyleProvider({ children }) {
  const [theme, setTheme] = useState('light');
  function toggleTheme(){
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <ThemeProvider theme={themes[theme]}>
        <>
          <GlobalStyles />
          {children}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}


export function useTheme(){
  const context = useContext( ThemeContext )
  if(!context){
    throw new Error('useTheme must be used within a StyleProvider')
  }
  return context
}