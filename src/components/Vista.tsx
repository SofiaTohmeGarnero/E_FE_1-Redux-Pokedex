import { useSelector } from "react-redux";
import VistaPokemon from "./VistaPokemon";
import {IRootState} from "../store/store";

export default function Vista() {
  const nombrePokemon = useSelector<IRootState, string>(
    (state) => state.pokemones.busqueda
  ); 

  console.log(nombrePokemon);

  return nombrePokemon ? <VistaPokemon nombrePokemon={nombrePokemon} /> : null;
}
