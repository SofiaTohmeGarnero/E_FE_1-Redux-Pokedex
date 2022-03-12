export const quienEsMayor = (nombre1, edad1, nombre2, edad2) => {
    if (edad1 > edad2) {
        return `${nombre1} es mayor que ${nombre2}`;
    }else if(edad1 < edad2){
        return `${nombre1} es menor que ${nombre2}`;
    }else return `${nombre1} y ${nombre2} tienen la misma edad`
}