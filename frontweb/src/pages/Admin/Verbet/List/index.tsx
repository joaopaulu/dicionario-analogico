import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import VerbeteFilter, { VerbeteFilterData } from 'components/VerbeteFilter';
import { SpringPage } from 'core/types/vendor/spring';
import { Verbet } from 'core/types/verbet';
import { requestBackend } from 'core/utils/requests';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: VerbeteFilterData;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<Verbet>>();

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

  const handleSubmitFilter = (data: VerbeteFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getVerbets = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/verbetes',
      params: {
        page: controlComponentsData.activePage,
        size: 3,
        descricao: controlComponentsData.filterData.descricao,
      },
    };

    requestBackend(config).then(response => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getVerbets();
  }, [getVerbets]);

  return (
    <div className="verbet-crud-container">
      <div className="verbet-crud-bar-container">
        <Link to="/admin/verbets/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <VerbeteFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {page?.content.map(verbete => (
          <div key={verbete.id} className="col-sm-6 col-md-12">
            <Card verbete={verbete} onDelete={getVerbets} />
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
