import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #edf3fc;
  width: 70%;
  height: 100vh;

  @media (max-width: 1000px) {
    display: none;
  }

`;
export const Image = styled.img`

@media (max-width:600px){ 
  width: 100%;
}

`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100vh;
  justify-content: center;

  @media (max-width: 1300px) {
    width: 60%;
  }
`;

export const SubTitle = styled.h4`
  font-size: 18px;
  color: #000;
  font-weight: 300;
  text-align: center;
`;

export const ContainerInput = styled.div`
  margin: 30px 0 0 0;
`;
