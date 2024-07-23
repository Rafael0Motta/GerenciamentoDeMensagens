import React, { useState } from "react";

/* IMG */
import LogoImage from "../../assets/Imgs/SGM-LOGO.png";
import HomeIcon from "../../assets/Icons/HOME-ICON.svg";
import SendIcon from "../../assets/Icons/SEND-ICON.svg";
import WppIcon from "../../assets/Icons/WPP-ICON.svg";
import HistoryIcon from "../../assets/Icons/HISTORY-ICON.svg";
import CaretIcon from "../../assets/Icons/CARET-ICON.svg";
import HamburguerMenu from "../../assets/Icons/HAMBURGUER-ICON.svg";

/* STYLED */
import {
  HeaderContainer,
  Logo,
  Nav,
  ItensContainer,
  Itens,
  SubItensContainer,
  SubItens,
  Icon,
  HamburguerIcon,
} from "./style";

const NavMenu = () => {
  const [showSendDropdown, setShowSendDropdown] = useState(false);
  const [showWppDropdown, setShowWppDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeaderContainer isMenuOpen={isMenuOpen}>
        <a href="/home">
          <Logo src={LogoImage} />
        </a>
        <HamburguerIcon
          src={HamburguerMenu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <Nav isMenuOpen={isMenuOpen}>
          <ItensContainer>
            <Itens>
              <Icon src={HomeIcon} />
              Home
            </Itens>
            <Itens
              onMouseEnter={() => setShowSendDropdown(true)}
              onMouseLeave={() => setShowSendDropdown(false)}
              onClick={() => setShowSendDropdown(!showSendDropdown)}
            >
              <Icon src={SendIcon} />
              Envios <Icon src={CaretIcon} isCaret={true} />
              {showSendDropdown && (
                <SubItensContainer isResponsive={isMenuOpen}>
                  <SubItens>Aniversáriante 🎂</SubItens>
                  <SubItens>Boas Vindas 🚪</SubItens>
                  <hr />
                  <SubItens>Massa SGA 🌐</SubItens>
                  <SubItens>Massa CSV 🌐</SubItens>
                  <SubItens>Massa SGA 🌐</SubItens>
                  <hr />
                  <SubItens>Boletos por Vencimento 📅</SubItens>
                </SubItensContainer>
              )}
            </Itens>
            <Itens
              onMouseEnter={() => setShowWppDropdown(true)}
              onMouseLeave={() => setShowWppDropdown(false)}
              onClick={() => setShowWppDropdown(!showWppDropdown)}
            >
              <Icon src={WppIcon} />
              WhatsApp <Icon src={CaretIcon} isCaret={true} />
              {showWppDropdown && (
                <SubItensContainer isResponsive={isMenuOpen}>
                  <SubItens>Gerenciador de Sessões ⚙️</SubItens>
                  <SubItens>Usuários 👨🏽‍💻</SubItens>
                </SubItensContainer>
              )}
            </Itens>
            <Itens>
              <Icon src={HistoryIcon} />
              Histórico
            </Itens>
          </ItensContainer>
        </Nav>
      </HeaderContainer>
    </>
  );
};

export default NavMenu;
