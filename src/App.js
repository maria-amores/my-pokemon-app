import { useState } from 'react';
import MainBar from './components/layout/MainBar';
import Pokemon from './components/Pokemon';

function App() {
  const [pokemonName, setPokemonName] = useState();

  const onSearchPokemon = name => {
    setPokemonName(name);
  };

  return (
    <div>
      <MainBar onSearch={onSearchPokemon} />
      <Pokemon pokemonName={pokemonName} />
    </div>
  );
}

export default App;
