/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';
import '../../Root.scss';

function HomeButton() {
  const siteRoot = '/mkwii-combo-gen';
  const location = useLocation();
  const navigate = useNavigate();
  const url = location.pathname;

  const goHome = () => {
    navigate(siteRoot);
  };

  if (url !== siteRoot && url !== `${siteRoot}/`) {
    return (
      <div className="home-button-container">
        <button className="home-button">
          <span onClick={goHome} className="material-icons">
            home
          </span>
        </button>
      </div>
    );
  }

  return <p />;
}

export default HomeButton;
