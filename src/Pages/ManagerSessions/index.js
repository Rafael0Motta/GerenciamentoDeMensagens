import React, { useState } from "react";

/* ICONS */
import { FaTrashAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

/* Components */
import Nav from "../../Components/Nav/index";
import Input from "../../Components/Input/index";
import Title from "../../Components/Title/index";
import Button from "../../Components/Button/index";
import NewSessions from "../../Components/Modals/NewSessions";
import ConfigSessions from "../../Components/Modals/ConfigSessions";

/* Style */
import {
  ButtonsContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderData,
  TableData,
} from "./style";

const ManagerSessions = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    // TODO: Implementar a lógica para excluir a sessão
    console.log("Excluindo sessão");
  };

  const handlePlay = () => {
    // TODO: Implementar a lógica para iniciar a sessão
    console.log("Iniciando sessão");
  };

  const handlePause = () => {
    // TODO: Implementar a lógica para pausar a sessão
    console.log("Pausando sessão");
  };

  const handleClickOnRow = () => {
    // TODO: Implementar a lógica para abrir a página de visualização da sessão
    console.log("Visualizando sessão");

    /* <ConfigSessions 
      show={show}
      handleClose={handleClose} 
        ADICIONAR LOGICA PARA ABRIR SOMENTE QUANDO CLICAR NA RESPECTIVA SESSÃO.
    />; */
  };

  return (
    <>
      <Nav />
      <Title>Gerenciador de Sessões</Title>
      <ButtonsContainer>
        <Button type="button" isCreateSessions={true} onClick={handleShow}>
          Criar Sessão
        </Button>
      </ButtonsContainer>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderData scope="col">
              <Input type="checkbox" isCheckboxSessions={true} />
            </TableHeaderData>
            <TableHeaderData scope="col">Nome</TableHeaderData>
            <TableHeaderData scope="col">Status</TableHeaderData>
            <TableHeaderData scope="col">Última Atualização</TableHeaderData>
            <TableHeaderData scope="col">Ações</TableHeaderData>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow onClick={handleClickOnRow}>
            <TableData>
              <Input type="checkbox" isCheckboxSessions={true} />
            </TableData>
            <TableData>GAJ - 21993324134 - A</TableData>
            <TableData>
              <Button isOnline={true} type="submit">
                Online
              </Button>
            </TableData>
            <TableData>12/05/2021</TableData>
            <TableData isIconsButtons={true}>
              <Button type="button" onClick={handleDelete} isIconButton={true}>
                <FaTrashAlt />
              </Button>

              <Button type="button" onClick={handlePause} isIconButton={true}>
                <FaPause />
              </Button>

              <Button type="button" onClick={handlePlay} isIconButton={true}>
                <FaPlay />
              </Button>
            </TableData>
          </TableRow>
        </TableBody>
      </Table>

      <NewSessions show={show} handleClose={handleClose} />
    </>
  );
};

export default ManagerSessions;
