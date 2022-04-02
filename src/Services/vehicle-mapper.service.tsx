import { Regions } from '../Models/Enums/regions.enum';
import { getRegion } from './region.service';
import NtscPalVehicleMapper from '../data/ntsc-pal-vehicle-mapper.json';
import PalNtscVehicleMapper from '../data/pal-ntsc-vehicle-mapper.json';
import Dictionary from '../Models/dictionary.model';

const ntscPalVehicleMapperData = NtscPalVehicleMapper as Dictionary<string>;
const palNtscVehicleMapperData = PalNtscVehicleMapper as Dictionary<string>;

export function getRegionalVariant(vehicle: string): string {
  if (getRegion() === Regions.NTSC) {
    return vehicle;
  }

  const palVehicle = ntscPalVehicleMapperData[vehicle];
  if (!palVehicle) {
    // vehicle is same in PAL as it is in NTSC
    return vehicle;
  }

  return palVehicle;
}

export function mapToNtsc(palVehicle: string): string {
  if (!Object.keys(palNtscVehicleMapperData).includes(palVehicle)) {
    // vehicle is same in PAL as it is in NTSC or vehicle is already in NTSC or vehicle doesn't exist
    return palVehicle;
  }
  return palNtscVehicleMapperData[palVehicle];
}
