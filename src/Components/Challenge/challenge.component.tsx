import React from 'react';
import Button from '@mui/material/Button/Button';
import '../../Root.scss';
import TrackModel from '../../Models/track.model';
import { getRandomCharacter } from '../../Services/character.service';
import { getTrack } from '../../Services/track.service';
import { getVehicle } from '../../Services/vehicle.service';

function Challenge() {
  const character = getRandomCharacter('');
  const vehicle = getVehicle(character.class);

  const tracks: TrackModel[] = [];

  while (tracks.length < 4) {
    const newTrack = getTrack();
    if (!tracks.includes(newTrack)) {
      tracks.push(newTrack);
    }
  }

  const shareChallenge = () => {
    if (navigator.share) {
      const trackText = tracks.map(t => `${t.track} - ${t.cup} Cup`);
      const trackTextString = trackText.join('\n');
      navigator
        .share({
          title: 'MKWii Challenge',
          text: `${character.name}\n${vehicle}\n${trackTextString}`,
          url: 'https://jjh47e.github.io/mkwii-combo-gen',
        })
        .catch((error: string) => {
          throw new Error(error);
        });
    }
  };

  return (
    <div className="component">
      <header className="component-header">
        <div style={{ paddingBottom: '15px' }} />
        <div className="page-content">
          <span style={{ display: 'block', fontWeight: 'bold' }}>
            {character.name}
          </span>
          <span style={{ display: 'block' }}>{vehicle}</span>
          <div style={{ paddingBottom: '30px' }} />
          {tracks.map(trackInfo => {
            return (
              <>
                <span
                  key={`span-track-${trackInfo.track}`}
                  style={{ display: 'block', fontWeight: 'bold' }}
                >
                  {trackInfo.track}
                </span>
                <span
                  key={`span-cup-${trackInfo.track}`}
                  style={{ display: 'block' }}
                >
                  {trackInfo.cup} Cup
                </span>
                <div
                  key={`div-sep-${trackInfo.track}`}
                  style={{ paddingBottom: '15px' }}
                />
              </>
            );
          })}
          <Button
            variant="contained"
            className="full-width"
            onClick={shareChallenge}
          >
            Share
          </Button>
        </div>
      </header>
    </div>
  );
}

export default Challenge;
