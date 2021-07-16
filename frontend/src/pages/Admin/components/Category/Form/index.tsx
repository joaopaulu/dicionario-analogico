import { makePrivateRequest } from 'core/utils/request';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import './styles.scss';

export type FormState = { descricao: string };

type ParamsType = {
  categoryId: string;
};

const Form = () => {
  const { register, handleSubmit, errors, setValue } = useForm<FormState>();
  const history = useHistory();
  const { categoryId } = useParams<ParamsType>();

  const isEditing = categoryId !== 'create';
  const formTitle = isEditing ? 'editar categoria' : 'cadastrar categoria';

  useEffect(() => {
    if (isEditing) {
      makePrivateRequest({ url: `/categories/${categoryId}` }).then(
        response => {
          setValue('descricao', response.data.descricao);
        },
      );
    }
  }, [categoryId, isEditing, setValue]);

  const onSubmit = (data: FormState) => {
    makePrivateRequest({
      url: isEditing ? `/categories/${categoryId}` : '/categories',
      method: isEditing ? 'PUT' : 'POST',
      data,
    })
      .then(() => {
        toast.info('Categoria salvo com sucesso!');
        history.push('/admin/categories');
      })
      .catch(() => {
        toast.error('Erro ao salvar categoria!');
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
                    value: 50,
                    message: 'O campo deve ter no máximo 5 caracteres',
                  },
                })}
                type="text"
                name="descricao"
                className="form-control input-base"
                placeholder="Categoria"
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
