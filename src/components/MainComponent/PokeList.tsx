import { ButtonGenerals, ContainerFlex, ContainerGrid, Text } from "../styles";
import { ListPokemon } from "./interfaces";
import { POKELIST } from "../constants";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../config/store";
import {
  getPokemonListDescription,
  getPokemonListSearchByUrl,
} from "./Redux/Actions/getPokemonSearch";
import { useNavigate } from "react-router-dom";
import { getPokemonListAction } from "./Redux/Actions/GetPokemonList";
import { useEffect } from "react";
import { url } from "inspector";

export const PokeList = ({ pokemonList }: { pokemonList: ListPokemon[] }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const formatPokemonName = (name: string) => {
    return name
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };
  const handlePokemon = (data: ListPokemon) => {
    dispatch(getPokemonListSearchByUrl(data.url));
    dispatch(getPokemonListDescription(url.name));
    navigate("/PokemonDetails");
  };
  useEffect(() => {
    dispatch(getPokemonListAction());
  }, [dispatch]);
  return (
    <ContainerFlex
      Justify="start"
      Align="start"
      FlexWrap="wrap"
      OverflowY="scroll"
      Height="450px"
      Border="2px solid #FF2400"
      Radius="4px"
      Margin="16px"
      Gap="4px"
    >
      {pokemonList.length > 0 ? (
        pokemonList.map((item: ListPokemon, index: number) => (
          <ContainerGrid
            key={index}
            GridColumns="1fr 1fr"
            Justify="start"
            Height="60px"
            Width="300px"
            FlexWrap="wrap"
          >
            <Text Margin="8px">{formatPokemonName(item.name)}</Text>
            <ButtonGenerals onClick={() => handlePokemon(item)}>
              {POKELIST.POKEMON}
            </ButtonGenerals>
          </ContainerGrid>
        ))
      ) : (
        <ContainerFlex>
          <Text>No se encontraron Pokémon que coincidan con la búsqueda.</Text>
        </ContainerFlex>
      )}
    </ContainerFlex>
  );
};
