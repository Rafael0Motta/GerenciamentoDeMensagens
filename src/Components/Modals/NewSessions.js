import React, { useState } from "react";

import { Select, WppQrCode } from "./NewSessionsStyle";

/* BootStrap */
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

/* Components */
import Input from "../../Components/Input/index";
import InputLabel from "../../Components/InputLabel/index";
import Title from "../../Components/Title/index";
import Button from "../../Components/Button/index";

const NewSessions = ({ show, handleClose }) => {
  const [sendInterval, setSendInterval] = useState(0);
  const [intervalSend, setIntervalSend] = useState(0);

  return (
    <>
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
            value={intervalSend}
            isNewSessionsInput={true}
            onChange={(e) => setIntervalSend(e.target.value)}
          />

          <InputLabel>
            Envios por Intervalo: <b>{sendInterval}</b> Envios
          </InputLabel>
          <Input
            type="range"
            max="200"
            value={sendInterval}
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
            Gerar QrCode
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewSessions;
