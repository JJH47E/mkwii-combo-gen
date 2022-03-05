import React, { BrowserRouter } from 'react-router-dom';
import './Root.scss';
import { region } from './Services/region.service';
import SiteRoutes from './site-routes.component';

function App() {
  // instantiate Region service
  region();

  return (
    <BrowserRouter>
      <SiteRoutes />
    </BrowserRouter>
  );
}

export default App;
