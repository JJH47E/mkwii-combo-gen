import Cookies from 'universal-cookie';
import CounterObject from '../Models/counter-object.model';

const cookies = new Cookies();
const vehicleKey = 'vehicles';
const charactersKey = 'characters';
const counterKey = 'counter';

const current = new Date();
const nextYear = new Date();

nextYear.setFullYear(current.getFullYear() + 1);

export function initialize(): void {
  const v = cookies.get(vehicleKey) as string;
  if (!v) {
    cookies.set(vehicleKey, '', {
      path: '/',
      expires: nextYear,
    });
  }
  const c = cookies.get(charactersKey) as string;
  if (!c) {
    cookies.set(charactersKey, '', {
      path: '/',
      expires: nextYear,
    });
  }
  const o = cookies.get(counterKey) as string;
  if (!o) {
    cookies.set(counterKey, '[]', {
      path: '/',
      expires: nextYear,
    });
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

  cookies.set(charactersKey, `${setCharacters + character},`, {
    path: '/',
    expires: nextYear,
  });
}

export function removeFavouriteVehicle(vehicle: string): void {
  const setVehicles = cookies.get(vehicleKey) as string;
  const vehicles = setVehicles.split(',');

  if (!vehicles.includes(vehicle)) {
    return;
  }

  const toSet = vehicles.filter(name => name !== vehicle && name);

  cookies.set(vehicleKey, `${toSet.join(',')},`, {
    path: '/',
    expires: nextYear,
  });
}

export function removeFavouriteCharacter(character: string): void {
  const setCharacters = cookies.get(charactersKey) as string;
  const characters = setCharacters.split(',');

  if (!characters.includes(character)) {
    return;
  }

  const toSet = characters.filter(name => name !== character && name);

  cookies.set(charactersKey, `${toSet.join(',')},`, {
    path: '/',
    expires: nextYear,
  });
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

  cookies.set(route, `${setCookies + cookieName},`, {
    path: '/',
    expires: nextYear,
  });
}

export function removeCookie(route: string, cookieName: string): void {
  const setCookies = cookies.get(route) as string;
  const cookie = setCookies.split(',');

  if (!cookie.includes(cookieName)) {
    return;
  }

  const toSet = cookie.filter(name => name !== cookieName && name);

  cookies.set(route, `${toSet.join(',')},`, {
    path: '/',
    expires: nextYear,
  });
}

export function isCookieSet(route: string, cookieName: string): boolean {
  const setCookies = cookies.get(route) as string;
  const cookie = setCookies.split(',');

  return cookie.includes(cookieName);
}

export function isOpponentSet(name: string): boolean {
  const setCookies = cookies.get(counterKey) as CounterObject[];
  return (
    setCookies.find(
      obj => obj.opponentName.toLowerCase() === name.toLowerCase()
    ) != null
  );
}

export function setOpponentCookie(name: string): void {
  if (isOpponentSet(name)) return;

  const cookieToSet = {
    opponentName: name,
    opponentScore: 0,
    myScore: 0,
  } as CounterObject;

  const setCookies = cookies.get(counterKey) as CounterObject[];
  setCookies.push(cookieToSet);
  cookies.set(counterKey, `${JSON.stringify(setCookies)}`, {
    path: '/',
    expires: nextYear,
  });
}

export function getCompetitiveInfo(): CounterObject[] {
  return cookies.get(counterKey) as CounterObject[];
}

export function updateOpponentScore(
  opponentName: string,
  increment: boolean
): CounterObject {
  let infos = getCompetitiveInfo();

  const tieToUpdate = infos.find(tie => tie.opponentName === opponentName);

  if (!tieToUpdate) {
    throw Error('cannot find opponent');
  }

  tieToUpdate.opponentScore += increment ? 1 : -1;

  infos = infos.map(tie =>
    tie.opponentName === opponentName ? tieToUpdate : tie
  );

  cookies.set(counterKey, `${JSON.stringify(infos)}`, {
    path: '/',
    expires: nextYear,
  });

  return tieToUpdate;
}

export function updateMyScore(
  opponentName: string,
  increment: boolean
): CounterObject {
  let infos = getCompetitiveInfo();

  const tieToUpdate = infos.find(tie => tie.opponentName === opponentName);

  if (!tieToUpdate) {
    throw Error('cannot find opponent');
  }

  tieToUpdate.myScore += increment ? 1 : -1;

  infos = infos.map(tie =>
    tie.opponentName === opponentName ? tieToUpdate : tie
  );

  cookies.set(counterKey, `${JSON.stringify(infos)}`, {
    path: '/',
    expires: nextYear,
  });

  return tieToUpdate;
}
