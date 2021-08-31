import PrivateRoute from 'components/PrivateRoute';
import { Switch } from 'react-router-dom';
import NavbarAdmin from './components/NavbarAdmin';
import HomeAdmin from './Home';
import './styles.css';
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
          <PrivateRoute path="/admin/users" roles={['ROLE_ADMIN']}>
            <Users />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
