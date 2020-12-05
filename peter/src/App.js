import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ROUTES} from './routes';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <Switch>
        { ROUTES.map((route,index) => <Route key={index} { ...route } />)}
      </Switch>
    </Router>
    </>
  );
}

export default App;
