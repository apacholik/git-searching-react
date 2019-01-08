import React, { Component } from 'react';

export default class SelectorHowRows extends Component {
  render() {
    const { maxNumberOfRows, stepBy } = this.props;
    const options = [];
    for (let i = stepBy; i <= maxNumberOfRows; i += stepBy) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return (
      <div className="select">
        <select
          onChange={e => {
            this.props.onChange(e.target.value);
          }}
        >
          {options}
        </select>
      </div>
    );
  }
}
