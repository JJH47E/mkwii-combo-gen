import { NameProps } from "../../../Models/Props/name.props";
import "./Name.css";

function Name({ text }: NameProps) {
    return (
        <h2 key={text}>{text}</h2>
    );
}

export default Name;
