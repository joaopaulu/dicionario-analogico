import { AxiosRequestConfig } from 'axios';
import { Tematic } from 'core/types/tematic';
import { SpringPage } from 'core/types/vendor/spring';
import { requestBackend } from 'core/utils/requests';
import { useCallback, useEffect, useState } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
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
      <div className="tematic-diagram">
        <Tree
          label={
            <div className="tematic-diagram-title">
              <h3>Campos Temáticos</h3>
            </div>
          }
        >
          {page?.content?.map(tematic => (
            <TreeNode
              label={
                <Link to={`/analogica/${tematic.id}`}>
                  <div className="title-tematics">
                    <span>{tematic.nome}</span>
                  </div>
                </Link>
              }
              key={tematic.id}
            />
          ))}
        </Tree>
      </div>
    </main>
  );
};

export default Analogica;
