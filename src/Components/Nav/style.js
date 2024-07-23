import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #2ec2a7;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ isMenuOpen }) => (isMenuOpen ? "14rem" : "0")};
`;

export const Logo = styled.img`
  width: 150px;
  height: 56px;
  margin: 0 0 0 50px;
`;

export const Icon = styled.img`
  width: ${({ isCaret }) => (isCaret ? "10px" : "20px")};
  height: auto;
`;

export const Nav = styled.nav`
  margin-right: 50px;

  @media (max-width: 1000px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    background-color: #2ec2a7;
    z-index: 10;
    padding: 10px;
    margin-right: 0;
  }
`;

export const ItensContainer = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    margin: 20px 50px;
  }
`;

export const Itens = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #000;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const SubItensContainer = styled.ul`
  display: none;
  list-style: none;
  position: absolute;
  top: 100%;
  width: 300px;
  left: 0;
  background-color: #2ec2a7;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ${Itens}:hover & {
    display: block;
  }

  @media (max-width: 1000px) {
    position: relative;
    width: 100%;
    padding: 10px 0;
    box-shadow: none;
    display: ${({ isResponsive }) => (isResponsive ? "block" : "none")};
  }
`;

export const SubItens = styled.li`
  margin: 5px 0;
  color: #fff;
  cursor: pointer;
  padding: 5px;

  &:hover {
    color: #000;
  }
`;

export const HamburguerIcon = styled.img`
  display: none;
  width: 30px;
  height: auto;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: block;
    margin-right: 20px;
  }
`;
