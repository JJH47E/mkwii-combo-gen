import React from 'react';
import { IconButton } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../../../Root.scss';
import FavouriteButton from '../favourite-button.component';
import ItemProps from '../../../Models/Props/item.props';

function Item({ cookieKey, onContinue, value }: ItemProps) {
  return (
    <div className="list-item">
      <div className="item-title">{value}</div>
      <div className="list-buttons">
        <FavouriteButton cookieRoute={cookieKey} cookieName={value} />
        <div className="continue-button">
          <IconButton
            aria-label="fav"
            size="medium"
            color="inherit"
            onClick={onContinue}
          >
            <ArrowRightIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Item;
