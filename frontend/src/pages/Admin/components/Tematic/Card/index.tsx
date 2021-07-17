import { Tematic } from 'core/types/Tematic';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
  tematic: Tematic;
  onRemove: (tematicId: number) => void;
};

const Card = ({ tematic, onRemove }: Props) => {
  return (
    <div className="card-base tematic-card-admin">
      <div className="col-6 py-1">
        <h3 className="card-content tematic-card-name-admin">{tematic.nome}</h3>
        <p className="tematic-card-info-admin">
          <span className="desc-tematic">{tematic.descricao}</span> ,{' '}
          {tematic.informacao_gramatical} {tematic.genero}
        </p>
      </div>
      <div className="col-3 pt-3 pr-5">
        <Link
          to={`/admin/tematics/${tematic.id}`}
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
          onClick={() => onRemove(tematic.id)}
        >
          EXCLUIR
        </button>
      </div>
    </div>
  );
};

export default Card;
