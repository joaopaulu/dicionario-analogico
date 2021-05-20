import PrivateRoute from 'core/components/Routes/PrivateRoute';
import Apresentacao from 'pages/Apresentacao';
import Elaboracao from 'pages/Elaboracao';
import Home from 'pages/Home';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import history from './core/utils/history';
import Admin from './pages/Admin';
import Auth from './pages/Auth';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/apresentacao" exact>
        <Apresentacao />
      </Route>
      <Route path="/elaboracao" exact>
        <Elaboracao />
      </Route>
      <Redirect from="/auth" to="/auth/login" exact />
      <Route path="/auth">
        <Auth />
      </Route>
      <Redirect from="/admin" to="/admin/home" exact />
      <PrivateRoute path="/admin">
        <Admin />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
