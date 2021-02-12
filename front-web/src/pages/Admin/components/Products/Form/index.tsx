import makeRequest from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
  name: string;
  price: string;
  category: string;
  imgUrl: string;
  description: string;
};

type FormEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

const Form = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    price: '',
    category: '',
    imgUrl: '',
    description: '',
  });

  const handleOnChange = (event: FormEvent) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      ...formData,
      categories: [{ id: formData.category }],
    };
    makeRequest({ url: '/products', method: 'POST', data: payload });
  };

  return (
    <form onSubmit={handleSubmit}>
      <BaseForm title="CADASTRAR UM PRODUTO">
        <div className="row">
          <div className="col-6">
            <input
              value={formData.name}
              type="text"
              name="name"
              className="form-control mb-5"
              onChange={handleOnChange}
              placeholder="Nome do Produto"
            />
            <select
              value={formData.category}
              name="category"
              className="form-control mb-5"
              onChange={handleOnChange}
            >
              <option value="1">Livros</option>
              <option value="3">Computadores</option>
              <option value="2">Eletrônicos</option>
            </select>
            <input
              value={formData.price}
              type="text"
              name="price"
              className="form-control mb-5"
              onChange={handleOnChange}
              placeholder="Preço"
            />
            <input
              value={formData.imgUrl}
              type="text"
              name="imgUrl"
              className="form-control"
              onChange={handleOnChange}
              placeholder="Url Imagem"
            />
          </div>
          <div className="col-6">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleOnChange}
              className="form-control"
              cols={30}
              rows={10}
            />
          </div>
        </div>
      </BaseForm>
    </form>
  );
};

export default Form;
