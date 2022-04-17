import React from 'react';
import CounterItemProps from '../../../Models/Props/counter-item.props';

function CounterItem({ name, score }: CounterItemProps) {
  return (
    <>
      <p>{name}</p>
      <p>{score}</p>
    </>
  );
}

export default CounterItem;
