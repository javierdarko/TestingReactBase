import React, { useState } from "react";
import {
  ContainerFlex,
  DesktopMenu,
  HamburgerMenuIcon,
  Image,
  MenuContainer,
  Text,
} from "../styles";
import HamburgerIcon from "../images/menu.svg";
import IconPoke from "../images/pokemon-23.svg";
import { MENULIST } from "../constants";

export const GlobalHeader = ({ toggleTheme, isDarkMode }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <ContainerFlex
        Justify="space-between"
        Height="40px"
        Padding="16px"
        Background="#FF2400"
        Gap="16px"
      >
        <Image
          src={IconPoke}
          alt="Pokémon Logo"
          Width="90px"
          Height="40px"
          Cursor="pointer"
        />
        <ContainerFlex Justify="flex-end" Gap="16px" Margin="16px">
          <HamburgerMenuIcon
            src={HamburgerIcon}
            alt="Menu Icon"
            Width="24px"
            Height="24px"
            onClick={toggleMenu}
            Cursor="pointer"
          />
          <DesktopMenu>
            <Text Color="#F3F3F3" FontWeight="700" Cursor="pointer">
              {MENULIST.MENU}
            </Text>
            <Text Color="#F3F3F3" FontWeight="700" Cursor="pointer">
              {MENULIST.RANDOM}
            </Text>
            <ContainerFlex Justify="start"Width="fit-content">
              <Text
                Color="#F3F3F3"
                FontWeight="700"
                Cursor="pointer"
                onClick={toggleTheme}
              >
                {MENULIST.MODE}{' '}
                {isDarkMode ? MENULIST.LIGHT : MENULIST.DARK}
              </Text>
            </ContainerFlex>
          </DesktopMenu>
        </ContainerFlex>
      </ContainerFlex>
      {isMenuOpen && (
        <MenuContainer>
          <Text
            Color="#0D166B"
            FontWeight="700"
            Cursor="pointer"
            Margin="8px 0"
          >
            PAYMENT
          </Text>
          <div className="App">
            <button onClick={toggleTheme}>
              Cambiar a Modo {isDarkMode ? "Claro" : "Oscuro"}
            </button>
          </div>
        </MenuContainer>
      )}
    </>
  );
};
