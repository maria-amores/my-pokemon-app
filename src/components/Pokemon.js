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

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(response =>
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
  }, [pokemonName]);

  if (isLoading) return <LoadingSpinner />;

  if (hasError)
    return (
      <div className="pokemon-error">
        <p>There was an error getting the Pokemon info. Please try again later...</p>
      </div>
    );

  return (
    <div className="pokemon-container">
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
