import VehicleDataJson from '../data/class-vehicles.json';
import VehicleClass from '../Models/vehicle-class.model';
import { getRandomInt } from '../Utils/RandomNumberGenerator';

const vehicleData = VehicleDataJson as VehicleClass[];

export function getVehicle(vehicleClass: string): string {
  const vehicles = vehicleData.find(x => x.class === vehicleClass)?.vehicles;
  if (!vehicles) {
    throw Error('vehicle class does not exist');
  }

  return vehicles[getRandomInt(vehicles.length)];
}

export function getDistinctVehicle(
  vehicleClass: string,
  vehicleName: string
): string {
  const vehicle = getVehicle(vehicleClass);
  return vehicle === vehicleName
    ? getDistinctVehicle(vehicleClass, vehicleName)
    : vehicle;
}
