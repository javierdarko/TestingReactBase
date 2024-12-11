import React from "react";
import { ContainerFlex, Image, SearchInput } from "../styles";
import { PokeList } from "./PokeList";
import IconSearch from "../images/searchpoke.svg";
import IconClose from "../images/closepokem.svg";
import { getPokemonListAction } from "./Redux/Actions/GetPokemonList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../config/store";
import IconPoke from "../images/pokemon-23.svg";
import {
  resetSelectedPokemon,
  updateSearchInput,
} from "./Redux/Actions/getPokemonSearch";

export const HomeIndex = () => {
  const dispatch = useDispatch<AppDispatch>();
  const inputValue = useSelector(
    (state: RootState) => state.getPokemonListSearch?.dataInput
  );
  const PokedexList = useSelector(
    (state: RootState) => state.GetPokemonList?.data
  );
  const filteredList = PokedexList?.filter((pokemon) => {
    const pokemonName = pokemon.name.replace(/-/g, " ").toLowerCase();
    const searchQuery = inputValue?.replace(/-/g, " ").toLowerCase() || "";
    return pokemonName.includes(searchQuery);
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchInput(event.target.value));
  };
  
  const handleCancelSearch = () => {
    dispatch(resetSelectedPokemon());
    dispatch(getPokemonListAction());
  };

  return (
    <>
      <ContainerFlex
        Align="center"
        Justify="center"
        FlexDir="column"
        Width="100hv"
        Gap="16px"
        Margin="24px"
      >
        <Image
          src={IconPoke}
          alt="Pokémon Logo"
          Width="260px"
          Height="100px"
          Cursor="pointer"
        />
        <ContainerFlex FlexDir="column" Gap="16px">
          <SearchInput
            Height="40px"
            Width="270px"
            Position="none"
            GridColumn="90% 10%"
            widthInput="200px"
          >
            <input
              type="text"
              placeholder="Buscar Pokémon..."
              value={inputValue}
              onChange={handleInputChange}
            />
            {inputValue?.length > 0 ? (
              <Image
                alt="icon-close"
                src={IconClose}
                onClick={handleCancelSearch}
                Cursor="pointer"
              />
            ) : (
              <Image alt="icon-search" src={IconSearch} Cursor="pointer" />
            )}
          </SearchInput>
        </ContainerFlex>
        <PokeList pokemonList={filteredList || []} />
      </ContainerFlex>
    </>
  );
};
