import React from "react";

/* Components */
import Input from "../../Components/Input/index";

/* Style */
import { TableHeadComponent, TableRow, TableHeaderData } from "./style";

const TableHead = ({column1, column2, column3, column4}) => {
  return (
    <>
      <TableHeadComponent>
        <TableRow>
          <TableHeaderData scope="col">
            <Input type="checkbox" isCheckboxSessions={true} />
          </TableHeaderData>
          <TableHeaderData scope="col">{column1}</TableHeaderData>
          <TableHeaderData scope="col">{column2}</TableHeaderData>
          <TableHeaderData scope="col" isLastUpdate={true}>
            {column3}       
          </TableHeaderData>
          <TableHeaderData scope="col">{column4}</TableHeaderData>
        </TableRow>
      </TableHeadComponent>
    </>
  );
};

export default TableHead;
