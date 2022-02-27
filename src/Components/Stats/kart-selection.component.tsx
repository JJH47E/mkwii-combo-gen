import React from 'react';
import { isMobile } from 'react-device-detect';
import Button from '../Shared/button.component';
import VehicleClass from '../../Models/vehicle-class.model';
import VehicleData from '../../data/class-vehicles.json';
import KartSelectorProps from '../../Models/Props/kart-selector.props';

const vehicleData = VehicleData as VehicleClass[];

function KartSelection({
  weightClass,
  onKartSelect,
  backToCharacterSelection,
}: KartSelectorProps) {
  const karts = vehicleData.find(v => v.class === weightClass)
    ?.vehicles as string[];

  return (
    <div className={isMobile ? 'mobile' : 'desktop'}>
      {karts.map((vehicle: string) => {
        return (
          <Button
            key={vehicle}
            buttonText={vehicle}
            onClick={() => onKartSelect(vehicle)}
          />
        );
      })}
      <Button key="back" buttonText="Back" onClick={backToCharacterSelection} />
    </div>
  );
}

export default KartSelection;
