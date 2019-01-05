import React, { Component } from 'react';

export default class SearchBar extends Component {
  render = () => (
    <div className="control has-icons-right">
      <input className="input" type="text" placeholder="Search..." />
      <span className="icon is-small is-right">
        <i className="fas fa-search" />
      </span>
    </div>
  );
}