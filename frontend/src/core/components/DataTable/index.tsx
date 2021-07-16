import Pagination from 'core/components/Pagination';
import { VerbeteResponse } from 'core/types/Verbete';
import { makeRequest } from 'core/utils/request';
import { useCallback, useEffect, useState } from 'react';
import VerbeteFilters from '../VerbeteFilters';
import './styles.scss';

const DataTable = () => {
  const [verbeteResponse, setVerbeteResponse] = useState<VerbeteResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [descricao, setDescricao] = useState('');

  const getVerbetes = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 12,
      descricao,
    };
    setIsLoading(true);
    makeRequest({ url: '/verbetes', params })
      .then(response => setVerbeteResponse(response.data))
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
          <thead>
            <tr>
              <th>Verbete</th>
            </tr>
          </thead>
          <tbody>
            {verbeteResponse?.content?.map(verbete => (
              <tr key={verbete.id}>
                <td>
                  <span className="verbete-title">{verbete.descricao}</span>{' '}
                  {verbete.separacaoSilabica} {verbete.genero}
                  {verbete.definicao}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {verbeteResponse && (
        <Pagination
          totalPages={verbeteResponse.totalPages}
          onChange={page => setActivePage(page)}
        />
      )}
    </>
  );
};

export default DataTable;
