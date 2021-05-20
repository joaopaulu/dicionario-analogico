import { Arma } from 'core/types/Arma';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
  arma: Arma;
  onRemove: (armaId: number) => void;
};

const Card = ({ arma, onRemove }: Props) => {
  return (
    <div className="card-base arma-card-admin">
      <div className="col-6 py-3">
        <h3 className="card-content arma-card-name-admin">{arma.descricao}</h3>
      </div>
      <div className="col-3 pt-3 pr-5">
        <Link
          to={`/admin/armas/${arma.id}`}
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
          onClick={() => onRemove(arma.id)}
        >
          EXCLUIR
        </button>
      </div>
    </div>
  );
};

export default Card;
