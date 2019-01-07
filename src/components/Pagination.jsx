import React, { Component } from 'react';

export default class Pagination extends Component {
  render() {
    const { pagesNumber, _onClick } = this.props;
    const lasActiveButton = this.props.lasActiveButton || 1;
    if (!_onClick) throw new ReferenceError('Not add props onChange');
    const buttons = [];
    for (let i = 1; i <= pagesNumber; i++)
      buttons.push(
        // eslint-disable-next-line react/button-has-type
        <button
          key={i}
          className={`button is-text ${
            lasActiveButton === i ? 'is-active' : ''
          }`}
          onClick={() => _onClick(i)}
        >
          {i}
        </button>
      );
    return buttons;
  }
}
