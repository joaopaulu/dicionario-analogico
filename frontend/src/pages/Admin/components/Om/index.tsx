import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Oms = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin/oms" exact>
          <List />
        </Route>
        <Route path="/admin/oms/:omId">
          <Form />
        </Route>
      </Switch>
    </div>
  );
};

export default Oms;
