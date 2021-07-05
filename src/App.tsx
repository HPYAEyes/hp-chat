import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

interface Props {
  
}

const App: React.FC<Props> = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
