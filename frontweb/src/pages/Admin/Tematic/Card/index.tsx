import { AxiosRequestConfig } from 'axios';
import { Tematic } from 'core/types/tematic';
import { requestBackend } from 'core/utils/requests';
import { Link } from 'react-router-dom';
import './style.css';

type Props = {
  tematic: Tematic;
  onDelete: Function;
};

const Card = ({ tematic, onDelete }: Props) => {
  const handleDelete = (tematicId: number) => {
    if (!window.confirm('Tem certeza que deseja deletar')) {
      return;
    }
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/tematics/${tematicId}`,
      withCredentials: true,
    };
    requestBackend(config).then(() => {
      onDelete();
    });
  };

  return (
    <div className="base-card crud-card">
      <div className="crud-card-description">
        <div className="crud-card-bottom-container">
          <span>
            {tematic.nome} - {tematic.descricao}
          </span>
        </div>
      </div>
      <div className="crud-card-buttons-container">
        <button
          onClick={() => handleDelete(tematic.id)}
          className="btn btn-outline-danger crud-card-button crud-card-button-first btn-sm"
        >
          EXCLUIR
        </button>
        <Link to={`/admin/tematics/${tematic.id}`}>
          <button className="btn btn-outline-secondary crud-card-button btn-sm">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
