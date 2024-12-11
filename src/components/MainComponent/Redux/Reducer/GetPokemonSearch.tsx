import { AxiosError, AxiosResponse } from "axios";
import {
  DESCRIPTION_POKEMON_ERROR,
  DESCRIPTION_POKEMON_START,
  DESCRIPTION_POKEMON_SUCCESS,
  GET_SELECT_POKEMON_ERROR,
  GET_SELECT_POKEMON_START,
  GET_SELECT_POKEMON_SUCCESS,
  RESET_SELECTED_POKEMON,
  UPDATE_SEARCH_INPUT,
} from "../Types/types";
import { IGetPokemonListSearch } from "../../interfaces";
import { defaultPokemonDetails } from "../../../constants";

const initialState: IGetPokemonListSearch = {
  loading: false,
  data: defaultPokemonDetails,
  error: false,
  errorData: null,
  dataInput: "",
  dataInfo: "",
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
      return { ...state, loading: true, error: false };
    case GET_SELECT_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload?.data,
      };
    case GET_SELECT_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorData: action.error ?? null,
      };
    case UPDATE_SEARCH_INPUT:
      return { ...state, loading: false, dataInput: action.item ?? "" };
    case DESCRIPTION_POKEMON_START:
      return { ...state, loading: true, error: false };
    case DESCRIPTION_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        dataInfo: action.payload?.data,
      };
    case DESCRIPTION_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorData: action.error ?? null,
      };
    case RESET_SELECTED_POKEMON:
      return initialState;
    default:
      return state;
  }
};

export default getPokemonListSearch;
