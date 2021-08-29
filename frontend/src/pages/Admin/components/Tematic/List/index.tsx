import Pagination from 'core/components/Pagination';
import { TematicResponse } from 'core/types/Tematic';
import { makePrivateRequest } from 'core/utils/request';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from '../Card';
import CardLoader from '../Loaders/TematicCardLoader';

const List = () => {
  const [tematicResponse, setTematicResponse] = useState<TematicResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  const getTematics = useCallback(() => {
    const params = {
      page: activePage,
      size: 3,
      direction: 'DESC',
      orderBy: 'id',
    };
    setIsLoading(true);
    makePrivateRequest({ url: '/tematics', params })
      .then(response => setTematicResponse(response.data))
      .finally(() => setIsLoading(false));
  }, [activePage]);

  useEffect(() => {
    getTematics();
  }, [getTematics]);

  const handleCreate = () => {
    history.push('/admin/tematics/create');
  };

  const onRemove = (tematicId: number) => {
    const confirm = window.confirm(
      'Deseja realmente excluir este campo tematico?',
    );
    if (confirm) {
      makePrivateRequest({ url: `/tematics/${tematicId}`, method: 'DELETE' })
        .then(() => {
          toast.info('Campo Tematico removido com sucesso!');
          getTematics();
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
          tematicResponse?.content.map(tematic => (
            <Card tematic={tematic} key={tematic.id} onRemove={onRemove} />
          ))
        )}
        {tematicResponse && (
          <Pagination
            totalPages={tematicResponse.totalPages}
            onChange={page => setActivePage(page)}
            range={3}
          />
        )}
      </div>
    </div>
  );
};

export default List;
