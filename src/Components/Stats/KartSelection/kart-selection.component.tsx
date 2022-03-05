import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../Shared/button.component';
import VehicleClass from '../../../Models/vehicle-class.model';
import VehicleData from '../../../data/class-vehicles.json';
import '../../../Root.scss';
import CharacterDetail from '../../../Models/character-detail.model';
import KartStatSelection from '../../../Models/kart-stat-selection.model';
import PlayerCombo from '../../../Models/player-combo.model';
import { getOtherRegion, switchRegion } from '../../../Services/region.service';
import { getRegionalVariant } from '../../../Services/vehicle-mapper.service';
import RegionSwitch from '../../Shared/region-switch.component';

const vehicleData = VehicleData as VehicleClass[];

const mouseOverStart = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
  const { style } = event.target as HTMLElement;
  style.textDecoration = 'underline';
};

const mouseOverEnd = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
  const { style } = event.target as HTMLElement;
  style.textDecoration = 'none';
};

function KartSelection() {
  const navigate = useNavigate();

  const changeRegion = () => {
    switchRegion();
  };

  const homePage = () => {
    navigate('/mkwii-combo-gen/', { replace: false });
  };

  function onKartSelectFn(character: CharacterDetail, kart: string) {
    const selectedCombo: PlayerCombo = {
      name: character.name,
      kart,
    };
    window.scrollTo(0, 0);
    navigate('/mkwii-combo-gen/stats/summary', {
      state: { selectedCombo },
      replace: false,
    });
  }

  const { state } = useLocation();
  const currentState = state as KartStatSelection;

  if (!currentState) {
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

  const { character } = currentState;

  const karts = vehicleData.find(v => v.class === character.class)
    ?.vehicles as string[];

  return (
    <div className="component">
      <header className="component-header">
        <h2 className="name">Select a Kart</h2>
        <RegionSwitch />
        <div className="page-content">
          {karts.map((vehicle: string) => {
            return (
              <Button
                key={vehicle}
                buttonText={getRegionalVariant(vehicle)}
                onClick={() => onKartSelectFn(character, vehicle)}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

const styles = {
  regionSwitch: {
    textDecoration: 'none',
  },
};

export default KartSelection;
