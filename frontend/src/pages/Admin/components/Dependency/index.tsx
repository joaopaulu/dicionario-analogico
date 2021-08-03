import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Dependency = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin/dependencies" exact>
          <List />
        </Route>
        <Route path="/admin/dependencies/:dependencyId">
          <Form />
        </Route>
      </Switch>
    </div>
  );
};

export default Dependency;
