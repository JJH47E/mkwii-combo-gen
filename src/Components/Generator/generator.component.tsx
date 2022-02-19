import "./Generator.css";
import { GeneratorProps } from "../../Models/Props/generator.props";
import { getRandomInt } from "../../Utils/RandomNumberGenerator";
import { CharacterCombo } from "../../Models/character-combo.model";
import ComboData from "../../data/data.json"
import { useState } from "react";
import { CharacterProps } from "../../Models/Props/character.props";
import Character from "./Character/character.component";
import { KartProps } from "../../Models/Props/kart.props";
import Kart from "./Kart/kart.component";
import { NavigationType, useNavigate } from "react-router-dom";
import { PlayerCombo } from "../../Models/player-combo.model";

var isCharacterConfirmed: boolean;

function Generator({ playerCount }: GeneratorProps) {
    var initialCharacter = randomCharacter(ComboData);
    var initialKart: string;
    isCharacterConfirmed = false;

    const navigate = useNavigate();
    
    const [newSelectedCharacter, setCharacter] = useState(randomCharacter(ComboData, initialCharacter));
    const [newCharacterConfirmed, setCharacterConfirmed] = useState(isCharacterConfirmed);
    const [newSelectedKart, setKart] = useState("");

    const reRollCharacter = () => {
        setCharacter(randomCharacter(ComboData, newSelectedCharacter));
    };

    const reRollKart = () => {
        setKart(randomKart(ComboData, newSelectedCharacter, newSelectedKart));
    };

    const confirmedCharacter = () => {
        isCharacterConfirmed = true;
        setKart(randomKart(ComboData, initialCharacter));
        setCharacterConfirmed(isCharacterConfirmed);
    }

    const confirmedKart = () => {
        var selectedCombo = {name: newSelectedCharacter, kart: newSelectedKart};
        navigate('/mkwii-combo-gen/summary', { state: { selectedCombo: selectedCombo } });
    }

    return (
        <div className="Generator">
            <header className="Generator-header">
                <ShowCharacter reroll={reRollCharacter} confirmedChoice={confirmedCharacter} text={newSelectedCharacter} show={newCharacterConfirmed}/>
                <ShowKart reroll={reRollKart} confirmedChoice={confirmedKart} text={newSelectedKart} show={newCharacterConfirmed}/>
            </header>
        </div>
    );
}

interface ShowCharacterProps extends CharacterProps{
    show: boolean;
}

function ShowCharacter({ text, reroll, confirmedChoice, show }: ShowCharacterProps)
{
    if (!show){
        return(
            <Character reroll={reroll} confirmedChoice={confirmedChoice} text={text} />
        );
    }
    return(<></>);
}

interface ShowKartProps extends KartProps{
    show: boolean;
}

function ShowKart({ text, reroll, confirmedChoice, show }: ShowKartProps)
{
    if (show){
        return(
            <Kart reroll={reroll} confirmedChoice={confirmedChoice} text={text} />
        );
    }
    return(<></>);
}

function randomCharacter(data: CharacterCombo[], currentCharacter: string = ""): string {
    const charactersLength: number = data.length;
    var chosenCharacter = data[getRandomInt(charactersLength)];
    if (chosenCharacter.name == currentCharacter) {
        return randomCharacter(data, currentCharacter);
    }
    else {
        return chosenCharacter.name;
    }
}

function randomKart(data: CharacterCombo[], character: string, currentKart: string = ""): string {
    var possibleKarts: string[] = [];

    data.forEach(characterKartsCombo => {
        if (characterKartsCombo.name == character) {
            possibleKarts = characterKartsCombo.karts;
        }
    });

    if (possibleKarts == []){
        throw Error();
    }

    const kartsLength: number = possibleKarts.length;
    var chosenKart = possibleKarts[getRandomInt(kartsLength)];
    if (chosenKart == currentKart) {
        return randomKart(data, character, currentKart);
    }
    else {
        return chosenKart;
    }
}

export default Generator;