import { http } from "../plugins/http-client-plugin";

export interface pokemonOptions {
    id: number;
    name: string;
}

export const getPokemonNameById = async (id: number) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonName = http.get(url).then( (pokemon) => pokemon.name );
    
    return pokemonName;
}