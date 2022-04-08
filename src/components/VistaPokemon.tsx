import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {PokemonWithProps} from "../types/pokemon.types";
import {Sprite} from "../types/sprite.types";
import { useSelector } from "react-redux";
import { PokemonState } from '../reducers/PokemonReducer';
import { getPokemon } from "../queries/pokemon.queries";
import { useQuery } from "react-query";

const charmander: PokemonWithProps = {
    id: 4,
    name: 'Charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
    sprites: {
        "default": 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        other: {home: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png'}}
    } as Sprite

}


const VistaPokemon = ({nombrePokemon}:any) => { //todo: tipar bien
    const {data: pokemon, isSuccess, refetch} = useQuery("getPokemon", () => getPokemon(nombrePokemon));

    useEffect(()=>{
        refetch()
    },[nombrePokemon])
    
    // Obtener el pokemon seleccionado de redux utililando el hook selector y luego utilizar
    // la api que retorna la informacion de este pokemon.
    // Ah no olvides aprovechar una herramienta como React Query para facilitar el acceso!

    return (
        isSuccess ? (
            <div className="vistaPokemon">
                <h4>Pokemon: {pokemon?.name}</h4>
                <h5>#{pokemon?.id}</h5>
                <img src={pokemon?.sprites.other.home.front_default} />
            </div>
        ) : (
            null            
        )
        
    )
}

VistaPokemon.propTypes = {
    nombrePokemon: PropTypes.any
};

export default VistaPokemon;
