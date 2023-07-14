import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());
        // TODO: realizar petición http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto?limit=10&offset=${page * 10}`); 
        // const data = resp.json();

        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        dispatch(setPokemons({pokemons: data.results, page: page + 1}));
        console.log(data);
    }
}