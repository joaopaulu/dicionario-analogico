import { AxiosRequestConfig } from 'axios';
import { Tematic } from 'core/types/tematic';
import { SpringPage } from 'core/types/vendor/spring';
import { requestBackend } from 'core/utils/requests';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Analogica = () => {
  const [page, setPage] = useState<SpringPage<Tematic>>();

  const getTematics = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/tematics?sort=nome',
    };
    requestBackend(config).then(response => {
      setPage(response.data);
    });
  }, []);

  useEffect(() => {
    getTematics();
  }, [getTematics]);
  return (
    <main className="container card-base">
      <article className="blog-post">
        <h1 className="text-center blog-post-title mt-5 ">Parte Analógica</h1>
      </article>
      <div>
        <div className="table-responsive container-tematics">
          <table className="table table-striped table-sm">
            <tbody>
              <>
                {page?.content?.map(tematic => (
                  <tr key={tematic.id}>
                    <td>
                      <Link to={`/analogica/${tematic.id}`}>
                        <span className="title-tematics">{tematic.nome}</span>{' '}
                      </Link>
                    </td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Analogica;
