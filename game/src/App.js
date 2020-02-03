import React from 'react';
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import MainView from './components/MainView';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainView />
    </div>
  );
}

export default App;
