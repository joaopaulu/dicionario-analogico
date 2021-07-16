import Pagination from 'core/components/Pagination';
import { CategoryResponse } from 'core/types/Category';
import { makePrivateRequest } from 'core/utils/request';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from '../Card';
import CardLoader from '../Loaders/CategoryCardLoader';

const List = () => {
  const [categoriesResponse, setCategoriesResponse] =
    useState<CategoryResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  const getCategory = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 5,
      direction: 'DESC',
      orderBy: 'id',
    };
    setIsLoading(true);
    makePrivateRequest({ url: '/categories', params })
      .then(response => setCategoriesResponse(response.data))
      .finally(() => setIsLoading(false));
  }, [activePage]);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  const handleCreate = () => {
    history.push('/admin/categories/create');
  };

  const onRemove = (userId: number) => {
    const confirm = window.confirm('Deseja realmente excluir este usuário?');
    if (confirm) {
      makePrivateRequest({ url: `/categories/${userId}`, method: 'DELETE' })
        .then(() => {
          toast.info('Usuário removido com sucesso!');
          getCategory();
        })
        .catch(() => {
          toast.error('Erro ao remover usuário!');
        });
    }
  };

  return (
    <div className="admin-products-list">
      <button className="btn btn-primary btn-lg" onClick={handleCreate}>
        Adicionar
      </button>
      <div className="admin-list-container">
        {isLoading ? (
          <CardLoader />
        ) : (
          categoriesResponse?.content.map(category => (
            <Card category={category} key={category.id} onRemove={onRemove} />
          ))
        )}
        {categoriesResponse && (
          <Pagination
            totalPages={categoriesResponse.totalPages}
            onChange={page => setActivePage(page)}
          />
        )}
      </div>
    </div>
  );
};

export default List;
