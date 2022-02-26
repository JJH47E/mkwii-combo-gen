import React from 'react';
import Stats from '../../../Models/stats.model';
import { capitalizeFirstLetter } from '../../../Utils/StringUtils';
import StatGauge from './stat-gauge.component';

function Stat(prop: Stats) {
  const stats = Object.keys(prop);
  return (
    <div>
      {stats.map((stat: string) => {
        // eslint-disable-next-line react/destructuring-assignment
        const value: string | number = prop[stat as keyof Stats];
        if (stat === 'driftType') {
          return <p>{capitalizeFirstLetter(value as string)} drift</p>;
        }
        return <StatGauge key={stat} statName={stat} statValue={value} />;
      })}
    </div>
  );
}

export default Stat;
