export default interface KartSelectorProps {
  weightClass: string;
  onKartSelect: (arg: string) => void;
  backToCharacterSelection: () => void;
}
