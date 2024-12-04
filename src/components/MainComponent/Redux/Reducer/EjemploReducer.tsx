import { DECREMENT, INCREMENT } from "../Types/types";

interface ExampleState {
  value: number;
}

const initialState: ExampleState = {
  value: 0,
};

const EjemploReducer = (
  state = initialState,
  action: { type: string }
): ExampleState => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export default EjemploReducer;
