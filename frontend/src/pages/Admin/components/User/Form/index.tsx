import React, { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import { makePrivateRequest } from 'core/utils/request';
import { useHistory, useParams } from 'react-router-dom';
import './styles.scss';
import { Roles } from 'core/types/User';
import Select from 'react-select';

export type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repassword: string;
  roles: Roles[];
};

type ParamsType = {
  userId: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    control,
  } = useForm<FormState>();
  const password = useRef({});
  password.current = watch('password', '');
  const history = useHistory();
  const { userId } = useParams<ParamsType>();
  const [roles, setRoles] = useState<Roles[]>([]);
  const [isLoadingRoles, setIsLoadingRoles] = useState(false);

  const isEditing = userId !== 'create';
  const formTitle = isEditing ? 'editar usuário' : 'cadastrar um Usuário';

  useEffect(() => {
    if (isEditing) {
      makePrivateRequest({ url: `/users/${userId}` }).then(response => {
        setValue('firstName', response.data.firstName);
        setValue('lastName', response.data.lastName);
        setValue('email', response.data.email);
        setValue('password', response.data.password);
        setValue('repassword', response.data.password);
        setValue('roles', response.data.roles);
      });
    }
  }, [userId, isEditing, setValue]);

  useEffect(() => {
    setIsLoadingRoles(true);
    makePrivateRequest({ url: '/roles' })
      .then(response => setRoles(response.data.content))
      .finally(() => setIsLoadingRoles(false));
  }, []);

  const onSubmit = (data: FormState) => {
    makePrivateRequest({
      url: isEditing ? `/users/${userId}` : '/users',
      method: isEditing ? 'PUT' : 'POST',
      data,
    })
      .then(() => {
        toast.info('Usuário salvo com sucesso!');
        history.push('/admin/users');
      })
      .catch(() => {
        toast.error('Erro ao salvar usuário!');
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
                name="firstName"
                className="form-control input-base"
                placeholder="Nome"
              />
              {errors.firstName && (
                <div className="invalid-feedback d-block">
                  {errors.firstName.message}
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
                name="lastName"
                className="form-control input-base"
                placeholder="Sobrenome"
              />
              {errors.lastName && (
                <div className="invalid-feedback d-block">
                  {errors.lastName.message}
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
                type="email"
                name="email"
                className="form-control input-base"
                placeholder="E-mail"
              />
              {errors.email && (
                <div className="invalid-feedback d-block">
                  {errors.email.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <Controller
                as={Select}
                name="roles"
                rules={{ required: true }}
                control={control}
                isLoading={isLoadingRoles}
                options={roles}
                getOptionLabel={(option: Roles) => option.authority}
                getOptionValue={(option: Roles) => String(option.id)}
                classNamePrefix="roles-select"
                placeholder="Perfil"
                inputId="roles"
                defaultValue=""
                isMulti
              />
              {errors.roles && (
                <div className="invalid-feedback d-block">
                  Campo obrigatório
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <input
                type="password"
                name="password"
                className="form-control input-base"
                placeholder="Senha"
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 8,
                    message: 'O campo deve ter no mínimo 8 caracteres',
                  },
                })}
              />
              {errors.password && (
                <div className="invalid-feedback d-block">
                  {errors.password.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <input
                type="password"
                name="repassword"
                className="form-control input-base"
                placeholder="Repita a senha"
                ref={register({
                  validate: value =>
                    value === password.current || 'As senhas não estão iguais',
                })}
              />
              {errors.repassword && (
                <div className="invalid-feedback d-block">
                  {errors.repassword.message}
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
