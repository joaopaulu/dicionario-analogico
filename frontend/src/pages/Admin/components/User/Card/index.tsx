import { User } from 'core/types/User';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
  user: User;
  onRemove: (userId: number) => void;
};

const Card = ({ user, onRemove }: Props) => {
  return (
    <div className="card-base user-card-admin">
      <div className="col-6 py-3">
        <h3 className="card-content user-card-name-admin">{user.firstName}</h3>
        <span className="user-card-email-admin">{user.email}</span>
      </div>
      <div className="col-3 pt-3 pr-5">
        <Link
          to={`/admin/users/${user.id}`}
          type="button"
          className="btn btn-outline-secondary btn-block border-radius-10 mb-3"
        >
          EDITAR
        </Link>
      </div>
      <div className="col-3 pt-3 pr-5">
        <button
          type="button"
          className="btn btn-outline-danger btn-block border-radius-10 btn-danger"
          onClick={() => onRemove(user.id)}
        >
          EXCLUIR
        </button>
      </div>
    </div>
  );
};

export default Card;
