import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WoofPlayer from './WoofPlayer';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={WoofPlayer} />
        <Route exact path="/:activevideo" component={WoofPlayer} />
      </Switch>
      <GlobalStyle />
    </>
  </BrowserRouter>
);

export default App;
