import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getCompetitiveInfo } from '../../Services/cookie.service';
import CounterItem from './ListItem/counter-item.component';
import CounterObject from '../../Models/counter-object.model';

function OpponentCounterList() {
  const navigate = useNavigate();

  const competitiveInfo = getCompetitiveInfo();

  let index = 0;

  const getTabIndex = () => {
    index += 1;
    return index;
  };

  const addUser = () => {
    navigate('/mkwii-combo-gen/counter/add', { replace: false });
  };

  const goToUser = (user: CounterObject) => {
    navigate(`/mkwii-combo-gen/counter/${user.opponentName}`, {
      replace: false,
    });
  };

  return (
    <div className="component">
      <header className="component-header">
        <div className="page-content">
          <h2 className="title">1v1s</h2>
          <div style={{ paddingBottom: '15px' }} />
          {competitiveInfo.length === 0
            ? "Looks like you haven't added anyone yet..."
            : competitiveInfo.map(info => {
                return (
                  <Button
                    variant="text"
                    key={`button-${info.opponentName}`}
                    className="full-width"
                    color="inherit"
                    onClick={() => goToUser(info)}
                  >
                    <div
                      key={`div-main-${info.opponentName}`}
                      style={{ display: 'block', width: '100%' }}
                      role="button"
                      tabIndex={getTabIndex()}
                    >
                      <div
                        key={`div-me-${info.opponentName}`}
                        style={{
                          display: 'inline-block',
                          width: '50%',
                          height: '100%',
                        }}
                      >
                        <CounterItem
                          key={`item-me-${info.opponentName}`}
                          name="Me"
                          score={info.myScore}
                        />
                      </div>
                      <div
                        key={`div-them-${info.opponentName}`}
                        style={{
                          display: 'inline-block',
                          width: '50%',
                          height: '100%',
                        }}
                      >
                        <CounterItem
                          key={`item-them-${info.opponentName}`}
                          name={info.opponentName}
                          score={info.opponentScore}
                        />
                      </div>
                    </div>
                  </Button>
                );
              })}
          <div style={{ paddingBottom: '15px' }} />
          <div>
            <Button
              variant="contained"
              onClick={addUser}
              className="full-width"
            >
              Add
            </Button>
          </div>
          <div style={{ paddingBottom: '15px' }} />
        </div>
      </header>
    </div>
  );
}

export default OpponentCounterList;
