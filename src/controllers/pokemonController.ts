import { http } from "../plugins/http-client-plugin";

export interface pokemonOptions {
    id: number;
    name: string;
    type: string[];
}

export const getPokemonNameById = async (id: number) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const name = http.get(url).then( (pokemon) => pokemon.name );
    
    return name;
}

export const getPokemonTypesById = async (id: number) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await http.get(url);
    const types = await res.types;
    const typesList: string[] = [];

    if (types.length > 1) {
        types.forEach( (tipo: any) => {
            typesList.push(tipo.type.name);
        });        
    } else {
        typesList.push(types[0].type.name);
    }
    
    return typesList;
}

export const getInfoPokemonGeneration = async (generation: number) => {

    const url = `https://pokeapi.co/api/v2/generation/${generation}`;
    const res = await http.get(url);
    const gen = [
        {
            id: res.id,
            main_region: res.main_region.name,
            generation_name: res.names.filter( (lang: any) => lang.language.name === 'es')[0].name,
            pokemon_species: res.pokemon_species,
            types: res.types
        }
    ];

    return gen;
}