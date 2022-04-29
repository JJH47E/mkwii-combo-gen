import React, { BrowserRouter } from 'react-router-dom';
import './Root.scss';
import { region } from './Services/region.service';
import SiteRoutes from './site-routes.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initialize } from './Services/cookie.service';

function App() {
  // initialise cookie service
  initialize();

  // instantiate Region service
  region();

  return (
    <BrowserRouter>
      <SiteRoutes />
    </BrowserRouter>
  );
}

export default App;
