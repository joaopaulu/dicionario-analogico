import DataTable from 'core/components/DataTable';
import './styles.scss';

const Alfabetica = () => {
  return (
    <main className="container card-base">
      <article className="blog-post">
        <h1 className="text-center blog-post-title mt-5">Parte Alfabética</h1>
      </article>
      <div>
        <DataTable />
      </div>
    </main>
  );
};

export default Alfabetica;
