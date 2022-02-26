import React from 'react';
import { isMobile } from 'react-device-detect';
import { useLocation, useNavigate } from 'react-router-dom';
import SummaryLocationState from '../../../Models/summary-location-state.model';
import { getVehicleStats } from '../../../Services/vehicle-stats.service';
import Button from '../../Shared/button.component';
import Stat from '../../Shared/Stat/stat.component';
import './StatsSummary.css';

function StatsSummary() {
  const navigate = useNavigate();

  const homePage = () => {
    navigate('/mkwii-combo-gen/', { replace: false });
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

  const { selectedCombo } = currentState;
  const { stats } = getVehicleStats(selectedCombo.kart);

  return (
    <div className="summary">
      <header className="summary-header">
        <h2 className="name">{selectedCombo.name}</h2>
        <h3 className="kart">{selectedCombo.kart}</h3>
        <div className={isMobile ? 'stat-gauge-mobile' : 'stat-gauge-desktop'}>
          <Stat
            driftType={stats.driftType}
            speed={stats.speed}
            weight={stats.weight}
            acceleration={stats.acceleration}
            handling={stats.handling}
            drift={stats.drift}
            offroad={stats.offroad}
            miniturbo={stats.miniturbo}
          />
        </div>
        <div className={isMobile ? 'mobile' : 'desktop'}>
          <Button onClick={homePage} buttonText="Back" />
        </div>
      </header>
    </div>
  );
}

export default StatsSummary;
