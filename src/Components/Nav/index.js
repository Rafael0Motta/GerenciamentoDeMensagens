import React, { useState } from "react";

/* IMG */
import LogoImage from "../../assets/Imgs/SGM-LOGO.png";

import { FaHistory } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";


/* STYLED */
import {
  HeaderContainer,
  Logo,
  Nav,
  ItensContainer,
  Itens,
  SubItensContainer,
  SubItens,
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
        <HamburguerIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaAlignRight />
        </HamburguerIcon>
        <Nav isMenuOpen={isMenuOpen}>
          <ItensContainer>
            <Itens>
              <FaHome />
              Home
            </Itens>
            <Itens
              onMouseEnter={() => setShowSendDropdown(true)}
              onMouseLeave={() => setShowSendDropdown(false)}
              onClick={() => setShowSendDropdown(!showSendDropdown)}
            >
              <FaPaperPlane />
              Envios <FaCaretDown />
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
              <FaWhatsapp />
              WhatsApp <FaCaretDown />
              {showWppDropdown && (
                <SubItensContainer isResponsive={isMenuOpen}>
                  <SubItens>Gerenciador de Sessões ⚙️</SubItens>
                  <SubItens>Usuários 👨🏽‍💻</SubItens>
                </SubItensContainer>
              )}
            </Itens>
            <Itens>
              <FaHistory />
              Histórico
            </Itens>
          </ItensContainer>
        </Nav>
      </HeaderContainer>
    </>
  );
};

export default NavMenu;
