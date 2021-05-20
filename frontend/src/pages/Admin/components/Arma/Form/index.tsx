import { Arma } from 'core/types/Arma';
import { makePrivateRequest } from 'core/utils/request';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import './styles.scss';

type ParamsType = {
  armaId: string;
};

const Form = () => {
  const { register, handleSubmit, errors, setValue } = useForm<Arma>();
  const history = useHistory();
  const { armaId } = useParams<ParamsType>();

  const isEditing = armaId !== 'create';
  const formTitle = isEditing ? 'editar arma' : 'cadastrar uma arma';

  useEffect(() => {
    if (isEditing) {
      makePrivateRequest({ url: `/armas/${armaId}` }).then(response => {
        setValue('descricao', response.data.descricao);
      });
    }
  }, [armaId, isEditing, setValue]);

  const onSubmit = (data: Arma) => {
    makePrivateRequest({
      url: isEditing ? `/armas/${armaId}` : '/armas',
      method: isEditing ? 'PUT' : 'POST',
      data,
    })
      .then(() => {
        toast.info('Arma salva com sucesso!');
        history.push('/admin/armas');
      })
      .catch(() => {
        toast.error('Erro ao salvar arma!');
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
