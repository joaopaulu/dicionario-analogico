import React, { useEffect, useState, useCallback } from 'react';
import { CategoriesResponse } from 'core/types/Category';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Pagination from 'core/components/Pagination';
import Card from '../Card';
import './styles.scss';
import CardLoader from '../Loaders/CategoryCardLoader';

const List = () => {
  const [
    categoriesResponse,
    setCategoriesResponse,
  ] = useState<CategoriesResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  const getCategories = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 8,
      direction: 'DESC',
      orderBy: 'id',
    };
    setIsLoading(true);
    makeRequest({ url: '/categories', params })
      .then(response => setCategoriesResponse(response.data))
      .finally(() => setIsLoading(false));
  }, [activePage]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleCreate = () => {
    history.push('/admin/categories/create');
  };

  const onRemove = (categoryId: number) => {
    const confirm = window.confirm('Deseja realmente excluir esta categoria?');
    if (confirm) {
      makePrivateRequest({ url: `/categories/${categoryId}`, method: 'DELETE' })
        .then(() => {
          toast.info('Produto removido com sucesso!');
          getCategories();
        })
        .catch(() => {
          toast.error('Erro ao remover produto!');
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
