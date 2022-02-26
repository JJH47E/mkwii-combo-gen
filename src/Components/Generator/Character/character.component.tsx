import React from 'react';
import { isMobile } from 'react-device-detect';
import Button from '../../Shared/button.component';
import Name from '../Shared/name.component';
import './Character.css';
import CharacterProps from '../../../Models/Props/character.props';

function Character({ text, reroll, confirmedChoice }: CharacterProps) {
  return (
    <div className={isMobile ? 'mobile' : 'desktop'}>
      <Name text={text} />
      <Button onClick={reroll} buttonText="Reroll" />
      <br />
      <Button onClick={confirmedChoice} buttonText="Confirm" />
    </div>
  );
}

export default Character;
