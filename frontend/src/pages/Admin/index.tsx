import PrivateRoute from 'core/components/Routes/PrivateRoute';
import { Switch } from 'react-router-dom';
import HomeAdmin from './components/Home';
import NavbarAdmin from './components/NavbarAdmin';
import Users from './components/User';
import './styles.scss';

const Admin = () => (
  <div className="admin-container">
    <NavbarAdmin />
    <div className="container mt-5">
      <Switch>
        <PrivateRoute path="/admin/home">
          <HomeAdmin />
        </PrivateRoute>
        <PrivateRoute path="/admin/users" allowedRoutes={['ROLE_ADMIN']}>
          <Users />
        </PrivateRoute>
      </Switch>
    </div>
  </div>
);

export default Admin;
