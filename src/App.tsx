import ListadoPokemons from "./components/ListadoPokemons";
import Vista from "./components/Vista";
import { Provider } from 'react-redux';
import { store } from './store/store';
import {QueryClient, QueryClientProvider} from "react-query";

import "./styles.css";
import BuscarPokemon from "./components/BuscarPokemon";

export default function App() {

    // Vamos a necesitar crear la store, con el estado inicial y configurar el provider para que toda
    // nuestra aplicacion tenga acceso al estado de Redux

    const queryClient = new QueryClient ();

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <div className="App">
                    <h1>Pokédex</h1>
                    <div id="bandejaDeEntrada">
                        <div style={{display: 'flex', flexDirection:'column', flexGrow: 1}}>
                            <BuscarPokemon />
                            <div style={{display: 'flex', flexDirection:'row'}}>
                                <ListadoPokemons/>
                                <Vista />
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        </QueryClientProvider>
    );
}
