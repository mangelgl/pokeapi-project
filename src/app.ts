import { pokemonOptions, getPokemonNameById, getPokemonTypesById } from "./controllers/pokemonController";


async function processPokemon(number: number) {

    const pokemonList: pokemonOptions[] = [];
    
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

processPokemon(9).then( (pokemon) => console.log(pokemon) );