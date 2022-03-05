import React from 'react';
import NameProps from '../../../Models/Props/name.props';

function Name({ text }: NameProps) {
  return (
    <h2 className="name" key={text}>
      {text}
    </h2>
  );
}

export default Name;
