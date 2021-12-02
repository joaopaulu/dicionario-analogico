import Navbar from 'components/NavBar';
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
import VerbeteDetails from 'pages/VerbeteDetails';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter basename={'/dicionario-web'}>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} exact>
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
      <Route path="/analogica/:tematicId" exact>
        <AnalogicaDetails />
      </Route>
      <Route path="/alfabetica" exact>
        <Alfabetica />
      </Route>
      <Route path="/verbete/:verbeteId" exact>
        <VerbeteDetails />
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
  </BrowserRouter>
);

export default Routes;
