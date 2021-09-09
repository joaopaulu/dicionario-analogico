import './styles.scss';

type UrlParams = {
  verbeteId: string;
};

const Alfabetica = () => {
  return (
    <main className="container card-base">
      <article className="blog-post">
        <h1 className="text-center blog-post-title mt-5 ">Parte Alfabética</h1>
      </article>
      <div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <tbody>
              <>
                <tr key={1}>
                  <td>
                    <span className="verbete-title">descricao</span>{' '}
                    separacaosilabica - genero definicao
                  </td>
                </tr>
              </>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Alfabetica;
