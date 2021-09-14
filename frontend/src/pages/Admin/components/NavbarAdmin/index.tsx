import { hasAnyRoles } from 'core/utils/auth';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="admin-nav-container">
      <ul className="admin-nav-items-container">
        <li>
          <NavLink to="/admin/home" className="admin-nav-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/categories" className="admin-nav-item">
            Categorias
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/tematics" className="admin-nav-item">
            Campos Temáticos
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/dependencies" className="admin-nav-item">
            Dependências
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/verbets" className="admin-nav-item">
            Verbetes
          </NavLink>
        </li>
        {hasAnyRoles(['ROLE_ADMIN']) && (
          <li>
            <NavLink to="/admin/users" className="admin-nav-item">
              <p>Usuários</p>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
