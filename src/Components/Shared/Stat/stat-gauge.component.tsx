import React from 'react';
import { RadialProgress } from 'react-radial-progress-indicator';
import StatGaugeProps from '../../../Models/Props/stat-gauge.props';
import { capitalizeFirstLetter } from '../../../Utils/StringUtils';
import './Stat.css';

function StatGauge({ statName, statValue }: StatGaugeProps) {
  const formatText = () => {
    return statValue;
  };

  return (
    <div className="stat-container">
      <div className="gauge">
        <RadialProgress
          steps={40}
          step={(statValue as number) / 2}
          duration={2000}
          ringThickness={0.15}
          ringFgColour={getBarColor(statValue as number)}
          text={formatText}
        />
      </div>
      <p className="stat-header">{capitalizeFirstLetter(statName)}</p>
    </div>
  );
}

function getBarColor(stat: number): string {
  if (stat < 40) {
    return '#CC3232';
  }
  if (stat < 60) {
    return '#E7B416';
  }

  return '#2DC937';
}

export default StatGauge;
