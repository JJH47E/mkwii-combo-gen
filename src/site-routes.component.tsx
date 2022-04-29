import React, { Routes, Route } from 'react-router-dom';
import './Root.scss';
import Home from './Components/Home/home.component';
import Layout from './Components/Layout/layout.component';
import StatsSummary from './Components/Stats/Summary/stats-summary.component';
import { region } from './Services/region.service';
import CharacterSelection from './Components/Stats/CharacterSelection/character-selection.component';
import KartSelection from './Components/Stats/KartSelection/kart-selection.component';
import Track from './Components/Track/track.component';
import AddOpponent from './Components/Counter/Add/add-opponent.component';
import OpponentCounterList from './Components/Counter/counter-list.component';
import TieSummary from './Components/Counter/TieSummary/tie-summary.component';
import EditTie from './Components/Counter/Edit/edit-tie.component';
import Challenge from './Components/Challenge/challenge.component';
import CharacterGenerator from './Components/CharacterGenerator/character-generator.component';
import VehicleGenerator from './Components/VehicleGenerator/vehicle-generator.component';

function SiteRoutes() {
  // instantiate Region service
  region();

  return (
    <Routes>
      <Route path="/mkwii-combo-gen/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/mkwii-combo-gen/:characterName"
          element={<CharacterGenerator />}
        />
        <Route
          path="/mkwii-combo-gen/:characterName/:vehicleName"
          element={<VehicleGenerator />}
        />
        <Route
          path="/mkwii-combo-gen/:characterName/:vehicleName/stats"
          element={<StatsSummary />}
        />
        <Route path="/mkwii-combo-gen/stats" element={<CharacterSelection />} />
        <Route
          path="/mkwii-combo-gen/stats/:characterName"
          element={<KartSelection />}
        />
        <Route
          path="/mkwii-combo-gen/stats/:characterName/:vehicleName/stats"
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
