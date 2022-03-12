/**
 * Compara la edad de dos personas y retorna un string
 * indicando que persona es mayor, menor o si son iguales
 *
 * @author Digital House
 * @param {string} nombre1 el nombre de la primera persona a comparar
 * @param {number} edad1 la edad de la primera persona a comparar
 * @param {string} nombre2 el nombre de la segunda persona a comparar
 * @param {number} edad2 la edad de la segunda persona a comparar
 */
export const quienEsMayor = (nombre1: string, edad1: number, nombre2: string, edad2: number): string => {
    if (edad1 > edad2) {
        return `${nombre1} es mayor que ${nombre2}`;
    }else if(edad1 < edad2){
        return `${nombre1} es menor que ${nombre2}`;
    }else return `${nombre1} y ${nombre2} tienen la misma edad`
}