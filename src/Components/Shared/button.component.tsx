import React from 'react';
import ButtonProps from '../../Models/Props/button.props';
import { getRandomInt } from '../../Utils/RandomNumberGenerator';

const buttonColors: string[] = [
  '#97A2FF',
  '#F87161',
  '#4BB6B8',
  '#DF8D52',
  '#9890BA',
  '#DF6180',
];

const mouseOverStart = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  const { style } = event.target as HTMLButtonElement;
  style.backgroundColor = buttonColors[getRandomInt(buttonColors.length)];
};

const mouseOverEnd = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  const { style } = event.target as HTMLButtonElement;
  style.backgroundColor = '#6D9B30';
};

function Button({ onClick, buttonText }: ButtonProps) {
  return (
    <button
      style={styles.button}
      type="submit"
      onClick={onClick}
      onMouseEnter={event => mouseOverStart(event)}
      onMouseLeave={event => mouseOverEnd(event)}
    >
      {buttonText}
    </button>
  );
}

let styles = {
  button: {
    backgroundColor: '#6D9B30',
    border: 'none',
    color: '#fff',
    padding: '15px 32px',
    textDecoration: 'bold',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '15px',
    width: '100%',
    marginBottom: '10px',
  },
};

export default Button;
