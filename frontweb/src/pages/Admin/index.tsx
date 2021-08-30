import PrivateRoute from 'components/PrivateRoute';
import { Switch } from 'react-router-dom';
import NavbarAdmin from './components/NavbarAdmin';
import Products from './Products';
import './styles.css';
import Users from './User';

const Admin = () => {
  return (
    <div className="admin-container">
      <NavbarAdmin />
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/products">
            <Products />
          </PrivateRoute>
          <PrivateRoute path="/admin/categories">
            <h1>Categorie CRUD</h1>
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
