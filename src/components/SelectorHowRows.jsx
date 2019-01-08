import React, { Component } from 'react';

export default class SelectorHowRows extends Component {
  render() {
    const { maxNumberOfRows, stepBy } = this.props;
    const options = [];
    for (let i = stepBy; i <= maxNumberOfRows; i += stepBy)
      options.push(<option>{i}</option>);
    return (
      <div className="select">
        <select>{options}</select>
      </div>
    );
  }
}
