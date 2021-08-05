import { Verbet } from 'core/types/Verbet';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
  verbet: Verbet;
  onRemove: (verbetId: number) => void;
};

const Card = ({ verbet, onRemove }: Props) => {
  return (
    <div className="card-base verbet-card-admin">
      <div className="col-6 py-1">
        <h3 className="card-content verbet-card-name-admin">
          {verbet.descricao}
        </h3>
        <p className="verbet-card-info-admin">
          <span className="desc-verbet">
            {verbet.separacaoSilabica}, {verbet.genero}
          </span>
        </p>
      </div>
      <div className="col-3 pt-1 pr-5">
        <Link
          to={`/admin/verbets/${verbet.id}`}
          type="button"
          className="btn btn-outline-secondary btn-block border-radius-10 mb-3"
        >
          EDITAR
        </Link>
      </div>
      <div className="col-3 pt-1 pr-5">
        <button
          type="button"
          className="btn btn-outline-danger btn-block border-radius-10 btn-danger"
          onClick={() => onRemove(verbet.id)}
        >
          EXCLUIR
        </button>
      </div>
    </div>
  );
};

export default Card;
