export interface Ciudad {
    ciudad: string,
    region: string
}

export enum PersonaType {
   ENTRENADOR = "ENTRENADOR",
   AYUDANTE = "AYUDANTE",
   PROFESOR = "PROFESOR"
}

export interface Persona {
    nombre: string,
    apellido: string,
    type: PersonaType,
    ciudadDeNacimiento: Ciudad,
}