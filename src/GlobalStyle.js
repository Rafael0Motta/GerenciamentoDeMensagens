import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* { 
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;  
    transition: all 0.3s ease-in-out;
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
`;
