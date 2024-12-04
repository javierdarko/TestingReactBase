import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../config/store";
import { decrement, increment } from "./Redux/Actions/EjemploReducerAccion";

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.EjemploReducer.value);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
