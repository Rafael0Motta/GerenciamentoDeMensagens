import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/Home">
          <Logo src={LogoImage} />
        </Link>
        <HamburguerIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaAlignRight />
        </HamburguerIcon>
        <Nav isMenuOpen={isMenuOpen}>
          <ItensContainer>
            <Link to="/Home">
              <Itens>
                <FaHome />
                Home
              </Itens>
            </Link>
            <Itens
              onMouseEnter={() => setShowSendDropdown(true)}
              onMouseLeave={() => setShowSendDropdown(false)}
              onClick={() => setShowSendDropdown(!showSendDropdown)}
            >
              <FaPaperPlane />
              Envios <FaCaretDown />
              {showSendDropdown && (
                <SubItensContainer isResponsive={isMenuOpen}>
                  <Link to="/massa-csv">
                    <SubItens>Massa CSV 🌐</SubItens>
                  </Link>
                  <hr />
                  <Link to="/boletos">
                    <SubItens>Boletos por Vencimento 📅</SubItens>
                  </Link>
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
                  <Link to="/managersessions">
                    <SubItens>Gerenciador de Sessões ⚙️</SubItens>
                  </Link>
                  <hr />
                  <Link to="/managerusers">
                    <SubItens>Usuários 👨🏽‍💻</SubItens>
                  </Link>
                </SubItensContainer>
              )}
            </Itens>
            <Link to="/historico">
              <Itens>
                <FaHistory />
                Histórico
              </Itens>
            </Link>
          </ItensContainer>
        </Nav>
      </HeaderContainer>
    </>
  );
};

export default NavMenu;
