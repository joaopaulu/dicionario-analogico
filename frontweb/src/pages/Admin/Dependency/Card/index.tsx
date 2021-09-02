import { AxiosRequestConfig } from 'axios';
import { Dependency } from 'core/types/dependency';
import { requestBackend } from 'core/utils/requests';
import { Link } from 'react-router-dom';
import './style.css';

type Props = {
  dependency: Dependency;
  onDelete: Function;
};

const DependencyCrudCard = ({ dependency, onDelete }: Props) => {
  const handleDelete = (dependencyId: number) => {
    if (!window.confirm('Tem certeza que deseja deletar')) {
      return;
    }
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/dependencies/${dependencyId}`,
      withCredentials: true,
    };
    requestBackend(config).then(() => {
      onDelete();
    });
  };

  return (
    <div className="dependency crud-card base-card">
      <div className="crud-card-description">
        <div className="crud-card-bottom-container">
          <span>
            {dependency.sigla} - {dependency.descricao}
          </span>
        </div>
      </div>
      <div className="crud-card-buttons-container">
        <button
          onClick={() => handleDelete(dependency.id)}
          className="btn btn-outline-danger crud-card-button crud-card-button-first"
        >
          EXCLUIR
        </button>
        <Link to={`/admin/dependencies/${dependency.id}`}>
          <button className="btn btn-outline-secondary crud-card-button">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DependencyCrudCard;
