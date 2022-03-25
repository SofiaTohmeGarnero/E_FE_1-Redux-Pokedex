import ListadoPokemons from "./components/ListadoPokemons";
import VistaPokemon from "./components/VistaPokemon";

import "./styles.css";
import BuscarPokemon from "./components/BuscarPokemon";

export default function App() {

    // Vamos a necesitar crear la store, con el estado inicial y configurar el provider para que toda
    // nuestra aplicacion tenga acceso al estado de Redux

    return (
        <div className="App">
            <h1>Pokédex</h1>
            <div id="bandejaDeEntrada">
                <div style={{display: 'flex', flexDirection:'column', flexGrow: 1}}>
                    <BuscarPokemon />
                    <div style={{display: 'flex', flexDirection:'row'}}>
                        <ListadoPokemons/>
                        <VistaPokemon />
                    </div>
                </div>
            </div>
        </div>
    );
}
