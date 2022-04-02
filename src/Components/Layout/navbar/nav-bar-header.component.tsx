import React from 'react';
import NavbarHeaderProps from '../../../Models/Props/navbar-header.props';
import '../../../Root.scss';

function NavBarHeader({ title }: NavbarHeaderProps) {
  return <p className="navbar-title">{title}</p>;
}

export default NavBarHeader;
