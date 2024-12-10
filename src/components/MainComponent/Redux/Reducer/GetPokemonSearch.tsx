import { AxiosError, AxiosResponse } from "axios";
import {
  GET_SELECT_POKEMON_ERROR,
  GET_SELECT_POKEMON_START,
  GET_SELECT_POKEMON_SUCCESS,
  RESET_SELECTED_POKEMON,
  UPDATE_SEARCH_INPUT,
} from "../Types/types";
import { IGetPokemonListSearch } from "../../interfaces";

const initialState: IGetPokemonListSearch = {
  loading: false,
  data: null,
  error: false,
  errorData: null,
  dataInput: "",
};

const getPokemonListSearch = (
  state = initialState,
  action: {
    type: string;
    payload?: AxiosResponse;
    error?: AxiosError;
    item?: null | string;
  }
): IGetPokemonListSearch => {
  switch (action.type) {
    case GET_SELECT_POKEMON_START:
      return { ...state, loading: true };
    case GET_SELECT_POKEMON_SUCCESS:
      return { ...state, loading: false, data: action.payload?.data };
    case GET_SELECT_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorData: action.error ?? null,
      };
    case UPDATE_SEARCH_INPUT:
      return { ...state, loading: false, dataInput: action.item ?? "" };
    case RESET_SELECTED_POKEMON:
      return initialState;
    default:
      return state;
  }
};

export default getPokemonListSearch;
