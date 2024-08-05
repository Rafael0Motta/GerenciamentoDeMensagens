import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Card = styled.div`
  width: 221px;
  height: 230px;
  background-color: #f2f2f2;
  border-radius: 35px;
  border: solid 1px #969696;
  filter: drop-shadow(0px 4px 4px #00000050);
`;

export const CardHeader = styled.div`
  margin: 15px;
  text-align: center;
`;

export const CardCounter = styled.h3`
  margin: 15px 0 15px 0;
  text-align: center;
`;

export const CardParagraph = styled.p`
  text-align: center;
  font-size: 12px;
  margin-top: 25px;
`;

export const DeleteIconButton = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #e70000;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    background-color: #ff0000;
  }
`;

export const CustomProgressBar = styled(ProgressBar)`
  margin: 0 auto;
  background: #d3d6da;
  width: 90%;
  height: 20px;

  .progress-bar {
    background-color: #2ec2a7;
    height: auto;
    font-size: 13px;
  }
`;
