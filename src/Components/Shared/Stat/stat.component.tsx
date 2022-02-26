import React from 'react';
import Stats from '../../../Models/stats.model';
import { capitalizeFirstLetter } from '../../../Utils/StringUtils';
import './Stat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StatGauge from './stat-gauge.component';

const barColors: { [index: string]: string } = {
  speed: '#FF6600',
  weight: '#CFB300',
  acceleration: '#00FF66',
  handling: '#099FFF',
  drift: '#CC00FF',
  offroad: '#FF0099',
  miniturbo: '#00D4D4',
};

function Stat(prop: Stats) {
  const stats = Object.keys(prop);
  return (
    <div>
      {stats.map((stat: string) => {
        // eslint-disable-next-line react/destructuring-assignment
        const value: string | number = prop[stat as keyof Stats];
        if (stat === 'driftType') {
          return (
            <p key={`${stat}-p`}>
              {capitalizeFirstLetter(value as string)} drift
            </p>
          );
        }
        return (
          <StatGauge
            key={`${stat}-gauge`}
            statName={stat}
            statValue={value}
            color={barColors[stat]}
          />
        );
      })}
    </div>
  );
}

export default Stat;
