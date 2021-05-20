import { Posto } from 'core/types/Posto';
import { makePrivateRequest } from 'core/utils/request';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import './styles.scss';

type ParamsType = {
  postoId: string;
};

const Form = () => {
  const { register, handleSubmit, errors, setValue } = useForm<Posto>();
  const history = useHistory();
  const { postoId } = useParams<ParamsType>();

  const isEditing = postoId !== 'create';
  const formTitle = isEditing ? 'editar posto' : 'cadastrar um Posto';

  useEffect(() => {
    if (isEditing) {
      makePrivateRequest({ url: `/postos/${postoId}` }).then(response => {
        setValue('sigla', response.data.sigla);
        setValue('descricao', response.data.descricao);
        setValue('antiguidade', response.data.antiguidade);
      });
    }
  }, [postoId, isEditing, setValue]);

  const onSubmit = (data: Posto) => {
    makePrivateRequest({
      url: isEditing ? `/postos/${postoId}` : '/postos',
      method: isEditing ? 'PUT' : 'POST',
      data,
    })
      .then(() => {
        toast.info('Posto salvo com sucesso!');
        history.push('/admin/postos');
      })
      .catch(() => {
        toast.error('Erro ao salvar posto!');
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
                type="text"
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
          <div className="col-6">
            <div className="input-bt30">
              <input
                ref={register({ required: true })}
                type="number"
                name="antiguidade"
                className="form-control input-base"
                placeholder="Antiguidade"
              />
              {errors.antiguidade && (
                <div className="invalid-feedback d-block">
                  {errors.antiguidade.message}
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
