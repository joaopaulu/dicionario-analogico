import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Verbets = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin/verbets" exact>
          <List />
        </Route>
        <Route path="/admin/verbets/:verbetId">
          <Form />
        </Route>
      </Switch>
    </div>
  );
};

export default Verbets;
