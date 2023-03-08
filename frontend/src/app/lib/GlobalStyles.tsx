import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: rgb(30,30,30);
background: linear-gradient(90deg, rgba(30,30,30,1) 55%, rgba(105,0,0,1) 55%);
  }

`;


