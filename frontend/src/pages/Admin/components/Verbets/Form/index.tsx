import { makePrivateRequest } from 'core/utils/request';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import './styles.scss';

export type FormState = {
  nome: string;
  descricao: string;
  informacao_gramatical: string;
  tipo_dependencia: string;
  genero: string;
};

type ParamsType = {
  tematicId: string;
};

const Form = () => {
  const { register, handleSubmit, errors, setValue } = useForm<FormState>();
  const history = useHistory();
  const { tematicId } = useParams<ParamsType>();

  const isEditing = tematicId !== 'create';
  const formTitle = isEditing
    ? 'editar campo temático'
    : 'cadastrar um campo temático';

  useEffect(() => {
    if (isEditing) {
      makePrivateRequest({ url: `/tematics/${tematicId}` }).then(response => {
        setValue('nome', response.data.nome);
        setValue('descricao', response.data.descricao);
        setValue('informacao_gramatical', response.data.informacao_gramatical);
        setValue('tipo_dependencia', response.data.tipo_dependencia);
        setValue('genero', response.data.genero);
      });
    }
  }, [tematicId, isEditing, setValue]);

  const onSubmit = (data: FormState) => {
    makePrivateRequest({
      url: isEditing ? `/tematics/${tematicId}` : '/tematics',
      method: isEditing ? 'PUT' : 'POST',
      data,
    })
      .then(() => {
        toast.info('Registro salvo com sucesso!');
        history.push('/admin/users');
      })
      .catch(() => {
        toast.error('Erro ao salvar registro!');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm title={formTitle}>
        <div className="row">
          <div className="col-6">
            <div className="input-bt30">
              <input
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 3,
                    message: 'O campo deve ter no mínimo 3 caracteres',
                  },
                  maxLength: {
                    value: 15,
                    message: 'O campo deve ter no máximo 15 caracteres',
                  },
                })}
                type="text"
                name="nome"
                className="form-control input-base"
                placeholder="Nome"
              />
              {errors.nome && (
                <div className="invalid-feedback d-block">
                  {errors.nome.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <input
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 5,
                    message: 'O campo deve ter no mínimo 5 caracteres',
                  },
                  maxLength: {
                    value: 60,
                    message: 'O campo deve ter no máximo 60 caracteres',
                  },
                })}
                type="genero"
                name="genero"
                className="form-control input-base"
                placeholder="Gênero"
              />
              {errors.genero && (
                <div className="invalid-feedback d-block">
                  {errors.genero.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <input
                type="text"
                name="informacao_gramatical"
                className="form-control input-base"
                placeholder="Informação Gramatical"
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 8,
                    message: 'O campo deve ter no mínimo 8 caracteres',
                  },
                })}
              />
              {errors.informacao_gramatical && (
                <div className="invalid-feedback d-block">
                  {errors.informacao_gramatical.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <input
                type="text"
                name="tipo_dependencia"
                className="form-control input-base"
                placeholder="Tipo Dependência"
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 8,
                    message: 'O campo deve ter no mínimo 8 caracteres',
                  },
                })}
              />
              {errors.tipo_dependencia && (
                <div className="invalid-feedback d-block">
                  {errors.tipo_dependencia.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-bt30">
              <textarea
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 5,
                    message: 'O campo deve ter no mínimo 5 caracteres',
                  },
                  maxLength: {
                    value: 60,
                    message: 'O campo deve ter no máximo 60 caracteres',
                  },
                })}
                name="descricao"
                className="form-control input-base"
                placeholder="Descrição"
              />
              {errors.descricao && (
                <div className="invalid-feedback d-block">
                  {errors.descricao.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </BaseForm>
    </form>
  );
};

export default Form;
