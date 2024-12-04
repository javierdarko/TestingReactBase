import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import EjemploReducer from "../components/MainComponent/Redux/Reducer/EjemploReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  EjemploReducer: EjemploReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch;

export default store;
