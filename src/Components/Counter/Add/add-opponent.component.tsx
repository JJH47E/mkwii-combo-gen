import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  isOpponentSet,
  setOpponentCookie,
} from '../../../Services/cookie.service';

const nameBlacklist = ['add'];

function AddOpponent() {
  const navigate = useNavigate();
  let userInput = '';

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    userInput = event.target.value.trim();
  };

  const addUser = () => {
    if (nameBlacklist.includes(userInput.toLowerCase())) return;
    if (isOpponentSet(userInput)) return;
    if (userInput.length < 2) return;
    if (userInput.length > 20) return;
    // set in cookie
    setOpponentCookie(userInput);
    // return to previous page
    navigate('/mkwii-combo-gen/counter', { replace: false });
  };

  return (
    <div className="component">
      <header className="component-header">
        <div className="page-content">
          <h2 className="title main">Opponent Name</h2>
          <div>
            <input
              type="text"
              placeholder="Player Name"
              // eslint-disable-next-line no-console
              onChange={event => inputOnChange(event)}
            />
            <div style={{ paddingBottom: '15px' }} />
            <Button
              variant="contained"
              className="full-width"
              onClick={addUser}
            >
              Add
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default AddOpponent;
