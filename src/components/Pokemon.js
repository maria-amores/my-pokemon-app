import { useEffect, useState } from 'react';
import './Pokemon.css';
import PokemonBasicInfo from './PokemonBasicInfo';

const Pokemon = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pokInfo, setPokInfo] = useState();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(response =>
      response
        .json()
        .then(data => {
          setPokInfo(data);
          setIsLoading(false);
          setHasError(false);
        })
        .catch(err => {
          setIsLoading(false);
          setHasError(true);
        })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <div>Loading information....</div>;

  if (hasError)
    return <div>There was an error fetching the Pokemon info. Please try again later...</div>;

  return (
    <div className="pokemon-container">
      <section className="pokemon-header">
        <img src={pokInfo.sprites.front_default} alt={`Pokemon ${pokInfo.name}`}></img>
        <h1>{pokInfo.name}</h1>
      </section>
      <PokemonBasicInfo pokemonInfo={pokInfo} />
    </div>
  );
};

export default Pokemon;
