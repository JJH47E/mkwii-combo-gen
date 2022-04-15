import React, { Routes, Route, useLocation } from 'react-router-dom';
import './Root.scss';
import { useEffect } from 'react';
import Generator from './Components/Generator/generator.component';
import Home from './Components/Home/home.component';
import Layout from './Components/Layout/layout.component';
import StatsSummary from './Components/Stats/Summary/stats-summary.component';
import Summary from './Components/Summary/summary.component';
import { region } from './Services/region.service';
import CharacterSelection from './Components/Stats/CharacterSelection/character-selection.component';
import KartSelection from './Components/Stats/KartSelection/kart-selection.component';
import Track from './Components/Track/track.component';

function SiteRoutes() {
  // instantiate Region service
  region();

  return (
    <Routes>
      <Route path="/mkwii-combo-gen/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/mkwii-combo-gen/generate"
          element={<Generator playerCount={1} />}
        />
        <Route path="/mkwii-combo-gen/generate/summary" element={<Summary />} />
        <Route
          path="/mkwii-combo-gen/generate/summary/stats"
          element={<StatsSummary />}
        />
        <Route path="/mkwii-combo-gen/stats" element={<CharacterSelection />} />
        <Route
          path="/mkwii-combo-gen/stats/vehicle"
          element={<KartSelection />}
        />
        <Route
          path="/mkwii-combo-gen/stats/summary"
          element={<StatsSummary />}
        />
        <Route path="/mkwii-combo-gen/track" element={<Track />} />
      </Route>
    </Routes>
  );
}

export default SiteRoutes;
