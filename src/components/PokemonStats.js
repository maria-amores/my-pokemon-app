import { ResponsiveBullet } from '@nivo/bullet';

const PokemonStats = ({ statsInfo }) => {
  let data = [];

  data = statsInfo.map(stat => {
    return {
      id: stat.stat.name,
      ranges: [stat.base_stat],
      measures: [stat.base_stat]
    };
  });

  return (
    <div className="pokemon-stats">
      {data != null ? (
        <ResponsiveBullet
          data={data}
          margin={{ top: 10, right: 20, bottom: 20, left: 80 }}
          maxValue={100}
          measureSize={1}
          rangeColors="greens"
          titleAlign="start"
          titleOffsetX={-80}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default PokemonStats;
