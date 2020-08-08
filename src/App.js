import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";

import HomePage from './Pages/HomePage';
import DetailPage from "./Pages/DetailPage";

function App() {
  const render = (props) => {
    return <DetailPage {...props} />;
  };

  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:id" render={render} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
