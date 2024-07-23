import styled from "styled-components";

export const Button = styled.button`
  display: block;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 17px;
  line-height: 2.5px;
  height: 50px;
  cursor: pointer;

  ${(props) =>
    props.isLogin &&
    `
    background-color: #13deb9;
    color: #000;
    width: 310px;
    height: 50px;
    font-weight: 400;
    margin: 35px auto;

    &:hover {
    opacity: 0.8;
    }

    @media (max-width:600px){ 
      margin: 35px 0;
      }
  `}

  ${(props) =>
    props.isClearHome &&
    `
    background: #c70606;
    color: #fff;
    padding: 10px;
    margin: 20px auto; 
     
    &:hover {
    background-color: #ff0000;
    }
  `}
  
  ${(props) =>
    props.isCreateSessions &&
    `
    background: #229782;
    color: #fff;
    padding: 10px;
    margin: 20px auto; 
     
    &:hover {
    background-color: #2EC2A7;
    }
  `}

  ${(props) =>
    props.isSaveManagerButton &&
    `
   background: #229782;
    color: #fff;
    padding: 10px;
    margin: 20px 0; 
     
    &:hover {
    background-color: #2EC2A7;
    }  `}
`;
