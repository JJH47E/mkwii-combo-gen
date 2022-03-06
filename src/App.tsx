import React, { BrowserRouter } from 'react-router-dom';
import './Root.scss';
import { region } from './Services/region.service';
import SiteRoutes from './site-routes.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { character } from './Services/character-selection.service';
import { kart } from './Services/kart-selection.service';

function App() {
  // instantiate Region service
  region();

  // instatiate charaacter selection service
  character();

  // instatiate kart selection service
  kart();

  return (
    <BrowserRouter>
      <SiteRoutes />
    </BrowserRouter>
  );
}

export default App;
