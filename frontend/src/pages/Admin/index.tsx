import { Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from 'core/components/Routes/PrivateRoute';
import './styles.scss';
import Users from './components/User';

const Admin = () => (
  <div className="admin-container">
    <Navbar />
    <div className="admin-content">
      <Switch>
        <PrivateRoute path="/admin/users" allowedRoutes={['ROLE_ADMIN']}>
          <Users />
        </PrivateRoute>
      </Switch>
    </div>
  </div>
);

export default Admin;
