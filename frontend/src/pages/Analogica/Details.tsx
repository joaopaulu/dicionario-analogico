import ListLoader from 'components/ListLoader';
import { Analogica } from 'core/types/analogica';
import { Tematic } from 'core/types/tematic';
import history from 'core/utils/history';
import { BASE_URL, requestBackend } from 'core/utils/requests';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './styles.scss';
import SubsCard from './SubsCard';

type UrlParams = {
  tematicId: string;
};

const AnalogicaDetails = () => {
  const [analogicasHip, setAnalogicasHip] = useState<Analogica[]>([]);
  const [analogicasMer, setAnalogicasMer] = useState<Analogica[]>([]);
  const [analogicasCon1, setAnalogicasCon1] = useState<Analogica[]>([]);
  const [analogicasCon2, setAnalogicasCon2] = useState<Analogica[]>([]);
  const [analogicasCon3, setAnalogicasCon3] = useState<Analogica[]>([]);
  const [analogicasCon4, setAnalogicasCon4] = useState<Analogica[]>([]);
  const [analogicasCon5, setAnalogicasCon5] = useState<Analogica[]>([]);
  const [analogicasCon6, setAnalogicasCon6] = useState<Analogica[]>([]);
  const [analogicasVer, setAnalogicasVer] = useState<Analogica[]>([]);
  const [tematics, setTematics] = useState<Tematic>();
  const { tematicId } = useParams<UrlParams>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    requestBackend({ url: `${BASE_URL}/tematics/${tematicId}` })
      .then(response => {
        setTematics(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [tematicId]);

  useEffect(() => {
    requestBackend({
      url: `${BASE_URL}/verbetes/analogicas?dependente=${tematicId}&tpDependencia=1`,
    }).then(response => {
      setAnalogicasHip(response.data);
    });
  }, [tematicId]);

  useEffect(() => {
    requestBackend({
      url: `${BASE_URL}/verbetes/analogicas?dependente=${tematicId}&tpDependencia=2`,
    }).then(response => {
      setAnalogicasMer(response.data);
    });
  }, [tematicId]);

  useEffect(() => {
    requestBackend({
      url: `${BASE_URL}/verbetes/analogicas?dependente=${tematicId}&tpDependencia=3`,
    }).then(response => {
      setAnalogicasCon1(response.data);
    });
  }, [tematicId]);

  useEffect(() => {
    requestBackend({
      url: `${BASE_URL}/verbetes/analogicas?dependente=${tematicId}&tpDependencia=4`,
    }).then(response => {
      setAnalogicasCon2(response.data);
    });
  }, [tematicId]);

  useEffect(() => {
    requestBackend({
      url: `${BASE_URL}/verbetes/analogicas?dependente=${tematicId}&tpDependencia=5`,
    }).then(response => {
      setAnalogicasCon3(response.data);
    });
  }, [tematicId]);

  useEffect(() => {
    requestBackend({
      url: `${BASE_URL}/verbetes/analogicas?dependente=${tematicId}&tpDependencia=6`,
    }).then(response => {
      setAnalogicasCon4(response.data);
    });
  }, [tematicId]);

  useEffect(() => {
    requestBackend({
      url: `${BASE_URL}/verbetes/analogicas?dependente=${tematicId}&tpDependencia=7`,
    }).then(response => {
      setAnalogicasCon5(response.data);
    });
  }, [tematicId]);

  useEffect(() => {
    requestBackend({
      url: `${BASE_URL}/verbetes/analogicas?dependente=${tematicId}&tpDependencia=8`,
    }).then(response => {
      setAnalogicasCon6(response.data);
    });
  }, [tematicId]);

  useEffect(() => {
    requestBackend({
      url: `${BASE_URL}/verbetes/analogicas?dependente=${tematicId}&tpDependencia=9`,
    }).then(response => {
      setAnalogicasVer(response.data);
    });
  }, [tematicId]);

  return (
    <main className="container card-base">
      <article className="blog-post">
        <div className="container-header">
          <span className="title-campo-tematico">{tematics?.nome}</span>
          <span className="title-gramatical">
            {' '}
            {tematics?.informacaoGramatical}
          </span>
          <span className="title-gramatical"> {tematics?.genero}</span>
          <span className="title-informacao-descricao">
            {tematics?.descricao}
          </span>
        </div>
        <div className="container-info">
          <h1>Substantivos</h1>
          {analogicasHip.length > 0 && (
            <>
              <div className="container-verbets">
                <span className="title-tipo-dependencia">hipônimo:</span>
                <span className="txt-verbet">
                  {isLoading ? (
                    <ListLoader />
                  ) : (
                    <>
                      {analogicasHip?.map((analogica, index, arr) => {
                        return (
                          <>
                            <Link to={`/verbete/${analogica.id}`}>
                              <SubsCard
                                analogica={analogica}
                                key={analogica.id}
                              />
                              {index === arr.length - 1 ? '' : ', '}
                            </Link>
                          </>
                        );
                      })}
                    </>
                  )}
                </span>
              </div>
            </>
          )}
          {analogicasMer.length > 0 && (
            <>
              <div className="container-verbets">
                <span className="title-tipo-dependencia">merônimo:</span>
                <span className="txt-verbet">
                  {analogicasMer?.map((analogica, index, arr) => {
                    return (
                      <>
                        <Link to={`/verbete/${analogica.id}`}>
                          <SubsCard analogica={analogica} key={analogica.id} />
                          {index === arr.length - 1 ? '' : ', '}
                        </Link>
                      </>
                    );
                  })}
                </span>
              </div>
            </>
          )}
          {analogicasCon1.length > 0 && (
            <>
              <div className="container-verbets">
                <span className="title-tipo-dependencia">con1:</span>
                <span className="txt-verbet">
                  {analogicasCon1?.map((analogica, index, arr) => {
                    return (
                      <>
                        <Link to={`/verbete/${analogica.id}`}>
                          <SubsCard analogica={analogica} key={analogica.id} />
                          {index === arr.length - 1 ? '' : ', '}
                        </Link>
                      </>
                    );
                  })}
                </span>
              </div>
            </>
          )}
          {analogicasCon2.length > 0 && (
            <>
              <div className="container-verbets">
                <span className="title-tipo-dependencia">con2:</span>
                <span className="txt-verbet">
                  {analogicasCon2?.map((analogica, index, arr) => {
                    return (
                      <>
                        <Link to={`/verbete/${analogica.id}`}>
                          <SubsCard analogica={analogica} key={analogica.id} />
                          {index === arr.length - 1 ? '' : ', '}
                        </Link>
                      </>
                    );
                  })}
                </span>
              </div>
            </>
          )}
          {analogicasCon3.length > 0 && (
            <>
              <div className="container-verbets">
                <span className="title-tipo-dependencia">con3:</span>
                <span className="txt-verbet">
                  {analogicasCon3?.map((analogica, index, arr) => {
                    return (
                      <>
                        <Link to={`/verbete/${analogica.id}`}>
                          <SubsCard analogica={analogica} key={analogica.id} />
                          {index === arr.length - 1 ? '' : ', '}
                        </Link>
                      </>
                    );
                  })}
                </span>
              </div>
            </>
          )}
          {analogicasCon4.length > 0 && (
            <>
              <div className="container-verbets">
                <span className="title-tipo-dependencia">con4:</span>
                <span className="txt-verbet">
                  {analogicasCon4?.map((analogica, index, arr) => {
                    return (
                      <>
                        <Link to={`/verbete/${analogica.id}`}>
                          <SubsCard analogica={analogica} key={analogica.id} />
                          {index === arr.length - 1 ? '' : ', '}
                        </Link>
                      </>
                    );
                  })}
                </span>
              </div>
            </>
          )}
          {analogicasCon5.length > 0 && (
            <>
              <div className="container-verbets">
                <span className="title-tipo-dependencia">con5:</span>
                <span className="txt-verbet">
                  {analogicasCon5?.map((analogica, index, arr) => {
                    return (
                      <>
                        <Link to={`/verbete/${analogica.id}`}>
                          <SubsCard analogica={analogica} key={analogica.id} />
                          {index === arr.length - 1 ? '' : ', '}
                        </Link>
                      </>
                    );
                  })}
                </span>
              </div>
            </>
          )}
          {analogicasCon6.length > 0 && (
            <>
              <div className="container-verbets">
                <span className="title-tipo-dependencia">con6:</span>
                <span className="txt-verbet">
                  {analogicasCon6?.map((analogica, index, arr) => {
                    return (
                      <>
                        <Link to={`/verbete/${analogica.id}`}>
                          <SubsCard analogica={analogica} key={analogica.id} />
                          {index === arr.length - 1 ? '' : ', '}
                        </Link>
                      </>
                    );
                  })}
                </span>
              </div>
            </>
          )}
          {analogicasVer.length > 0 && (
            <>
              <div className="container-verbets">
                <span className="title-tipo-dependencia">verbo:</span>
                <span className="txt-verbet">
                  {analogicasVer?.map((analogica, index, arr) => {
                    return (
                      <>
                        <Link to={`/verbete/${analogica.id}`}>
                          <SubsCard analogica={analogica} key={analogica.id} />
                          {index === arr.length - 1 ? '' : ', '}
                        </Link>
                      </>
                    );
                  })}
                </span>
              </div>
            </>
          )}
        </div>
      </article>
      <button
        type="button"
        className="btn btn-primary"
        onClick={history.goBack}
      >
        Voltar
      </button>
    </main>
  );
};

export default AnalogicaDetails;
