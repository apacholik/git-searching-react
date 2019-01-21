import React, { Component } from 'react';
import 'bulma';
import '@fortawesome/fontawesome-free/js/all';
import ResultTable from './components/ResultTable.jsx';
import SearchBar from './components/SearchBar.jsx';
import Pagination from './components/Pagination.jsx';
import SelectorHowRows from './components/SelectorHowRows.jsx';

const GITHUB_SEARCH_URL = 'https://api.github.com/search/repositories';
const GITHUB_BASES_PARAMETERS = 'q=test&sort=stars&order=desc&page=1';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = {
      githubRepos: [],
      pages: 0,
      actualPage: 1,
      startShowResultByItem: 0,
      numberOfRows: 5,
    };
  }

  async searchInGithubRepositories(query) {
    this.searchParameters = new URLSearchParams(GITHUB_BASES_PARAMETERS);
    this.searchParameters.set('q', query);
    const resultQuery = await fetch(
      `${GITHUB_SEARCH_URL}?${this.searchParameters.toString()}`
    ).then(res => res.json());
    if (resultQuery.items) {
      this.setState(prewState => ({
        githubRepos: resultQuery.items.map(item => {
          const createdDate = new Date(item.created_at);
          return {
            id: item.id,
            title: item.name,
            owner: item.owner.login,
            stars: item.stargazers_count,
            createAt: `${createdDate.getFullYear()}-${
              createdDate.getMonth() < 9
                ? `0${createdDate.getMonth() + 1}`
                : `${createdDate.getMonth() + 1}`
            }-${
              createdDate.getDate() < 10
                ? `0${createdDate.getDate()}`
                : `${createdDate.getDate()}`
            }`,
          };
        }),
        pages: resultQuery.items.length / prewState.numberOfRows,
      }));
    } else if (resultQuery.errors) {
      let errors = "I'hv got errors:";
      resultQuery.errors.forEach(element => {
        errors += `\n${element.message}`;
      });
      // this will change when do this "story" https://trello.com/c/R8O7cPac
      // eslint-disable-next-line no-alert
      alert(errors);
    }
  }

  async goToPage(pagesNumber) {
    this.setState(prevState => ({
      actualPage: pagesNumber,
      startShowResultByItem: (pagesNumber - 1) * prevState.numberOfRows,
    }));
    window.scrollTo(0, 0);
  }

  changeNumberOfShownRows(newNumber) {
    const _newNumber = parseInt(newNumber, 10);
    this.setState(
      prevState => ({
        numberOfRows: _newNumber,
        pages: Math.round(
          (prevState.pages * prevState.numberOfRows) / _newNumber
        ),
      }),
      () => this.goToPage(1)
    );
  }

  render() {
    return (
      <section className="section">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth-desktop is-12-touch">
            <div className="columns is-multiline">
              <div className="column is-full">
                <SearchBar
                  onChange={text => this.searchInGithubRepositories(text)}
                />
              </div>
              <div className="column is-full has-text-right">
                <SelectorHowRows
                  maxNumberOfRows={20}
                  stepBy={5}
                  onChange={newNumber =>
                    this.changeNumberOfShownRows(newNumber)
                  }
                />
                <span> rows per page</span>
              </div>
              <div className="column is-full">
                <ResultTable
                  startItemBy={this.state.startShowResultByItem}
                  numberOfRows={this.state.numberOfRows}
                >
                  {this.state.githubRepos}
                </ResultTable>
              </div>
              <div className="column is-full has-text-centered">
                <Pagination
                  pagesNumber={this.state.pages}
                  actualPage={this.state.actualPage}
                  onClick={newPage => this.goToPage(newPage)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
