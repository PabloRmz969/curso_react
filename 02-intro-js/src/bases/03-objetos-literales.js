const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        zip: '1531483',
        lat: 14.1516,
        lng: 31515
    }
};

const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona)


console.log(persona2);