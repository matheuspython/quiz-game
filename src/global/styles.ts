import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body, html{
    font-family: 'Roboto', sans-serif;
  }
  body{
    color: #EAEBED;
    background: #01A7C2;
  }

`