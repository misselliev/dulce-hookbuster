import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WoofPlayer from './WoofPlayer';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WoofPlayer} />
      <Route exact path="/:activevideo" component={WoofPlayer} />
    </Switch>
  </BrowserRouter>
);

export default App;
