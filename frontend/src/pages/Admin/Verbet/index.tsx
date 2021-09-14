import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Verbet = () => {
  return (
    <Switch>
      <Route path="/admin/verbets" exact>
        <List />
      </Route>
      <Route path="/admin/verbets/:verbetId">
        <Form />
      </Route>
    </Switch>
  );
};

export default Verbet;
