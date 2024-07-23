import React, { useState } from "react";

/* BootStrap */
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

/* Components */
import Nav from "../../Components/Nav/index";
import Title from "../../Components/Title/index";
import Button from "../../Components/Button/index";
import Input from "../../Components/Input/index";
import InputLabel from "../../Components/InputLabel/index";

/* Styled */
import { ButtonsContainer, Select, WppQrCode } from "./style";

const ManagerSessions = () => {
  const [show, setShow] = useState(false);
  const [sendInterval, setSendInterval] = useState(0);
  const [intervalSend, setIntervalSend] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav />
      <Title>Gerenciador de Sessões</Title>
      <ButtonsContainer>
        <Button type="button" isCreateSessions={true} onClick={handleShow}>
          Criar Sessão
        </Button>
      </ButtonsContainer>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nova Sessão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputLabel>Nome da Sessão:</InputLabel>
          <Input
            type="text"
            placeholder="Nome da Sessão"
            isNewSessionsInput={true}
          />

          <InputLabel>Token da Sessão:</InputLabel>
          <Input
            type="text"
            placeholder="Token da Sessão"
            isNewSessionsInput={true}
          />

          <InputLabel>Responsável da sessão:</InputLabel>
          <Select id="cars" name="carlist" form="carform">
            <option value="boletos">boletos</option>
            <option value="crgomes">crgomes</option>
            <option value="bmg">bmg</option>
            <option value="dominos">dominos</option>
          </Select>

          <InputLabel>
            Intervalo de Envio: <b>{intervalSend}</b> Minutos
          </InputLabel>
          <Input
            type="range"
            max="60"
            isNewSessionsInput={true}
            onChange={(e) => setIntervalSend(e.target.value)}
          />

          <InputLabel>
            Envios por Intervalo: <b>{sendInterval}</b> Envios
          </InputLabel>
          <Input
            type="range"
            max="200"
            isNewSessionsInput={true}
            onChange={(e) => setSendInterval(e.target.value)}
          />

          <WppQrCode>
            <Title>QRCODE WPP</Title>
            <Spinner animation="border"></Spinner>
          </WppQrCode>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} isSaveManagerButton>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ManagerSessions;
