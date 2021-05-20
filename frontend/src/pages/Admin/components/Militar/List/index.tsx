import Pagination from 'core/components/Pagination';
import { MilitaresResponse } from 'core/types/Militar';
import { makePrivateRequest } from 'core/utils/request';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from '../Card';
import CardLoader from '../Loaders/MilitarCardLoader';

const List = () => {
  const [militaresResponse, setMilitaresResponse] =
    useState<MilitaresResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  const getMilitares = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 5,
      direction: 'DESC',
      orderBy: 'nomeCompleto',
    };
    setIsLoading(true);
    makePrivateRequest({ url: '/militares', params })
      .then(response => setMilitaresResponse(response.data))
      .finally(() => setIsLoading(false));
  }, [activePage]);

  useEffect(() => {
    getMilitares();
  }, [getMilitares]);

  const handleCreate = () => {
    history.push('/admin/militares/create');
  };

  const onRemove = (militarId: number) => {
    const confirm = window.confirm('Deseja realmente excluir este militar?');
    if (confirm) {
      makePrivateRequest({ url: `/militares/${militarId}`, method: 'DELETE' })
        .then(() => {
          toast.info('Militar removido com sucesso!');
          getMilitares();
        })
        .catch(() => {
          toast.error('Erro ao remover militar!');
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
          militaresResponse?.content.map(militar => (
            <Card militar={militar} key={militar.id} onRemove={onRemove} />
          ))
        )}
        {militaresResponse && (
          <Pagination
            totalPages={militaresResponse.totalPages}
            onChange={page => setActivePage(page)}
          />
        )}
      </div>
    </div>
  );
};

export default List;
