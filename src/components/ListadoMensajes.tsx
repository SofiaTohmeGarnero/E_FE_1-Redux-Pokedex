import React from "react";
import PropTypes from "prop-types";
import {Mensaje} from "../types/message";

// Creamos una interfaz para tipar nuestras props del componente
interface ListadoMensajesProps {
    mensajes: Mensaje[],
    seleccionarMensaje: (id: number) => void
}

const ListadoMensajes = ({ mensajes = [], seleccionarMensaje }: ListadoMensajesProps) => (
    <div id="listadoMensajes">
        {mensajes.map((mensaje) => (
            <div onClick={() => seleccionarMensaje(mensaje.id)} key={mensaje.id}>
                <strong>De: {mensaje.remitente.nombre} {mensaje.remitente.apellido}</strong>
                <p>Asunto: {mensaje.asunto}</p>
                <small> {mensaje.fecha}</small>
            </div>
        ))}
    </div>
);

// Seguimos utilizando la validación de prop types
ListadoMensajes.propTypes = {
    mensajes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            remitente: PropTypes.string.isRequired,
            asunto: PropTypes.string.isRequired,
            fecha: PropTypes.string.isRequired
        })
    )
};

export default ListadoMensajes;
