import {Sprite} from "./sprite.types";

/**
 * Represents a poke-item
 *
 * @author Digital House
 * @see https://pokeapi.co/api/v2/item
 */
export interface Item {
    name: string;
    url: string;
}

/**
 * Represents a item with their full data model
 *
 * @author Digital House
 * @see https://pokeapi.co/api/v2/item/1
 */
export interface ItemsWithProps extends Item{
    sprites: Sprite;
}