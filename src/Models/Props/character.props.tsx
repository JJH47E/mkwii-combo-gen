export default interface CharacterProps {
  text: string;
  reroll: () => void;
  confirmedChoice: () => void;
}
