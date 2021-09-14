import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Tematic = () => {
  return (
    <Switch>
      <Route path="/admin/tematics" exact>
        <List />
      </Route>
      <Route path="/admin/tematics/:tematicId">
        <Form />
      </Route>
    </Switch>
  );
};

export default Tematic;
