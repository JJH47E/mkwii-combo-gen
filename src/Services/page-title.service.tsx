import CharacterDataJson from '../data/character-class.json';
import CharacterDetail from '../Models/character-detail.model';
import VehicleDataJson from '../data/class-vehicles.json';
import VehicleClass from '../Models/vehicle-class.model';

const vehicleData = VehicleDataJson as VehicleClass[];
const characterData = CharacterDataJson as CharacterDetail[];

const characters = characterData.map(x => x.name.replaceAll(' ', '%20'));
const vehicles = vehicleData
  .map(x => x.vehicles)
  .flat()
  .map(x => x.replaceAll(' ', '%20'));

export function getPageTitle(url: string): string {
  const siteRoot = '/mkwii-combo-gen';

  if (characters.some(x => url.endsWith(x))) {
    if (url.includes('stat')) {
      return 'Stats';
    }
    return 'Generator';
  }

  if (vehicles.some(x => url.endsWith(x))) {
    if (url.includes('stat')) {
      return 'Stats';
    }
    return 'Generator';
  }

  if (url.endsWith('stats')) {
    return 'Stats';
  }

  switch (url) {
    case siteRoot:
      return 'Home';
    case `${siteRoot}/`:
      return 'Home';
    case `${siteRoot}/stats`:
      return 'Stats';
    case `${siteRoot}/track`:
      return 'Tracks';
    case `${siteRoot}/counter`:
      return '1v1s';
    case `${siteRoot}/counter/add`:
      return 'Add';
    case `${siteRoot}/challenge`:
      return 'Challenge';
    default:
      if (url.startsWith(`${siteRoot}/counter/`)) {
        return 'Details';
      }
      return '404';
  }
}
