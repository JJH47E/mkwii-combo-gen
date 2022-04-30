import Cookies from 'universal-cookie';
import CounterObject from '../Models/counter-object.model';

const cookies = new Cookies();
const vehicleKey = 'vehicles';
const charactersKey = 'characters';
const counterKey = 'counter';
const quizKey = 'quiz';
const consentKey = 'cc';

const current = new Date();
const nextYear = new Date();

nextYear.setFullYear(current.getFullYear() + 1);

export function isCookieConsent(): boolean {
  const cc = cookies.get(consentKey) as string;
  if (!cc) {
    return false;
  }
  return true;
}

export function setCookieConsent(): void {
  cookies.set(consentKey, 'true', {
    path: '/',
    expires: nextYear,
  });
}

function setCookieSafe(
  key: string,
  value: string,
  options: { path: string; expires: Date }
): void {
  if (isCookieConsent()) {
    cookies.set(key, value, {
      path: options.path,
      expires: options.expires,
    });
  }
}

export function initialize(): void {
  const v = cookies.get(vehicleKey) as string;
  if (!v) {
    setCookieSafe(vehicleKey, '', {
      path: '/',
      expires: nextYear,
    });
  }
  const c = cookies.get(charactersKey) as string;
  if (!c) {
    setCookieSafe(charactersKey, '', {
      path: '/',
      expires: nextYear,
    });
  }
  const o = cookies.get(counterKey) as string;
  if (!o) {
    setCookieSafe(counterKey, '[]', {
      path: '/',
      expires: nextYear,
    });
  }
  const q = cookies.get(quizKey) as string;
  if (!q) {
    setCookieSafe(quizKey, '0', {
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

  setCookieSafe(vehicleKey, `${setVehicles + vehicle},`, {
    path: '/',
    expires: nextYear,
  });
}

export function setFavouriteCharacter(character: string): void {
  const setCharacters = cookies.get(charactersKey) as string;
  const characters = setCharacters.split(',');

  if (characters.includes(character)) {
    return;
  }

  setCookieSafe(charactersKey, `${setCharacters + character},`, {
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

  setCookieSafe(vehicleKey, `${toSet.join(',')},`, {
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

  setCookieSafe(charactersKey, `${toSet.join(',')},`, {
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

  setCookieSafe(route, `${setCookies + cookieName},`, {
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

  setCookieSafe(route, `${toSet.join(',')},`, {
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
  setCookieSafe(counterKey, `${JSON.stringify(setCookies)}`, {
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

  setCookieSafe(counterKey, `${JSON.stringify(infos)}`, {
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

  setCookieSafe(counterKey, `${JSON.stringify(infos)}`, {
    path: '/',
    expires: nextYear,
  });

  return tieToUpdate;
}

export function updateTie(oldName: string, tie: CounterObject): void {
  let infos = getCompetitiveInfo();

  infos = infos.map(t => (t.opponentName === oldName ? tie : t));

  setCookieSafe(counterKey, `${JSON.stringify(infos)}`, {
    path: '/',
    expires: nextYear,
  });
}

export function deleteTie(opponentName: string): boolean {
  const infos = getCompetitiveInfo();

  const newInfos = infos.filter(x => x.opponentName !== opponentName);

  if (infos.length === newInfos.length) {
    return false;
  }
  setCookieSafe(counterKey, `${JSON.stringify(newInfos)}`, {
    path: '/',
    expires: nextYear,
  });

  return true;
}

export function getQuizHighScore() {
  return cookies.get(quizKey) as number;
}

export function setQuizHighScore(score: number) {
  setCookieSafe(quizKey, `${score}`, {
    path: '/',
    expires: nextYear,
  });
}
