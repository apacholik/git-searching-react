import React, { Component } from 'react';
import 'bulma';
import '@fortawesome/fontawesome-free/js/all';
import ResultTable from './components/ResultTable.jsx';
import SearchBar from './components/SearchBar.jsx';

const GITHUB_SEARCH_URL = 'https://api.github.com/search/repositories';
const GITHUB_BASES_PARAMETERS = 'q=test&sort=stars&order=desc&page=1';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = {
      githubRepos: [],
    };
  }

  async searchInGithubRepositories(query) {
    this.searchParameters = new URLSearchParams(GITHUB_BASES_PARAMETERS);
    this.searchParameters.set('q', query);
    const resultQuery = await fetch(
      `${GITHUB_SEARCH_URL}?${this.searchParameters.toString()}`
    ).then(res => res.json());
    this.setState({
      githubRepos: resultQuery.items.map(item => ({
        id: item.id,
        title: item.name,
        owner: item.owner.login,
        stars: item.stargazers_count,
        createAt: item.created_at,
      })),
    });
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello</h1>
          <div className="subtitle">
            <SearchBar
              onChange={text => this.searchInGithubRepositories(text)}
            />
            <ResultTable>{this.state.githubRepos}</ResultTable>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
