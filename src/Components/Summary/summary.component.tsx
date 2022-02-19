import { isMobile } from 'react-device-detect';
import { useLocation, useNavigate } from 'react-router-dom';
import { LocationState } from '../../Models/location-state.model';
import { SummaryProps } from '../../Models/Props/summary.props';
import { SummaryLocationState } from '../../Models/summary-location-state.model';
import Button from '../Shared/button.component';
import './Summary.css';

function Summary() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/', {replace: false});
  }

  const {state} = useLocation();
  var selectedCombo = (state as SummaryLocationState).selectedCombo;

  if (selectedCombo == null || selectedCombo == undefined) {
    return (
      <div className="Summary">
        <header className="Summary-header">
          <h2>Uh Oh..</h2>
          <p>Something has gone wrong</p>
          <div className={isMobile ? "mobile" : "desktop"}>
            <Button onClick={onClick} buttonText="Take me home"/>
          </div>
        </header>
      </div>
    );
  }

  return (
    <div className="Summary">
      <header className="Summary-header">
        <h2 className="name">{selectedCombo.name}</h2>
        <h3 className="kart">{selectedCombo.kart}</h3>
        <div className={isMobile ? "mobile" : "desktop"}>
          <Button onClick={onClick} buttonText="Do Another"/>
        </div>
      </header>
    </div>
  );
}

export default Summary;
