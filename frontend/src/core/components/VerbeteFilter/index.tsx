import { ReactComponent as SearchIcon } from 'core/assets/images/search-icon.svg';
import { useForm } from 'react-hook-form';
import './styles.css';

export type VerbeteFilterData = {
  descricao: string;
};

type Props = {
  onSubmitFilter: (data: VerbeteFilterData) => void;
};

const VerbeteFilter = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit, setValue } = useForm<VerbeteFilterData>();

  const onSubmit = (formData: VerbeteFilterData) => {
    onSubmitFilter(formData);
  };

  const handleFormClear = () => {
    console.log('Limpa filtro');
    setValue('descricao', '');
  };

  return (
    <div className="base-card product-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="product-filter-form">
        <div className="product-filter-name-container">
          <input
            {...register('descricao')}
            type="text"
            className="form-control"
            placeholder="Verbete"
            name="descricao"
          />
          <button className="product-filter-search-icon">
            <SearchIcon />
          </button>
        </div>
        <div className="product-filter-bottom-container">
          <button
            onClick={handleFormClear}
            className="btn btn-outline-secondary btn-product-filter-clear"
          >
            LIMPAR<span className="btn-product-filter-word"> FILTRO</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerbeteFilter;
