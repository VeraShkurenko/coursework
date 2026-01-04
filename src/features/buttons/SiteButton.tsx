import { ButtonTypes } from './types/ButtonTypes';
import './ui/SiteButton.css';

export default function SiteButton({
  buttonType,
  text,
  action,
}: {
  buttonType: ButtonTypes;
  text: string;
  action?: () => void;
}) {
  const extraClass =
    buttonType === ButtonTypes.Black
      ? 'button-black'
      : buttonType === ButtonTypes.White
      ? 'button-white'
      : '';

  return (
    <button className={`site-button ${extraClass}`} onClick={action}>
      {text}
    </button>
  );
}
