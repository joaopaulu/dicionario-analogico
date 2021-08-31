import Navbar from 'components/NavBar';
import history from 'core/utils/history';
import Admin from 'pages/Admin';
import Auth from 'pages/Admin/Auth';
import Alfabetica from 'pages/Alfabetica';
import Analogica from 'pages/Analogica';
import AnalogicaDetails from 'pages/Analogica/Details';
import Home from 'pages/Home';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/analogica" exact>
        <Analogica />
      </Route>
      <Route path="/analogica/detalhes" exact>
        <AnalogicaDetails />
      </Route>
      <Route path="/alfabetica" exact>
        <Alfabetica />
      </Route>
      <Redirect from="/admin/auth" to="/admin/auth/login" exact />
      <Route path="/admin/auth">
        <Auth />
      </Route>
      <Redirect from="/admin" to="/admin/products" exact />
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
