import React, {useContext} from "react";
import {ContextoCategorias} from "../context/ContextoCategorias";
import ListadoItems from "./ListadoItems";

/**
 * Visualiza la categoria seleccionada en el contexto con una lista de items
 *
 * Ej:
 * <pre>
 *     <VistaCategoria />
 *
 * </pre>
 *
 * @author Digital House
 */
const VistaCategoria = () => {
    const { categoriaSeleccionada } = useContext(ContextoCategorias);
    if (!categoriaSeleccionada) return null;

    return (
        <div id="vistaCategoria">
            <h3 className="titulo">Categoria: {categoriaSeleccionada.name}</h3>
            <ListadoItems categoria={categoriaSeleccionada} />
        </div>
    )
};

export default VistaCategoria;
