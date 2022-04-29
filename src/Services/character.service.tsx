import CharacterDataJson from '../data/character-class.json';
import CharacterDetail from '../Models/character-detail.model';
import { getRandomInt } from '../Utils/RandomNumberGenerator';

const characterData = CharacterDataJson as CharacterDetail[];

export function getCharacter(characterName: string): CharacterDetail {
  const character = characterData.find(x => x.name === characterName);

  if (character) {
    return character;
  }

  throw new Error();
}

export function getRandomCharacter(characterName: string): CharacterDetail {
  const character = characterData[getRandomInt(characterData.length)];

  if (character.name === characterName) {
    getRandomCharacter(characterName);
  }

  return character;
}
