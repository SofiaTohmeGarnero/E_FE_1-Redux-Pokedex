import {Persona} from "./persona";

export interface Mensaje {
    id: number,
    remitente: Persona,
    email: string,
    asunto: string,
    fecha: string,
    texto: string
}