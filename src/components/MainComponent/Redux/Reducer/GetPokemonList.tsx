import { AxiosError, AxiosResponse } from "axios";
import {
  GET_FETCH_POKEMON_ERROR,
  GET_FETCH_POKEMON_START,
  GET_FETCH_POKEMON_SUCCESS,
  RESET_LIST_POKEMON,
} from "../Types/types";
import { IGetPokemonListState } from "../../interfaces";

const initialState: IGetPokemonListState = {
  loading: false,
  data: [],
  error: false,
  errorData: null,
};

const GetPokemonList = (
  state = initialState,
  action: { type: string; payload?: AxiosResponse; error?: AxiosError }
): IGetPokemonListState => {
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
    case RESET_LIST_POKEMON:
      return initialState;
    default:
      return state;
  }
};

export default GetPokemonList;
