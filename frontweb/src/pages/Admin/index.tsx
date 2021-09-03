import PrivateRoute from 'components/PrivateRoute';
import { Switch } from 'react-router-dom';
import Category from './Category';
import NavbarAdmin from './components/NavbarAdmin';
import Dependency from './Dependency';
import HomeAdmin from './Home';
import './styles.css';
import Tematic from './Tematic';
import Users from './User';

const Admin = () => {
  return (
    <div className="admin-container">
      <NavbarAdmin />
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/home">
            <HomeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/admin/categories" roles={['ROLE_ADMIN']}>
            <Category />
          </PrivateRoute>
          <PrivateRoute path="/admin/tematics" roles={['ROLE_ADMIN']}>
            <Tematic />
          </PrivateRoute>
          <PrivateRoute path="/admin/dependencies" roles={['ROLE_ADMIN']}>
            <Dependency />
          </PrivateRoute>
          <PrivateRoute path="/admin/users" roles={['ROLE_ADMIN']}>
            <Users />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
