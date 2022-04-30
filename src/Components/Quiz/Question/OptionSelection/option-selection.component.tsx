import React from 'react';
import Button from '@mui/material/Button/Button';
import OptionSelectionProps from '../../../../Models/Props/option-selection.props.tsx';
import '../../../../Root.scss';
import StatGauge from '../../../Shared/Stat/stat-gauge.component';
import { getCharacterStats } from '../../../../Services/chartacter-stats.service';
import {
  getStat,
  getVehicleStats,
  sumStats,
} from '../../../../Services/vehicle-stats.service';

function OptionSelection({
  combo,
  selectOption,
  selected,
  stat,
}: OptionSelectionProps) {
  const stats = sumStats(
    getVehicleStats(combo.vehicle).stats,
    getCharacterStats(combo.name)
  );

  return (
    <>
      <p>{combo.name}</p>
      <p>{combo.vehicle}</p>
      {!selected ? (
        <Button variant="contained" className="width-90" onClick={selectOption}>
          {combo.name}
        </Button>
      ) : (
        <StatGauge statName={stat} statValue={getStat(stats, stat)} />
      )}
    </>
  );
}

export default OptionSelection;
