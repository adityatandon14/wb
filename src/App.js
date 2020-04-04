import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavigationBar } from './NavigationBar';
import Main from './Main';
import Map from './utilities/Map';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Main />
      </Router>
    </React.Fragment>
  );
}

export default App;
