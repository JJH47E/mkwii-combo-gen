import React, { Routes, Route } from 'react-router-dom';
import './Root.scss';
import Home from './Components/Home/home.component';
import Layout from './Components/Layout/layout.component';
import StatsSummary from './Components/Stats/Summary/stats-summary.component';
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
import QuizQuestion from './Components/Quiz/Question/quiz-question.component';
import CookieConsent from './Components/CookieConsent/cookie-consent.component';

function SiteRoutes() {
  return (
    <Routes>
      <Route path="/mkwii-utils/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/mkwii-utils/:characterName"
          element={<CharacterGenerator />}
        />
        <Route
          path="/mkwii-utils/:characterName/:vehicleName"
          element={<VehicleGenerator />}
        />
        <Route
          path="/mkwii-utils/:characterName/:vehicleName/stats"
          element={<StatsSummary />}
        />
        <Route path="/mkwii-utils/stats" element={<CharacterSelection />} />
        <Route
          path="/mkwii-utils/stats/:characterName"
          element={<KartSelection />}
        />
        <Route
          path="/mkwii-utils/stats/:characterName/:vehicleName"
          element={<StatsSummary />}
        />
        <Route path="/mkwii-utils/track" element={<Track />} />
        <Route path="/mkwii-utils/counter" element={<OpponentCounterList />} />
        <Route path="/mkwii-utils/counter/add" element={<AddOpponent />} />
        <Route
          path="/mkwii-utils/counter/:opponentName"
          element={<TieSummary />}
        />
        <Route
          path="/mkwii-utils/counter/:opponentName/edit"
          element={<EditTie />}
        />
        <Route path="/mkwii-utils/challenge" element={<Challenge />} />
        <Route path="/mkwii-utils/quiz" element={<QuizQuestion />} />
      </Route>
    </Routes>
  );
}

export default SiteRoutes;
