import React from 'react';
import Header from './components/Header';
import Projects from './views/Projects';
import { Switch, Route } from 'react-router-dom';
import Login from './views/Login';

function App() {
  return (
    <div className="app-container">
      <Header/>
      <Switch>
        <Route exact path='/' component={Projects}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
