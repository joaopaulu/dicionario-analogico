import logo from 'core/assets/images/logo-dicionario.png';
import { ReactComponent as MenuIcon } from 'core/assets/images/menu.svg';
import { isAuthenticated, logout } from 'core/utils/auth';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {
  const [drawerActive, setDrawerActive] = useState(false);

  const handleLogout = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    logout();
  };
  return (
    <nav className="bg-primary main-nav">
      <div className="nav-logo">
        <NavLink
          to="/"
          exact
          className="nav-link"
          onClick={() => setDrawerActive(false)}
        >
          <img src={logo} alt="Dicionário Analógico" />
        </NavLink>
      </div>
      <button
        className="menu-mobile-btn"
        type="button"
        onClick={() => setDrawerActive(!drawerActive)}
      >
        <MenuIcon />
      </button>

      <div
        className={drawerActive ? 'menu-mobile-container' : 'menu-container'}
      >
        <ul className="main-menu">
          <li>
            <NavLink
              className="nav-link"
              to="/apresentacao"
              onClick={() => setDrawerActive(false)}
            >
              Apresentação
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/elaboracao"
              onClick={() => setDrawerActive(false)}
            >
              Elaboração
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/guia"
              onClick={() => setDrawerActive(false)}
            >
              Guia de Consultas
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/lista"
              onClick={() => setDrawerActive(false)}
            >
              Lista de Abreviaturas
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/creditos"
              onClick={() => setDrawerActive(false)}
            >
              Créditos
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/referencias"
              onClick={() => setDrawerActive(false)}
            >
              Referências
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/contato"
              onClick={() => setDrawerActive(false)}
            >
              Contato
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/admin/home"
              onClick={() => setDrawerActive(false)}
            >
              Admin
            </NavLink>
          </li>
          {drawerActive && (
            <li>
              {isAuthenticated() && (
                <a
                  href="#logout"
                  className="nav-link active d-inline"
                  onClick={e => {
                    setDrawerActive(false);
                    handleLogout(e);
                  }}
                >
                  LOGOUT
                </a>
              )}
            </li>
          )}

          {drawerActive && (
            <>
              {!isAuthenticated() && (
                <li>
                  <Link
                    className="nav-link"
                    to="/admin/auth/login"
                    onClick={() => setDrawerActive(false)}
                  >
                    LOGIN
                  </Link>
                </li>
              )}
            </>
          )}
        </ul>
      </div>
      <div className="user-info-dnone text-right">
        {isAuthenticated() && (
          <>
            <a
              href="#logout"
              className="nav-link active d-inline"
              onClick={e => {
                setDrawerActive(false);
                handleLogout(e);
              }}
            >
              Logout
            </a>
          </>
        )}
        {!isAuthenticated() && (
          <Link
            className="nav-link"
            to="/admin/auth/login"
            onClick={() => setDrawerActive(false)}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
