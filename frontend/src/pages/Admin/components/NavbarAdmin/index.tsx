import { NavLink } from 'react-router-dom';
import './styles.scss';

const NavbarAdmin = () => (
  <>
    <nav className="admin-nav-container">
      <ul>
        <li>
          <NavLink to="/admin/home" className="admin-nav-item">
            Home
          </NavLink>
          <NavLink to="/admin/categories" className="admin-nav-item">
            Categorias
          </NavLink>
          <NavLink to="/admin/users" className="admin-nav-item">
            Usuários
          </NavLink>
        </li>
      </ul>
      <footer>
        <br />
        <span>
          &copy; 2021 |{' '}
          <a
            href="https://www.linkedin.com/in/joaopaulu/"
            target="_blank"
            rel="noreferrer"
          >
            João Paulo Lima
          </a>{' '}
        </span>
      </footer>
    </nav>
  </>
);

export default NavbarAdmin;
