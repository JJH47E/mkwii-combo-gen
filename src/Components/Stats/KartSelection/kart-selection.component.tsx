import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VehicleClass from '../../../Models/vehicle-class.model';
import VehicleData from '../../../data/class-vehicles.json';
import '../../../Root.scss';
import { getRegionalVariant } from '../../../Services/vehicle-mapper.service';
import RegionSwitch from '../../Shared/region-switch.component';
import Item from '../../Shared/List/item.component';
import ErrorPage from '../../Error/error-page.component';
import GeneratorParams from '../../../Models/Params/generator.param';
import { getCharacter } from '../../../Services/character.service';

const vehicleData = VehicleData as VehicleClass[];

function KartSelection() {
  const { characterName } = useParams() as unknown as GeneratorParams;
  if (!characterName) {
    return <ErrorPage />;
  }

  const character = getCharacter(characterName);

  if (!character) {
    return <ErrorPage />;
  }

  const navigate = useNavigate();

  function onKartSelectFn(vehicle: string) {
    window.scrollTo(0, 0);
    navigate(`/mkwii-combo-gen/stats/${character.name}/${vehicle}/stats`);
  }

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
              <Item
                key={vehicle}
                cookieKey="vehicles"
                value={getRegionalVariant(vehicle)}
                onContinue={() => onKartSelectFn(vehicle)}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default KartSelection;
