import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices";

import {startLoadingPokemons, setPokemons } from './store/slices';

export const PokemonApp = () => {
    const dispatch = useDispatch();
    const { isLoading, pokemons = [], page } = useSelector(state => state.pokemons);
    

    useEffect(() => {
        dispatch(getPokemons());
    }, [])
    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: {isLoading ? 'True' : 'False'}</span>
            <ul>
                {
                    pokemons.map(({name}) => (
                        <li key={name}>{name}</li>
                    ))
                }
                <li>Hola</li>
                <li>Hola</li>
                <li>Hola</li>
            </ul>
        </>
    )
}