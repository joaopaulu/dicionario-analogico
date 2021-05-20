import { Militar } from 'core/types/Militar';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
  militar: Militar;
  onRemove: (militarId: number) => void;
};

const Card = ({ militar, onRemove }: Props) => {
  return (
    <div className="card-base militar-card-admin">
      <div className="col-6 py-3">
        <h3 className="card-content militar-card-name-admin">
          {militar.postos.sigla} {militar.armas.descricao} {militar?.nomeGuerra}{' '}
          - Identidade:
          {militar?.idtMilitar}
        </h3>
        <span className="militar-card-email-admin">
          {militar?.nomeCompleto}
        </span>
        <br />
        <span className="militar-card-email-admin">
          OM Atual: {militar.omAtual.descricao} - OM Futura:{' '}
          {militar.omFutura.descricao}
        </span>
      </div>
      <div className="col-3 pt-4 pr-5">
        <Link
          to={`/admin/militares/${militar.id}`}
          type="button"
          className="btn btn-outline-secondary btn-block border-radius-10 mb-3"
        >
          EDITAR
        </Link>
      </div>
      <div className="col-3 pt-4 pr-5">
        <button
          type="button"
          className="btn btn-outline-danger btn-block border-radius-10 btn-danger"
          onClick={() => onRemove(militar.id)}
        >
          EXCLUIR
        </button>
      </div>
    </div>
  );
};

export default Card;
