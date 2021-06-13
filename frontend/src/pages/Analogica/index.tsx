import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import './styles.scss';

const initialSchema = createSchema({
  nodes: [
    { id: 'node-1', content: 'Campos Temáticos', coordinates: [425, 127] },
    { id: 'node-2', content: 'Transporte', coordinates: [333, 27] },
    { id: 'node-3', content: 'Lazer', coordinates: [167, 56] },
    { id: 'node-4', content: 'Vestuário', coordinates: [277, 219] },
    { id: 'node-5', content: 'Habitação', coordinates: [438, 264] },
    { id: 'node-6', content: 'Animal', coordinates: [635, 36] },
  ],
  links: [
    { input: 'node-1', output: 'node-2' },
    { input: 'node-1', output: 'node-3' },
    { input: 'node-1', output: 'node-4' },
    { input: 'node-1', output: 'node-5' },
    { input: 'node-1', output: 'node-6' },
  ],
});

const Analogica = () => {
  const [schema, { onChange }] = useSchema(initialSchema);

  return (
    <main className="container card-base">
      <article className="blog-post">
        <h1 className="text-center blog-post-title mt-5">Parte Analógica</h1>
        <div style={{ height: '32.5rem' }}>
          <Diagram schema={schema} onChange={onChange} />
        </div>
      </article>
    </main>
  );
};

export default Analogica;
