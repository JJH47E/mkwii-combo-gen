import VehicleStatsData from '../data/vehicle-stats.json';
import { Regions } from '../Models/Enums/regions.enum';
import VehicleStats from '../Models/vehicle-stats.model';
import { getRegion } from './region.service';
import { mapToNtsc } from './vehicle-mapper.service';

const vehicleStats = VehicleStatsData as VehicleStats[];

export function getVehicleStats(vehicle: string): VehicleStats {
  const currentRegion = getRegion();

  if (currentRegion === Regions.NTSC) {
    return vehicleStats.find(vs => vs.name === vehicle) as VehicleStats;
  }

  // map vehicle back to ntsc
  return vehicleStats.find(
    vs => vs.name === mapToNtsc(vehicle)
  ) as VehicleStats;
}
