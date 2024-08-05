import React from "react";

/* IMGS | ICONS */

/* COMPONENTS */
import NavMenu from "../../Components/Nav";
import Title from "../../Components/Title";
import Button from "../../Components/Button";
import Cards from "../../Components/Cards/index";

/* STYLES */
import { CardsContainer } from "./style";

const index = () => {
  const clearAllCards = () => {
    // Logic to clear services
  };

  const clearUniqueCard = () => {
    // Logic to clear a single service
  };

  const cardContent = [
    {
      id: 1,
      name: "Qualidade - 21999999999",
      count: "31-31",
      percent: "100",
      init: "Iniciado em 17-21-32",
    },
    {
      id: 2,
      name: "teste - 21999999999",
      count: "20-40",
      percent: "50",
      init: "Iniciado em 17-21-32",
    },
    {
      id: 3,
      name: "teste3 - 21999999999",
      count: "90-100",
      percent: "90",
      init: "Iniciado em 17-21-32",
    },
  ];

  return (
    <>
      <NavMenu />
      <Title>FERRAMENTAS EM SERVIÇO</Title>
      <Button isClearHome={true}>LIMPAR SERVIÇOS</Button>

      <CardsContainer>
        {cardContent.map((item) => (
          <Cards
            key={item.id}
            name={item.name}
            count={item.count}
            percent={item.percent}
            init={item.init}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default index;
