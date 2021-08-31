import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import VerbeteFilter, { VerbeteFilterData } from 'components/VerbeteFilter';
import { SpringPage } from 'core/types/vendor/spring';
import { Verbet } from 'core/types/Verbet';
import { requestBackend } from 'core/utils/requests';
import { useCallback, useEffect, useState } from 'react';
import './styles.scss';

type ControlComponentsData = {
  activePage: number;
  filterData: VerbeteFilterData;
};

const Alfabetica = () => {
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

  const getVerbetes = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/verbetes',
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
    getVerbetes();
  }, [getVerbetes]);
  return (
    <main className="container card-base">
      <article className="blog-post">
        <h1 className="text-center blog-post-title mt-5">Parte Alfabética</h1>
      </article>
      <div>
        <div className="table-responsive">
          <VerbeteFilter onSubmitFilter={handleSubmitFilter} />
          <table className="table table-striped table-sm">
            <tbody>
              <>
                {page?.content?.map(verbete => (
                  <tr key={verbete.id}>
                    <td>
                      <span className="verbete-title">{verbete.descricao}</span>{' '}
                      {verbete.separacaoSilabica} {verbete.genero}
                      {verbete.definicao}
                    </td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>
          <Pagination
            forcePage={page?.number}
            pageCount={page ? page.totalPages : 0}
            range={3}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </main>
  );
};

export default Alfabetica;
