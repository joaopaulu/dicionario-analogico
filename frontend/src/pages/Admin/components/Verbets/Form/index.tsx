import { makePrivateRequest } from 'core/utils/request';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import './styles.scss';

export type FormState = {
  descricao: string;
  separacaoSilabica: string;
  pronuncia: string;
  genero: string;
  transitividadeVerbal: string;
  variantes: string;
  definicao: string;
  fonteDefinicao: string;
};

type ParamsType = {
  verbetId: string;
};

const Form = () => {
  const { register, handleSubmit, errors, setValue } = useForm<FormState>();
  const history = useHistory();
  const { verbetId } = useParams<ParamsType>();

  const isEditing = verbetId !== 'create';
  const formTitle = isEditing ? 'editar verbete' : 'cadastrar um verbete';

  useEffect(() => {
    if (isEditing) {
      makePrivateRequest({ url: `/verbetes/${verbetId}` }).then(response => {
        setValue('descricao', response.data.descricao);
        setValue('separacaoSilabica', response.data.separacaoSilabica);
        setValue('pronuncia', response.data.pronuncia);
        setValue('genero', response.data.genero);
        setValue('transitividadeVerbal', response.data.transitividadeVerbal);
        setValue('variantes', response.data.variantes);
        setValue('definicao', response.data.definicao);
        setValue('fonteDefinicao', response.data.fonteDefinicao);
      });
    }
  }, [verbetId, isEditing, setValue]);

  const onSubmit = (data: FormState) => {
    makePrivateRequest({
      url: isEditing ? `/verbetes/${verbetId}` : '/verbetes',
      method: isEditing ? 'PUT' : 'POST',
      data,
    })
      .then(() => {
        toast.info('Registro salvo com sucesso!');
        history.push('/admin/verbets');
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
                name="separacaoSilabica"
                className="form-control input-base"
                placeholder="Separação Silábica"
              />
              {errors.separacaoSilabica && (
                <div className="invalid-feedback d-block">
                  {errors.separacaoSilabica.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <input
                type="text"
                name="pronuncia"
                className="form-control input-base"
                placeholder="Pronuncia"
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 8,
                    message: 'O campo deve ter no mínimo 8 caracteres',
                  },
                })}
              />
              {errors.pronuncia && (
                <div className="invalid-feedback d-block">
                  {errors.pronuncia.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <input
                type="text"
                name="genero"
                className="form-control input-base"
                placeholder="Gênero"
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 8,
                    message: 'O campo deve ter no mínimo 8 caracteres',
                  },
                })}
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
                name="transitividadeVerbal"
                className="form-control input-base"
                placeholder="Transitividade Verbal"
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 8,
                    message: 'O campo deve ter no mínimo 8 caracteres',
                  },
                })}
              />
              {errors.transitividadeVerbal && (
                <div className="invalid-feedback d-block">
                  {errors.transitividadeVerbal.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <input
                type="text"
                name="fonteDefinicao"
                className="form-control input-base"
                placeholder="Fonte de Definição"
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 8,
                    message: 'O campo deve ter no mínimo 8 caracteres',
                  },
                })}
              />
              {errors.fonteDefinicao && (
                <div className="invalid-feedback d-block">
                  {errors.fonteDefinicao.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <input
                type="text"
                name="variantes"
                className="form-control input-base"
                placeholder="Variantes"
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 8,
                    message: 'O campo deve ter no mínimo 8 caracteres',
                  },
                })}
              />
              {errors.variantes && (
                <div className="invalid-feedback d-block">
                  {errors.variantes.message}
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
                    value: 5000,
                    message: 'O campo deve ter no máximo 5000 caracteres',
                  },
                })}
                name="definicao"
                className="form-control input-base"
                placeholder="Definição"
              />
              {errors.definicao && (
                <div className="invalid-feedback d-block">
                  {errors.definicao.message}
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
