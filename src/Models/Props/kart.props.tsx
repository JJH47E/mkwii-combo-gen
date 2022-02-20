import { Regions } from "../Enums/regions.enum";

export type KartProps = {
    text: string;
    reroll: () => void;
    confirmedChoice: () => void;
};