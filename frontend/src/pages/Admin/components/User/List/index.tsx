import React, { useEffect, useState, useCallback } from 'react';
import { UsersResponse } from 'core/types/User';
import { makePrivateRequest } from 'core/utils/request';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Pagination from 'core/components/Pagination';
import Card from '../Card';
import './styles.scss';
import CardLoader from '../Loaders/UserCardLoader';

const List = () => {
  const [usersResponse, setUsersResponse] = useState<UsersResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  const getUsers = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 8,
      direction: 'DESC',
      orderBy: 'id',
    };
    setIsLoading(true);
    makePrivateRequest({ url: '/users', params })
      .then(response => setUsersResponse(response.data))
      .finally(() => setIsLoading(false));
  }, [activePage]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleCreate = () => {
    history.push('/admin/users/create');
  };

  const onRemove = (userId: number) => {
    const confirm = window.confirm('Deseja realmente excluir este usuário?');
    if (confirm) {
      makePrivateRequest({ url: `/users/${userId}`, method: 'DELETE' })
        .then(() => {
          toast.info('Usuário removido com sucesso!');
          getUsers();
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
          usersResponse?.content.map(user => (
            <Card user={user} key={user.id} onRemove={onRemove} />
          ))
        )}
        {usersResponse && (
          <Pagination
            totalPages={usersResponse.totalPages}
            onChange={page => setActivePage(page)}
          />
        )}
      </div>
    </div>
  );
};

export default List;
