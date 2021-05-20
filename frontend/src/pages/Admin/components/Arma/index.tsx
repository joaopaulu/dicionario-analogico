import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Armas = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin/armas" exact>
          <List />
        </Route>
        <Route path="/admin/armas/:armaId">
          <Form />
        </Route>
      </Switch>
    </div>
  );
};

export default Armas;
