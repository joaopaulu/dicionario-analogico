import Pagination from 'core/components/Pagination';
import { PostosResponse } from 'core/types/Posto';
import { makePrivateRequest } from 'core/utils/request';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from '../Card';
import CardLoader from '../Loaders/PostoCardLoader';

const List = () => {
  const [postosResponse, setPostosResponse] = useState<PostosResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  const getPostos = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 5,
      direction: 'ASC',
      orderBy: 'id',
    };
    setIsLoading(true);
    makePrivateRequest({ url: '/postos', params })
      .then(response => setPostosResponse(response.data))
      .finally(() => setIsLoading(false));
  }, [activePage]);

  useEffect(() => {
    getPostos();
  }, [getPostos]);

  const handleCreate = () => {
    history.push('/admin/postos/create');
  };

  const onRemove = (postoId: number) => {
    const confirm = window.confirm('Deseja realmente excluir este posto?');
    if (confirm) {
      makePrivateRequest({ url: `/postos/${postoId}`, method: 'DELETE' })
        .then(() => {
          toast.info('Usuário removido com sucesso!');
          getPostos();
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
          postosResponse?.content.map(posto => (
            <Card posto={posto} key={posto.id} onRemove={onRemove} />
          ))
        )}
        {postosResponse && (
          <Pagination
            totalPages={postosResponse.totalPages}
            onChange={page => setActivePage(page)}
          />
        )}
      </div>
    </div>
  );
};

export default List;
