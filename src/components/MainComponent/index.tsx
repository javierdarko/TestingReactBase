import React from "react";
import { ContainerFlex, Text } from "../styles";
import { GlobalHeader } from "./HeaderContainer";
import { PokeList } from "./PokeList";

export const HomeIndex = ({ toggleTheme, isDarkMode }: any) => {
  return (
    <div>
      <GlobalHeader toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <ContainerFlex Display="flex" Align="center" Justify="center">
        <ContainerFlex
          Border="1px solid red"
          Align="center"
          Justify="center"
        >
          <Text FontSize="24px">Lista Pokémon</Text>
          <PokeList/>
        </ContainerFlex>
      </ContainerFlex>
    </div>
  );
};
