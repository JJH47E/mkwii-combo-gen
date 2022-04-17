import React from 'react';
import { Button } from '@mui/material';
import Name from '../Shared/name.component';
import { getRegionalVariant } from '../../../Services/vehicle-mapper.service';
import KartProps from '../../../Models/Props/kart.props';
import '../../../Root.scss';
import RegionSwitch from '../../Shared/region-switch.component';

function Kart({ text, reroll, confirmedChoice }: KartProps) {
  return (
    <div className="page-content">
      <Name text={getRegionalVariant(text)} />
      <RegionSwitch />
      <Button variant="contained" className="full-width" onClick={reroll}>
        Reroll
      </Button>
      <div style={{ paddingBottom: '15px' }} />
      <Button
        variant="contained"
        className="full-width"
        onClick={confirmedChoice}
      >
        Confirm
      </Button>
    </div>
  );
}

export default Kart;
