import axios, { AxiosError, AxiosResponse } from "axios";
import {
  GET_SELECT_POKEMON_ERROR,
  GET_SELECT_POKEMON_START,
  GET_SELECT_POKEMON_SUCCESS,
  RESET_SELECTED_POKEMON,
  UPDATE_SEARCH_INPUT,
} from "../Types/types";
import { AppDispatch } from "../../../../config/store";

export const fetchSelectedPokemonStart = () => ({
  type: GET_SELECT_POKEMON_START,
});

export const fetchSelectedPokemonSuccess = (data: AxiosResponse) => {
  return {
    type: GET_SELECT_POKEMON_SUCCESS,
    payload: data,
  };
};

export const fetchSelectedPokemonError = (error: AxiosError) => ({
  type: GET_SELECT_POKEMON_ERROR,
  error: error,
});
export const getPokemonListSearchByUrl = (url: string) => {
  const headers = {
    Accept: "application/json",
  };
  return async (dispatch: AppDispatch) => {
    dispatch(fetchSelectedPokemonStart());
    try {
      const response = await axios.get(url, { headers });
      dispatch(fetchSelectedPokemonSuccess(response));
    } catch (error) {
      dispatch(fetchSelectedPokemonError(error as AxiosError));
    }
  };
};

export const updateSearchInput = (value: string) => ({
  type: UPDATE_SEARCH_INPUT,
  item: value,
});

export const resetSelectedPokemon = () => {
  return {
    type: RESET_SELECTED_POKEMON,
  };
};
