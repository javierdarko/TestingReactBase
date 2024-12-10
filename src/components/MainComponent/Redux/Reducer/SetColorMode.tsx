import { SET_COLOR_MODE } from "../Types/types";

export interface IColorMode {
  isDark: boolean;
}

const initialState: IColorMode = {
  isDark: false, }

const SetColorMode = (
  state = initialState,
  action: { type: string; item?: boolean }
): IColorMode => {
  switch (action.type) {
    case SET_COLOR_MODE:
      return { ...state, isDark: action.item !== undefined ? action.item : state.isDark };
    default:
      return state;
  }
};

export default SetColorMode;
