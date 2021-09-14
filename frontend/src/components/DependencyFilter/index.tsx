import { ReactComponent as SearchIcon } from 'core/assets/images/search-icon.svg';
import { useForm } from 'react-hook-form';
import './styles.css';

export type DependencyFilterData = {
  descricao: string;
};

type Props = {
  onSubmitFilter: (data: DependencyFilterData) => void;
};

const DependencyFilter = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit, setValue } = useForm<DependencyFilterData>();

  const onSubmit = (formData: DependencyFilterData) => {
    onSubmitFilter(formData);
  };

  const handleFormClear = () => {
    console.log('Limpa filtro');
    setValue('descricao', '');
  };

  return (
    <div className="base-card dependency-filter-container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="dependency-filter-form"
      >
        <div className="dependency-filter-name-container">
          <input
            {...register('descricao')}
            type="text"
            className="form-control"
            placeholder="Dependencia"
            name="descricao"
          />
          <button className="dependency-filter-search-icon">
            <SearchIcon />
          </button>
        </div>
        <div className="dependency-filter-bottom-container">
          <button
            onClick={handleFormClear}
            className="btn btn-outline-secondary btn-dependency-filter-clear"
          >
            LIMPAR<span className="btn-dependency-filter-word"> FILTRO</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default DependencyFilter;
