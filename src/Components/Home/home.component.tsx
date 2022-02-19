import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import GitHubButton from 'react-github-button';
import { useNavigate } from 'react-router-dom';
import Button from '../Shared/button.component';
import './Home.css';

function Home() {
  useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/generate', { replace: false });
  }

  return (
    <div className="Home">
      <header className="Home-header">
        <h2>Mario Kart Wii Combo Generator</h2>
        <div className={isMobile ? "mobile" : "desktop"}>
          <Button onClick={onClick} buttonText="Generate a combo!" />
          <a className="github-button" href="https://github.com/JJH47E/mkwii-combo-gen" data-icon="octicon-star" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
        </div>
      </header>
    </div>
  );
}

export default Home;
