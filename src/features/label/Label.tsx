import { LabelTypes } from './types/LabelTypes';
import './ui/Label.css';

export default function Label({
  labelType,
  text,
}: {
  labelType: LabelTypes;
  text: string;
}) {
  const extraClass =
    labelType === LabelTypes.Black
      ? 'label-black'
      : labelType === LabelTypes.Purple
      ? 'label-purple'
      : labelType === LabelTypes.Red
      ? 'label-red'
      : '';

  return (
    <div className={`site-label ${extraClass}`}>
      {text}
    </div>
  );
}
