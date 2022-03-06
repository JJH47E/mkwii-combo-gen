import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Shared/button.component';
import CharacterDetail from '../../../Models/character-detail.model';
import CharacterData from '../../../data/character-class.json';
import '../../../Root.scss';

const characterData = CharacterData as CharacterDetail[];

function CharacterSelection() {
  const navigate = useNavigate();

  function onCharacterSelectFn(character: CharacterDetail) {
    window.scrollTo(0, 0);
    navigate('/mkwii-combo-gen/stats/vehicle', {
      state: { character },
      replace: false,
    });
  }

  return (
    <div className="component">
      <header className="component-header">
        <h2 className="title">Select a Character</h2>
        <div className="page-content">
          {characterData.map((character: CharacterDetail) => {
            return (
              <Button
                key={character.name}
                buttonText={character.name}
                onClick={() => onCharacterSelectFn(character)}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default CharacterSelection;
