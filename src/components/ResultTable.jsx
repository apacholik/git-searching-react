import React from 'react';

export default class ResultTable extends React.Component {
  sorting(by, type, isOrderByDESC = false) {
    const resultModifier = isOrderByDESC ? -1 : 1;
    // eslint-disable-next-line no-new-func
    const convertFunction = Function(`return ${type}`)();
    this.props.children.sort((a, b) => {
      if (convertFunction(a[by]) === convertFunction(b[by])) return 0;
      if (convertFunction(a[by]) > convertFunction(b[by]))
        return 1 * resultModifier;
      return -1 * resultModifier;
    });
    this.forceUpdate();
  }

  render() {
    const numberOfRows = this.props.numberOfRows || 5;
    return (
      <table className="table is-fullwidth table is-bordered">
        <thead>
          <tr>
            <th
              className="has-text-right"
              onClick={() => this.sorting('id', 'Number')}
            >
              ID
            </th>
            <th
              className="has-text-centered"
              onClick={() => this.sorting('title', 'String')}
            >
              Repo Title
            </th>
            <th
              className="has-text-centered"
              onClick={() => this.sorting('owner', 'String')}
            >
              Owner
            </th>
            <th
              className="has-text-centered"
              onClick={() => this.sorting('stars', 'Number')}
            >
              Stars
            </th>
            <th
              className="has-text-centered"
              onClick={() => this.sorting('createAt', 'String')}
            >
              Create at
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.children
            .slice(
              this.props.startItemBy,
              numberOfRows + this.props.startItemBy
            )
            .map(row => (
              <tr key={row.id}>
                <td className="has-text-centered">{row.id}</td>
                <td className="has-text-centered">{row.title}</td>
                <td className="has-text-centered">{row.owner}</td>
                <td className="has-text-centered">{row.stars}</td>
                <td className="has-text-centered">{row.createAt}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}
