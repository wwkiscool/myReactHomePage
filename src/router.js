import React from 'react';
import { BrowserRouter  as Router, Switch, Route } from 'react-router-dom';

import Home from './views/home/index.jsx'

function RouterCenter() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
    </Router>
  )

}
export default RouterCenter