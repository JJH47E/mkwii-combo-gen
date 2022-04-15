import React from 'react';
import NameProps from '../../../Models/Props/name.props';

function Name({ text }: NameProps) {
  return (
    <h2 className="name main" key={text}>
      {text}
    </h2>
  );
}

export default Name;
