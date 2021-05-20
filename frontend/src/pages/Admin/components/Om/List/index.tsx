import Pagination from 'core/components/Pagination';
import { OmsResponse } from 'core/types/Om';
import { makePrivateRequest } from 'core/utils/request';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from '../Card';
import CardLoader from '../Loaders/OmCardLoader';

const List = () => {
  const [omsResponse, setOmsResponse] = useState<OmsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  const getOms = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 5,
      direction: 'DESC',
      orderBy: 'id',
    };
    setIsLoading(true);
    makePrivateRequest({ url: '/oms', params })
      .then(response => setOmsResponse(response.data))
      .finally(() => setIsLoading(false));
  }, [activePage]);

  useEffect(() => {
    getOms();
  }, [getOms]);

  const handleCreate = () => {
    history.push('/admin/oms/create');
  };

  const onRemove = (omId: number) => {
    const confirm = window.confirm('Deseja realmente excluir esta OM?');
    if (confirm) {
      makePrivateRequest({ url: `/oms/${omId}`, method: 'DELETE' })
        .then(() => {
          toast.info('OM removido com sucesso!');
          getOms();
        })
        .catch(() => {
          toast.error('Erro ao remover OM!');
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
          omsResponse?.content.map(om => (
            <Card om={om} key={om.id} onRemove={onRemove} />
          ))
        )}
        {omsResponse && (
          <Pagination
            totalPages={omsResponse.totalPages}
            onChange={page => setActivePage(page)}
          />
        )}
      </div>
    </div>
  );
};

export default List;
