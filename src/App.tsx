import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import './App.css';

import Home from './pages/home'
import History from './pages/history'
import ShowWeather from './components/topMenu'

function App() {
  return (
    <div className="app">
       <Router>
       <ShowWeather/>
        <Switch>
          <Route exact path="/home" render={() => <Home />} />
          <Route path="/history" render={() => <History />} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
