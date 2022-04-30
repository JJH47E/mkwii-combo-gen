/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import Button from '@mui/material/Button/Button';
import { getRandomCharacter } from '../../../Services/character.service';
import { getVehicle } from '../../../Services/vehicle.service';
import { getRandomInt } from '../../../Utils/RandomNumberGenerator';
import OptionSelection from './OptionSelection/option-selection.component';
import '../../../Root.scss';
import { getCharacterStats } from '../../../Services/chartacter-stats.service';
import {
  getStat,
  sumStats,
  getVehicleStats,
} from '../../../Services/vehicle-stats.service';
import {
  getQuizHighScore,
  setQuizHighScore,
} from '../../../Services/cookie.service';

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
  const [isEndGame, setEndGame] = useState(false);

  const newQuestion = () => {
    setSelected(false);
    setOptionA(getRandomCombo);
    setOptionB(getDistinctRandomCombo(optionA));
    setStat(getRandomStat);
  };

  const endGame = () => {
    if (score > getQuizHighScore()) {
      setQuizHighScore(score);
    }
    setEndGame(true);
  };

  const restartGame = () => {
    setScore(0);
    newQuestion();
    setEndGame(false);
  };

  const optionSelected = (option: { name: string; vehicle: string }) => {
    setSelected(true);
    const otherStat =
      option === optionA
        ? getStat(
            sumStats(
              getVehicleStats(optionB.vehicle).stats,
              getCharacterStats(optionB.name)
            ),
            stat
          )
        : getStat(
            sumStats(
              getVehicleStats(optionA.vehicle).stats,
              getCharacterStats(optionA.name)
            ),
            stat
          );
    const chosenStat = getStat(
      sumStats(
        getVehicleStats(option.vehicle).stats,
        getCharacterStats(option.name)
      ),
      stat
    );
    if (chosenStat >= otherStat) {
      // correct!
      setScore(score + 1);
    } else {
      // wrong!
      endGame();
    }
  };

  const shareScore = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'MKWii Quiz',
          text: `I scored ${score} on the MKWii Quiz`,
          url: `https://jjh47e.github.io/mkwii-combo-gen/quiz`,
        })
        .catch((error: string) => {
          throw new Error(error);
        });
    }
  };

  return (
    <div className="component">
      <header className="component-header">
        <div className="page-content">
          <h2 className="name main">Which combo has the higher {stat} stat?</h2>
          <div style={{ paddingBottom: '30px' }} />
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
              {isEndGame ? (
                <>
                  <h2>Game Over</h2>
                  <div style={{ paddingBottom: '15px' }} />
                  <p>Score: {score}</p>
                  <p>High score: {getQuizHighScore()}</p>
                  <div style={{ paddingBottom: '15px' }} />
                  <Button
                    variant="contained"
                    className="full-width"
                    onClick={restartGame}
                  >
                    Play Again
                  </Button>
                  <div style={{ paddingBottom: '15px' }} />
                  <Button
                    variant="contained"
                    className="full-width"
                    onClick={shareScore}
                  >
                    Share
                  </Button>
                </>
              ) : (
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
              )}
            </>
          ) : (
            <>
              <div style={{ paddingBottom: '15px' }} />
              <p>Score: {score}</p>
            </>
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
