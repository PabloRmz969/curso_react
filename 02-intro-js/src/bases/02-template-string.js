const nombre = 'Pablo';
const apellido = 'Ramírez';

const nombreCompleto = `${ nombre } ${ apellido }`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return `Hola soy ${ nombre }`;
}

console.log(getSaludo(nombre));

