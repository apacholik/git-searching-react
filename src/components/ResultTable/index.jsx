import React from 'react';
import TableHead from './TableHead.jsx';

export default class ResultTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        by: 'stars',
        isOrderByDESC: true,
        type: 'Number',
      },
    };
  }

  changeSorting(sortBy, type = '') {
    if (sortBy === this.state.sort.by)
      this.setState(
        prevState => ({
          sort: {
            by: prevState.sort.by,
            isOrderByDESC: !prevState.sort.isOrderByDESC,
            type: prevState.sort.type,
          },
        }),
        () => {
          if (this.props.onChangeSorting)
            this.props.onChangeSorting({ ...this.state.sort });
        }
      );
    else
      this.setState(
        () => ({
          sort: {
            by: sortBy,
            isOrderByDESC: true,
            type,
          },
        }),
        () => {
          if (this.props.onChangeSorting)
            this.props.onChangeSorting({ ...this.state.sort });
        }
      );
  }

  sorting() {
    let resultModifier = this.state.sort.isOrderByDESC ? -1 : 1;
    if (this.state.sort.type === 'String') resultModifier *= -1;
    // eslint-disable-next-line no-new-func
    const convertFunction = Function(`return ${this.state.sort.type}`)();
    this.props.children.sort((a, b) => {
      if (
        convertFunction(a[this.state.sort.by]) ===
        convertFunction(b[this.state.sort.by])
      )
        return 0;
      if (
        convertFunction(a[this.state.sort.by]) >
        convertFunction(b[this.state.sort.by])
      )
        return 1 * resultModifier;
      return -1 * resultModifier;
    });
  }

  render() {
    this.sorting();
    const numberOfRows = this.props.numberOfRows || 5;
    return (
      <table className="table is-fullwidth table is-bordered">
        <thead>
          <tr>
            <TableHead
              className="has-text-right"
              onClick={() => this.changeSorting('id', 'Number')}
              sortIco={
                this.state.sort.by === 'id'
                  ? this.state.sort.isOrderByDESC
                  : undefined
              }
            >
              ID
            </TableHead>
            <TableHead
              onClick={() => this.changeSorting('title', 'String')}
              sortIco={
                this.state.sort.by === 'title'
                  ? this.state.sort.isOrderByDESC
                  : undefined
              }
            >
              Repo Title
            </TableHead>
            <TableHead
              onClick={() => this.changeSorting('owner', 'String')}
              sortIco={
                this.state.sort.by === 'owner'
                  ? this.state.sort.isOrderByDESC
                  : undefined
              }
            >
              Owner
            </TableHead>
            <TableHead
              onClick={() => this.changeSorting('stars', 'Number')}
              sortIco={
                this.state.sort.by === 'stars'
                  ? this.state.sort.isOrderByDESC
                  : undefined
              }
            >
              Stars
            </TableHead>
            <TableHead
              onClick={() => this.changeSorting('createAt', 'String')}
              sortIco={
                this.state.sort.by === 'createAt'
                  ? this.state.sort.isOrderByDESC
                  : undefined
              }
            >
              Create at
            </TableHead>
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
