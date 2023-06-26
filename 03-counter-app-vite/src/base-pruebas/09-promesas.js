import { getHeroeById } from "./08-imp-exp";

// const promesa = new Promise(( resolve, reject )=>{
//     setTimeout(() => {
//         const heroe = getHeroeById(2);

//         resolve(heroe);
//         //reject('No se pudo encontrar el heroe');
//     }, 2000);
// });
// promesa.then((heroe)=>{
//     console.log('heroe',heroe);
// }).catch( err => console.warn( err ) );

export const getHeroeByIdAsync = ( id ) => {
    return new Promise(( resolve, reject )=>{
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe != undefined){
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 1000);
        
    });
}

getHeroeByIdAsync(5)
    .then( console.log )
    .catch( console.warn );
