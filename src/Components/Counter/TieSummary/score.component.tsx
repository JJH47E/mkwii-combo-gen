import React from 'react';
import IconButton from '@mui/material/IconButton/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ScoreProps from '../../../Models/Props/score.props';
import '../../../Root.scss';

function Score({ score, decrementFunc, incrementFunc }: ScoreProps) {
  return (
    <>
      <div className="third-width">
        <span style={{ color: '#FF5733' }}>
          <IconButton color="inherit" onClick={decrementFunc}>
            <RemoveIcon />
          </IconButton>
        </span>
      </div>
      <div className="third-width">{score}</div>
      <div className="third-width">
        <span style={{ color: '#00FF00' }}>
          <IconButton color="inherit" onClick={incrementFunc}>
            <AddIcon />
          </IconButton>
        </span>
      </div>
    </>
  );
}

export default Score;
