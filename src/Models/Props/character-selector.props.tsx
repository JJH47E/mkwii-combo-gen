import CharacterDetail from '../character-detail.model';

export default interface CharacterSelectorProps {
  onCharacterSelect: (arg: CharacterDetail) => void;
}
