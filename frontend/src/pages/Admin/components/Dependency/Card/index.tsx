import { Dependency } from 'core/types/Dependency';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
  dependency: Dependency;
  onRemove: (dependencyId: number) => void;
};

const Card = ({ dependency, onRemove }: Props) => {
  return (
    <div className="card-base dependency-card-admin">
      <div className="col-6 py-3">
        <h3 className="card-content dependency-card-name-admin">
          {dependency.descricao} - {dependency.sigla}
        </h3>
      </div>
      <div className="col-3 pt-1 pr-4">
        <Link
          to={`/admin/dependencies/${dependency.id}`}
          type="button"
          className="btn btn-outline-secondary btn-block border-radius-10 mb-3"
        >
          EDITAR
        </Link>
      </div>
      <div className="col-3 pt-1 pr-4">
        <button
          type="button"
          className="btn btn-outline-danger btn-block border-radius-10 btn-danger"
          onClick={() => onRemove(dependency.id)}
        >
          EXCLUIR
        </button>
      </div>
    </div>
  );
};

export default Card;
