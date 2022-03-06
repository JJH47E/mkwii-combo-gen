import React from 'react';
import '../../../Root.scss';
import NavbarHeaderProps from '../../../Models/Props/navrbar-header.props';

function NavBarHeader({ title }: NavbarHeaderProps) {
  return <p className="navbar-title">{title}</p>;
}

export default NavBarHeader;
