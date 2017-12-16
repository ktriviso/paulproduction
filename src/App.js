import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppStore from './AppStore/AppStore.js'
import routes from './routes.js'
import {BrowserRouter} from 'react-router-dom'
import AppDispatcher from './Dispatcher/Dispatcher.js'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                {routes}
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
