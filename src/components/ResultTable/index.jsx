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
            {this.props.tableHeadStructure.map(item => (
              <TableHead
                key={item.name}
                onClick={() => this.changeSorting(item.name, item.type)}
                sortIco={
                  this.state.sort.by === item.name
                    ? this.state.sort.isOrderByDESC
                    : undefined
                }
              >
                {item.text}
              </TableHead>
            ))}
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
