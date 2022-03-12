import React from "react";
import {extractCategoriaId} from "./ListadoCategoriasItem";
import {useQuery} from "react-query";
import {getItemCategory} from "../queries/items.queries";
import PropTypes from "prop-types";

// Documentar y agregar tipos
const ListadoItems = ({categoria}) => {
    const idCategoria = extractCategoriaId(categoria.url);
    const {
        data,
        isLoading,
        isError,
    } = useQuery(["itemCategory",idCategoria], () => getItemCategory(idCategoria));

    if (isLoading) return <div>Cargando items...</div>
    if (isError) return <div>No se pudo cargar los items...</div>

    return data ? (
        <div >
            <h4>Items</h4>

            {data.items.map(item =>
                <div key={item.name}>{item.name}</div>
            )}
        </div>
    ): null;
}

// Incorporar validacion de tipos

export default ListadoItems;
