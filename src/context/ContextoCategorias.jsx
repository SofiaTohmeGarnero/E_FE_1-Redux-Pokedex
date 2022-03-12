import React, { useReducer } from "react";

// Debemos tipar nuestro estado inicial.
const initialState = {
    categoriaSeleccionada: null,
};

const reducer = (state, action) => {
    // Implementar el reducer
};

export const ContextoCategorias = React.createContext();

const ProviderCategorias = ({ children }) => {
    const [categoriasState, dispatch] = useReducer(reducer, initialState);

    // Debemos tipar la siguiente funcion que carga las categorias
    const seleccionarCategoria = (categoria) => {
        dispatch({
            type: 'SELECCIONAR_CATEGORIA',
            payload: {
                categoria
            },
        });
    };

    return (
        <ContextoCategorias.Provider
            value={{
                categoriasState,
                seleccionarCategoria,
            }}
        >
            {children}
        </ContextoCategorias.Provider>
    );
};

export default ProviderCategorias;