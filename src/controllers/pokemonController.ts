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