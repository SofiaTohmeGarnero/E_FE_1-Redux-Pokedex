import React from "react";
import {useQuery} from "react-query";
import {getItemDetalle} from "../queries/items.queries";
import PropTypes from "prop-types";
import {Item} from "../types/item.types";

/**
 * Obtiene el id del poke item de la url de poke api
 * @author Digital House
 * @param {string} url la url que apunta a un poke item
 * @return {string} el id de la poke item
 */
export const extractItemId = (url: string): string => {
    return url.split("item")[1].replace("/","");
}

interface VistaItemProps {
    item: Item,
}

/**
 * Visualiza una item con su nombre y sus imagenes. Las imagenes son extraidas por medio de una llamada
 * extra a la api individual de poke items.
 *
 * Ej:
 * <pre>
 *     <VistaItem item={item} />
 *
 * </pre>
 *
 * @author Digital House
 * @param item El poke item a mostrar
 */
const VistaItem = ({item}: VistaItemProps) => {
    const idItem = extractItemId(item.url);
    const {
        data,
        isLoading,
        isError,
    } = useQuery(["item",idItem], () => getItemDetalle(idItem));

    if (isLoading) return <div>Cargando detalle del item...</div>
    if (isError) return <div>No se pudo cargar el detalle...</div>

    return data ? (
        <div>
            <h4>Item: {item.name}</h4>
            <img src={data.sprites.default} />
        </div>
    ): null;
}

VistaItem.propTypes = {
    item:
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
};

export default VistaItem;
