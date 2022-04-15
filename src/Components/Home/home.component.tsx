import React, { useEffect } from 'react';
import GitHubButton from 'react-github-btn';
import { useNavigate } from 'react-router-dom';
import Button from '../Shared/button.component';
import '../../Root.scss';

function Home() {
  useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);

  const navigate = useNavigate();

  const onClickGen = () => {
    navigate('/mkwii-combo-gen/generate', { replace: false });
  };

  const onClickTrack = () => {
    navigate('/mkwii-combo-gen/track', { replace: false });
  };

  const onClickStats = () => {
    navigate('/mkwii-combo-gen/stats', { replace: false });
  };

  return (
    <div className="component">
      <header className="component-header">
        <h2 className="title main">Mario Kart Wii Utilities</h2>
        <div className="page-content">
          <Button onClick={onClickStats} buttonText="Stat Checker" />
          <Button onClick={onClickGen} buttonText="Random Combo" />
          <Button onClick={onClickTrack} buttonText="Random Track" />
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
