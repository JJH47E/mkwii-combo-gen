import React from 'react';
import Button from '@mui/material/Button/Button';
import OptionSelectionProps from '../../../../Models/Props/option-selection.props.tsx';
import '../../../../Root.scss';
import StatGauge from '../../../Shared/Stat/stat-gauge.component';
import { getStat } from '../../../../Services/vehicle-stats.service';
import { getRegionalVariant } from '../../../../Services/vehicle-mapper.service';

function OptionSelection({
  combo,
  selectOption,
  selected,
  stat,
  stats,
}: OptionSelectionProps) {
  return (
    <>
      <p>{combo.name}</p>
      <p>{getRegionalVariant(combo.vehicle)}</p>
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
