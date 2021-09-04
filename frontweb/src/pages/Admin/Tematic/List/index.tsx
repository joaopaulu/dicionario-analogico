import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import TematicFilter, { TematicFilterData } from 'components/TematicFilter';
import { Tematic } from 'core/types/tematic';
import { SpringPage } from 'core/types/vendor/spring';
import { requestBackend } from 'core/utils/requests';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: TematicFilterData;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<Tematic>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { nome: '' },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: TematicFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getTematics = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/tematics',
      params: {
        page: controlComponentsData.activePage,
        size: 6,
        nome: controlComponentsData.filterData.nome,
      },
    };

    requestBackend(config).then(response => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getTematics();
  }, [getTematics]);

  return (
    <div className="tematic-crud-container">
      <div className="tematic-crud-bar-container">
        <Link to="/admin/tematics/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <TematicFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {page?.content.map(tematic => (
          <div key={tematic.id} className="col-sm-6 col-md-12">
            <Card tematic={tematic} onDelete={getTematics} />
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
