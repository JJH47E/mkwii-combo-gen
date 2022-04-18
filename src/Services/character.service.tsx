import CharacterDataJson from '../data/character-class.json';
import CharacterDetail from '../Models/character-detail.model';
import { getRandomInt } from '../Utils/RandomNumberGenerator';

const characterData = CharacterDataJson as CharacterDetail[];

export function getCharacter(): CharacterDetail {
  return characterData[getRandomInt(characterData.length)];
}
