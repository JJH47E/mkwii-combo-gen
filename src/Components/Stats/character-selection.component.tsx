import React from 'react';
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import Button from '../Shared/button.component';
import CharacterDetail from '../../Models/character-detail.model';
import CharacterData from '../../data/character-class.json';
import CharacterSelectorProps from '../../Models/Props/character-selector.props';

const characterData = CharacterData as CharacterDetail[];

function CharacterSelection({ onCharacterSelect }: CharacterSelectorProps) {
  const navigate = useNavigate();

  const goBackPage = () => {
    navigate('/mkwii-combo-gen/');
  };

  return (
    <div className={isMobile ? 'mobile' : 'desktop'}>
      {characterData.map((character: CharacterDetail) => {
        return (
          <Button
            key={character.name}
            buttonText={character.name}
            onClick={() => onCharacterSelect(character)}
          />
        );
      })}
      <Button key="back" buttonText="Back" onClick={goBackPage} />
    </div>
  );
}

export default CharacterSelection;
