import getUserLocale from 'get-user-locale';
import { useState } from 'react';
import { singletonHook } from 'react-singleton-hook';
import { Regions } from '../Models/Enums/regions.enum';

const ntscRegions = ['US', 'CA', 'MX', 'JP', 'KR', 'PH'];

const browserLocale = getUserLocale().split('-');
const browserLanguage = browserLocale.length < 2 ? 'GB' : browserLocale[1];

let currentRegion = ntscRegions.includes(browserLanguage)
  ? Regions.NTSC
  : Regions.PAL;

let globalSwitchRegion: React.Dispatch<React.SetStateAction<Regions>> = () => {
  throw new Error('you must region before setting its state');
};

export const region = singletonHook(currentRegion, () => {
  const [newRegion, switchRegion] = useState(currentRegion);
  globalSwitchRegion = switchRegion;
  currentRegion = newRegion;
  return newRegion;
});

export const switchRegion = () =>
  globalSwitchRegion(getRegion() === Regions.PAL ? Regions.NTSC : Regions.PAL);
export const setRegion = (regionToSet: Regions) =>
  globalSwitchRegion(regionToSet);
export const getRegion = () => currentRegion;
export const getOtherRegion = () =>
  currentRegion === Regions.PAL ? Regions.NTSC : Regions.PAL;
