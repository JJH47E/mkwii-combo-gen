import { useState } from 'react';
import { singletonHook } from 'react-singleton-hook';
import CharacterDetail from '../Models/character-detail.model';

let currentCharacter = '';

let globalSwitchCharacter: React.Dispatch<
  React.SetStateAction<string>
> = () => {
  throw new Error('you must region before setting its state');
};

export const character = singletonHook(currentCharacter, () => {
  const [newCharacter, switchCharacter] = useState(currentCharacter);
  globalSwitchCharacter = switchCharacter;
  currentCharacter = newCharacter;
  return newCharacter;
});

export const globalSetCharacter = (characterToSet: string) =>
  globalSwitchCharacter(characterToSet);
export const globalGetCharacter = () => currentCharacter;
