import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import GitHubButton from 'react-github-btn';
import { useNavigate } from 'react-router-dom';
import '../../Root.scss';
import { getRandomCharacter } from '../../Services/character.service';
import { isCookieConsent } from '../../Services/cookie.service';

function Home() {
  useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);

  const [cookieConsent] = useState(isCookieConsent());

  const navigate = useNavigate();

  const onClickGen = () => {
    navigate(`/mkwii-utils/${getRandomCharacter('').name}`);
  };

  const onClickTrack = () => {
    navigate('/mkwii-utils/track');
  };

  const onClickStats = () => {
    navigate('/mkwii-utils/stats', { replace: false });
  };

  const onClickCounter = () => {
    navigate('/mkwii-utils/counter', { replace: false });
  };

  const onClickChallenge = () => {
    navigate('/mkwii-utils/challenge', { replace: false });
  };

  const onClickQuiz = () => {
    navigate('/mkwii-utils/quiz', { replace: false });
  };

  return (
    <div className="component">
      <header className="component-header">
        <h2 className="title main">Mario Kart Wii Utilities</h2>
        <div className="page-content">
          <Button
            variant="contained"
            className="full-width"
            onClick={onClickGen}
          >
            Random Combo
          </Button>
          <div style={{ paddingBottom: '15px' }} />
          <Button
            variant="contained"
            className="full-width"
            onClick={onClickTrack}
          >
            Random Track
          </Button>
          {cookieConsent ? (
            <>
              <div style={{ paddingBottom: '15px' }} />
              <Button
                variant="contained"
                className="full-width"
                onClick={onClickCounter}
              >
                1v1 Counter
              </Button>
            </>
          ) : null}
          <div style={{ paddingBottom: '15px' }} />
          <Button
            variant="contained"
            className="full-width"
            onClick={onClickChallenge}
          >
            Challenge
          </Button>
          <div style={{ paddingBottom: '15px' }} />
          <Button
            variant="contained"
            className="full-width"
            onClick={onClickQuiz}
          >
            Quiz
          </Button>
          <div style={{ paddingBottom: '15px' }} />
          <Button
            variant="contained"
            className="full-width"
            onClick={onClickStats}
          >
            Stat Checker
          </Button>
          <div style={{ paddingBottom: '15px' }} />
          <GitHubButton
            href="https://github.com/jjh47e/mkwii-utils"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            data-size="large"
            aria-label="Star jjh47e/mkwii-utils on GitHub"
          >
            Star
          </GitHubButton>
        </div>
      </header>
    </div>
  );
}

export default Home;
