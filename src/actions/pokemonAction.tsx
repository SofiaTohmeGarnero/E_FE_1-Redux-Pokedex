import { Action, ActionCreator } from "@reduxjs/toolkit";

//tipo de dato
export interface BuscarPokemonAction extends Action{
    type: "BUSCAR_POKEMON";
    name: string;
}


//fnc
export const BuscarPokemon_Action: ActionCreator<BuscarPokemonAction> = (name: string) => {
    return {
        type: "BUSCAR_POKEMON",
        name: name
    }
}

//export type BuscarPokemon_Action = | ReturnType<typeof BuscarPokemon_Action>; 
//estoy exportando la fnc de buscarpokemon, pero la renombro para idenficar que es un action