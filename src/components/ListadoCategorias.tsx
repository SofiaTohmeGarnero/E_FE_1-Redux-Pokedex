import React, {useContext} from "react";
import {useQuery} from "react-query";
import {getItemCategories} from "../queries/items.queries";
import ListadoCategoriasItem, {extractCategoriaId} from "./ListadoCategoriasItem";
import {ContextoCategorias} from "../context/ContextoCategorias";
import {Category} from "../types/category.types";

/**
 * Visualiza una lista de categorias de poke-items accediendo a la api de categorias
 *
 * Ej:
 * <pre>
 *     <ListadoCategorias />
 *
 * </pre>
 *
 * @author Digital House
 */
const ListadoCategorias = () => {
    const { seleccionarCategoria } = useContext(ContextoCategorias);

    const {
        data: categorias,
        isLoading,
        isError,
    } = useQuery("itemCategories", getItemCategories);

    if (isLoading) return <div>Cargando categorias...</div>
    if (isError) return <div>No se pudo cargar categorias...</div>


    return (
        <div id="listadoCategorias">
            {categorias && categorias.map((categoria: Category) => (
                <ListadoCategoriasItem categoria={categoria}
                                       seleccionarCategoria={seleccionarCategoria}
                                       key={extractCategoriaId(categoria.url)}/>
            ))}
        </div>
    );
}

export default ListadoCategorias;
