const baseURL = 'https://pokeapi.co/api/v2';

async function getPokemonAndEvolution(pokemonName) {
  try {
    // Paso 1: Obtener los detalles del Pokémon
    const pokemonResponse = await fetch(`${baseURL}/pokemon/${pokemonName}`);
    const pokemonData = await pokemonResponse.json();
    
    const pokemon = {
      name: pokemonData.name,
      type: pokemonData.types[0].type.name // Solo tomamos el primer tipo
    };

    // Paso 2: Obtener los detalles de la evolución del Pokémon (si tiene)
    const speciesResponse = await fetch(`${baseURL}/pokemon-species/${pokemonData.id}`);
    const speciesData = await speciesResponse.json();
    
    let evolution = null;
    if (speciesData.evolves_from_species) {
      const evolutionResponse = await fetch(speciesData.evolves_from_species.url);
      const evolutionData = await evolutionResponse.json();
      
      evolution = {
        name: evolutionData.name,
        type: 'Unknown' // Tipo desconocido para la evolución
      };

      // Obtener el tipo de la evolución
      const evolutionPokemonResponse = await fetch(`${baseURL}/pokemon/${evolution.name}`);
      const evolutionPokemonData = await evolutionPokemonResponse.json();
      evolution.type = evolutionPokemonData.types[0].type.name; // Tipo de la evolución
    }

    // Paso 3: Mostrar los resultados
    console.log('--- Pokemon ---');
    console.log('Nombre:', pokemon.name);
    console.log('Tipo:', pokemon.type);

    if (evolution) {
      console.log('--- Evolución ---');
      console.log('Nombre:', evolution.name);
      console.log('Tipo:', evolution.type);
    } else {
      console.log('El Pokémon no tiene evolución.');
    }

  } catch (error) {
    console.log('Error al obtener detalles:', error);
  }
}

// Llamada de ejemplo
getPokemonAndEvolution('charmander');