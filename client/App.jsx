
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Characters from './components/Characters';
import CreateCharacter from './components/CreateCharacter';

import './stylesheets/styles.css';

const App = props => {
  return (
    <div className="router">
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={Characters}
          />
          <Route
            exact
            path="/create"
            component={CreateCharacter}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
