/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { isMobile } from 'react-device-detect';
import Button from '../../Shared/button.component';
import Name from '../Shared/name.component';
import './Kart.css';
import { getOtherRegion, switchRegion } from '../../../Services/region.service';
import { getRegionalVariant } from '../../../Services/vehicle-mapper.service';
import KartProps from '../../../Models/Props/kart.props';

const mouseOverStart = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
  const { style } = event.target as HTMLElement;
  style.textDecoration = 'underline';
};

const mouseOverEnd = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
  const { style } = event.target as HTMLElement;
  style.textDecoration = 'none';
};

function Kart({ text, reroll, confirmedChoice }: KartProps) {
  const changeRegion = () => {
    switchRegion();
  };

  return (
    <div className={isMobile ? 'mobile' : 'desktop'}>
      <Name text={getRegionalVariant(text)} />
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
      <Button onClick={reroll} buttonText="Reroll" />
      <br />
      <Button onClick={confirmedChoice} buttonText="Confirm" />
    </div>
  );
}

const styles = {
  regionSwitch: {
    textDecoration: 'none',
  },
};

export default Kart;
