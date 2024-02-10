import { http } from '../plugins/http-client-plugin';
import { capitalizeFirstLetter } from '../utils/functions'

export interface PokemonOptions {
    id: number;
    name: string;
    type: string[];
}

export const getPokemonNameById = async (id: number) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);
    
    return pokemon.name;
}

export const getPokemonTypesById = async (id: number) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await http.get(url);
    const types = pokemonData.types.map( (type: any) => type.type.name );
    
    return types;
}

export const getInfoPokemonGeneration = async (generation: number) => {

    const url = `https://pokeapi.co/api/v2/generation/${generation}`;
    const generationData = await http.get(url);
    const info = {
        id: generationData.id,
        mainRegion: generationData.main_region.name,
        generationName: generationData.names.filter( (lang: any) => lang.language.name === 'es')[0].name,
        pokemonSpecies: generationData.pokemon_species,
        types: generationData.types
    };

    return info;
}

export const pokemonEncounter = async () => {
    
    const maxPokemonId: number = (await getInfoPokemonGeneration(1)).pokemonSpecies.length;
    const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
    const pokemonName = capitalizeFirstLetter( await getPokemonNameById(randomId) );
    
    return pokemonName;
}