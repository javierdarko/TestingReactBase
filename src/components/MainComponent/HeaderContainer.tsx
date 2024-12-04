import React, { useState } from "react";
import { ContainerFlex, Image, Text } from "../styles";
import HamburgerIcon from "../images/menu.svg"; // Ícono de menú hamburguesa

export const GlobalHeader = ({ toggleTheme, isDarkMode }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <ContainerFlex
        Justify="start"
        Height="40px"
        Padding="8px 16px"
        Border="solid green 1px"
        Background="#fff"
        Gap="16px"
      >
        <Image
          src={HamburgerIcon}
          alt="Menu Icon"
          Width="24px"
          Height="24px"
          onClick={toggleMenu}
          Cursor="pointer"
        />
        <Text Color="#0D166B" FontWeight="700" Cursor="pointer">
          Menu
        </Text>
        <Text Color="#0D166B" FontWeight="700" Cursor="pointer">
          Otro
        </Text>
      </ContainerFlex>
      {isMenuOpen && (
        <ContainerFlex
          Position="absolute"
          PositionTop="40px"
          PositionLeft="0"
          Width="200px"
          Height="auto"
          Background="#fff"
          Padding="16px"
          BoxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
          Border="1px solid #0D166B"
          Radius="4px"
          FlexDir="column"
        >
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
              Switch to {isDarkMode ? "Light" : "Dark"} Mode
            </button>
          </div>
        </ContainerFlex>
      )}
    </>
  );
};
