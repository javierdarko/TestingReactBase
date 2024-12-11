import React, { useState } from "react";
import { ContainerFlex, Text, Image } from "../styles";
import { AppDispatch, RootState } from "../../config/store";
import { useDispatch, useSelector } from "react-redux";
import IconReturn from "../images/arrow_back.svg";
import { useNavigate } from "react-router-dom";
import { resetSelectedPokemon } from "./Redux/Actions/getPokemonSearch";
import {
  defaultPokemonDetails,
  DETAILSPOKEMON,
  STAT_NAMES,
  StatName,
} from "../constants";

export const PokemonDetails = () => {
  const [isShiny, setIsShiny] = useState(false);
  const toggleShiny = () => {
    setIsShiny((prev) => !prev);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const Pokemon = useSelector(
    (state: RootState) =>
      state.getPokemonListSearch.data || defaultPokemonDetails
  );
  const DescriptionPokemon = useSelector(
    (state: RootState) => state.getPokemonListSearch.dataInfo
  );
  const DescriptionSpanish =
    DescriptionPokemon?.flavor_text_entries?.filter(
      (entry: { language: { name: string } }) => entry.language.name === "es"
    ) ?? [];
  console.log(DescriptionSpanish);
  const formatPokemonName = (name: string) => {
    return name
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };
  const formatWeight = (weight: number) => {
    const formattedWeight = new Intl.NumberFormat().format(weight);
    return `${formattedWeight} kg`;
  };
  const ReturnHome = () => {
    navigate("/");
    dispatch(resetSelectedPokemon());
  };

  return (
    <ContainerFlex FlexDir="column" Width="100hv" Gap="16px" Margin="24px">
      <ContainerFlex Justify="start" Align="start" Gap="4px">
        <Image
          src={IconReturn}
          alt="return-icon"
          onClick={ReturnHome}
          Cursor="pointer"
        />
        <Text
          TextDecoration="underline"
          DecorationColor="#00BFFF"
          Color="#00BFFF"
          Cursor="pointer"
          onClick={ReturnHome}
        >
          {DETAILSPOKEMON.RETURN}
        </Text>
      </ContainerFlex>
      <ContainerFlex
        Justify="start"
        Align="start"
        Gap="16px"
        Border="1px solid #00BFFF"
        Radius="20px"
      >
        <ContainerFlex
          Width="300px"
          FlexDir="column"
          Gap="4px"
          Radius=" 16px 0 0 16px"
          Background="#00BFFF"
          Padding="16px"
        >
          <Text FontSize="24px" TextAlign="center" FontWeight="700">
            {formatPokemonName(Pokemon?.name)}
          </Text>
          <Text FontWeight="700" TextAlign="center">
            {DETAILSPOKEMON.NUMBER + Pokemon.id}
          </Text>
          <ContainerFlex
            Background="#FFFFFF"
            Width="200px"
            Height="200px"
            Radius="16px"
            Border="1px solid #00BFFF"
            TextAlign="center"
          >
            {Pokemon?.sprites.versions && (
              <Image
                Width="200px"
                Height="200px"
                src={
                  isShiny
                    ? Pokemon?.sprites.other?.["official-artwork"]
                        .front_shiny ?? ""
                    : Pokemon?.sprites.other?.["official-artwork"]
                        .front_default ?? ""
                }
                alt={isShiny ? "front_shiny" : "front_default"}
              />
            )}
          </ContainerFlex>
          <Text
            FontWeight="700"
            TextDecoration="underline"
            Cursor="pointer"
            onClick={toggleShiny}
            TextAlign="center"
          >
            {isShiny ? "Mostrar Normal" : "Mostrar Shiny"}
          </Text>
          <ContainerFlex FlexDir="column" Gap="4px" Width="300px">
            {Pokemon?.stats?.map((stat, index) => (
              <Text key={index} FontWeight="700">
                {STAT_NAMES[stat.stat.name as StatName]}: {stat.base_stat}
              </Text>
            ))}
            <Text FontWeight="700">
              {DETAILSPOKEMON.TYPE}
              {Pokemon?.types?.map((type, index) => (
                <Text FontWeight="700" key={index}>
                  {formatPokemonName(type.type.name)}
                  {index < Pokemon.types.length - 1 && ", "}
                </Text>
              ))}
            </Text>
            <Text FontWeight="700">
              {DETAILSPOKEMON.WEIGHT + formatWeight(Pokemon.weight)}
            </Text>
          </ContainerFlex>
        </ContainerFlex>
        <ContainerFlex
          Justify="start"
          Align="start"
          Padding="16px"
          Gap="4px"
          Width="auto"
          FlexDir="column"
        >
          <ContainerFlex Justify="start" FlexWrap="wrap" Gap="4px">
            {DescriptionSpanish?.slice(0, 5).map((type: any, index: number) => (
              <Text
                FontWeight="700"
                key={index}
              >{`"${type.flavor_text}"`}</Text>
            ))}
          </ContainerFlex>
          <ContainerFlex BorderBottom="1px solid #00BFFF" />
          <ContainerFlex Justify="start" FlexWrap="wrap" Gap="4px">
            <Text FontWeight="700">{DETAILSPOKEMON.ABILITIES}</Text>
            {Pokemon?.abilities?.map((type, index) => (
              <Text key={index}>
                {formatPokemonName(type.ability.name)}
                {index < Pokemon.abilities.length - 1 && ", "}
              </Text>
            ))}
          </ContainerFlex>
          <ContainerFlex Justify="start" FlexWrap="wrap" Gap="4px">
            <Text FontWeight="700">{DETAILSPOKEMON.MOVESET}</Text>
            {Pokemon?.moves?.slice(0, 50).map((type, index) => (
              <Text key={index}>
                {formatPokemonName(type.move.name)}
                {index < Pokemon.moves.slice(0, 50).length - 1 && ", "}
              </Text>
            ))}
          </ContainerFlex>
        </ContainerFlex>
      </ContainerFlex>
    </ContainerFlex>
  );
};
