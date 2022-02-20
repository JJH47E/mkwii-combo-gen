import Button from "../../Shared/button.component";
import Name from "../Shared/name.component";
import "./Kart.css";
import { isMobile } from "react-device-detect";
import { KartProps } from "../../../Models/Props/kart.props";
import { getOtherRegion, getRegion, getRegionalVariant, switchRegion } from "../../../Services/region.service";
import { Regions } from "../../../Models/Enums/regions.enum";

const mouseOverStart = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const {style} = event.target as HTMLElement;
    style.textDecoration = "underline";
}

const mouseOverEnd = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const {style} = event.target as HTMLElement;
    style.textDecoration = "none";
}

function Kart({ text, reroll, confirmedChoice }: KartProps) {

    const changeRegion = () => {
        switchRegion();
    }

    return (
        <div className={isMobile ? "mobile" : "desktop"}>
            <Name text={getRegionalVariant(text)} />
            <p className="hint">Don't recognise this vehicle? <span style={styles.regionSwitch} 
            onMouseEnter={event => mouseOverStart(event)}
            onMouseLeave={event => mouseOverEnd(event)}onClick={changeRegion}
            >Change region to {getOtherRegion().toUpperCase()}</span></p>
            <Button onClick={reroll} buttonText="Reroll" />
            <br/>
            <Button onClick={confirmedChoice} buttonText="Confirm" />
        </div>
    );
}

const styles = {
    regionSwitch: {
        textDecoration: "none"
    }
}

export default Kart;
