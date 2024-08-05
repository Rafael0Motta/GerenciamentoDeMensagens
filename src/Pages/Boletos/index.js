import React from "react";

/* Components */
import Nav from "../../Components/Nav/index";
import Title from "../../Components/Title/index";
import Input from "../../Components/Input/index";
import Button from "../../Components/Button/index";
import TableHead from "../../Components/Table/TableHead";
import TableBody from "../../Components/Table/TableBody";

/* Style */
import { Select, ButtonContainer, InputContainer, Text, Table } from "./style";

/* Icons */
import { FaSearch } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const index = () => {
  const associatesSelect = 10;
  const associatesTotal = 100;

  const teste = [
    {
      id: 1,
      Associado: "EDMILSON MARTINS OLIVEIRA",
      situacao: "ABERTO",
      status: "05/08/2024, 11:32:05 ✓",
      DataVencimento: "2024-07-30",
    },
    {
      id: 2,
      Associado: "EDILBERTO SOUZA IZIDORO",
      situacao: "ABERTO",
      status: "05/08/2024, 11:32:05 ✓",
      DataVencimento: "2024-07-30",
    },
    {
      id: 3,
      Associado: "DOUGLAS LUAN LOEBEL DA SILVA",
      situacao: "ABERTO",
      status: "05/08/2024, 11:32:05 ✓",
      DataVencimento: "2024-07-30",
    },
    {
      id: 4,
      Associado: "EDCLEITON REIS ROCHA",
      situacao: "ABERTO",
      status: "05/08/2024, 11:32:05 ✓",
      DataVencimento: "2024-07-30",
    },
  ];
  return (
    <>
      <Nav />
      <Title>Boletos por vencimento</Title>
      <InputContainer>
        <Input type="date" />
        <Select id="clientes" name="clientList">
          <option value="boletos">boletos</option>
          <option value="crgomes">crgomes</option>
          <option value="bmg">bmg</option>
          <option value="dominos">dominos</option>
        </Select>
      </InputContainer>
      <ButtonContainer>
        <Button type="button" isBoletosButtons={true}>
          <FaSearch /> Buscar
        </Button>
        <Button type="button" isBoletosButtons={true}>
          <FaPlay /> Iniciar
        </Button>
        <Button type="button" isBoletosButtons={true}>
          <FaStop /> Parar
        </Button>
        <Button type="button" isBoletosButtons={true}>
          <MdMessage /> Mensagens
        </Button>
      </ButtonContainer>

      <Text>
        Associados selecionados: <strong>{associatesSelect}</strong> <br />
        Associados Totais: <strong> {associatesTotal}</strong>
      </Text>

      <Table>
        <TableHead
          column1={"Associado"}
          column2={"Situação"}
          column3={"Data de Vencimento"}
          column4={"Status"}
        />
        {teste.map((item) => (
          <TableBody
            key={item.id}
            column1={item.Associado}
            column2={item.situacao}
            column3={item.DataVencimento}
            column4={item.status}
            HideButtons={true}
          />
        ))}
      </Table>
    </>
  );
};

export default index;
