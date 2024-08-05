import React from "react";

/* STYLES */
import {
  Card,
  CardHeader,
  CardCounter,
  CardParagraph,
  DeleteIconButton,
  CustomProgressBar,
} from "./style";

/* IMGS | ICONS */
import { FaTrashAlt } from "react-icons/fa";

const index = ({ name, count, percent, init }) => {
  return (
    <>
      <Card>
        <CardHeader>{name}</CardHeader>
        <hr></hr>
        <CardCounter>{count}</CardCounter>
        <CustomProgressBar
          animated
          now={parseInt(percent)}
          label={`${percent}%`}
        />
        <CardParagraph>{init}</CardParagraph>
        <DeleteIconButton>
          <FaTrashAlt />
        </DeleteIconButton>
      </Card>
    </>
  );
};

export default index;
