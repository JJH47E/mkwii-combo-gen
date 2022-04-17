import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getRegionalVariant } from '../../Services/vehicle-mapper.service';
import '../../Root.scss';
import { globalGetCharacter } from '../../Services/character-selection.service';
import { globalGetKart } from '../../Services/kart-selection.service';
import ErrorPage from '../Error/error-page.component';

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
    return <ErrorPage />;
  }

  const selectedCombo = { name: character, kart };

  return (
    <div className="component">
      <header className="component-header">
        <h2 className="name main">{selectedCombo.name}</h2>
        <h4 className="kart">{getRegionalVariant(selectedCombo.kart)}</h4>
        <div style={{ paddingBottom: '15px' }} />
        <div className="page-content">
          <Button
            variant="contained"
            className="full-width"
            onClick={statsPage}
          >
            View Stats
          </Button>
          <div style={{ paddingBottom: '15px' }} />
          <Button variant="contained" className="full-width" onClick={homePage}>
            Do Another
          </Button>
        </div>
      </header>
    </div>
  );
}

export default Summary;
