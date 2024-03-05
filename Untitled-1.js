const baseURL = 'https://pokeapi.co/api/v2';

// a. Obtener detalles de un Pokémon por nombre
async function getPokemonDetailsByName(name) {
  try {
    const response = await fetch(`${baseURL}/pokemon/${name}`);
    const data = await response.json();
    console.log('Detalles de ' + name + ':', data);
  } catch (error) {
    console.log('Error al obtener detalles:', error);
  }
}

// Llamada de ejemplo
getPokemonDetailsByName('pikachu');

// b. Obtener habilidades de un Pokémon específico
async function getPokemonAbilities(name) {
  try {
    const response = await fetch(`${baseURL}/pokemon/${name}`);
    const data = await response.json();
    const abilities = data.abilities.map(ability => ability.ability.name);
    console.log('Habilidades de ' + name + ':', abilities);
  } catch (error) {
    console.log('Error al obtener habilidades:', error);
  }
}

// Llamada de ejemplo
getPokemonAbilities('charizard');

// c. Obtener información sobre un tipo específico de Pokémon
async function getPokemonByType(type) {
  try {
    const response = await fetch(`${baseURL}/type/${type}`);
    const data = await response.json();
    const pokemonOfType = data.pokemon.map(pokemon => pokemon.pokemon.name);
    console.log('Pokémon de tipo ' + type + ':', pokemonOfType);
  } catch (error) {
    console.log('Error al obtener Pokémon por tipo:', error);
  }
}

// Llamada de ejemplo
getPokemonByType('water');

// d. Obtener una lista de los primeros 50 Pokémon
async function getFirst50Pokemon() {
  try {
    const response = await fetch(`${baseURL}/pokemon?limit=50`);
    const data = await response.json();
    const pokemonList = data.results.map(pokemon => pokemon.name);
    console.log('Primeros 50 Pokémon:', pokemonList);
  } catch (error) {
    console.log('Error al obtener lista de Pokémon:', error);
  }
}

// Llamada de ejemplo
getFirst50Pokemon();