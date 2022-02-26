import React from 'react';
import { isMobile } from 'react-device-detect';
import { useLocation, useNavigate } from 'react-router-dom';
import SummaryLocationState from '../../Models/summary-location-state.model';
import { getRegionalVariant } from '../../Services/vehicle-mapper.service';
import Button from '../Shared/button.component';
import './Summary.css';

function Summary() {
  const navigate = useNavigate();

  const homePage = () => {
    navigate('/mkwii-combo-gen/', { replace: false });
  };

  const statsPage = () => {
    navigate('/mkwii-combo-gen/stats/summary', {
      state: { selectedCombo },
      replace: false,
    });
  };

  const { state } = useLocation();
  const currentState = state as SummaryLocationState;

  if (!currentState) {
    return (
      <div className="summary">
        <header className="summary-header">
          <h2>Uh Oh..</h2>
          <p>Something has gone wrong</p>
          <div className={isMobile ? 'mobile' : 'desktop'}>
            <Button onClick={homePage} buttonText="Take me home" />
          </div>
        </header>
      </div>
    );
  }

  let { selectedCombo } = currentState;

  return (
    <div className="summary">
      <header className="summary-header">
        <h2 className="name">{selectedCombo.name}</h2>
        <h3 className="kart">{getRegionalVariant(selectedCombo.kart)}</h3>
        <div className={isMobile ? 'mobile' : 'desktop'}>
          <Button onClick={statsPage} buttonText="View Stats" />
          <Button onClick={homePage} buttonText="Do Another" />
        </div>
      </header>
    </div>
  );
}

export default Summary;
