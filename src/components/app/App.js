import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styles from './App.css';
import Search from '../search/Search';
import Header from './Header';
import Home from './Home';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className={styles.app}>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/search" component={Search}/>
              {/* <Route path="/about" component={About}/> */}
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}