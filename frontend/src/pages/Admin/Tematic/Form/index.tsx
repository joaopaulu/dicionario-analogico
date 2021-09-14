import { AxiosRequestConfig } from 'axios';
import { Dependency } from 'core/types/dependency';
import { Tematic } from 'core/types/tematic';
import { requestBackend } from 'core/utils/requests';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import { toast } from 'react-toastify';
import './styles.css';

type UrlParams = {
  tematicId: string;
};

const Form = () => {
  const { tematicId } = useParams<UrlParams>();
  const isEditing = tematicId !== 'create';
  const history = useHistory();
  const [selectDependency, setSelectDependency] = useState<Dependency[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<Tematic>();

  useEffect(() => {
    requestBackend({ url: '/dependencies' }).then(response => {
      setSelectDependency(response.data.content);
    });
  }, []);

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/tematics/${tematicId}` }).then(response => {
        const tematic = response.data as Tematic;
        setValue('nome', tematic.nome);
        setValue('descricao', tematic.descricao);
        setValue('informacaoGramatical', tematic.informacaoGramatical);
        setValue('tipoDependencia', tematic.tipoDependencia);
        setValue('genero', tematic.genero);
      });
    }
  }, [isEditing, tematicId, setValue]);

  const onSubmit = (formData: Tematic) => {
    const data = {
      ...formData,
    };
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/tematics/${tematicId}` : '/tematics',
      data,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        toast.info('Registro cadastrado com sucesso');
        history.push('/admin/tematics');
      })
      .catch(() => {
        toast.error('Erro ao cadastrar');
      });
  };

  const handleCancel = () => {
    history.push('/admin/tematics');
  };

  return (
    <div className="tematic-crud-container">
      <div className="base-card tematic-crud-form-card">
        <h1 className="tematic-crud-form-title">DADOS DO CAMPO TEMATICO</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row tematic-crud-inputs-container">
            <div className="col-lg-6 tematic-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input
                  {...register('nome', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.nome ? 'is-invalid' : ''
                  }`}
                  placeholder="Nome"
                  name="nome"
                />
                <div className="invalid-feedback d-block">
                  {errors.nome?.message}
                </div>
              </div>
            </div>
            <div className="col-lg-6 tematic-crud-inputs-left-container">
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
            <div className="col-lg-6 tematic-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input
                  {...register('informacaoGramatical', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.informacaoGramatical ? 'is-invalid' : ''
                  }`}
                  placeholder="Informação Gramatical"
                  name="informacaoGramatical"
                />
                <div className="invalid-feedback d-block">
                  {errors.informacaoGramatical?.message}
                </div>
              </div>
            </div>
            <div className="col-lg-6 tematic-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <Controller
                  name="tipoDependencia"
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={selectDependency}
                      classNamePrefix="tematic-crud-select"
                      getOptionLabel={(dependency: Dependency) =>
                        dependency.sigla
                      }
                      getOptionValue={(dependency: Dependency) =>
                        String(dependency.id)
                      }
                    />
                  )}
                />
                {errors.tipoDependencia && (
                  <div className="invalid-feedback d-block">
                    Campo obrigatório
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6 tematic-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input
                  {...register('genero', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.genero ? 'is-invalid' : ''
                  }`}
                  placeholder="Genero"
                  name="genero"
                />
                <div className="invalid-feedback d-block">
                  {errors.genero?.message}
                </div>
              </div>
            </div>
          </div>
          <div className="tematic-crud-buttons-container">
            <button
              className="btn btn-outline-danger tematic-crud-button"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className="btn btn-primary tematic-crud-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
