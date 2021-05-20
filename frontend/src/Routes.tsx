import HomeAdmin from 'pages/Admin/components/Home';
import Apresentacao from 'pages/Apresentacao';
import Home from 'pages/Home';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import history from './core/utils/history';
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
      <Redirect from="/admin" to="/admin/home" exact />
      <Route path="/admin" exact>
        <HomeAdmin />
      </Route>
      <Redirect from="/auth" to="/auth/login" exact />
      <Route path="/auth">
        <Auth />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
