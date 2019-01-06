import React, { Component } from 'react';

export default class ResultTable extends Component {
  render() {
    const numberOfRows = this.props.numberOfRows || 5;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Repo Title</th>
            <th>Owner</th>
            <th>Stars</th>
            <th>Create at</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children.slice(0, numberOfRows).map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.owner}</td>
              <td>{row.stars}</td>
              <td>{row.createAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
