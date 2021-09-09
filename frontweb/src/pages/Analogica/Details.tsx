import { Analogica } from 'core/types/analogica';
import { Tematic } from 'core/types/tematic';
import history from 'core/utils/history';
import { BASE_URL, requestBackend } from 'core/utils/requests';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';
import SubsCard from './SubsCard';

type UrlParams = {
  tematicId: string;
};

const AnalogicaDetails = () => {
  const [analogicas, setAnalogicas] = useState<Analogica[]>([]);
  const [tematics, setTematics] = useState<Tematic>();
  const { tematicId } = useParams<UrlParams>();

  useEffect(() => {
    requestBackend({ url: `${BASE_URL}/tematics/${tematicId}` }).then(
      response => {
        setTematics(response.data);
      },
    );
  }, [tematicId]);

  useEffect(() => {
    requestBackend({
      url: `${BASE_URL}/verbetes/analogicas?dependente=${tematicId}&tpDependencia=1`,
    }).then(response => {
      setAnalogicas(response.data);
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
          <div className="container-verbets">
            <span className="title-tipo-dependencia">hipônimo:</span>
            <span className="txt-verbet">
              {analogicas?.map(analogica => {
                return <SubsCard analogica={analogica} key={analogica.id} />;
              })}
            </span>
          </div>
          <div className="container-verbets">
            <span className="title-tipo-dependencia">merônimo:</span>
            <span className="txt-verbet">acelerador,</span>
            <span className="txt-verbet">amortecedor,</span>
            <span className="txt-verbet">banco,</span>
            <span className="txt-verbet">buzina,</span>
            <span className="txt-verbet">cabine,</span>
            <span className="txt-verbet">capô,</span>
            <span className="txt-verbet">embreagem,</span>
            <span className="txt-verbet">escapamento,</span>
            <span className="txt-verbet">farol,</span>
            <span className="txt-verbet">freio,</span>
            <span className="txt-verbet">hélice,</span>
            <span className="txt-verbet">macaco,</span>
            <span className="txt-verbet">marchar,</span>
            <span className="txt-verbet">motor,</span>
            <span className="txt-verbet">painel</span>
          </div>
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
