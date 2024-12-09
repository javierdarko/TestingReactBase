import { useEffect } from "react";
import { AppDispatch, RootState } from "../../config/store";
import { getPokemonListAction } from "./Redux/Actions/GetPokemonList";
import { useDispatch, useSelector } from "react-redux";
import { ContainerFlex, ContainerGrid, Image, Text } from "../styles";
import { ListPokemon } from "./interfaces";
import IconPoke from "../images/Poké_Ball_icon.svg";

export const PokeList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const PokedexList = useSelector(
    (state: RootState) => state.GetPokemonList?.data
  );
  console.log({ PokedexList });

  useEffect(() => {
    dispatch(getPokemonListAction());
  }, [dispatch]);

  const fetchPokemon = () => {
    dispatch(getPokemonListAction("charizard"));
  };

  return (
    <>
      <ContainerFlex FlexWrap="wrap" Justify="start" ScrollY="scroll">
        {PokedexList &&
          PokedexList?.map((item: ListPokemon) => {
            return (
              <ContainerGrid
                GridColumns="1fr 1fr"
                Justify="start"
                Height="60px"
                Width="300px"
                Border="yellow 1px solid"FlexWrap="wrap"
              >
                <Text Margin="8px">{item.name}</Text>
                <Text Margin="8px">{"Ver Pokémon"}</Text>
                {/* <Image
                    src={IconPoke}
                    alt="Pokémon-icon"
                    Width="14px"
                    Height="14px"
                    Cursor="pointer"
                  /> */}
              </ContainerGrid>
            );
          })}
      </ContainerFlex>
    </>
  );
};
