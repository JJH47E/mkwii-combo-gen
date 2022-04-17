import React from 'react';
import { Button } from '@mui/material';
import Name from '../Shared/name.component';
import CharacterProps from '../../../Models/Props/character.props';
import '../../../Root.scss';

function Character({ text, reroll, confirmedChoice }: CharacterProps) {
  return (
    <div className="page-content">
      <Name text={text} />
      <div style={{ paddingBottom: '15px' }} />
      <Button variant="contained" className="full-width" onClick={reroll}>
        Reroll
      </Button>
      <div style={{ paddingBottom: '15px' }} />
      <Button
        variant="contained"
        className="full-width"
        onClick={confirmedChoice}
      >
        Confirm
      </Button>
    </div>
  );
}

export default Character;
