import React from "react";
import ListadoCategoriasItem, {extractCategoriaId} from "./ListadoCategoriasItem";
import {useQuery} from "react-query";
import {getItemCategory} from "../queries/items.queries";
import PropTypes from "prop-types";
import {Category} from "../types/category.types";
import VistaItem from "./VistaItem";

interface ListadoItemsProps {
    categoria: Category,
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
const ListadoItems = ({categoria}: ListadoItemsProps) => {
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
                <VistaItem key={item.name} item={item}/>
            )}
        </div>
    ): null;
}

ListadoCategoriasItem.propTypes = {
    categoria:
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
};

export default ListadoItems;
