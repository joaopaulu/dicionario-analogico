import PrivateRoute from 'core/components/Routes/PrivateRoute';
import { Switch } from 'react-router-dom';
import Categories from './components/Category';
import HomeAdmin from './components/Home';
import NavbarAdmin from './components/NavbarAdmin';
import Tematics from './components/Tematic';
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
        <PrivateRoute path="/admin/categories" allowedRoutes={['ROLE_ADMIN']}>
          <Categories />
        </PrivateRoute>
        <PrivateRoute path="/admin/tematics" allowedRoutes={['ROLE_ADMIN']}>
          <Tematics />
        </PrivateRoute>
      </Switch>
    </div>
  </div>
);

export default Admin;
