import Pagination from 'core/components/Pagination';
import { VerbetResponse } from 'core/types/Verbet';
import { makePrivateRequest } from 'core/utils/request';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from '../Card';
import CardLoader from '../Loaders/CardLoader';

const List = () => {
  const [verbetResponse, setVerbetResponse] = useState<VerbetResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  const getVerbets = useCallback(() => {
    const params = {
      page: activePage,
      size: 5,
      direction: 'DESC',
      orderBy: 'id',
    };
    setIsLoading(true);
    makePrivateRequest({ url: '/verbetes', params })
      .then(response => setVerbetResponse(response.data))
      .finally(() => setIsLoading(false));
  }, [activePage]);

  useEffect(() => {
    getVerbets();
  }, [getVerbets]);

  const handleCreate = () => {
    history.push('/admin/verbets/create');
  };

  const onRemove = (verbetId: number) => {
    const confirm = window.confirm(
      'Deseja realmente excluir este campo verbeto?',
    );
    if (confirm) {
      makePrivateRequest({ url: `/verbetes/${verbetId}`, method: 'DELETE' })
        .then(() => {
          toast.info('Campo Verbeto removido com sucesso!');
          getVerbets();
        })
        .catch(() => {
          toast.error('Erro ao remover campo verbeto!');
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
          verbetResponse?.content.map(verbet => (
            <Card verbet={verbet} key={verbet.id} onRemove={onRemove} />
          ))
        )}
        {verbetResponse && (
          <Pagination
            totalPages={verbetResponse.totalPages}
            onChange={page => setActivePage(page)}
          />
        )}
      </div>
    </div>
  );
};

export default List;
