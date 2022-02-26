import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import { isMobile } from 'react-device-detect';
import StatGaugeProps from '../../../Models/Props/stat-gauge.props';
import { capitalizeFirstLetter } from '../../../Utils/StringUtils';
import './Stat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';

const maxStat = 80;

function StatGauge({ statName, statValue, color }: StatGaugeProps) {
  return (
    <div className="stat-container">
      <CircularProgressbar
        value={statValue as number}
        maxValue={80}
        text={`${capitalizeFirstLetter(statName)}: ${statValue.toString()}`}
        strokeWidth={6}
        styles={{
          path: {
            stroke: color,
            strokeLinecap: 'butt',
          },
          text: {
            fill: '#fff',
            fontSize: '0.5em',
          },
        }}
      />
    </div>
  );
}

export default StatGauge;
