import { useForm } from 'react-hook-form';
import './styles.scss';

export type FormState = {
  name: string;
  email: string;
  mensagem: string;
};

const Contato = () => {
  const { register, errors } = useForm<FormState>();

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
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 3,
                    message: 'O campo deve ter no mínimo 3 caracteres',
                  },
                  maxLength: {
                    value: 50,
                    message: 'O campo deve ter no máximo 5 caracteres',
                  },
                })}
                type="text"
                name="name"
                className="form-control input-base"
                placeholder="Nome"
              />
              {errors.name && (
                <div className="invalid-feedback d-block">
                  {errors.name.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-bt30">
              <input
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 3,
                    message: 'O campo deve ter no mínimo 3 caracteres',
                  },
                  maxLength: {
                    value: 50,
                    message: 'O campo deve ter no máximo 5 caracteres',
                  },
                })}
                type="email"
                name="email"
                className="form-control input-base"
                placeholder="E-mail"
              />
              {errors.mensagem && (
                <div className="invalid-feedback d-block">
                  {errors.mensagem.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-bt30">
              <input
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 3,
                    message: 'O campo deve ter no mínimo 3 caracteres',
                  },
                  maxLength: {
                    value: 50,
                    message: 'O campo deve ter no máximo 5 caracteres',
                  },
                })}
                type="text"
                name="mensagem"
                className="form-control input-base"
                placeholder="Mensagem"
              />
              {errors.mensagem && (
                <div className="invalid-feedback d-block">
                  {errors.mensagem.message}
                </div>
              )}
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
