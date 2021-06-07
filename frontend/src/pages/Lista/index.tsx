import './styles.scss';

const Lista = () => (
  <main className="container card-base">
    <article className="blog-post">
      <h1 className="text-center blog-post-title mt-5">
        Lista de abreviaturas
      </h1>
      <h2 className="text-center blog-post-title mt-5">
        Lista de abreviatura dos nomes dos colaboradores
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Abreviatura</th>
            <th scope="col">Colaboradores</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AGD</td>
            <td>Amanda Gabriela Duarte Prudencio </td>
          </tr>
          <tr>
            <td>APP</td>
            <td>Amanda Pereira Peres</td>
          </tr>
          <tr>
            <td>ACM</td>
            <td>Ana Carolina Moreira da Nóbrega</td>
          </tr>
        </tbody>
      </table>
    </article>
  </main>
);

export default Lista;
