import React from 'react';
import {Route} from 'react-router-dom';
import MainView from './components/MainView';
import './App.css';
import Register from './components/Register';
import HomeScreen from './components/homeScreen/HomeScreen';
import Login from './components/Login';
import HeaderNav from './components/headerNav/HeaderNav';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Route exact path='/' component={HomeScreen}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path='/mainview' component={MainView} />
    </div>
  );
}

export default App;
