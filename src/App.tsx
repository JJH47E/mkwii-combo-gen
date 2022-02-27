import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Generator from './Components/Generator/generator.component';
import Home from './Components/Home/home.component';
import Layout from './Components/Layout/layout.component';
import StatSelection from './Components/Stats/stat-selection.component';
import StatsSummary from './Components/Stats/Summary/stats-summary.component';
import Summary from './Components/Summary/summary.component';
import { region } from './Services/region.service';

function App() {
  // instantiate Region service
  region();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mkwii-combo-gen/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/mkwii-combo-gen/generate"
            element={<Generator playerCount={1} />}
          />
          <Route path="/mkwii-combo-gen/summary" element={<Summary />} />
          <Route path="/mkwii-combo-gen/stats" element={<StatSelection />} />
          <Route
            path="/mkwii-combo-gen/stats/summary"
            element={<StatsSummary />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
