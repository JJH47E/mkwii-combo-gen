import React from 'react';
import { isMobile } from 'react-device-detect';
import Button from '../../Shared/button.component';
import Name from '../Shared/name.component';
import CharacterProps from '../../../Models/Props/character.props';
import '../../../Root.scss';

function Character({ text, reroll, confirmedChoice }: CharacterProps) {
  return (
    <div className="page-content">
      <Name text={text} />
      <div style={{ paddingBottom: '15px' }} />
      <Button onClick={reroll} buttonText="Reroll" />
      <br />
      <Button onClick={confirmedChoice} buttonText="Confirm" />
    </div>
  );
}

export default Character;
