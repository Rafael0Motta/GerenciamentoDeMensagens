import React, { useState } from "react";

/* Components */
import Nav from "../../Components/Nav/index";
import Title from "../../Components/Title/index";
import Button from "../../Components/Button/index";
import NewSessions from "../../Components/Modals/NewSessions";
import TableHead from "../../Components/Table/TableHead";
import TableBody from "../../Components/Table/TableBody";

/* import ConfigSessions from "../../Components/Modals/ConfigSessions";
 */

/* Style */
import { Table } from "./style";

const ManagerSessions = () => {
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

  const teste = [
    {
      id: 1,
      name: "Sessão 1",
      status: "ONLINE",
      lastUpdate: "12/03/2023",
    },
    {
      id: 2,
      name: "Sessão 2",
      status: "OFFLINE",
      lastUpdate: "11/03/2023",
    },
    {
      id: 3,
      name: "Sessão 3",
      status: "ONLINE",
      lastUpdate: "10/03/2023",
    },
    {
      id: 4,
      name: "Sessão 4",
      status: "OFFLINE",
      lastUpdate: "10/03/2023",
    },
  ];

  return (
    <>
      <Nav />
      <Title>Gerenciador de Sessões</Title>
      <Button type="button" isCreateSessions={true} onClick={handleShow}>
        Criar Sessão
      </Button>

      <Table>
        <TableHead
          column1={"Nome"}
          column2={"Status"}
          column3={"Última Atualização"}
          column4={"Ações"}
        />
        {teste.map((item) => (
          <TableBody
            key={item.id}
            column1={item.name}
            column2={item.status}
            column3={item.lastUpdate}
          />
        ))}
      </Table>
      <NewSessions show={show} handleClose={handleClose} />
    </>
  );
};

export default ManagerSessions;
