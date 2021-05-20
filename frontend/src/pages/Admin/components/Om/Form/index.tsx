import { Posto } from 'core/types/Posto';
import { makePrivateRequest } from 'core/utils/request';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import './styles.scss';

type ParamsType = {
  omId: string;
};

const Form = () => {
  const { register, handleSubmit, errors, setValue } = useForm<Posto>();
  const history = useHistory();
  const { omId } = useParams<ParamsType>();

  const isEditing = omId !== 'create';
  const formTitle = isEditing ? 'editar OM' : 'cadastrar uma OM';

  useEffect(() => {
    if (isEditing) {
      makePrivateRequest({ url: `/oms/${omId}` }).then(response => {
        setValue('descricao', response.data.descricao);
      });
    }
  }, [omId, isEditing, setValue]);

  const onSubmit = (data: Posto) => {
    makePrivateRequest({
      url: isEditing ? `/oms/${omId}` : '/oms',
      method: isEditing ? 'PUT' : 'POST',
      data,
    })
      .then(() => {
        toast.info('OM salvo com sucesso!');
        history.push('/admin/oms');
      })
      .catch(() => {
        toast.error('Erro ao salvar OM!');
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
