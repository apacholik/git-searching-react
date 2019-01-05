import React, { Component } from 'react';
import 'bulma';
import '@fortawesome/fontawesome-free/js/all';

class App extends Component {
  render() {
    return (
      <div>
        <button className="button is-primary">
          <span className="icon">
            <i className="fas fa-thumbs-up"></i>
          </span>
        </button>
      </div>
    );
  }
}

export default App;
