import React from "react";
import PropTypes from "prop-types";
import {PokemonWithProps} from "../types/pokemon.types";
import {Sprite} from "../types/sprite.types";

const charmander: PokemonWithProps = {
    id: 4,
    name: 'Charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
    sprites: {
        "default": 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        other: {home: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png'}}
    } as Sprite

}

const VistaPokemon = () => {

    // Obtener el pokemon seleccionado de redux utililando el hook selector y luego utilizar
    // la api que retorna la informacion de este pokemon.
    // Ah no olvides aprovechar una herramienta como React Query para facilitar el acceso!

    return charmander ? (
        <div className="vistaPokemon">
            <h4>Pokemon: {charmander.name}</h4>
            <h5>#{charmander.id}</h5>
            <img src={charmander.sprites.other.home.front_default} />
        </div>
    ): null;
}

VistaPokemon.propTypes = {
    item:
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
};

export default VistaPokemon;
