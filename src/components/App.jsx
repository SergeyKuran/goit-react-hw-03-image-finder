import { Component } from 'react';

import Searchbar from './Searchbar';

import css from './App.module.css';

class App extends Component {
  state = {};

  render() {
    return (
      <div className={css.App}>
        <Searchbar></Searchbar>
      </div>
    );
  }
}

export default App;
