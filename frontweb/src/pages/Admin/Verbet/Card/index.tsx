import { AxiosRequestConfig } from 'axios';
import { Verbet } from 'core/types/verbet';
import { requestBackend } from 'core/utils/requests';
import { Link } from 'react-router-dom';
import './style.css';

type Props = {
  verbete: Verbet;
  onDelete: Function;
};

const Card = ({ verbete, onDelete }: Props) => {
  const handleDelete = (verbetId: number) => {
    if (!window.confirm('Tem certeza que deseja deletar')) {
      return;
    }
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/verbetes/${verbetId}`,
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
          <span className="verbete-title">{verbete.descricao}</span>{' '}
          {verbete.separacaoSilabica} {verbete.genero}
          {verbete.definicao}
        </div>
      </div>
      <div className="crud-card-buttons-container">
        <button
          onClick={() => handleDelete(verbete.id)}
          className="btn btn-outline-danger crud-card-button crud-card-button-first btn-sm"
        >
          EXCLUIR
        </button>
        <Link to={`/admin/verbets/${verbete.id}`}>
          <button className="btn btn-outline-secondary crud-card-button btn-sm">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
