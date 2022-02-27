/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import CharacterDetail from '../../Models/character-detail.model';
import CharacterSelection from './character-selection.component';
import KartSelection from './kart-selection.component';
import PlayerCombo from '../../Models/player-combo.model';

function StatSelection() {
  const navigate = useNavigate();

  const [selectedCharacter, setCharacter] = useState({} as CharacterDetail);
  const [confirmedCharacter, setConfirmedCharacter] = useState(false);

  function onCharacterSelectFn(character: CharacterDetail) {
    setCharacter(character);
    setConfirmedCharacter(true);
  }

  function deselectCharacterFn() {
    setConfirmedCharacter(false);
  }

  function onKartSelectFn(kart: string) {
    const selectedCombo: PlayerCombo = {
      name: selectedCharacter.name,
      kart,
    };
    navigate('/mkwii-combo-gen/stats/summary', {
      state: { selectedCombo },
      replace: false,
    });
  }

  return (
    <div className="home">
      <header className="home-header">
        <h2>Select a {confirmedCharacter ? 'Kart' : 'Character'}</h2>
        <div className={isMobile ? 'mobile' : 'desktop'}>
          {!confirmedCharacter ? (
            <CharacterSelection onCharacterSelect={onCharacterSelectFn} />
          ) : (
            <KartSelection
              weightClass={selectedCharacter.class}
              onKartSelect={onKartSelectFn}
              backToCharacterSelection={deselectCharacterFn}
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default StatSelection;
