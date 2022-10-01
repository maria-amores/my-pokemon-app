import PropTypes from 'prop-types';
import { convertToHeightFormat, convertToWeightFormat } from '../utils/common';
import './PokemonBasicInfo.scss';

const PokemonBasicInfo = ({ pokemonInfo }) => {
  return (
    <table className="pokemon-table-info">
      <tbody>
        <tr>
          <td>ID</td>
          <td>{pokemonInfo.id}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{convertToHeightFormat(pokemonInfo.height)}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{convertToWeightFormat(pokemonInfo.weight)}</td>
        </tr>
        <tr>
          <td>Abilities</td>
          <td className="pokemon-abilities">
            {pokemonInfo.abilities.map(ability => (
              <span key={`ability_${ability.ability.name}`}>{ability.ability.name}</span>
            ))}
          </td>
        </tr>
        <tr>
          <td>Type</td>
          <td className="pokemon-types">
            {pokemonInfo.types.map(type => (
              <span key={`type${type.type.name}`}>{type.type.name}</span>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

PokemonBasicInfo.propTypes = {
  pokemonInfo: PropTypes.object
};

export default PokemonBasicInfo;
