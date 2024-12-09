import { Action } from "redux";
import { AxiosResponse, AxiosError } from "axios";

export interface CustomAction extends Action<string> {
  payload?: AxiosResponse | undefined;
  error?: AxiosError | undefined;
}
