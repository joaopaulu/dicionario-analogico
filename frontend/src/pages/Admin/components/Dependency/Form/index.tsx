import { makePrivateRequest } from 'core/utils/request';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import './styles.scss';

export type FormState = {
  sigla: string;
  descricao: string;
};

type ParamsType = {
  dependencyId: string;
};

const Form = () => {
  const { register, handleSubmit, errors, setValue } = useForm<FormState>();
  const history = useHistory();
  const { dependencyId } = useParams<ParamsType>();

  const isEditing = dependencyId !== 'create';
  const formTitle = isEditing
    ? 'editar dependencia'
    : 'cadastrar uma dependencia';

  useEffect(() => {
    if (isEditing) {
      makePrivateRequest({ url: `/dependencies/${dependencyId}` }).then(
        response => {
          setValue('sigla', response.data.sigla);
          setValue('descricao', response.data.descricao);
        },
      );
    }
  }, [dependencyId, isEditing, setValue]);

  const onSubmit = (data: FormState) => {
    makePrivateRequest({
      url: isEditing ? `/dependencies/${dependencyId}` : '/dependencies',
      method: isEditing ? 'PUT' : 'POST',
      data,
    })
      .then(() => {
        toast.info('Registro salvo com sucesso!');
        history.push('/admin/dependencies');
      })
      .catch(() => {
        toast.error('Erro ao salvar registro!');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm title={formTitle}>
        <div className="row">
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
                    value: 15,
                    message: 'O campo deve ter no máximo 15 caracteres',
                  },
                })}
                type="text"
                name="sigla"
                className="form-control input-base"
                placeholder="Sigla"
              />
              {errors.sigla && (
                <div className="invalid-feedback d-block">
                  {errors.sigla.message}
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
