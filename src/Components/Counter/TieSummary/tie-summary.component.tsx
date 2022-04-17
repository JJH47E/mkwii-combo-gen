import React, { useState } from 'react';
import { useParams } from 'react-router';
import CounterObject from '../../../Models/counter-object.model';
import {
  getCompetitiveInfo,
  updateMyScore,
  updateOpponentScore,
} from '../../../Services/cookie.service';
import '../../../Root.scss';
import Score from './score.component';

function TieSummary() {
  const { opponentName } = useParams() as unknown as CounterObject;
  if (!opponentName) {
    throw Error();
  }

  const tieDetails = getCompetitiveInfo().find(
    tie => tie.opponentName === opponentName
  );

  if (!tieDetails) {
    throw Error;
  }

  const [myScore, setMyScore] = useState(tieDetails.myScore);
  const [opponentScore, setOpponentScore] = useState(tieDetails.opponentScore);

  const incrementMyScore = () => {
    updateMyScore(tieDetails.opponentName, true);
    setMyScore(myScore + 1);
  };

  const decrementMyScore = () => {
    updateMyScore(tieDetails.opponentName, false);
    setMyScore(myScore - 1);
  };

  const incrementOpponentScore = () => {
    updateOpponentScore(tieDetails.opponentName, true);
    setOpponentScore(opponentScore + 1);
  };

  const decrementOpponentScore = () => {
    updateOpponentScore(tieDetails.opponentName, false);
    setOpponentScore(opponentScore - 1);
  };

  return (
    <div className="component">
      <header className="component-header">
        <h2 className="title">Me Vs {tieDetails.opponentName}</h2>
        <div className="page-content">
          <div className="score-box">
            <Score
              score={myScore}
              decrementFunc={decrementMyScore}
              incrementFunc={incrementMyScore}
            />
          </div>
          <div className="score-box">
            <Score
              score={opponentScore}
              decrementFunc={decrementOpponentScore}
              incrementFunc={incrementOpponentScore}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default TieSummary;
