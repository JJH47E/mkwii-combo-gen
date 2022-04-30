import React from 'react';
import Button from '@mui/material/Button/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../../../Root.scss';
import FavouriteButton from '../favourite-button.component';
import ItemProps from '../../../Models/Props/item.props';

function Item({ cookieKey, value, onContinue }: ItemProps) {
  return (
    <div className="list-item">
      <Button
        variant="text"
        key={`button-${value}`}
        className="width-90 align-left"
        color="inherit"
        onClick={onContinue}
      >
        <div className="item-title">{value}</div>
      </Button>
      <div className="list-buttons">
        <FavouriteButton cookieRoute={cookieKey} cookieName={value} />
      </div>
    </div>
  );
}

export default Item;
