import React from 'react';

export default function Pagination({ pagesNumber, onClick, ...props }) {
  const actualPage = props.actualPage || 1;
  if (!onClick) {
    throw new ReferenceError('Not add props onChange');
  }
  const buttons = [];
  for (let i = 1; i <= pagesNumber; i++)
    buttons.push(
      <button
        type="button"
        key={i}
        className={`button is-text ${actualPage === i ? 'is-active' : ''}`}
        onClick={() => onClick(i)}
      >
        {i}
      </button>
    );
  return buttons;
}
