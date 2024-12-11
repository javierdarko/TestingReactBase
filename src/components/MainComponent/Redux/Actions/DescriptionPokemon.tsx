import axios, { AxiosError, AxiosResponse } from "axios";
import { URL } from "../../../../indexurl";
import { AppDispatch } from "../../../../config/store";
import {
  DESCRIPTION_POKEMON_ERROR,
  DESCRIPTION_POKEMON_START,
  DESCRIPTION_POKEMON_SUCCESS,
} from "../Types/types";

export const fetchDesPokemonStart = () => ({
  type: DESCRIPTION_POKEMON_START,
});

export const fetchDesPokemonSuccess = (data: AxiosResponse) => {
  return {
    type: DESCRIPTION_POKEMON_SUCCESS,
    payload: data,
  };
};

export const fetchDesPokemonError = (error: AxiosError) => ({
  type: DESCRIPTION_POKEMON_ERROR,
  error: error,
});
export const getPokemonListDescription = (name: string) => {
  const headers = {
    Accept: "application/json",
  };
  const endpoint = `${URL.Specie}${name}`;
  return async (dispatch: AppDispatch) => {
    dispatch(fetchDesPokemonStart());
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_POKE_API_URL}${endpoint}`,
        { headers }
      );
      dispatch(fetchDesPokemonSuccess(response));
    } catch (error) {
      dispatch(fetchDesPokemonError(error as AxiosError));
    }
  };
};
