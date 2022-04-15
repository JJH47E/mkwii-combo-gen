import TrackDataJson from '../data/tracks.json';
import Cups from '../Models/cups.model';
import TrackModel from '../Models/track.model';
import { getRandomInt } from '../Utils/RandomNumberGenerator';

const trackData = TrackDataJson as Cups[];

export function getTrack(): TrackModel {
  const selectedCup = trackData[getRandomInt(trackData.length)];
  const selectedTrack = selectedCup.tracks[getRandomInt(4)];
  return { cup: selectedCup.cup, track: selectedTrack };
}
