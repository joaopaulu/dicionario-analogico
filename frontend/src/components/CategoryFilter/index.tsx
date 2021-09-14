import { ReactComponent as SearchIcon } from 'core/assets/images/search-icon.svg';
import { useForm } from 'react-hook-form';
import './styles.css';

export type CategoryFilterData = {
  descricao: string;
};

type Props = {
  onSubmitFilter: (data: CategoryFilterData) => void;
};

const CategoryFilter = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit, setValue } = useForm<CategoryFilterData>();

  const onSubmit = (formData: CategoryFilterData) => {
    onSubmitFilter(formData);
  };

  const handleFormClear = () => {
    setValue('descricao', '');
  };

  return (
    <div className="base-card category-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="category-filter-form">
        <div className="category-filter-name-container">
          <input
            {...register('descricao')}
            type="text"
            className="form-control"
            placeholder="Pesquisar Categoria..."
            name="descricao"
          />
          <button className="category-filter-search-icon">
            <SearchIcon />
          </button>
        </div>
        <div className="category-filter-bottom-container">
          <button
            onClick={handleFormClear}
            className="btn btn-outline-secondary btn-category-filter-clear"
          >
            LIMPAR<span className="btn-category-filter-word"> FILTRO</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryFilter;
