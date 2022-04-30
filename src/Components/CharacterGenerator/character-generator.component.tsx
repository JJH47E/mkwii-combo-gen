import React from 'react';
import Button from '@mui/material/Button/Button';
import '../../Root.scss';
import { useNavigate, useParams } from 'react-router-dom';
import ErrorPage from '../Error/error-page.component';
import {
  getCharacter,
  getRandomCharacter,
} from '../../Services/character.service';
import { getVehicle } from '../../Services/vehicle.service';
import GeneratorParams from '../../Models/Params/generator.param';

function CharacterGenerator() {
  const navigate = useNavigate();

  const { characterName } = useParams() as unknown as GeneratorParams;
  if (!characterName) {
    return <ErrorPage />;
  }
  const character = getCharacter(characterName);

  const reRollCharacter = () => {
    navigate(`/mkwii-utils/${getRandomCharacter(character.name).name}`);
  };

  const goToKart = () => {
    navigate(`/mkwii-utils/${characterName}/${getVehicle(character.class)}`);
  };

  return (
    <div className="component">
      <header className="component-header">
        <div className="page-content">
          <h2 className="name main">{characterName}</h2>
          <div style={{ paddingBottom: '30px' }} />
          <Button
            variant="contained"
            className="full-width"
            onClick={reRollCharacter}
          >
            Reroll
          </Button>
          <div style={{ paddingBottom: '15px' }} />
          <Button variant="contained" className="full-width" onClick={goToKart}>
            Confirm
          </Button>
        </div>
      </header>
    </div>
  );
}

export default CharacterGenerator;
