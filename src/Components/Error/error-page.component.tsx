import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

function ErrorPage() {
  const navigate = useNavigate();

  const homePage = () => {
    navigate('/mkwii-combo-gen/', { replace: false });
  };

  return (
    <div className="component">
      <header className="component-header">
        <h2>Uh Oh..</h2>
        <p>Something has gone wrong</p>
        <div className="page-content">
          <Button variant="contained" className="full-width" onClick={homePage}>
            Take me home
          </Button>
        </div>
      </header>
    </div>
  );
}

export default ErrorPage;
