// const saludar = function( nombre ) {
//     return `Hola ${ nombre }`;
// }
// const saludar2 = ( nombre ) => {
//     return `Hola ${ nombre }`;
// } 

// const saludar3 = ( nombre ) => `Hola ${ nombre }`;
// const saludar4 = () => `Hola mundo`;

// console.log( saludar("Goku") );
// console.log( saludar2("Naruto") );
// console.log( saludar3("Avatar") );
// console.log( saludar4 );

export const getUser = () => {
    return {
        uid: 1352,
        nickname: "CesarRubric" 
    }
}

//Tarea 
// 1. Transformar  a función de flecha
// 2. Retornar objeto implicito
// 3. Probar

export const getUserActivo = ( name ) =>
    ({
        uid: 1352,
        nickname: name
    })

//console.log( getUserActivo("KillMonster666") );