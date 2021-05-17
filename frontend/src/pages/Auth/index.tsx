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
          <Route path="/auth/register">
            <h1>Cadastro</h1>
          </Route>
          <Route path="/auth/recover">
            <h1>Recuperação de Senha</h1>
          </Route>
        </Switch>
      </div>
    </div>
  </div>
);

export default Auth;
