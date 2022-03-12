import React from "react";
import PropTypes from "prop-types";

// Documentar
export const extractCategoriaId = (url) => {
    return url.split("item-category")[1].replace("/","");
}


// Documentar y Agregar Tipos para las props
const ListadoCategoriasItem = ({ categoria, seleccionarCategoria }) =>
    <div onClick={() => seleccionarCategoria(categoria)}>
        <strong>{categoria.name}</strong>
        <small> {categoria.url}</small>
    </div>


// Agregar prop-types para validar

export default ListadoCategoriasItem;
