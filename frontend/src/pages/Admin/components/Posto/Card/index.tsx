import { Posto } from 'core/types/Posto';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
  posto: Posto;
  onRemove: (postoId: number) => void;
};

const Card = ({ posto, onRemove }: Props) => {
  return (
    <div className="card-base posto-card-admin">
      <div className="col-6 py-3">
        <h3 className="card-content posto-card-name-admin">
          {posto.antiguidade} - {posto.descricao} - {posto.sigla}
        </h3>
      </div>
      <div className="col-3 pt-3 pr-5">
        <Link
          to={`/admin/postos/${posto.id}`}
          type="button"
          className="btn btn-outline-secondary btn-block border-radius-10 mb-3"
        >
          EDITAR
        </Link>
      </div>
      <div className="col-3 pt-3 pr-5">
        <button
          type="button"
          className="btn btn-outline-danger btn-block border-radius-10 btn-danger"
          onClick={() => onRemove(posto.id)}
        >
          EXCLUIR
        </button>
      </div>
    </div>
  );
};

export default Card;
