import { AxiosError } from "axios";

export type GetPokemonListState = {
  loading: boolean;
  data: ListPokemon[] | any[];
  error: boolean;
  errorData: null | AxiosError;
};

export interface ListPokemon {
  name: string;
  url: string;
}
