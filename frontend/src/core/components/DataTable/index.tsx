import axios from 'axios';
import Pagination from 'core/components/Pagination';
import { VerbetePage } from 'core/types/Verbete';
import { BASE_URL } from 'core/utils/request';
import { useEffect, useState } from 'react';

const DataTable = () => {
  const [activePage, setActivePage] = useState(0);
  const [page, setPage] = useState<VerbetePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/verbetes?page=${activePage}&size=20&sort=date,desc`)
      .then(response => {
        setPage(response.data);
      });
  }, [activePage]);

  const changePage = (index: number) => {
    setActivePage(index);
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Verbete</th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map(item => (
              <tr key={item.id}>
                <td>{item.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalPages={page.totalPages}
        onChange={page => setActivePage(page)}
      />
    </>
  );
};

export default DataTable;
