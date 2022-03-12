import React from 'react';
import './App.css';
import {personas} from "./modelo/personas";
import {quienEsMayor} from "./utiles/utiles";

function App() {
  // Tipificamos el array de numeros
  const edades:number[] = [15, 16, 23, 16]

  return (
    <div className="App">
        <div>
            <h3>Personas</h3>
            {personas.map(persona => {return (
              <div key={persona}>{persona}</div>
            )}) }
        </div>
        <div>
            <h3>Edades</h3>
            {edades.map(edad => {return (
                <div key={edad}>{edad}</div>
            )}) }
        </div>
        <div>
            <h3>Quien es Mayor</h3>
            <div >{quienEsMayor(personas[0], edades[0], personas[1], edades[1])}</div>
            <div >{quienEsMayor(personas[2], edades[2], personas[3], edades[3])}</div>
            <div >{quienEsMayor(personas[1], edades[1], personas[3], edades[3])}</div>
        </div>
    </div>
  );
}

export default App;
