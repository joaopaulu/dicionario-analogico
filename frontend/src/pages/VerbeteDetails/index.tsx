import { Verbet } from 'core/types/verbet';
import history from 'core/utils/history';
import { BASE_URL, requestBackend } from 'core/utils/requests';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './styles.scss';

type UrlParams = {
  verbeteId: string;
};

const VerbeteDetails = () => {
  const [verbetes, setVerbetes] = useState<Verbet>();
  const { verbeteId } = useParams<UrlParams>();

  useEffect(() => {
    requestBackend({ url: `${BASE_URL}/verbetes/${verbeteId}` }).then(
      response => {
        setVerbetes(response.data);
      },
    );
  }, [verbeteId]);

  return (
    <main className="container card-base">
      <article className="blog-post">
        <h1 className="text-center blog-post-title mt-5 ">
          {verbetes?.descricao}
        </h1>

        <div>
          <div className="verbete-details">
            <p>
              <strong>Separação Silábica: </strong>
              {verbetes?.separacaoSilabica}
            </p>
            <p>
              <strong>Genero:</strong> {verbetes?.genero}
            </p>
            <p>
              <strong>Definição:</strong> {verbetes?.definicao}
            </p>
          </div>
        </div>
      </article>
      <div className="mt-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={history.goBack}
        >
          Voltar
        </button>
      </div>
    </main>
  );
};

export default VerbeteDetails;
