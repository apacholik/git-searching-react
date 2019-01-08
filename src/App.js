import React, { Component } from 'react';
import 'bulma';
import '@fortawesome/fontawesome-free/js/all';
import ResultTable from './components/ResultTable.jsx';
import SearchBar from './components/SearchBar.jsx';
import Pagination from './components/Pagination.jsx';

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
    };
  }

  async searchInGithubRepositories(query) {
    this.searchParameters = new URLSearchParams(GITHUB_BASES_PARAMETERS);
    this.searchParameters.set('q', query);
    const resultQuery = await fetch(
      `${GITHUB_SEARCH_URL}?${this.searchParameters.toString()}`
    ).then(res => res.json());
    if (resultQuery.items) {
      this.setState({
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
        pages: resultQuery.items.length / 5,
      });
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
    this.setState({
      actualPage: pagesNumber,
      startShowResultByItem: (pagesNumber - 1) * 5,
    });
  }

  render() {
    return (
      <section className="section">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="columns is-multiline">
              <div className="column is-full">
                <SearchBar
                  onChange={text => this.searchInGithubRepositories(text)}
                />
              </div>
              <div className="column is-full">
                <ResultTable startItemBy={this.state.startShowResultByItem}>
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
