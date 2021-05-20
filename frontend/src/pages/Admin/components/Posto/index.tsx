import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Postos = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin/postos" exact>
          <List />
        </Route>
        <Route path="/admin/postos/:postoId">
          <Form />
        </Route>
      </Switch>
    </div>
  );
};

export default Postos;
