import { AxiosRequestConfig } from 'axios';
import { Dependency } from 'core/types/dependency';
import { requestBackend } from 'core/utils/requests';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './styles.css';

type UrlParams = {
  dependencyId: string;
};

const Form = () => {
  const { dependencyId } = useParams<UrlParams>();
  const isEditing = dependencyId !== 'create';
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Dependency>();

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/dependencies/${dependencyId}` }).then(
        response => {
          const dependency = response.data as Dependency;
          setValue('sigla', dependency.sigla);
          setValue('descricao', dependency.descricao);
        },
      );
    }
  }, [isEditing, dependencyId, setValue]);

  const onSubmit = (formData: Dependency) => {
    const data = {
      ...formData,
    };
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/dependencies/${dependencyId}` : '/dependencies',
      data,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        toast.info('Registro cadastrado com sucesso');
        history.push('/admin/dependencies');
      })
      .catch(() => {
        toast.error('Erro ao cadastrar registro');
      });
  };

  const handleCancel = () => {
    history.push('/admin/dependencies');
  };

  return (
    <div className="dependency-crud-container">
      <div className="base-card dependency-crud-form-card">
        <h1 className="dependency-crud-form-title">DADOS DA DEPENDÊNCIA</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row dependency-crud-inputs-container">
            <div className="col-lg-6 dependency-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input
                  {...register('sigla', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.sigla ? 'is-invalid' : ''
                  }`}
                  placeholder="Sigla"
                  name="sigla"
                />
                <div className="invalid-feedback d-block">
                  {errors.sigla?.message}
                </div>
              </div>
            </div>
            <div className="col-lg-6 dependency-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input
                  {...register('descricao', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.descricao ? 'is-invalid' : ''
                  }`}
                  placeholder="Descrição"
                  name="descricao"
                />
                <div className="invalid-feedback d-block">
                  {errors.descricao?.message}
                </div>
              </div>
            </div>
          </div>
          <div className="dependency-crud-buttons-container">
            <button
              className="btn btn-outline-danger dependency-crud-button"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className="btn btn-primary dependency-crud-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
