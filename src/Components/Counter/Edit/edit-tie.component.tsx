import Button from '@mui/material/Button/Button';
import Input from '@mui/material/Input/Input';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { nameBlacklist } from '../../../constants';
import CounterObject from '../../../Models/counter-object.model';
import '../../../Root.scss';
import {
  deleteTie,
  getCompetitiveInfo,
  updateTie,
} from '../../../Services/cookie.service';
import ErrorPage from '../../Error/error-page.component';

function EditTie() {
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

  let newOpponentName = tieDetails.opponentName;
  let newOpponentScore = tieDetails.opponentScore;
  let newMyScore = tieDetails.myScore;

  const opponentNameOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    newOpponentName = event.target.value.trim();
  };

  const opponentScoreOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    newOpponentScore = parseInt(event.target.value.trim(), 10);
  };

  const myScoreOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    newMyScore = parseInt(event.target.value.trim(), 10);
  };

  const updateUser = () => {
    if (nameBlacklist.includes(newOpponentName.toLowerCase())) return;
    if (newOpponentName.length < 2) return;
    if (newOpponentName.length > 20) return;
    if (Number.isNaN(newOpponentScore)) return;
    if (Number.isNaN(newMyScore)) return;
    // set in cookie
    updateTie(tieDetails.opponentName, {
      opponentName: newOpponentName,
      opponentScore: newOpponentScore,
      myScore: newMyScore,
    } as CounterObject);
    // return to previous page
    navigate('/mkwii-utils/counter', { replace: false });
  };

  const deleteUser = () => {
    deleteTie(tieDetails.opponentName);
    navigate('/mkwii-utils/counter', { replace: false });
  };

  return (
    <div className="component">
      <header className="component-header">
        <h2 className="title">Edit: {tieDetails.opponentName}</h2>
        <div className="page-content">
          <span style={{ display: 'block' }}>Name:</span>
          <Input
            type="text"
            style={{ color: 'white' }}
            placeholder="Opponent Name"
            defaultValue={tieDetails.opponentName}
            onChange={event => opponentNameOnChange(event)}
          />
          <div style={{ paddingBottom: '15px' }} />
          <span style={{ display: 'block' }}>Opponent Score:</span>
          <Input
            type="text"
            style={{ color: 'white' }}
            placeholder="Opponent Score"
            defaultValue={tieDetails.opponentScore}
            onChange={event => opponentScoreOnChange(event)}
          />
          <div style={{ paddingBottom: '15px' }} />
          <span style={{ display: 'block' }}>My Score:</span>
          <Input
            type="text"
            style={{ color: 'white' }}
            placeholder="My Score"
            defaultValue={tieDetails.myScore}
            onChange={event => myScoreOnChange(event)}
          />
          <div style={{ paddingBottom: '15px' }} />
          <Button
            variant="contained"
            className="full-width"
            onClick={updateUser}
          >
            Save
          </Button>
          <div style={{ paddingBottom: '15px' }} />
          <Button
            variant="contained"
            color="error"
            className="full-width"
            onClick={deleteUser}
          >
            Delete
          </Button>
        </div>
      </header>
    </div>
  );
}

export default EditTie;
