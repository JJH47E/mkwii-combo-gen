import CharacterStats from '../Models/character-stats.model';
import CharacterStatsData from '../Models/character-stats-data.model';
import CharacterStatsJson from '../data/character-stats.json';

const characterStats = CharacterStatsJson as CharacterStatsData[];

export function getCharacterStats(character: string): CharacterStats {
  return characterStats.find(cs => cs.name === character)
    ?.stats as CharacterStats;
}
