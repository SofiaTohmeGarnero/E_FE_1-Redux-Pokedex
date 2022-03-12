import React from "react";
import PropTypes from "prop-types";
import {Mensaje} from "../types/message";

// Creamos una interfaz para tipar nuestras props del componente
interface VistaMensajeProps {
    mensaje?: Mensaje // Prestar atencion en el ? que nos permite utilzar el undefined
}

const VistaMensaje = ({ mensaje }: VistaMensajeProps) =>
    mensaje ? (
        <div id="vistaMensaje">
            <h3 className="titulo">{mensaje.asunto}</h3>
            <strong>
               {mensaje.remitente.nombre} {mensaje.remitente.apellido} ({mensaje.email})
            </strong>
            <p>{mensaje.texto}</p>
        </div>
    ) : null;

// Seguimos utilizando la validación de prop types
VistaMensaje.propTypes = {
    mensaje: PropTypes.shape({
        asunto: PropTypes.string.isRequired,
        remitente: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        texto: PropTypes.string.isRequired
    })
};

export default VistaMensaje;
