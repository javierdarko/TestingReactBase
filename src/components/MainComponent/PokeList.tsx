import { ContainerFlex, ContainerGrid, Text } from "../styles";
import { ListPokemon } from "./interfaces";
import { POKELIST } from "../constants";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../config/store";
import { getPokemonListSearch } from "./Redux/Actions/getPokemonSearch";

export const PokeList = ({ pokemonList }: { pokemonList: ListPokemon[] }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handlePokemon = (url: string) => {
    dispatch(getPokemonListSearch(url));
  };

  return (
    <ContainerFlex FlexWrap="wrap" ScrollY="scroll">
      {pokemonList.length > 0 ? (
        pokemonList.map((item: ListPokemon, index: number) => (
          <ContainerGrid
            key={index}
            GridColumns="1fr 1fr"
            Justify="start"
            Height="60px"
            Width="300px"
            Border="yellow 1px solid"
            FlexWrap="wrap"
          >
            <Text Margin="8px">{item.name}</Text>
            <Text
              Margin="8px"
              onClick={() => handlePokemon(item.url)}
              Cursor="pointer"
            >
              {POKELIST.POKEMON}
            </Text>
          </ContainerGrid>
        ))
      ) : (
        <Text>No se encontraron Pokémon que coincidan con la búsqueda.</Text>
      )}
    </ContainerFlex>
  );
};
