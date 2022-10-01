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
          <td>{pokemonInfo.height}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{pokemonInfo.weight}</td>
        </tr>
        <tr>
          <td>Abilities</td>
          <td>
            {pokemonInfo.abilities.map(ability => (
              <p key={`ability_${ability.ability.name}`}>{ability.ability.name}</p>
            ))}
          </td>
        </tr>
        <tr>
          <td>Type</td>
          <td>
            {pokemonInfo.types.map(type => (
              <p key={`type${type.type.name}`}>{type.type.name}</p>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default PokemonBasicInfo;
