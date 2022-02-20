import getUserLocale from 'get-user-locale';
import { useState } from 'react';
import { singletonHook } from 'react-singleton-hook';
import { Regions } from "../Models/Enums/regions.enum";

const ntscRegions = ["US","CA","MX","JP","KR","PH"];

const browserLocale = getUserLocale().split('-');
const browserLanguage = browserLocale.length < 2 ? "GB" : browserLocale[1];

let currentRegion = ntscRegions.includes(browserLanguage) ? Regions.NTSC : Regions.PAL;

let globalSwitchRegion: React.Dispatch<React.SetStateAction<Regions>> = () => { throw new Error('you must region before setting its state'); };

export const region = singletonHook(currentRegion, () => {
    const [newRegion, switchRegion] = useState(currentRegion);
    globalSwitchRegion = switchRegion;
    currentRegion = newRegion;
    return newRegion;
});

export function getRegionalVariant(text: string): string {
    var kartSplit = text.split('/');
    if (kartSplit.length == 1) {
        // same in both NTSC & PAL
        return text;
    }
    
    // returns the regional name for the vehicle
    return kartSplit[getRegion() == Regions.NTSC ? 0 : 1];
}

export const switchRegion = () => globalSwitchRegion(getRegion() == Regions.PAL ? Regions.NTSC : Regions.PAL);
export const setRegion = (region: Regions) => globalSwitchRegion(region);
export const getRegion = () => currentRegion;
export const getOtherRegion = () => currentRegion == Regions.PAL ? Regions.NTSC : Regions.PAL;