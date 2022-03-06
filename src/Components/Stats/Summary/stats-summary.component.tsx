import React from 'react';
import { useNavigate } from 'react-router-dom';
import KartStats from '../../../Models/kart-stats.model';
import CharacterStats from '../../../Models/character-stats.model';
import { getVehicleStats } from '../../../Services/vehicle-stats.service';
import Button from '../../Shared/button.component';
import Stat from '../../Shared/Stat/stat.component';
import { getCharacterStats } from '../../../Services/chartacter-stats.service';
import '../../../Root.scss';
import { getRegionalVariant } from '../../../Services/vehicle-mapper.service';
import { globalGetCharacter } from '../../../Services/character-selection.service';
import { globalGetKart } from '../../../Services/kart-selection.service';

function StatsSummary() {
  const navigate = useNavigate();

  const homePage = () => {
    navigate('/mkwii-combo-gen/', { replace: false });
  };

  const character = globalGetCharacter();
  const kart = globalGetKart();

  if (!character || !kart) {
    return (
      <div className="component">
        <header className="component-header">
          <h2>Uh Oh..</h2>
          <p>Something has gone wrong</p>
          <div className="page-content">
            <Button onClick={homePage} buttonText="Take me home" />
          </div>
        </header>
      </div>
    );
  }

  const selectedCombo = { name: character, kart };
  let { stats } = getVehicleStats(selectedCombo.kart);

  // add on character stats
  stats = sumStats(stats, getCharacterStats(selectedCombo.name));

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
          <Button onClick={homePage} buttonText="Home" />
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
