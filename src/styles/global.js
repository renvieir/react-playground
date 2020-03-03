import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: linear-gradient(347.71deg, #5452F6 12.93%, rgba(84, 82, 246, 0) 241.45%);
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    font-size: 14px;
    font-family: Roboto, sans-serif;
  }
  button {
    cursor: pointer;
  }

`;
