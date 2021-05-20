import logocolog from 'core/assets/images/logocolog.png';
import { isAllowesByRole } from 'core/utils/auth';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
  <>
    <nav className="admin-nav-container">
      <ul>
        {isAllowesByRole(['ROLE_ADMIN']) && (
          <li>
            <NavLink to="/admin/home" className="admin-nav-item">
              Home
            </NavLink>
            <NavLink to="/admin/militares" className="admin-nav-item">
              Militares
            </NavLink>
            <NavLink to="/admin/postos" className="admin-nav-item">
              Posto
            </NavLink>
            <NavLink to="/admin/oms" className="admin-nav-item">
              OM's
            </NavLink>
            <NavLink to="/admin/armas" className="admin-nav-item">
              Armas
            </NavLink>
            <NavLink to="/admin/users" className="admin-nav-item">
              Usuários
            </NavLink>
          </li>
        )}
      </ul>
      <div className="footer-nav">
        <img src={logocolog} alt="COLOG" />
        <br />
        <span>&copy; 2021 | SG4 COLOG </span>
      </div>
    </nav>
  </>
);

export default Navbar;
