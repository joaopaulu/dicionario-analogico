import Navbar from 'components/NavBar';
import history from 'core/utils/history';
import Admin from 'pages/Admin';
import Auth from 'pages/Admin/Auth';
import Alfabetica from 'pages/Alfabetica';
import Analogica from 'pages/Analogica';
import AnalogicaDetails from 'pages/Analogica/Details';
import Apresentacao from 'pages/Apresentacao';
import Contato from 'pages/Contato';
import Creditos from 'pages/Creditos';
import Elaboracao from 'pages/Elaboracao';
import Guia from 'pages/Guia';
import Home from 'pages/Home';
import Lista from 'pages/Lista';
import Referencias from 'pages/Referencias';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

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
      <Route path="/guia" exact>
        <Guia />
      </Route>
      <Route path="/lista" exact>
        <Lista />
      </Route>
      <Route path="/creditos" exact>
        <Creditos />
      </Route>
      <Route path="/referencias" exact>
        <Referencias />
      </Route>
      <Route path="/analogica" exact>
        <Analogica />
      </Route>
      <Route path="/analogica/:analogicaId" exact>
        <AnalogicaDetails />
      </Route>
      <Route path="/alfabetica" exact>
        <Alfabetica />
      </Route>
      <Route path="/contato" exact>
        <Contato />
      </Route>
      <Redirect from="/admin/auth" to="/admin/auth/login" exact />
      <Route path="/admin/auth">
        <Auth />
      </Route>
      <Redirect from="/admin" to="/admin/home" exact />
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
