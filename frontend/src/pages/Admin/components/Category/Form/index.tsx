import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import { useHistory, useParams } from 'react-router-dom';
import './styles.scss';

export type FormState = {
  name: string;
};

type ParamsType = {
  categoryId: string;
};

const Form = () => {
  const { register, handleSubmit, errors, setValue } = useForm<FormState>();
  const history = useHistory();
  const { categoryId } = useParams<ParamsType>();

  const isEditing = categoryId !== 'create';
  const formTitle = isEditing ? 'editar produto' : 'cadastrar uma categoria';

  useEffect(() => {
    if (isEditing) {
      makeRequest({ url: `/categories/${categoryId}` }).then(response => {
        setValue('name', response.data.name);
      });
    }
  }, [categoryId, isEditing, setValue]);

  const onSubmit = (data: FormState) => {
    makePrivateRequest({
      url: isEditing ? `/categories/${categoryId}` : '/categories',
      method: isEditing ? 'PUT' : 'POST',
      data,
    })
      .then(() => {
        toast.info('Categoria salva com sucesso!');
        history.push('/admin/categories');
      })
      .catch(() => {
        toast.error('Erro ao salvar categoria!');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm title={formTitle}>
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
          name="name"
          className="form-control input-base"
          placeholder="Nome do Produto"
        />
        {errors.name && (
          <div className="invalid-feedback d-block">{errors.name.message}</div>
        )}
      </BaseForm>
    </form>
  );
};

export default Form;
