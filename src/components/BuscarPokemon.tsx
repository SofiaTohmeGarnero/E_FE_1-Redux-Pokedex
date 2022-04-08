import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {BuscarPokemon_Action} from '../actions/pokemonAction';

const BuscarPokemon = () => {
    const [nombrePoke, setNombrePoke] = useState<string>('');

    // No olvidemos agregar el hook de redux para obtener el acceso al objeto dispatch
    const dispatch = useDispatch();

    const onBuscarClick = () => {
        // Aqui debemos despachar una acción utilizando el dispatch proveniente del hook de redux
        // Lo ideal seria crear una action con su tipo, en un archivo actions.
        dispatch(BuscarPokemon_Action(nombrePoke));
    }

    return (
        <div id="buscarPokemon">
            <label>Buscar pokemon</label>
            <input type="text" placeholder={"Pikachu, Charmander, Ditto, etc"} onChange={(e)=>{setNombrePoke(e.target.value)}} />
            <button onClick={() => onBuscarClick()}>Buscar</button>
        </div>
    );
}

export default BuscarPokemon;
