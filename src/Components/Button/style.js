import styled from "styled-components";

export const Button = styled.button`
  display: block;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 17px;
  line-height: 2.5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.isLogin &&
    `
    background-color: #13deb9;
    color: #000;
    width: 310px;
    height: 50px;
    font-weight: 400;
    margin: 35px auto;

    @media (max-width:600px){ 
      margin: 35px 0;
      }
    `}
`;
