import { useState } from 'react';
import { singletonHook } from 'react-singleton-hook';

let currentKart = '';

let globalSwitchKart: React.Dispatch<React.SetStateAction<string>> = () => {
  throw new Error('you must region before setting its state');
};

export const kart = singletonHook(currentKart, () => {
  const [newKart, switchKart] = useState(currentKart);
  globalSwitchKart = switchKart;
  currentKart = newKart;
  return newKart;
});

export const globalSetKart = (kartToSet: string) => globalSwitchKart(kartToSet);
export const globalGetKart = () => currentKart;
