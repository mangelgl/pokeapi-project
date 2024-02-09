import { pokemonOptions, getPokemonNameById, getPokemonTypesById } from "./controllers/pokemonController";

const pokemonList: pokemonOptions[] = [];

const promises = [];

/**
 * TODO: Averiguar por qué no funciona, se ejecuta pero no muestra la lista {id: index, name: pokemon, type: types}
 */
for (let index = 1; index <= 3; index++) {
    
    const promise = getPokemonNameById(index)
        .then( (pokemon: string) => {
            getPokemonTypesById(index)
                .then((types: string[]) => {                        
                    pokemonList.push({id: index, name: pokemon, type: types});
                })
                .catch( (err) => console.error(`An error has ocurred: ${err}`) );
                
        })
        .catch( (err) => console.error(`An error has ocurred: ${err}`) );

    promises.push(promise);
}

Promise.all(promises)
    .then( () => {
        pokemonList.sort( (a, b) => a.id - b.id);
        pokemonList.forEach( (pokemon) => console.log({pokemon}) );
    })
    .catch( (err) => console.error(`An error has ocurred: ${err}`) );