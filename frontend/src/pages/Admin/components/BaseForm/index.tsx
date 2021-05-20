import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

type Props = {
  title: string;
  children: React.ReactNode;
};

const BaseForm = ({ title, children }: Props) => {
  const history = useHistory();

  const handleCancel = () => {
    history.goBack();
    return;
  };
  return (
    <div className="admin-base-form card-base">
      <h1 className="base-form-title">{title}</h1>
      {children}
      <div className="base-form-actions">
        <span
          className="border-radius-10 btn btn-outline-danger mr-3"
          onClick={handleCancel}
        >
          CANCELAR
        </span>
        <button className="border-radius-10 btn btn-primary">SALVAR</button>
      </div>
    </div>
  );
};

export default BaseForm;
