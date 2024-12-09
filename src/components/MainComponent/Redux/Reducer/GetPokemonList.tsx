import { AxiosError, AxiosResponse } from "axios";
import {
  GET_FETCH_POKEMON_ERROR,
  GET_FETCH_POKEMON_START,
  GET_FETCH_POKEMON_SUCCESS,
} from "../Types/types";
import { GetPokemonListState } from "../../interfaces";

const initialState: GetPokemonListState = {
  loading: false,
  data: [],
  error: false,
  errorData: null,
};

const GetPokemonList = (
  state = initialState,
  action: { type: string; payload?: AxiosResponse; error?: AxiosError }
): GetPokemonListState => {
  switch (action.type) {
    case GET_FETCH_POKEMON_START:
      return { ...state, loading: true };
    case GET_FETCH_POKEMON_SUCCESS:
      return { ...state, loading: false, data: action.payload?.data.results };
    case GET_FETCH_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorData: action.error ?? null,
      };

    default:
      return state;
  }
};

export default GetPokemonList;
