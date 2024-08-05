import React from "react";

/* ICONS */
import { FaTrashAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

/* Components */
import Input from "../Input/index";
import Button from "../Button/index";

/* Style */
import { TableB, TableRow, TableData } from "./style";

const TableBody = ({ column1, column2, column3, column4, HideButtons }) => {
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
      <TableB>
        <TableRow onClick={handleClickOnRow}>
          <TableData>
            <Input type="checkbox" isCheckboxSessions={true} />
          </TableData>
          <TableData>{column1}</TableData>
          <TableData>
            <Button isOnline={true} type="submit" status={column2}>
              {column2}
            </Button>
          </TableData>
          <TableData isLastUpdate={true}>{column3}</TableData>
          <TableData isHideButtons={HideButtons}>
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
          <TableData>{column4}</TableData>
        </TableRow>
      </TableB>
    </>
  );
};

export default TableBody;
