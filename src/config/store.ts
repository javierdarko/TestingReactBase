import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import GetPokemonList from "../components/MainComponent/Redux/Reducer/GetPokemonList";
import getPokemonListSearch from "../components/MainComponent/Redux/Reducer/GetPokemonSearch";
import SetColorMode from "../components/MainComponent/Redux/Reducer/SetColorMode";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["getPokemonListSearch", "GetPokemonList"],
};
const rootReducer = combineReducers({
  GetPokemonList: GetPokemonList,
  getPokemonListSearch: getPokemonListSearch,
  SetColorMode: SetColorMode,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
