import { configureStore } from '@reduxjs/toolkit'
import { counterSlice, pokemonSlice } from './slices'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer
    },
})