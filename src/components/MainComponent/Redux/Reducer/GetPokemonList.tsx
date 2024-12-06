import { GET_FETCH_POKEMON_ERROR, GET_FETCH_POKEMON_START, GET_FETCH_POKEMON_SUCCESS } from "../Types/types";

  
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  
  const GetPokemonList = (state = initialState, action: any) => {
    switch (action.type) {
      case GET_FETCH_POKEMON_START:
        return { ...state, loading: true, error: null };
      case GET_FETCH_POKEMON_SUCCESS:
        return { ...state, loading: false, data: action.payload };
      case GET_FETCH_POKEMON_ERROR:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default GetPokemonList;
  