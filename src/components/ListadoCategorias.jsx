import React from "react";
import {useQuery} from "react-query";
import {getItemCategories} from "../queries/items.queries";

const ListadoCategorias = () => {
    const {
        data: categorias,
        isLoading,
        isError,
    } = useQuery("itemCategories", getItemCategories);

    if (isLoading) return <div>Cargando categorias...</div>
    if (isError) return <div>No se pudo cargar categorias...</div>


    return (
        <div id="listadoCategorias">
            <div>Aqui debemos mostrar las categorias</div>
        </div>
    );
}

export default ListadoCategorias;
