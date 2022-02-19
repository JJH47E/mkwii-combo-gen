import Button from "../../Shared/button.component";
import Name from "../Shared/name.component";
import "./Kart.css";
import { isMobile } from "react-device-detect";
import { KartProps } from "../../../Models/Props/kart.props";

function Kart({ text, reroll, confirmedChoice }: KartProps) {

    return (
        <div className={isMobile ? "mobile" : "desktop"}>
            <Name text={text} />
            <Button onClick={reroll} buttonText="Reroll" />
            <br/>
            <Button onClick={confirmedChoice} buttonText="Confirm" />
        </div>
    );
}

export default Kart;
