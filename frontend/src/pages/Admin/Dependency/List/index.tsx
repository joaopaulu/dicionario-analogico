import { AxiosRequestConfig } from 'axios';
import DependencyFilter, {
  DependencyFilterData,
} from 'components/DependencyFilter';
import Pagination from 'components/Pagination';
import { Dependency } from 'core/types/dependency';
import { SpringPage } from 'core/types/vendor/spring';
import { requestBackend } from 'core/utils/requests';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DependencyCrudCard from '../Card';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: DependencyFilterData;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<Dependency>>();

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

  const handleSubmitFilter = (data: DependencyFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getDependency = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/dependencies',
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
    getDependency();
  }, [getDependency]);

  return (
    <div className="dependency-crud-container">
      <div className="dependency-crud-bar-container">
        <Link to="/admin/dependencies/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <DependencyFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {page?.content.map(dependency => (
          <div key={dependency.id} className="col-sm-6 col-md-12">
            <DependencyCrudCard
              dependency={dependency}
              onDelete={getDependency}
            />
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
