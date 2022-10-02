const mockPokemonResponse = {
  abilities: [
    {
      ability: { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
      is_hidden: false,
      slot: 1
    },
    {
      ability: { name: 'lightning-rod', url: 'https://pokeapi.co/api/v2/ability/31/' },
      is_hidden: true,
      slot: 3
    }
  ],
  height: 4,
  id: 25,
  name: 'pikachu',
  species: { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon-species/25/' },
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
    back_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png',
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',
    back_shiny_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png',
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    front_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png',
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
    front_shiny_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png',
    other: {
      dream_world: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
        front_female: null
      },
      home: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
        front_female:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/25.png',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/25.png',
        front_shiny_female:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/25.png'
      },
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
      }
    }
  },
  stats: [
    { base_stat: 35, effort: 0, stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' } },
    {
      base_stat: 55,
      effort: 0,
      stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' }
    },
    {
      base_stat: 40,
      effort: 0,
      stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' }
    },
    {
      base_stat: 50,
      effort: 0,
      stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' }
    },
    {
      base_stat: 50,
      effort: 0,
      stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' }
    },
    { base_stat: 90, effort: 2, stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' } }
  ],
  types: [{ slot: 1, type: { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' } }],
  weight: 60
};

export const mockGetPokemon = async url => {
  if (url.startsWith('https://pokeapi.co/api/v2/pokemon/') && url.includes('pikachu')) {
    return { ok: true, status: 200, json: () => mockPokemonResponse };
  }

  throw new Error(`Unhandled request: ${url}`);
};
