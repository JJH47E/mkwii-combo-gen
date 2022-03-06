import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getRegionalVariant } from '../../Services/vehicle-mapper.service';
import Button from '../Shared/button.component';
import '../../Root.scss';
import { globalGetCharacter } from '../../Services/character-selection.service';
import { globalGetKart } from '../../Services/kart-selection.service';

function Summary() {
  const navigate = useNavigate();

  const homePage = () => {
    navigate('/mkwii-combo-gen/', { replace: false });
  };

  const statsPage = () => {
    navigate('/mkwii-combo-gen/generate/summary/stats', {
      replace: false,
    });
  };

  const character = globalGetCharacter();
  const kart = globalGetKart();

  if (!character || !kart) {
    return (
      <div className="component">
        <header className="component-header">
          <h2>Uh Oh..</h2>
          <p>Something has gone wrong</p>
          <div className="page-content">
            <Button onClick={homePage} buttonText="Take me home" />
          </div>
        </header>
      </div>
    );
  }

  const selectedCombo = { name: character, kart };

  return (
    <div className="component">
      <header className="component-header">
        <h2 className="name">{selectedCombo.name}</h2>
        <h3 className="kart">{getRegionalVariant(selectedCombo.kart)}</h3>
        <div className="page-content">
          <Button onClick={statsPage} buttonText="View Stats" />
          <Button onClick={homePage} buttonText="Do Another" />
        </div>
      </header>
    </div>
  );
}

export default Summary;
