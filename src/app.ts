import { pokemonOptions, getPokemonNameById } from "./controllers/pokemonController";

const pokemonList: pokemonOptions[] = [];

const promises = [];
for (let index = 1; index <= 10; index++) {
    const promise = getPokemonNameById(index)
        .then( (pokemon: string) => {
            pokemonList.push({id: index, name: pokemon});
        });
    promises.push(promise);
}

Promise.all(promises)
    .then( () => {
        pokemonList.sort( (a, b) => a.id - b.id);
        pokemonList.forEach( (pokemon) => console.log({pokemon}) );
    }).catch( (err) => {
        console.error(`An error has ocurred: ${err}`);
    });