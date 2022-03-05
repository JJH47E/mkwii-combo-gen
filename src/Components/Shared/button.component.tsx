import React from 'react';
import ButtonProps from '../../Models/Props/button.props';

const mouseOverStart = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  const { style } = event.target as HTMLButtonElement;
  style.backgroundColor = '#3BAEff';
};

const mouseOverEnd = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  const { style } = event.target as HTMLButtonElement;
  style.backgroundColor = '#0096FF';
};

function Button({ onClick, buttonText }: ButtonProps) {
  return (
    <button
      style={styles.button}
      type="submit"
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
    backgroundColor: '#0096FF',
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
