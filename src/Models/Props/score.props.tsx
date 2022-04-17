import CounterObject from '../counter-object.model';

export default interface ScoreProps {
  score: number;
  decrementFunc: () => void;
  incrementFunc: () => void;
}
