import { AxiosRequestConfig } from 'axios';
import { Category } from 'core/types/category';
import { requestBackend } from 'core/utils/requests';
import { Link } from 'react-router-dom';
import './style.css';

type Props = {
  category: Category;
  onDelete: Function;
};

const CategoryCrudCard = ({ category, onDelete }: Props) => {
  const handleDelete = (categoryId: number) => {
    if (!window.confirm('Tem certeza que deseja deletar')) {
      return;
    }
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/categories/${categoryId}`,
      withCredentials: true,
    };
    requestBackend(config).then(() => {
      onDelete();
    });
  };

  return (
    <div className="category crud-card base-card">
      <div className="crud-card-description">
        <div className="crud-card-bottom-container">
          <span>{category.descricao}</span>
        </div>
      </div>
      <div className="crud-card-buttons-container">
        <button
          onClick={() => handleDelete(category.id)}
          className="btn btn-outline-danger crud-card-button crud-card-button-first"
        >
          EXCLUIR
        </button>
        <Link to={`/admin/categories/${category.id}`}>
          <button className="btn btn-outline-secondary crud-card-button">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCrudCard;
