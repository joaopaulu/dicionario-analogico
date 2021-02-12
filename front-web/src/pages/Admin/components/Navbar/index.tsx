import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
  <nav className="admin-nav-container">
    <ul>
      <li>
        <NavLink to="/admin/products">Produtos</NavLink>
      </li>
      <li>
        <NavLink to="/admin/categories">Categorias</NavLink>
      </li>
      <li>
        <NavLink to="/admin/users">Usuários</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
