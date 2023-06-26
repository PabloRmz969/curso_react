import heroes, {owners} from "./data/heroes";


const getHeroeById = (owner) =>  heroes.filter((heroe) => heroe.owner == owner);

console.log(getHeroeById('DC'));