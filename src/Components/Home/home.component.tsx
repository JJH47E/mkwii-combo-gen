import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import GitHubButton from 'react-github-btn';
import { useNavigate } from 'react-router-dom';
import '../../Root.scss';
import { getRandomCharacter } from '../../Services/character.service';

function Home() {
  useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);

  const navigate = useNavigate();

  const onClickGen = () => {
    navigate(`/mkwii-combo-gen/${getRandomCharacter('').name}`);
  };

  const onClickTrack = () => {
    navigate('/mkwii-combo-gen/track');
  };

  const onClickStats = () => {
    navigate('/mkwii-combo-gen/stats', { replace: false });
  };

  const onClickCounter = () => {
    navigate('/mkwii-combo-gen/counter', { replace: false });
  };

  const onClickChallenge = () => {
    navigate('/mkwii-combo-gen/challenge', { replace: false });
  };

  return (
    <div className="component">
      <header className="component-header">
        <h2 className="title main">Mario Kart Wii Utilities</h2>
        <div className="page-content">
          <Button
            variant="contained"
            className="full-width"
            onClick={onClickStats}
          >
            Stat Checker
          </Button>
          <div style={{ paddingBottom: '15px' }} />
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
          <div style={{ paddingBottom: '15px' }} />
          <Button
            variant="contained"
            className="full-width"
            onClick={onClickCounter}
          >
            1v1 Counter
          </Button>
          <div style={{ paddingBottom: '15px' }} />
          <Button
            variant="contained"
            className="full-width"
            onClick={onClickChallenge}
          >
            Challenge
          </Button>
          <div style={{ paddingBottom: '15px' }} />
          <GitHubButton
            href="https://github.com/jjh47e/mkwii-combo-gen"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            data-size="large"
            aria-label="Star jjh47e/mkwii-combo-gen on GitHub"
          >
            Star
          </GitHubButton>
        </div>
      </header>
    </div>
  );
}

export default Home;
