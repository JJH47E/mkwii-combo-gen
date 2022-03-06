import CharacterStats from '../Models/character-stats.model';
import CharacterStatsData from '../Models/character-stats-data.model';
import CharacterDetail from '../Models/character-detail.model';
import CharacterStatsJson from '../data/character-stats.json';
import CharacterDataJson from '../data/character-class.json';

const characterStats = CharacterStatsJson as CharacterStatsData[];
const characterData = CharacterDataJson as CharacterDetail[];

export function getCharacterStats(character: string): CharacterStats {
  return characterStats.find(cs => cs.name === character)
    ?.stats as CharacterStats;
}

export function getCharacterClass(character: string): string {
  return characterData.find(cd => cd.name === character)?.class as string;
}
