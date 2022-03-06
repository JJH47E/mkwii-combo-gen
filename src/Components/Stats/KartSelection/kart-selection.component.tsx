import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Shared/button.component';
import VehicleClass from '../../../Models/vehicle-class.model';
import VehicleData from '../../../data/class-vehicles.json';
import '../../../Root.scss';
import { getRegionalVariant } from '../../../Services/vehicle-mapper.service';
import RegionSwitch from '../../Shared/region-switch.component';
import { globalGetCharacter } from '../../../Services/character-selection.service';
import { getCharacterClass } from '../../../Services/chartacter-stats.service';
import { globalSetKart } from '../../../Services/kart-selection.service';

const vehicleData = VehicleData as VehicleClass[];

function KartSelection() {
  const navigate = useNavigate();

  const homePage = () => {
    navigate('/mkwii-combo-gen/', { replace: false });
  };

  function onKartSelectFn(kart: string) {
    globalSetKart(kart);
    window.scrollTo(0, 0);
    navigate('/mkwii-combo-gen/stats/summary', {
      replace: false,
    });
  }

  const character = globalGetCharacter();

  if (!character) {
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

  const characterClass = getCharacterClass(character);

  const karts = vehicleData.find(v => v.class === characterClass)
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
                onClick={() => onKartSelectFn(vehicle)}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default KartSelection;
