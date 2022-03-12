import React from "react";
import PropTypes from "prop-types";

// Debemos tipar las props de nuestro componente
// Quiza podemos utilizar la interfaz ya creada en mensajes ?

const ListadoMensajes = ({ mensajes = [], seleccionarMensaje }) => (
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
