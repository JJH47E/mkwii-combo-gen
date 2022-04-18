import VehicleDataJson from '../data/class-vehicles.json';
import CharacterDetail from '../Models/character-detail.model';
import VehicleClass from '../Models/vehicle-class.model';
import { getRandomInt } from '../Utils/RandomNumberGenerator';

const vehicleData = VehicleDataJson as VehicleClass[];

export function getVehicle(vehicleClass: string): string {
  const vehicles = vehicleData.find(x => x.class === vehicleClass)?.vehicles;
  if (!vehicles) {
    throw Error();
  }

  return vehicles[getRandomInt(vehicles.length)];
}
