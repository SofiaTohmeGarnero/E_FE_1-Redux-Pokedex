import React from "react";
import PropTypes from "prop-types";
import {Category} from "../types/category.types";

/**
 * Obtiene el id de la categoria de la url de poke api
 * @author Digital House
 * @param {string} url la url que apunta a una categoria
 * @return {string} el id de la categoria
 */
export const extractCategoriaId = (url: string): string => {
    return url.split("item-category")[1].replace("/","");
}

interface ListadoCategoriasItemProps {
    categoria: Category,
    seleccionarCategoria: (categoria: Category) => void
}

/**
 * Visualiza una categoria con su nombre y url
 *
 * Ej:
 * <pre>
 *     <ListadoCategoriasItem categoria={categoria}
 *                             seleccionarCategoria={(categoria) => {}}/>
 *
 * </pre>
 *
 * @author Digital House
 * @param categoria la categoria a mostrar
 * @param seleccionarCategoria una funcion que se ejecuta al hacer click en la categoria
 */
const ListadoCategoriasItem = ({ categoria, seleccionarCategoria }: ListadoCategoriasItemProps) =>
    <div onClick={() => seleccionarCategoria(categoria)}>
        <strong>{categoria.name}</strong>
        <small> {categoria.url}</small>
    </div>


ListadoCategoriasItem.propTypes = {
    categoria:
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
};

export default ListadoCategoriasItem;
