import axios, { AxiosError, AxiosResponse } from "axios";
import { AppDispatch } from "../../../../config/store";
import { URL } from "../../../../indexurl";
import {
  GET_FETCH_POKEMON_ERROR,
  GET_FETCH_POKEMON_START,
  GET_FETCH_POKEMON_SUCCESS,
} from "../Types/types";

export const fetchPokemonStart = () => ({
  type: GET_FETCH_POKEMON_START,
});

export const fetchPokemonSuccess = (data: AxiosResponse) => ({
  type: GET_FETCH_POKEMON_SUCCESS,
  payload: data,
});

export const fetchPokemonError = (error: AxiosError) => ({
  type: GET_FETCH_POKEMON_ERROR,
  error: error,
});

export const getPokemonListAction = (pokemon?: string | number) => {
  const headers = {
    Accept: "application/json",
  };
  const endpoint =
    typeof pokemon === "number"
      ? `${URL.Pokemon}${pokemon}`
      : pokemon
      ? `${URL.Pokemon}${pokemon}`
      : `${URL.ListPokemon}`;
  return async (dispatch: AppDispatch) => {
    dispatch(fetchPokemonStart());
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_POKE_API_URL}${endpoint}`,
        { headers }
      );
      dispatch(fetchPokemonSuccess(response));
    } catch (error) {
      dispatch(fetchPokemonError(error as AxiosError));
    }
  };
};
