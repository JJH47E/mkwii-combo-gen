import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button } from '@mui/material';
import CounterObject from '../../../Models/counter-object.model';
import {
  getCompetitiveInfo,
  updateMyScore,
  updateOpponentScore,
} from '../../../Services/cookie.service';
import '../../../Root.scss';
import Score from './score.component';
import ErrorPage from '../../Error/error-page.component';

function TieSummary() {
  const navigate = useNavigate();

  const { opponentName } = useParams() as unknown as CounterObject;
  if (!opponentName) {
    return <ErrorPage />;
  }

  const tieDetails = getCompetitiveInfo().find(
    tie => tie.opponentName === opponentName
  );

  if (!tieDetails) {
    return <ErrorPage />;
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

  const toEdit = () => {
    navigate(`/mkwii-utils/counter/${tieDetails.opponentName}/edit`, {
      replace: false,
    });
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
          <div style={{ display: 'block', paddingTop: '45px' }}>
            <Button variant="contained" onClick={toEdit}>
              Edit
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default TieSummary;
