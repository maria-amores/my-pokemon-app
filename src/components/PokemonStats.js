import { ResponsiveBullet } from '@nivo/bullet';
import PropTypes from 'prop-types';

const PokemonStats = ({ statsInfo }) => {
  let data = [];

  data = statsInfo.map(stat => {
    return {
      id: stat.stat.name,
      ranges: [stat.base_stat],
      measures: [stat.base_stat]
    };
  });

  const theme = {
    fontSize: 14,
    axis: {
      ticks: {
        line: {
          stroke: '#ffffff',
          strokeWidth: 0
        },
        text: {
          fontSize: 6,
          fill: '#ffffff'
        }
      }
    }
  };

  return (
    <div className="pokemon-stats">
      {data != null ? (
        <ResponsiveBullet
          data={data}
          margin={{ top: 10, right: 20, bottom: 20, left: 105 }}
          maxValue={100}
          measureSize={1}
          measureColors="#FFDE00"
          rangeColors="#f8f7f7"
          spacing={15}
          titleAlign="end"
          titleOffsetX={-8}
          theme={theme}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

PokemonStats.propTypes = {
  statsInfo: PropTypes.array
};

export default PokemonStats;
