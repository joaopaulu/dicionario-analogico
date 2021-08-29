import { ReactComponent as SearchIcon } from 'core/assets/images/search-icon.svg';
import { useForm } from 'react-hook-form';

import './styles.scss';

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
    setValue('descricao', '');
  };

  return (
    <div className="base-card verbete-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="verbete-filter-form">
        <div className="verbete-filter-name-container">
          <input
            {...register('descricao')}
            type="text"
            className="form-control"
            placeholder="Pesquisa Verbetes"
            name="descricao"
          />
          <button className="verbete-filter-search-icon">
            <SearchIcon />
          </button>
        </div>
        <div className="verbete-filter-bottom-container">
          <button
            onClick={handleFormClear}
            className="btn btn-outline-secondary btn-verbete-filter-clear"
          >
            LIMPAR<span className="btn-verbete-filter-word"> FILTRO</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerbeteFilter;
