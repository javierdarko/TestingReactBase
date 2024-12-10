import { SET_COLOR_MODE } from "../Types/types";

export const fetchSelectColor = (value: boolean) => ({
  type: SET_COLOR_MODE,
  item: value,
});
