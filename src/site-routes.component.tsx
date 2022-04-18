import React, { Routes, Route } from 'react-router-dom';
import './Root.scss';
import Generator from './Components/Generator/generator.component';
import Home from './Components/Home/home.component';
import Layout from './Components/Layout/layout.component';
import StatsSummary from './Components/Stats/Summary/stats-summary.component';
import Summary from './Components/Summary/summary.component';
import { region } from './Services/region.service';
import CharacterSelection from './Components/Stats/CharacterSelection/character-selection.component';
import KartSelection from './Components/Stats/KartSelection/kart-selection.component';
import Track from './Components/Track/track.component';
import AddOpponent from './Components/Counter/Add/add-opponent.component';
import OpponentCounterList from './Components/Counter/counter-list.component';
import TieSummary from './Components/Counter/TieSummary/tie-summary.component';
import EditTie from './Components/Counter/Edit/edit-tie.component';
import Challenge from './Components/Challenge/challenge.component';

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
        <Route
          path="/mkwii-combo-gen/counter"
          element={<OpponentCounterList />}
        />
        <Route path="/mkwii-combo-gen/counter/add" element={<AddOpponent />} />
        <Route
          path="/mkwii-combo-gen/counter/:opponentName"
          element={<TieSummary />}
        />
        <Route
          path="/mkwii-combo-gen/counter/:opponentName/edit"
          element={<EditTie />}
        />
        <Route path="/mkwii-combo-gen/challenge" element={<Challenge />} />
      </Route>
    </Routes>
  );
}

export default SiteRoutes;
