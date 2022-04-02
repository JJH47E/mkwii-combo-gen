import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import '../../Root.scss';
import {
  setCookie,
  isCookieSet,
  removeCookie,
} from '../../Services/cookie.service';
import FavouriteButtonProps from '../../Models/Props/favourite-button.props';
import { mapToNtsc } from '../../Services/vehicle-mapper.service';

function FavouriteButton({ cookieRoute, cookieName }: FavouriteButtonProps) {
  const ntscName: string = mapToNtsc(cookieName);
  const [isFav, setIsFav] = useState(isCookieSet(cookieRoute, ntscName));

  const toggleFav = (name: string) => {
    if (isCookieSet(cookieRoute, name)) {
      removeCookie(cookieRoute, name);
      setIsFav(false);
    } else {
      setCookie(cookieRoute, name);
      setIsFav(true);
    }
  };

  return (
    <IconButton
      aria-label="fav"
      size="medium"
      color="inherit"
      onClick={() => toggleFav(ntscName)}
    >
      {isFav ? (
        <StarIcon fontSize="inherit" />
      ) : (
        <StarBorderIcon fontSize="inherit" />
      )}
    </IconButton>
  );
}

export default FavouriteButton;
