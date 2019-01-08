import React, { Component } from 'react';

export default class Pagination extends Component {
  render() {
    const { pagesNumber, onClick } = this.props;
    const actualPage = this.props.actualPage || 1;
    if (!onClick) throw new ReferenceError('Not add props onChange');
    const buttons = [];
    for (let i = 1; i <= pagesNumber; i++)
      buttons.push(
        // eslint-disable-next-line react/button-has-type
        <button
          key={i}
          className={`button is-text ${actualPage === i ? 'is-active' : ''}`}
          onClick={() => onClick(i)}
        >
          {i}
        </button>
      );
    return buttons;
  }
}
