import React from 'react';
import Button from '@mui/material/Button/Button';
import { useNavigate } from 'react-router-dom';
import CharacterDetail from '../../../Models/character-detail.model';
import CharacterData from '../../../data/character-class.json';
import Item from '../../Shared/List/item.component';
import '../../../Root.scss';

const characterData = CharacterData as CharacterDetail[];

function CharacterSelection() {
  const navigate = useNavigate();

  function onCharacterSelectFn(character: CharacterDetail) {
    window.scrollTo(0, 0);
    navigate(`/mkwii-combo-gen/stats/${character.name}`, {
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
              <Item
                key={character.name}
                cookieKey="characters"
                value={character.name}
                onContinue={() => onCharacterSelectFn(character)}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default CharacterSelection;
