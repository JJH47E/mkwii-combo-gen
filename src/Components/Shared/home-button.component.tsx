/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';
import '../../Root.scss';

function HomeButton() {
  const siteRoot = '/mkwii-utils';
  const location = useLocation();
  const navigate = useNavigate();
  const url = location.pathname;

  const goHome = () => {
    navigate(siteRoot);
  };

  if (url !== siteRoot && url !== `${siteRoot}/`) {
    return (
      <button className="home-button material-icons" onClick={goHome}>
        home
      </button>
    );
  }

  return <p />;
}

export default HomeButton;
