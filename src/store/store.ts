import {combineReducers} from "@reduxjs/toolkit";
import { createStore, compose } from 'redux';
import  PokemonReducer from '../reducers/PokemonReducer';

const rootReducer = combineReducers({
    // TODO add your reducer here
    pokemones: PokemonReducer
});

// Definimos un tipo para nuestra store o estado global
export type IRootState = ReturnType<typeof rootReducer>;


// Con esto declaramos los tipos del objeto window para poder obtener las ventajas de la redux extension
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer, composeEnhancers()
)