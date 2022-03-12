import React, { useReducer } from "react";
import {Category} from "../types/category.types";

// Tipamos nuestras actions. Generalmente se suelen mover a un archivo llamado actions.ts o en nuestro caso
// categorias.actions.ts
interface Action {
    type: "SELECCIONAR_CATEGORIA"
    payload: {
        categoria: Category
    }
}

// Tipamos el estado, utilizando un tipo para la categoria y un tipo para la funcion
interface State {
    categoriaSeleccionada: Category | null;
    seleccionarCategoria: (categoria: Category) => void;
}

const initialState:State = {
    categoriaSeleccionada: null,
    seleccionarCategoria: (categoria: Category) => {}
};

const reducer = (state:State, action: Action) => {
   switch (action.type){
       case "SELECCIONAR_CATEGORIA":
           return {...state,
           categoriaSeleccionada: action.payload.categoria}
       default:
           return state;
   }
};

export const ContextoCategorias = React.createContext<State>(initialState);

const ProviderCategorias = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Debemos tipar la siguiente funcion que carga las categorias
    const seleccionarCategoria = (categoria: Category) => {
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
                categoriaSeleccionada: state.categoriaSeleccionada,
                seleccionarCategoria,
            }}
        >
            {children}
        </ContextoCategorias.Provider>
    );
};

export default ProviderCategorias;