import React from 'react';
import { getOtherRegion, switchRegion } from '../../Services/region.service';

const mouseOverStart = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
  const { style } = event.target as HTMLElement;
  style.textDecoration = 'underline';
};

const mouseOverEnd = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
  const { style } = event.target as HTMLElement;
  style.textDecoration = 'none';
};

function RegionSwitch() {
  const changeRegion = () => {
    switchRegion();
  };

  return (
    <p className="hint">
      Don&apos;t recognise this vehicle?&nbsp;
      <span
        role="button"
        tabIndex={0}
        style={styles.regionSwitch}
        onMouseEnter={event => mouseOverStart(event)}
        onMouseLeave={event => mouseOverEnd(event)}
        onClick={changeRegion}
        onKeyDown={changeRegion}
      >
        Change region to {getOtherRegion().toUpperCase()}
      </span>
    </p>
  );
}

const styles = {
  regionSwitch: {
    textDecoration: 'none',
  },
};

export default RegionSwitch;
