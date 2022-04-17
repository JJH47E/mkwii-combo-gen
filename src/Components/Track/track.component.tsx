import { Button } from '@mui/material';
import React, { useState } from 'react';
import { getTrack } from '../../Services/track.service';
import Name from '../Generator/Shared/name.component';

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
          <Name text={newTrack.track} />
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
