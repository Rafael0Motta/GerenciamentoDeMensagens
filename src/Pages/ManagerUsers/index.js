import React, { useState } from "react";

/* Components */
import Nav from "../../Components/Nav/index";
import Title from "../../Components/Title/index";
import TableHead from "../../Components/Table/TableHead";
import TableBody from "../../Components/Table/TableBody";

/* Style */
import { Table } from "./style";

import Button from "../../Components/Button";

const UsersManager = () => {
  const teste = [
    {
      id: 1,
      usuario: "Boletos",
      login: "boletos.gaj",
      admin: "Sim",
      status: "ATIVO",
    },
    {
      id: 2,
      usuario: "Dinamo",
      login: "dinamo.elaine",
      admin: "Não",
      status: "INATIVO",
    },
    {
      id: 3,
      usuario: "Vendas",
      login: "vendas.hbm",
      admin: "Sim",
      status: "ATIVO",
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* const handleDelete = () => {
      TODO: Implementar a lógica para excluir a sessão
    console.log("Excluindo sessão");
  };

  const handlePlay = () => {
      TODO: Implementar a lógica para iniciar a sessão
    console.log("Iniciando sessão");
  };

  const handlePause = () => {
      TODO: Implementar a lógica para pausar a sessão
    console.log("Pausando sessão");
  };

  const handleClickOnRow = () => {
      TODO: Implementar a lógica para abrir a página de visualização da sessão
    console.log("Visualizando sessão");

      <ConfigSessions 
      show={show}
      handleClose={handleClose} 
        ADICIONAR LOGICA PARA ABRIR SOMENTE QUANDO CLICAR NA RESPECTIVA SESSÃO.
    />;  
  }; */
  return (
    <>
      <Nav />
      <Title>Manager Users</Title>
      <Button type="button" isCreateSessions={true} onClick={handleShow}>
        Criar Sessão
      </Button>
      <Table>
        <TableHead
          column1={"Usuario"}
          column2={"Status"}
          column3={"Admin?"}
          column4={"Login"}
        />
        {teste.map((item) => (
          <TableBody
            key={item.id}
            column1={item.usuario}
            column2={item.status}
            column3={item.admin}
            column4={item.login}
            HideButtons={true}
          />
        ))}
      </Table>
    </>
  );
};

export default UsersManager;
