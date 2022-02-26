import React from 'react';
import GaugeChart from 'react-gauge-chart';
import StatGaugeProps from '../../../Models/Props/stat-gauge.props';
import { capitalizeFirstLetter } from '../../../Utils/StringUtils';
import './StatGauge.css';

const maxStat = 80;

function StatGauge({ statName, statValue }: StatGaugeProps) {
  const formatText = () => {
    return statValue.toString();
  };

  return (
    <div className="gauge">
      <p>{capitalizeFirstLetter(statName)}</p>
      <GaugeChart
        id={statName}
        percent={(statValue as number) / maxStat}
        animate={false}
        nrOfLevels={30}
        colors={['#fa930c', '#8EA686', '#21b9ff']}
        formatTextValue={formatText}
      />
    </div>
  );
}

export default StatGauge;
