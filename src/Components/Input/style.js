import styled from "styled-components";

export const InpuT = styled.input`
  background: #ffffff;
  border: solid 1px #767676;
  border-radius: 5px;
  height: 35px;
  width: 310px;
  outline: none;
  display: block;
  line-height: 20px;
  font-size: 16px;
  color: #000000;
  padding: 0 0 0 10px;
  margin: 5px 0 15px;

  ${(props) =>
    props.isNewSessionsInput &&
    `  
    width: 100%;
    margin: 5px 0 15px;
  `}

  ${(props) =>
    props.isCheckboxSessions &&
    `  
    width: 1em;
    height: 1em;
    margin: 0;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, .25);
  `}
`;
