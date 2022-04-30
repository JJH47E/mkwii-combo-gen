/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';
import '../../Root.scss';

function BackButton() {
  const siteRoot = '/mkwii-utils';
  const location = useLocation();
  const navigate = useNavigate();
  const url = location.pathname;

  const goHome = () => {
    navigate(url.slice(0, url.lastIndexOf('/')));
  };

  if (url !== siteRoot && url !== `${siteRoot}/`) {
    return (
      <button className="back-button material-icons" onClick={goHome}>
        arrow_back
      </button>
    );
  }

  return <p />;
}

export default BackButton;
