import React from 'react';
import { Outlet } from 'react-router-dom';
import BackButton from '../Shared/back-button.component';
import '../../Root.scss';
import HomeButton from '../Shared/home-button.component';

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <BackButton />
        <HomeButton />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
