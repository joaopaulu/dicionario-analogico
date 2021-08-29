import Pagination from 'core/components/Pagination';
import { DependencyResponse } from 'core/types/Dependency';
import { makePrivateRequest } from 'core/utils/request';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from '../Card';
import CardLoader from '../Loaders/CardLoader';

const List = () => {
  const [dependecyResponse, setDependencyResponse] =
    useState<DependencyResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  const getDependencies = useCallback(() => {
    const params = {
      page: activePage,
      size: 5,
      direction: 'ASC',
      orderBy: 'id',
    };
    setIsLoading(true);
    makePrivateRequest({ url: '/dependencies', params })
      .then(response => setDependencyResponse(response.data))
      .finally(() => setIsLoading(false));
  }, [activePage]);

  useEffect(() => {
    getDependencies();
  }, [getDependencies]);

  const handleCreate = () => {
    history.push('/admin/dependencies/create');
  };

  const onRemove = (dependencyId: number) => {
    const confirm = window.confirm('Deseja realmente excluir a dependencia?');
    if (confirm) {
      makePrivateRequest({
        url: `/dependencies/${dependencyId}`,
        method: 'DELETE',
      })
        .then(() => {
          toast.info('Campo Tematico removido com sucesso!');
          getDependencies();
        })
        .catch(() => {
          toast.error('Erro ao remover campo tematico!');
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
          dependecyResponse?.content.map(dependency => (
            <Card
              dependency={dependency}
              key={dependency.id}
              onRemove={onRemove}
            />
          ))
        )}
        {dependecyResponse && (
          <Pagination
            totalPages={dependecyResponse.totalPages}
            onChange={page => setActivePage(page)}
            range={3}
          />
        )}
      </div>
    </div>
  );
};

export default List;
