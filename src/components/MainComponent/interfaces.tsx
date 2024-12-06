import { AxiosError } from "axios";

export type GetPokemonListState = {
  loading: boolean;
  data: any;
  error: boolean;
  errorData: AxiosError | null;
};
