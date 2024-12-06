import React, { useEffect } from "react";
import { RootState } from "../../config/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPokemonListAction } from "./Redux/Actions/GetPokemonList";

export const PokeList = () => {
  const dispatch = useDispatch;
  const FeaturesHereditary = useSelector(
    (state: RootState) => state.getPokemonList.data
  );
  const filters = { name: "charizard" };

  useEffect(() => {
    dispatch(getPokemonListAction(filters));
  }, []);
  return <div>PokeList</div>;
};
