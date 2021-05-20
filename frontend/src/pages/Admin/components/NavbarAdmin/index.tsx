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
          <NavLink to="/admin/users" className="admin-nav-item">
            Usuários
          </NavLink>
        </li>
      </ul>
      <div className="footer-nav">
        <br />
        <span>&copy; 2021 | SG4 COLOG </span>
      </div>
    </nav>
  </>
);

export default NavbarAdmin;
