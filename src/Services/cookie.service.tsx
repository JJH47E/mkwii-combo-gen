import Cookies from 'universal-cookie';

const cookies = new Cookies();
const vehicleKey = 'vehicles';
const charactersKey = 'characters';

export function initialize(): void {
  const v = cookies.get(vehicleKey) as string;
  if (!v) {
    cookies.set(vehicleKey, '', { path: '/' });
  }
  const c = cookies.get(charactersKey) as string;
  if (!c) {
    cookies.set(charactersKey, '', { path: '/' });
  }
}

export function setFavouriteVehicle(vehicle: string): void {
  const setVehicles = cookies.get(vehicleKey) as string;
  const vehicles = setVehicles.split(',');

  if (vehicles.includes(vehicle)) {
    return;
  }

  cookies.set(vehicleKey, `${setVehicles + vehicle},`, { path: '/' });
}

export function setFavouriteCharacter(character: string): void {
  const setCharacters = cookies.get(charactersKey) as string;
  const characters = setCharacters.split(',');

  if (characters.includes(character)) {
    return;
  }

  cookies.set(charactersKey, `${setCharacters + character},`, { path: '/' });
}

export function removeFavouriteVehicle(vehicle: string): void {
  const setVehicles = cookies.get(vehicleKey) as string;
  const vehicles = setVehicles.split(',');

  if (!vehicles.includes(vehicle)) {
    return;
  }

  const toSet = vehicles.filter(name => name !== vehicle && name);

  cookies.set(vehicleKey, `${toSet.join(',')},`, { path: '/' });
}

export function removeFavouriteCharacter(character: string): void {
  const setCharacters = cookies.get(charactersKey) as string;
  const characters = setCharacters.split(',');

  if (!characters.includes(character)) {
    return;
  }

  const toSet = characters.filter(name => name !== character && name);

  cookies.set(charactersKey, `${toSet.join(',')},`, { path: '/' });
}

export function isCharacterFavourite(character: string): boolean {
  const setCharacters = cookies.get(charactersKey) as string;
  const characters = setCharacters.split(',');

  return characters.includes(character);
}

export function isVehicleFavourite(vehicle: string): boolean {
  const setVehicles = cookies.get(vehicleKey) as string;
  const vehicles = setVehicles.split(',');

  return vehicles.includes(vehicle);
}

export function setCookie(route: string, cookieName: string): void {
  const setCookies = cookies.get(route) as string;
  const cookie = setCookies.split(',');

  if (cookie.includes(cookieName)) {
    return;
  }

  cookies.set(route, `${setCookies + cookieName},`, { path: '/' });
}

export function removeCookie(route: string, cookieName: string): void {
  const setCookies = cookies.get(route) as string;
  const cookie = setCookies.split(',');

  if (!cookie.includes(cookieName)) {
    return;
  }

  const toSet = cookie.filter(name => name !== cookieName && name);

  cookies.set(route, `${toSet.join(',')},`, { path: '/' });
}

export function isCookieSet(route: string, cookieName: string): boolean {
  const setCookies = cookies.get(route) as string;
  const cookie = setCookies.split(',');

  return cookie.includes(cookieName);
}
