import { ReactComponent as MenuIcon } from 'core/assets/images/menu.svg';
import {
  getAccessTokenDecoded,
  isAuthenticated,
  logout,
} from 'core/utils/auth';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {
  const [drawerActive, setDrawerActive] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const location = useLocation();

  useEffect(() => {
    const currentUserData = getAccessTokenDecoded();
    setCurrentUser(currentUserData.user_name);
  }, [location]);

  const handleLogout = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    logout();
  };
  return (
    <nav className="bg-primary main-nav">
      <Link to="/" className="nav-logo-text">
        <h4>Dicionário Analógico</h4>
      </Link>
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
              to="/"
              exact
              className="nav-link"
              onClick={() => setDrawerActive(false)}
            >
              INÍCIO
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/apresentacao"
              onClick={() => setDrawerActive(false)}
            >
              APRESENTAÇÃO
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/products"
              onClick={() => setDrawerActive(false)}
            >
              ELABORAÇÃO
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/admin"
              onClick={() => setDrawerActive(false)}
            >
              ADMIN
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
                    className="nav-link active"
                    to="/auth/login"
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
            {currentUser}
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
            className="nav-link active"
            to="/auth/login"
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
