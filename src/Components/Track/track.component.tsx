import { Button } from '@mui/material';
import React, { useState } from 'react';
import { getTrack } from '../../Services/track.service';

function Track() {
  const [newTrack, setTrack] = useState(getTrack());

  const setNewTrack = () => {
    const track = getTrack();
    if (track === newTrack) setNewTrack();
    else setTrack(track);
  };

  return (
    <div className="component">
      <header className="component-header">
        <div className="page-content">
          <h2 className="name main">{newTrack.track}</h2>
          <p>{newTrack.cup} Cup</p>
          <div style={{ paddingBottom: '15px' }} />
          <Button
            variant="contained"
            className="full-width"
            onClick={setNewTrack}
          >
            Another
          </Button>
        </div>
      </header>
    </div>
  );
}

export default Track;
