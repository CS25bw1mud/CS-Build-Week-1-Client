import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import MainView from './components/MainView';
import './App.css';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Route path="/register" component={Register}/>
      <Route path='/mainview' component={MainView} />
    </div>
  );
}

export default App;
