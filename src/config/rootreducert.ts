import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import GetPokemonList from "../components/MainComponent/Redux/Reducer/GetPokemonList";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["GetPokemonList"],
};

const rootReducer = combineReducers({
  GetPokemonList,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
