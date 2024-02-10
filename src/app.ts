import { PokemonOptions, getPokemonNameById, getPokemonTypesById, getInfoPokemonGeneration, pokemonEncounter } from "./controllers/pokemonController";

/**
 * Get pokemon id, name and type
 * 
 * @param number Number of pokemons
 * @returns Promise<pokemonOptions[]> List of pokemons with id, name and type
 */
async function processPokemon(number: number): Promise<PokemonOptions[]> {

    const pokemonList: PokemonOptions[] = [];
    
    for (let index = 1; index <= number; index++) {
        
        try {
            
            const name = await getPokemonNameById(index);
            const type = await getPokemonTypesById(index);
    
            pokemonList.push({id: index, name: name, type: type});        
        } catch (error) {
            console.error(`An error has ocurred: ${error}`);
        }
    }

    return pokemonList;
}

// processPokemon(9).then( (pokemon) => console.log(pokemon) );

// getInfoPokemonGeneration(1).then( (gen) => console.log(gen) );

pokemonEncounter().then( (pokemon) => console.log(`Oh no! ${pokemon} has appeared!`) );