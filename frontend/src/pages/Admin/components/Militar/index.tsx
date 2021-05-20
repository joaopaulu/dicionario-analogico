import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Militares = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin/militares" exact>
          <List />
        </Route>
        <Route path="/admin/militares/:militarId">
          <Form />
        </Route>
      </Switch>
    </div>
  );
};

export default Militares;
