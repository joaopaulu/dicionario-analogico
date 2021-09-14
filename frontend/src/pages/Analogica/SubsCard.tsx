import { Analogica } from 'core/types/analogica';
import './styles.scss';

type Props = {
  analogica: Analogica;
};

const SubsCard = ({ analogica }: Props) => <>{analogica?.descricao}</>;

export default SubsCard;
