import { useState } from 'react';
import MainBar from './components/layout/MainBar';
import Pokemon from './components/Pokemon';
import { isEmpty } from './utils/common';

function App() {
  const [pokemonName, setPokemonName] = useState();

  const onSearchPokemon = name => !isEmpty(name) && setPokemonName(name.toLowerCase());

  return (
    <div>
      <MainBar onSearch={onSearchPokemon} />
      <Pokemon pokemonName={pokemonName} />
    </div>
  );
}

export default App;
