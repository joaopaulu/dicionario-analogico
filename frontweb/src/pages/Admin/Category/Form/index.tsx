import { AxiosRequestConfig } from 'axios';
import { Category } from 'core/types/category';
import { requestBackend } from 'core/utils/requests';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './styles.css';

type UrlParams = {
  categoryId: string;
};

const Form = () => {
  const { categoryId } = useParams<UrlParams>();
  const isEditing = categoryId !== 'create';
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Category>();

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/categories/${categoryId}` }).then(response => {
        const category = response.data as Category;
        setValue('descricao', category.descricao);
      });
    }
  }, [isEditing, categoryId, setValue]);

  const onSubmit = (formData: Category) => {
    const data = {
      ...formData,
    };
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/categories/${categoryId}` : '/categories',
      data,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        toast.info('Registro cadastrado com sucesso');
        history.push('/admin/categories');
      })
      .catch(() => {
        toast.error('Erro ao cadastrar registro');
      });
  };

  const handleCancel = () => {
    history.push('/admin/category');
  };

  return (
    <div className="category-crud-container">
      <div className="base-card category-crud-form-card">
        <h1 className="category-crud-form-title">DADOS DA CATEGORIA</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row category-crud-inputs-container">
            <div className="col-lg-12 category-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input
                  {...register('descricao', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.descricao ? 'is-invalid' : ''
                  }`}
                  placeholder="Categoria"
                  name="descricao"
                />
                <div className="invalid-feedback d-block">
                  {errors.descricao?.message}
                </div>
              </div>
            </div>
          </div>
          <div className="category-crud-buttons-container">
            <button
              className="btn btn-outline-danger category-crud-button"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className="btn btn-primary category-crud-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
