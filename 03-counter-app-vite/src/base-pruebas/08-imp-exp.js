import heroes,{ owners } from "../../data/heroes";

export const getHeroeById = (id) => {
    /*return heroes.find((heroe) =>{ 
        if(heroe.id == id){
            return true;
        } else {
            return false;
        }
    });*/
    return heroes.find((heroe) => heroe.id === id);
}

//console.log(getHeroeById(8));

export const getHeroeByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
}


//console.log(getHeroeByOwner('DC'));

//console.log(owners);