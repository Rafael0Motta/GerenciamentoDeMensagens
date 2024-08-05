import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* { 
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;  
    transition: all 0.3s ease-in-out;
}

a {
    text-decoration: none;
    color: inherit;
  }

  a:focus, a:active {
    outline: none;
  }

body,
h1, h2, h3, h4, h5, h6,.h1, .h2, .h3, .h4, .h5, .h6,
p, blockquote, pre,
dl, dd, ol, ul, figure,
hr, fieldset, legend {
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #000;
}

tbody, td, tfoot, th, thead, tr { 
  border-color: #000;
    border-style: solid;
    border-width: 0;
    font-size: 16px;
}


`;
