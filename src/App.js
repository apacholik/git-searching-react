import React, { Component } from 'react';
import 'bulma';
import '@fortawesome/fontawesome-free/js/all';
import SearchBar from './components/SearchBar.jsx';

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello</h1>
          <p className="subtitle">
            <SearchBar />
          </p>
        </div>
      </section>
    );
  }
}

export default App;
