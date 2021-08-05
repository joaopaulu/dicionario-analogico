import Pagination from 'core/components/Pagination';
import { VerbetResponse } from 'core/types/Verbet';
import { makeRequest } from 'core/utils/request';
import { useCallback, useEffect, useState } from 'react';
import ListLoader from '../Loaders/ListLoader';
import VerbeteFilters from '../VerbeteFilters';
import './styles.scss';

const DataTable = () => {
  const [verbetResponse, setVerbetResponse] = useState<VerbetResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [descricao, setDescricao] = useState('');

  const getVerbetes = useCallback(() => {
    const params = {
      page: activePage,
      size: 12,
      direction: 'ASC',
      descricao,
    };
    setIsLoading(true);
    makeRequest({ url: '/verbetes', params })
      .then(response => setVerbetResponse(response.data))
      .finally(() => setIsLoading(false));
  }, [activePage, descricao]);

  useEffect(() => {
    getVerbetes();
  }, [getVerbetes]);

  const handleChangeDescricao = (name: string) => {
    setActivePage(0);
    setDescricao(descricao);
  };

  const clearFilters = () => {
    setActivePage(0);
    setDescricao('');
  };

  return (
    <>
      <div className="table-responsive">
        <VerbeteFilters
          descricao={descricao}
          handleChangeDescricao={handleChangeDescricao}
          clearFilters={clearFilters}
        />
        <table className="table table-striped table-sm">
          <tbody>
            {isLoading ? (
              <ListLoader />
            ) : (
              <>
                {verbetResponse?.content?.map(verbete => (
                  <tr key={verbete.id}>
                    <td>
                      <span className="verbete-title">{verbete.descricao}</span>{' '}
                      {verbete.separacaoSilabica} {verbete.genero}
                      {verbete.definicao}
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      {verbetResponse && (
        <Pagination
          totalPages={verbetResponse.totalPages}
          onChange={page => setActivePage(page)}
        />
      )}
    </>
  );
};

export default DataTable;
