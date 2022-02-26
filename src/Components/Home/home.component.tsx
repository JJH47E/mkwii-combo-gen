import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import GitHubButton from 'react-github-btn';
import { useNavigate } from 'react-router-dom';
import Button from '../Shared/button.component';
import './Home.css';

function Home() {
  useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/mkwii-combo-gen/generate', { replace: false });
  };

  return (
    <div className="home">
      <header className="home-header">
        <h2>Mario Kart Wii Combo Generator</h2>
        <div className={isMobile ? 'mobile' : 'desktop'}>
          <Button onClick={onClick} buttonText="Generate a combo!" />
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
