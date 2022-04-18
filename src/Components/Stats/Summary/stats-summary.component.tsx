import React from 'react';
import { Button } from '@mui/material';
import KartStats from '../../../Models/kart-stats.model';
import CharacterStats from '../../../Models/character-stats.model';
import { getVehicleStats } from '../../../Services/vehicle-stats.service';
import Stat from '../../Shared/Stat/stat.component';
import { getCharacterStats } from '../../../Services/chartacter-stats.service';
import '../../../Root.scss';
import { getRegionalVariant } from '../../../Services/vehicle-mapper.service';
import { globalGetCharacter } from '../../../Services/character-selection.service';
import { globalGetKart } from '../../../Services/kart-selection.service';
import ErrorPage from '../../Error/error-page.component';
import { capitalizeFirstLetter } from '../../../Utils/StringUtils';

function formatShareString(statName: string, stats: KartStats): string {
  let stat: number;
  switch (statName) {
    case 'speed':
      stat = stats.speed;
      break;
    case 'weight':
      stat = stats.weight;
      break;
    case 'acceleration':
      stat = stats.acceleration;
      break;
    case 'handling':
      stat = stats.handling;
      break;
    case 'drift':
      stat = stats.drift;
      break;
    case 'offroad':
      stat = stats.offroad;
      break;
    case 'miniturbo':
      stat = stats.miniturbo;
      break;
    default:
      throw new Error();
  }
  return `${getBoxColor(stat)} ${capitalizeFirstLetter(statName)}: ${stat}`;
}

function getBoxColor(stat: number): string {
  if (stat < 40) {
    return '🟥';
  }
  if (stat < 60) {
    return '🟧';
  }

  return '🟩';
}

function StatsSummary() {
  const character = globalGetCharacter();
  const kart = globalGetKart();

  if (!character || !kart) {
    return <ErrorPage />;
  }

  const selectedCombo = { name: character, kart };
  let { stats } = getVehicleStats(selectedCombo.kart);

  // add on character stats
  stats = sumStats(stats, getCharacterStats(selectedCombo.name));

  const shareStats = () => {
    if (navigator.share) {
      const statText = Object.keys(stats).map(statName =>
        statName === 'driftType'
          ? `🛞 Drift Type: ${capitalizeFirstLetter(stats.driftType)}`
          : formatShareString(statName, stats)
      );
      const statTextString = statText.join('\n');
      navigator
        .share({
          title: 'MKWii Challenge',
          text: `${selectedCombo.name} - ${selectedCombo.kart}\n${statTextString}`,
          url: 'https://jjh47e.github.io/mkwii-combo-gen',
        })
        // eslint-disable-next-line no-console
        .then(() => console.log(statTextString))
        .catch((error: string) => {
          throw new Error(error);
        });
    }
  };

  return (
    <div className="component">
      <header className="component-header">
        <h2 className="name">{selectedCombo.name}</h2>
        <h3 className="kart">{getRegionalVariant(selectedCombo.kart)}</h3>
        <div className="stat-summary-content">
          <Stat
            driftType={stats.driftType}
            speed={stats.speed}
            weight={stats.weight}
            acceleration={stats.acceleration}
            handling={stats.handling}
            drift={stats.drift}
            offroad={stats.offroad}
            miniturbo={stats.miniturbo}
          />
        </div>
        <div className="page-content">
          <Button
            variant="contained"
            className="full-width"
            onClick={shareStats}
          >
            Share
          </Button>
        </div>
      </header>
    </div>
  );
}

function sumStats(
  kartStats: KartStats,
  characterStats: CharacterStats
): KartStats {
  return {
    driftType: kartStats.driftType,
    speed: kartStats.speed + characterStats.speed,
    weight: kartStats.weight + characterStats.weight,
    acceleration: kartStats.acceleration + characterStats.acceleration,
    handling: kartStats.handling + characterStats.handling,
    drift: kartStats.drift + characterStats.drift,
    offroad: kartStats.offroad + characterStats.offroad,
    miniturbo: kartStats.miniturbo + characterStats.miniturbo,
  } as KartStats;
}

export default StatsSummary;
