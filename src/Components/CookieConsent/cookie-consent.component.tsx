import React from 'react';
import Button from '@mui/material/Button/Button';
import '../../Root.scss';
import { setCookieConsent } from '../../Services/cookie.service';

function CookieConsent({
  setConsent,
}: {
  setConsent: (value: boolean) => void;
}) {
  const onClickContinue = (consent: boolean) => {
    if (consent) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      setCookieConsent();
    }
    setConsent(true);
  };

  return (
    <div className="component">
      <header className="component-header">
        <h2 className="title" style={{ marginTop: '2vh' }}>
          Cookie Consent
        </h2>
        <div className="page-content">
          <p>
            This app uses cookies to store various bits of non-personally
            identifiable information.
          </p>
          <br />
          <p>
            Cookies are stored in order to keep track of your favourite
            characters &amp; vehicles, 1v1 counter, and your high score in quiz
            mode.
          </p>
          <br />
          <p>
            All data is stored on device, and is never sent to an external
            server.
          </p>
          <br />
          <p>
            In its current state, most functionality of the app will work
            without cookies, however it is not recommended, as you may
            experience bugs.
          </p>
          <div style={{ paddingBottom: '15px' }} />
          <Button
            variant="contained"
            className="full-width"
            onClick={() => onClickContinue(true)}
          >
            Allow All
          </Button>
          <div style={{ paddingBottom: '15px' }} />
          <Button
            variant="contained"
            className="full-width"
            onClick={() => onClickContinue(false)}
          >
            Reject All
          </Button>
        </div>
      </header>
    </div>
  );
}

export default CookieConsent;
