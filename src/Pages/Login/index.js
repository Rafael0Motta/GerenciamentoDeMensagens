import React from "react";

/* Images */
import LoginLogo from "../../assets/sgmLogo.png";
import LoginImage from "../../assets/iconLogin.png";

/* Styled */
import {
  ContainerLogin,
  ContainerImage,
  Image,
  ContainerForm,
  SubTitle,
  ContainerInput,
} from "./style";

/* Components */
import Title from "../../Components/Title/index";
import InputLabel from "../../Components/InputLabel/index";
import Input from "../../Components/Input/index";
import Button from "../../Components/Button/index";

const index = () => {
  return (
    <>
      <ContainerLogin>
        <ContainerImage>
          <Image src={LoginImage} alt="IMG Logo" />
        </ContainerImage>

        <ContainerForm>
          <Image src={LoginLogo} alt="SGM Logo" />
          <Title>Bem-vindo</Title>
          <SubTitle>Entre com seu login e senha</SubTitle>
          <ContainerInput>
            <InputLabel>Usuário</InputLabel>
            <Input placeholder="Digite seu usuário" type="text" />
          </ContainerInput>
          <ContainerInput>
            <InputLabel>Senha</InputLabel>
            <Input placeholder="Digite sua senha" type="password" />
          </ContainerInput>
          <Button isLogin={true}>ENTRAR</Button>
        </ContainerForm>
      </ContainerLogin>
    </>
  );
};

export default index;
