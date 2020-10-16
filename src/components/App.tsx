import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Gigs from './Gigs/Gigs';
import Header from './Header';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <div className="container app">
          <Switch>
            <Redirect exact path="/" to="gigs" />
            <Route path="/gigs">
              <Gigs />
            </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
