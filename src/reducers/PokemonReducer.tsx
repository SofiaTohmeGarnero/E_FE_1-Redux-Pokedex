import { Reducer } from "@reduxjs/toolkit";
import { BuscarPokemonAction } from "../actions/pokemonAction";

export interface PokemonState {
  busqueda: string;
}

const initialState: PokemonState = { busqueda: "" };

const PokemonReducer: Reducer<PokemonState, BuscarPokemonAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "BUSCAR_POKEMON":
      return {
        ...state,
        busqueda: action.name,
      };
    default:
      return state;
  }
};

export default PokemonReducer;
