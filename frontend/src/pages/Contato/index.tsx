import './styles.scss';

export type FormState = {
  name: string;
  email: string;
  mensagem: string;
};

const Contato = () => {
  return (
    <form>
      <main className="container card-base">
        <article className="blog-post">
          <h1 className="text-center blog-post-title mt-5">Contato</h1>
        </article>
        <div className="row form-contato">
          <div className="col-12">
            <p className="text-center lead mb-4 mt-5">
              Para esclarecer dúvidas, enviar sugestões, críticas, preencha os
              dados abaixo. Será um prazer respondê-lo(a)
            </p>
            <div className="input-bt30">
              <input
                type="text"
                name="name"
                className="form-control input-base"
                placeholder="Nome"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-bt30">
              <input
                type="email"
                name="email"
                className="form-control input-base"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-bt30">
              <input
                type="text"
                name="mensagem"
                className="form-control input-base"
                placeholder="Mensagem"
              />
            </div>
          </div>
          <div className="col-12 btn-mail">
            <button className="border-radius-10 btn btn-primary">Enviar</button>
          </div>
        </div>
      </main>
    </form>
  );
};

export default Contato;
