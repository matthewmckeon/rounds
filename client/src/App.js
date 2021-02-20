import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/navbar';
import RoundList from './components/roundList';
import EditRound from './components/editRound';
import CreateRound from './components/createRound';

function App() {
  return (
    <div className='app'>
      <Router>
      <NavBar />
        <br />
        <Route path='/' exact component={RoundList} />
        <Route path='/edit/:id' component={EditRound} />
        <Route path='/create' component={CreateRound} />
      </Router>
    </div>
  );
}

export default App;
