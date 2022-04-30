import Button from '@mui/material/Button/Button';
import React, { useState } from 'react';
import { getRandomCharacter } from '../../../Services/character.service';
import { getVehicle } from '../../../Services/vehicle.service';
import { getRandomInt } from '../../../Utils/RandomNumberGenerator';
import OptionSelection from './OptionSelection/option-selection.component';

const stats = [
  'drift',
  'acceleration',
  'speed',
  'weight',
  'handling',
  'offroad',
  'miniturbo',
];

const getRandomStat = () => stats[getRandomInt(stats.length)];

function QuizQuestion() {
  const [optionA, setOptionA] = useState(getRandomCombo());
  const [optionB, setOptionB] = useState(getDistinctRandomCombo(optionA));
  const [selected, setSelected] = useState(false);
  const [stat, setStat] = useState(getRandomStat);
  const [score, setScore] = useState(0);

  const newQuestion = () => {
    setSelected(false);
    setOptionA(getRandomCombo);
    setOptionB(getDistinctRandomCombo(optionA));
    setStat(getRandomStat);
  };

  const optionSelected = (option: { name: string; vehicle: string }) => {
    setSelected(true);
    if (1 === 0) {
        setScore(score + 1);
    }
  };

  return (
    <div className="component">
      <header className="component-header">
        <div className="page-content">
          <h2 className="name main">Which combo has the higher {stat} stat?</h2>
          <div style={{ paddingBottom: '15px' }} />
          <div style={{ width: '50%', display: 'inline-block' }}>
            <OptionSelection
              combo={optionA}
              selectOption={() => optionSelected(optionA)}
              selected={selected}
              stat={stat}
            />
          </div>
          <div style={{ width: '50%', display: 'inline-block' }}>
            <OptionSelection
              combo={optionB}
              selectOption={() => optionSelected(optionB)}
              selected={selected}
              stat={stat}
            />
          </div>
          {selected ? (
            <>
              <p>Score: {score}</p>
              <Button
                variant="contained"
                className="fullWidth"
                onClick={newQuestion}
              >
                Next Question
              </Button>
            </>
          ) : (
            <p>Score: {score}</p>
          )}
        </div>
      </header>
    </div>
  );
}

function getRandomCombo(): { name: string; vehicle: string } {
  const character = getRandomCharacter('');
  const vehicle = getVehicle(character.class);

  const combo = { name: character.name, vehicle };
  return combo;
}

function getDistinctRandomCombo(existingCombo: {
  name: string;
  vehicle: string;
}): { name: string; vehicle: string } {
  const combo = getRandomCombo();

  if (combo.name === existingCombo.name) {
    return getDistinctRandomCombo(existingCombo);
  }

  return combo;
}

export default QuizQuestion;
