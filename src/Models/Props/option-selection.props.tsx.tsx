export default interface OptionSelectionProps {
  combo: { name: string; vehicle: string };
  selectOption: () => void;
  selected: boolean;
  stat: string;
}
