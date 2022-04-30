import Button from '@mui/material/Button/Button';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Root.scss';
import { setCookieConsent } from '../../Services/cookie.service';

function CookieConsent({
  setConsent,
}: {
  setConsent: (value: boolean) => void;
}) {
  useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);

  const navigate = useNavigate();

  const onClickContinue = (consent: boolean) => {
    if (consent) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      setCookieConsent();
    }
    setConsent(consent);
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
            In its current state, the app has a load of bugs when cookies are
            disabled, and it is therefore a requirment to continue on from this
            point.
          </p>
          <div style={{ paddingBottom: '15px' }} />
          <Button
            variant="contained"
            className="full-width"
            onClick={() => onClickContinue(true)}
          >
            Allow All
          </Button>
        </div>
      </header>
    </div>
  );
}

export default CookieConsent;
