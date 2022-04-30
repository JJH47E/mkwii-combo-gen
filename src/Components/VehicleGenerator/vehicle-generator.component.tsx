import React from 'react';
import '../../Root.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button/Button';
import ErrorPage from '../Error/error-page.component';
import { getCharacter } from '../../Services/character.service';
import GeneratorParams from '../../Models/Params/generator.param';
import { getDistinctVehicle } from '../../Services/vehicle.service';
import RegionSwitch from '../Shared/region-switch.component';
import { getRegionalVariant } from '../../Services/vehicle-mapper.service';

function VehicleGenerator() {
  const navigate = useNavigate();

  const { characterName, vehicleName } =
    useParams() as unknown as GeneratorParams;
  if (!characterName || !vehicleName) {
    return <ErrorPage />;
  }

  const character = getCharacter(characterName);

  const reRollKart = () => {
    navigate(
      `/mkwii-utils/${characterName}/${getDistinctVehicle(
        character.class,
        vehicleName
      )}`
    );
  };

  const goToSummary = () => {
    navigate(`/mkwii-utils/${characterName}/${vehicleName}/stats`);
  };

  return (
    <div className="component">
      <header className="component-header">
        <div className="page-content">
          <h2 className="name main">{getRegionalVariant(vehicleName)}</h2>
          <RegionSwitch />
          <div style={{ paddingBottom: '30px' }} />
          <Button
            variant="contained"
            className="full-width"
            onClick={reRollKart}
          >
            Reroll
          </Button>
          <div style={{ paddingBottom: '15px' }} />
          <Button
            variant="contained"
            className="full-width"
            onClick={goToSummary}
          >
            Confirm
          </Button>
        </div>
      </header>
    </div>
  );
}

export default VehicleGenerator;
