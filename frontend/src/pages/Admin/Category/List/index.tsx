import { AxiosRequestConfig } from 'axios';
import CategoryFilter, { CategoryFilterData } from 'components/CategoryFilter';
import Pagination from 'components/Pagination';
import { Category } from 'core/types/category';
import { SpringPage } from 'core/types/vendor/spring';
import { requestBackend } from 'core/utils/requests';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCrudCard from '../Card';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: CategoryFilterData;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<Category>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { descricao: '' },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: CategoryFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getCategorys = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/categories',
      params: {
        page: controlComponentsData.activePage,
        size: 6,
        descricao: controlComponentsData.filterData.descricao,
      },
    };

    requestBackend(config).then(response => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getCategorys();
  }, [getCategorys]);

  return (
    <div className="category-crud-container">
      <div className="category-crud-bar-container">
        <Link to="/admin/categories/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <CategoryFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {page?.content.map(category => (
          <div key={category.id} className="col-sm-6 col-md-12">
            <CategoryCrudCard category={category} onDelete={getCategorys} />
          </div>
        ))}
      </div>
      <Pagination
        forcePage={page?.number}
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default List;
