import VehicleStatsData from '../data/vehicle-stats.json';
import CharacterStats from '../Models/character-stats.model';
import { Regions } from '../Models/Enums/regions.enum';
import KartStats from '../Models/kart-stats.model';
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

export function sumStats(
  kartStats: KartStats,
  characterStats: CharacterStats
): KartStats {
  return {
    driftType: kartStats.driftType,
    speed: kartStats.speed + characterStats.speed,
    weight: kartStats.weight + characterStats.weight,
    acceleration: kartStats.acceleration + characterStats.acceleration,
    handling: kartStats.handling + characterStats.handling,
    drift: kartStats.drift + characterStats.drift,
    offroad: kartStats.offroad + characterStats.offroad,
    miniturbo: kartStats.miniturbo + characterStats.miniturbo,
  } as KartStats;
}
