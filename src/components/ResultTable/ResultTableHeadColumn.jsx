import React from 'react';

export default ({ children, onClick, className, sortIco }) => {
  const sortIcons = [
    <span key="desc" className="icon">
      <i className="fas fa-sort-down" />
    </span>,
    <span key="asc" className="icon">
      <i className="fas fa-sort-up" />
    </span>,
  ];
  return (
    <th
      className={className === undefined ? 'has-text-centered' : className}
      onClick={() => onClick()}
    >
      {sortIco !== undefined ? sortIcons[Number(sortIco)] : ''}
      {children}
    </th>
  );
};
