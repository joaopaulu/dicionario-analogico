import Pagination from 'core/components/Pagination';
import { ArmasResponse } from 'core/types/Arma';
import { makePrivateRequest } from 'core/utils/request';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from '../Card';
import CardLoader from '../Loaders/ArmaCardLoader';

const List = () => {
  const [armasResponse, setArmasResponse] = useState<ArmasResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  const getArmas = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 5,
      direction: 'DESC',
      orderBy: 'id',
    };
    setIsLoading(true);
    makePrivateRequest({ url: '/armas', params })
      .then(response => setArmasResponse(response.data))
      .finally(() => setIsLoading(false));
  }, [activePage]);

  useEffect(() => {
    getArmas();
  }, [getArmas]);

  const handleCreate = () => {
    history.push('/admin/armas/create');
  };

  const onRemove = (armaId: number) => {
    const confirm = window.confirm('Deseja realmente excluir esta arma?');
    if (confirm) {
      makePrivateRequest({ url: `/armas/${armaId}`, method: 'DELETE' })
        .then(() => {
          toast.info('Arma removida com sucesso!');
          getArmas();
        })
        .catch(() => {
          toast.error('Erro ao remover Arma!');
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
          armasResponse?.content.map(arma => (
            <Card arma={arma} key={arma.id} onRemove={onRemove} />
          ))
        )}
        {armasResponse && (
          <Pagination
            totalPages={armasResponse.totalPages}
            onChange={page => setActivePage(page)}
          />
        )}
      </div>
    </div>
  );
};

export default List;
