import React from "react";

/* BootStrap */
import ProgressBar from "react-bootstrap/ProgressBar";

/* IMGS */
import IconTrash from "../../assets/Icons/TRASH-ICON.svg";

/* COMPONENTS */
import NavMenu from "../../Components/Nav";
import Title from "../../Components/Title";
import Button from "../../Components/Button";

/* STYLES */
import {
  CardsContainer,
  Card,
  CardHeader,
  CardCounter,
  CardParagraph,
  DeleteIconButton,
  TrashIcon,
  CustomProgressBar,
} from "./style";

const index = () => {
  const clearAllCards = () => {
    // Logic to clear services
  };

  const clearUniqueCard = () => {
    // Logic to clear a single service
  };

  const now = 60;
  const max = 100;

  return (
    <>
      <NavMenu />
      <Title>FERRAMENTAS EM SERVIÇO</Title>
      <Button isClearHome={true}>LIMPAR SERVIÇOS</Button>

      <CardsContainer>
        <Card>
          <CardHeader>Qualidade - 21999999999</CardHeader>
          <hr></hr>
          <CardCounter>31-31</CardCounter>
          <CustomProgressBar animated now={now} label={`${now}%`} />
          <CardParagraph>Iniciado em 17/07/2024 ÀS 08:48</CardParagraph>
          <DeleteIconButton>
            <TrashIcon src={IconTrash} />
          </DeleteIconButton>
        </Card>

        <Card>
          <CardHeader>Qualidade - 21999999999</CardHeader>
          <hr></hr>
          <CardCounter>31-31</CardCounter>
          <CustomProgressBar animated now={now} label={`${now}%`} />
          <CardParagraph>Iniciado em 17/07/2024 ÀS 08:48</CardParagraph>
          <DeleteIconButton>
            <TrashIcon src={IconTrash} />
          </DeleteIconButton>
        </Card>

        <Card>
          <CardHeader>Qualidade - 21999999999</CardHeader>
          <hr></hr>
          <CardCounter>31-31</CardCounter>
          <CustomProgressBar animated now={now} label={`${now}%`} />
          <CardParagraph>Iniciado em 17/07/2024 ÀS 08:48</CardParagraph>
          <DeleteIconButton>
            <TrashIcon src={IconTrash} />
          </DeleteIconButton>
        </Card>

        <Card>
          <CardHeader>Qualidade - 21999999999</CardHeader>
          <hr></hr>
          <CardCounter>31-31</CardCounter>
          <CustomProgressBar animated now={now} label={`${now}%`} />
          <CardParagraph>Iniciado em 17/07/2024 ÀS 08:48</CardParagraph>
          <DeleteIconButton>
            <TrashIcon src={IconTrash} />
          </DeleteIconButton>
        </Card>

        <Card>
          <CardHeader>Qualidade - 21999999999</CardHeader>
          <hr></hr>
          <CardCounter>31-31</CardCounter>
          <CustomProgressBar animated now={now} label={`${now}%`} />
          <CardParagraph>Iniciado em 17/07/2024 ÀS 08:48</CardParagraph>
          <DeleteIconButton>
            <TrashIcon src={IconTrash} />
          </DeleteIconButton>
        </Card>

        <Card>
          <CardHeader>Qualidade - 21999999999</CardHeader>
          <hr></hr>
          <CardCounter>31-31</CardCounter>
          <CustomProgressBar animated now={now} label={`${now}%`} />
          <CardParagraph>Iniciado em 17/07/2024 ÀS 08:48</CardParagraph>
          <DeleteIconButton>
            <TrashIcon src={IconTrash} />
          </DeleteIconButton>
        </Card>
      </CardsContainer>
    </>
  );
};

export default index;
