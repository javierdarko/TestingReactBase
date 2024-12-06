import axios, { AxiosError, AxiosResponse } from "axios";
import {
  GET_FETCH_POKEMON_ERROR,
  GET_FETCH_POKEMON_START,
  GET_FETCH_POKEMON_SUCCESS,
} from "../Types/types";
import { AppDispatch } from "../../../../config/store";
import { URL } from "../../../../indexurl";
import StringUtils from "../../../utils";

export const fetchPokemonStart = () => {
  return {
    type: GET_FETCH_POKEMON_START,
  };
};

export const fetchPokemonSuccess = (data: AxiosResponse) => {
  return {
    type: GET_FETCH_POKEMON_SUCCESS,
    payload: data,
  };
};

export const fetchPokemonError = (error: AxiosError) => {
  return {
    type: GET_FETCH_POKEMON_ERROR,
    error: error,
  };
};

export const getPokemonListAction = (filters: { name: string }) => {
    const headers = {
      Accept: "application/json",
    };
    const params = {...filters};
    const queryString = StringUtils.jsonToQueryString(params);
    return async (dispatch: AppDispatch) => {
      dispatch(fetchPokemonStart());
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_POKE_API_URL}${URL.Pokemon}${queryString}`,
          { headers }
        );
        dispatch(fetchPokemonSuccess(response));
      } catch (error) {
        dispatch(fetchPokemonError(error as AxiosError));
      }
    };
  };
  