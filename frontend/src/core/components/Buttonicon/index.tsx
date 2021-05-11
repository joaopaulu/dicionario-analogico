import './styles.scss';

type Props = {
  text: string;
};

const ButtonIcon = ({ text }: Props) => (
  <button type="button" className="button-icon">
    {text}
  </button>
);

export default ButtonIcon;
