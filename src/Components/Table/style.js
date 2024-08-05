import styled from "styled-components";

export const TableHeadComponent = styled.thead`
  width: 100%;
`;

export const TableB = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: solid 1px #ebebeb;
  cursor: pointer;
`;

export const TableHeaderData = styled.th`
  padding: 10px 5px 10px 5px;

  ${(props) =>
    props.isLastUpdate &&
    `
  @media (max-width: 1000px) {
    display: none;
   }
  `}
`;

export const TableData = styled.td`
  padding: 10px 5px 10px 5px;

  ${(props) =>
    props.isLastUpdate &&
    `
  @media (max-width: 1000px) {
    display: none;
   }
  `}

  ${(props) => props.isHideButtons && `
  
  display: none;

  `}
`;
