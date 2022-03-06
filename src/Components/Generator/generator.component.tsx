import React, { useState } from 'react';
import './Generator.css';
import '../../Root.scss';
import { useNavigate } from 'react-router-dom';
import { getRandomInt } from '../../Utils/RandomNumberGenerator';
import CharacterData from '../../data/character-class.json';
import VehicleData from '../../data/class-vehicles.json';
import Character from './Character/character.component';
import Kart from './Kart/kart.component';
import GeneratorProps from '../../Models/Props/generator.props';
import CharacterDetail from '../../Models/character-detail.model';
import VehicleClass from '../../Models/vehicle-class.model';
import { globalSetCharacter } from '../../Services/character-selection.service';
import { globalSetKart } from '../../Services/kart-selection.service';

let isCharacterConfirmed: boolean;

function Generator({ playerCount }: GeneratorProps) {
  isCharacterConfirmed = false;

  const navigate = useNavigate();

  const [newSelectedCharacter, setCharacter] = useState(
    randomCharacter(CharacterData)
  );
  const [newCharacterConfirmed, setCharacterConfirmed] =
    useState(isCharacterConfirmed);
  const [newSelectedKart, setKart] = useState('');

  const reRollCharacter = () => {
    setCharacter(randomCharacter(CharacterData, newSelectedCharacter.name));
  };

  const reRollKart = () => {
    setKart(randomKart(VehicleData, newSelectedCharacter, newSelectedKart));
  };

  const confirmedCharacter = () => {
    isCharacterConfirmed = true;
    setKart(randomKart(VehicleData, newSelectedCharacter));
    setCharacterConfirmed(isCharacterConfirmed);
  };

  const confirmedKart = () => {
    globalSetCharacter(newSelectedCharacter.name);
    globalSetKart(newSelectedKart);
    navigate('/mkwii-combo-gen/generate/summary');
  };

  return (
    <div className="component">
      <header className="component-header">
        {!newCharacterConfirmed ? (
          <Character
            reroll={reRollCharacter}
            confirmedChoice={confirmedCharacter}
            text={newSelectedCharacter.name}
          />
        ) : (
          <Kart
            reroll={reRollKart}
            confirmedChoice={confirmedKart}
            text={newSelectedKart}
          />
        )}
      </header>
    </div>
  );
}

function randomCharacter(
  data: CharacterDetail[],
  currentCharacter = ''
): CharacterDetail {
  const charactersLength = data.length;
  const chosenCharacter = data[getRandomInt(charactersLength)];
  if (chosenCharacter.name === currentCharacter) {
    return randomCharacter(data, currentCharacter);
  }

  return chosenCharacter;
}

function randomKart(
  data: VehicleClass[],
  character: CharacterDetail,
  currentKart = ''
): string {
  let possibleKarts: string[] = [];

  data.forEach(vehicleClass => {
    if (vehicleClass.class === character.class) {
      possibleKarts = vehicleClass.vehicles;
    }
  });

  if (possibleKarts === []) {
    throw Error();
  }

  const kartsLength = possibleKarts.length;

  const chosenKart = possibleKarts[getRandomInt(kartsLength)];
  if (chosenKart === currentKart) {
    return randomKart(data, character, currentKart);
  }

  return chosenKart;
}

export default Generator;
