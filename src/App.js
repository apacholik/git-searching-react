import React, { Component } from 'react';
import 'bulma';
import '@fortawesome/fontawesome-free/js/all';
import ResultTable from './components/ResultTable.jsx';
import SearchBar from './components/SearchBar.jsx';

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello</h1>
          <div className="subtitle">
            <SearchBar />
            <ResultTable>
              {[
                {
                  id: 0,
                  title: 'test1',
                  stars: 9,
                  createAt: '00-00-9999',
                },
                {
                  id: 1,
                  title: 'test2',
                  stars: 88,
                  createAt: '00-00-9999',
                },
                {
                  id: 2,
                  title: 'test3',
                  stars: 65,
                  createAt: '00-00-9999',
                },
                {
                  id: 3,
                  title: 'test4',
                  stars: 321,
                  createAt: '00-00-9999',
                },
                {
                  id: 4,
                  title: 'test5',
                  stars: 5,
                  createAt: '00-00-9999',
                },
                {
                  id: 5,
                  title: 'test6',
                  stars: 64,
                  createAt: '00-00-9999',
                },
              ]}
            </ResultTable>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
