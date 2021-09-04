import { ReactComponent as SearchIcon } from 'core/assets/images/search-icon.svg';
import { useForm } from 'react-hook-form';
import './styles.css';

export type TematicFilterData = {
  nome: string;
};

type Props = {
  onSubmitFilter: (data: TematicFilterData) => void;
};

const TematicFilter = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit, setValue } = useForm<TematicFilterData>();

  const onSubmit = (formData: TematicFilterData) => {
    onSubmitFilter(formData);
  };

  const handleFormClear = () => {
    console.log('Limpa filtro');
    setValue('nome', '');
  };

  return (
    <div className="base-card tematic-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="tematic-filter-form">
        <div className="tematic-filter-name-container">
          <input
            {...register('nome')}
            type="text"
            className="form-control"
            placeholder="Nome do Usuário"
            name="nome"
          />
          <button className="tematic-filter-search-icon">
            <SearchIcon />
          </button>
        </div>
        <div className="tematic-filter-bottom-container">
          <button
            onClick={handleFormClear}
            className="btn btn-outline-secondary btn-tematic-filter-clear"
          >
            LIMPAR<span className="btn-tematic-filter-word"> FILTRO</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TematicFilter;
