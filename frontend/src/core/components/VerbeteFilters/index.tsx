import { ReactComponent as SearchIcon } from 'core/assets/images/search-icon.svg';
import './styles.scss';

type Props = {
  descricao?: string;
  handleChangeDescricao: (descricao: string) => void;
  clearFilters: () => void;
};

const VerbeteFilters = ({
  descricao,
  handleChangeDescricao,
  clearFilters,
}: Props) => {
  return (
    <div className="verbete-filters-container">
      <div className="input-search">
        <input
          type="text"
          value="aca"
          className="form-control"
          placeholder="Pesquisar verbete"
          onChange={event => handleChangeDescricao(event.target.value)}
        />
        <SearchIcon />
      </div>
      <button
        className="btn btn-outline-secondary border-radius-10"
        onClick={clearFilters}
      >
        LIMPAR FILTRO
      </button>
    </div>
  );
};

export default VerbeteFilters;
