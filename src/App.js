import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Home from './components/Home';
import Last100Mining from './components/Last100mining';
import SpecificTopMining from './components/SpecificTopMining';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/top100mining" component={Last100Mining} />
      <Route path="/specifictopmining" component={SpecificTopMining} />
    </Switch>
  </BrowserRouter>

);

export default App;
