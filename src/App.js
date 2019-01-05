import React, { Component } from 'react';
import 'bulma';
import '@fortawesome/fontawesome-free/js/all';

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello</h1>
          <p className="subtitle">
            This page site is in build
            <span className="icon">
              <i className="fas fa-project-diagram" />
            </span>
          </p>
        </div>
      </section>
    );
  }
}

export default App;
