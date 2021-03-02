import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GamePage from './pages/game';
import MenuPage from './pages/menu';

const App = () => (
  <Router>
    <Switch>
      <Route path="/room/:roomName">
        <GamePage />
      </Route>
      <Route path="/">
        <MenuPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
