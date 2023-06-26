
// const persona = {
//     nombre: 'Tony',
//     edad: 45,
//     clave: 'Ironman',
//     rango: "Soldado"
// }

//const { edad, clave, nombre } = persona;

//console.log(nombre,edad,clave);

export const personaActiva = ({ clave, nombre, edad, rango = "Sargento" }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 48.1651,
            lng: -14.85
        }
    }
}

// const {nombreClave,anios,latlng: {lat, lng}} = personaActiva(persona);

// console.log(nombreClave,anios, lat, lng);

