import React from "react";

const BuscarPokemon = () => {

    // No olvidemos agregar el hook de redux para obtener el acceso al objeto dispatch

    const onBuscarClick = () => {
        // Aqui debemos despachar una acción utilizando el dispatch proveniente del hook de redux
        // Lo ideal seria crear una action con su tipo, en un archivo actions.
    }

    return (
        <div id="buscarPokemon">
            <label>Buscar pokemon</label>
            <input type="text" placeholder={"Pikachu, Charmander, Ditto, etc"}/>
            <button onClick={() => onBuscarClick()}>Buscar</button>
        </div>
    );
}

export default BuscarPokemon;
