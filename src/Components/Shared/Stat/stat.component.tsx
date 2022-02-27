import React from 'react';
import KartStats from '../../../Models/kart-stats.model';
import { capitalizeFirstLetter } from '../../../Utils/StringUtils';
import './Stat.css';
import StatGauge from './stat-gauge.component';

function Stat(prop: KartStats) {
  const stats = Object.keys(prop);
  return (
    <div>
      {stats.map((stat: string) => {
        // eslint-disable-next-line react/destructuring-assignment
        const value: string | number = prop[stat as keyof KartStats];
        if (stat === 'driftType') {
          return (
            <p key={`${stat}-p`}>
              {capitalizeFirstLetter(value as string)} drift
            </p>
          );
        }
        return (
          <StatGauge key={`${stat}-gauge`} statName={stat} statValue={value} />
        );
      })}
    </div>
  );
}

export default Stat;
