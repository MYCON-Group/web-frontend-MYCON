import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavFrame from './components/NavFrame';
import SplashPage from './components/SplashPage';
import ErrorPage from './components/ErrorPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavFrame />
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <Route path="/errorpage" component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
