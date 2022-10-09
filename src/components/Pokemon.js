import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from './common/LoadingSpinner';
import PokemonBasicInfo from './PokemonBasicInfo';
import PokemonStats from './PokemonStats';
import './Pokemon.scss';

const Pokemon = ({ pokemonName = 'pikachu' }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pokInfo, setPokInfo] = useState();

  const getPokemon = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const pokemonData = await response.json();

      if (pokemonData) {
        setPokInfo(pokemonData);
        setHasError(false);
      }
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonName]);

  if (isLoading) return <LoadingSpinner />;

  if (hasError)
    return (
      <div className="pokemon-error">
        <p>There was an error getting the Pokemon info. Please try again later...</p>
      </div>
    );

  return (
    <div className="pokemon-container" data-testid="pokemon-container">
      <section className="pokemon-header">
        <img src={pokInfo.sprites.front_default} alt={`Pokemon ${pokInfo.name}`}></img>
        <h1>{pokInfo.name}</h1>
      </section>
      <div className="pokemon-information">
        <PokemonBasicInfo pokemonInfo={pokInfo} />
        <PokemonStats statsInfo={pokInfo.stats} />
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  pokemonName: PropTypes.string
};

export default Pokemon;
