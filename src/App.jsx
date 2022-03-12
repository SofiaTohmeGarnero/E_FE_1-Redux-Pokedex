import ListadoCategorias from "./components/ListadoCategorias";
import VistaCategoria from "./components/VistaCategoria";

import "./styles.css";
import {QueryClient, QueryClientProvider} from "react-query";
import ProviderCategorias from "./context/ContextoCategorias";

export default function App() {

    return (
        <QueryClientProvider client={new QueryClient()}>
            <ProviderCategorias>
                <div className="App">
                    <h1>Inventario Pokemon</h1>
                    <div id="bandejaDeEntrada">
                        <ListadoCategorias/>
                        <VistaCategoria />
                    </div>
                </div>
            </ProviderCategorias>
        </QueryClientProvider>
    );
}
