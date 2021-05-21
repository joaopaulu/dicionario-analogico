import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import './styles.scss';

const Auth = () => (
  <div className="auth-container">
    <div className="auth-content">
      <div className="admin-content">
        <Switch>
          <Route path="/auth/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  </div>
);

export default Auth;
